import { useState, useEffect } from 'react';
import AdminLayout from '../../components/Admin/AdminLayout';
import { supabase } from '../../lib/supabase';
import { Plus, Pencil, Trash2, X, Save, AlertCircle, Loader2, Image as ImageIcon } from 'lucide-react';

interface PortfolioItem {
  id?: string;
  title: string;
  category: string;
  image_url: string;
  description?: string;
  order_index: number;
}

const CATEGORIES = ['Web Dev', 'Mobile App', 'Software', 'Graphic Design', 'Marketing'];

const PortfolioManager = () => {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<PortfolioItem | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('portfolio')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setItems(data || []);
    } catch (err: any) {
      console.error('Error fetching portfolio:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (item: PortfolioItem | null = null) => {
    setCurrentItem(item || { title: '', category: 'Web Dev', image_url: '', description: '', order_index: items.length + 1 });
    setIsModalOpen(true);
    setError(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentItem) return;

    try {
      setFormLoading(true);
      setError(null);

      if (currentItem.id) {
        const { error } = await supabase
          .from('portfolio')
          .update({
            title: currentItem.title,
            category: currentItem.category,
            image_url: currentItem.image_url,
            description: currentItem.description,
            order_index: currentItem.order_index,
          })
          .eq('id', currentItem.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('portfolio')
          .insert([currentItem]);
        if (error) throw error;
      }

      await fetchItems();
      handleCloseModal();
    } catch (err: any) {
      console.error('Error saving portfolio item:', err);
      setError(err.message);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      const { error } = await supabase.from('portfolio').delete().eq('id', id);
      if (error) throw error;
      await fetchItems();
    } catch (err: any) {
      alert('Failed to delete: ' + err.message);
    }
  };

  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12" data-aos="fade-down">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-text-primary mb-2 italic uppercase tracking-tighter">Portfolio <span className="text-primary italic">Manager</span></h1>
          <p className="text-xl text-text-secondary font-medium">Manage your successful projects and showcase your expertise.</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="btn-primary flex items-center gap-3 px-8 py-4 rounded-2xl shadow-lg shadow-primary/25 group"
        >
          <Plus size={24} className="group-hover:rotate-90 transition-transform" /> Add New Project
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center p-20">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
        </div>
      ) : error ? (
        <div className="p-10 glass bg-rose-50 border-rose-100 rounded-[3rem] text-center">
          <AlertCircle className="w-16 h-16 text-rose-500 mx-auto mb-6" />
          <p className="text-xl font-bold text-rose-600 mb-6">{error}</p>
          <button onClick={fetchItems} className="btn-primary">Try Again</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          {items.map((item, i) => (
            <div 
              key={item.id} 
              className="glass rounded-[2.5rem] overflow-hidden border-white/40 shadow-xl group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="relative aspect-video">
                <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  {item.category}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button 
                    onClick={() => handleOpenModal(item)}
                    className="w-12 h-12 bg-white text-primary rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  >
                    <Pencil size={20} />
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id!)}
                    className="w-12 h-12 bg-rose-500 text-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-2 text-text-primary tracking-tight">{item.title}</h3>
                <p className="text-text-muted text-sm font-bold uppercase tracking-widest mb-4">Order: {item.order_index}</p>
                <p className="text-text-secondary line-clamp-2 font-medium">{item.description || 'No description provided.'}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fade-in">
          <div className="glass w-full max-w-2xl rounded-[3.5rem] p-10 border-white/40 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-black tracking-tighter">{currentItem?.id ? 'Edit Project' : 'Add New Project'}</h2>
              <button onClick={handleCloseModal} className="p-3 hover:bg-bg-secondary rounded-2xl transition-all"><X size={24} /></button>
            </div>

            <form onSubmit={handleSave} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-black text-text-muted uppercase tracking-widest ml-1">Project Title</label>
                  <input
                    type="text" required value={currentItem?.title || ''}
                    onChange={(e) => setCurrentItem({ ...currentItem!, title: e.target.value })}
                    className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-text-muted uppercase tracking-widest ml-1">Category</label>
                  <select
                    value={currentItem?.category || ''}
                    onChange={(e) => setCurrentItem({ ...currentItem!, category: e.target.value })}
                    className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold cursor-pointer"
                  >
                    {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-text-muted uppercase tracking-widest ml-1">Thumbnail Image URL</label>
                <div className="flex flex-col gap-6">
                  <div className="relative group">
                    <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                    <input
                      type="url" required value={currentItem?.image_url || ''}
                      onChange={(e) => setCurrentItem({ ...currentItem!, image_url: e.target.value })}
                      className="w-full pl-12 pr-6 py-4 bg-bg-secondary rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold"
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>
                  {currentItem?.image_url && (
                    <div className="w-full h-48 rounded-3xl overflow-hidden shadow-inner border border-white/40">
                      <img src={currentItem.image_url} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-text-muted uppercase tracking-widest ml-1">Description</label>
                <textarea
                  rows={3} value={currentItem?.description || ''}
                  onChange={(e) => setCurrentItem({ ...currentItem!, description: e.target.value })}
                  className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold resize-none"
                />
              </div>

              <div className="flex gap-4 pt-6">
                <button type="button" onClick={handleCloseModal} className="flex-grow py-5 bg-bg-accent rounded-2xl font-black text-lg">Cancel</button>
                <button disabled={formLoading} type="submit" className="flex-[2] btn-primary py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3">
                  {formLoading ? <Loader2 className="animate-spin" size={24} /> : <><Save size={24} /> {currentItem?.id ? 'Update Project' : 'Add Project'}</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default PortfolioManager;
