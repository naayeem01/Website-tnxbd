import { useState, useEffect } from 'react';
import AdminLayout from '../../components/Admin/AdminLayout';
import { supabase } from '../../lib/supabase';
import { Plus, Trash2, X, Save, Loader2, Star } from 'lucide-react';

interface ClientItem {
  id?: string;
  name: string;
  role: string;
  company: string;
  logo_url: string;
  avatar_url: string;
  testimonial: string;
  rating: number;
  linkedin_url?: string;
  website_url?: string;
  order_index: number;
}

const ClientsManager = () => {
  const [clients, setClients] = useState<ClientItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentClient, setCurrentClient] = useState<ClientItem | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setClients(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (client: ClientItem | null = null) => {
    setCurrentClient(client || { 
      name: '', role: '', company: '', logo_url: '', avatar_url: '', 
      testimonial: '', rating: 5, order_index: clients.length + 1 
    });
    setIsModalOpen(true);
    setError(null);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentClient) return;

    try {
      setFormLoading(true);
      setError(null);

      if (currentClient.id) {
        const { error } = await supabase.from('clients').update(currentClient).eq('id', currentClient.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('clients').insert([currentClient]);
        if (error) throw error;
      }

      await fetchClients();
      setIsModalOpen(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this testimonial?')) return;
    try {
      const { error } = await supabase.from('clients').delete().eq('id', id);
      if (error) throw error;
      await fetchClients();
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight italic uppercase tracking-tighter">Clients <span className="text-primary italic">Manager</span></h1>
          <p className="text-xl text-text-secondary font-medium">Manage client testimonials and partnerships.</p>
        </div>
        <button onClick={() => handleOpenModal()} className="btn-primary flex items-center gap-3 px-8 py-4 rounded-2xl shadow-lg group">
          <Plus size={24} className="group-hover:rotate-90 transition-transform" /> Add Testimonial
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center p-20"><Loader2 className="animate-spin text-primary" size={48} /></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          {clients.map((client) => (
            <div key={client.id} className="glass p-8 rounded-[3rem] border-white/40 shadow-xl flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 shadow-inner ring-4 ring-primary/10">
                <img src={client.avatar_url || 'https://via.placeholder.com/150'} alt={client.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-black mb-1">{client.name}</h3>
              <p className="text-primary font-bold text-sm mb-4 uppercase tracking-widest">{client.role}, {client.company}</p>
              <div className="flex gap-1 text-orange-400 mb-6">
                {[...Array(client.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-text-secondary font-medium italic mb-8 line-clamp-3">"{client.testimonial}"</p>
              <div className="mt-auto flex gap-4 w-full">
                <button onClick={() => handleOpenModal(client)} className="flex-grow py-3 bg-bg-secondary hover:bg-white rounded-xl font-bold transition-all shadow-sm">Edit</button>
                <button onClick={() => handleDelete(client.id!)} className="p-3 text-rose-500 hover:bg-rose-50 rounded-xl transition-all"><Trash2 size={20} /></button>
              </div>
            </div>
          ))}
          {clients.length === 0 && <div className="p-20 text-center glass rounded-[3rem] font-bold text-text-muted italic uppercase tracking-widest col-span-full w-full">No testimonials yet.</div>}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
          <div className="glass w-full max-w-2xl rounded-[3.5rem] p-10 border-white/40 shadow-2xl max-h-[95vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black tracking-tight">{currentClient?.id ? 'Edit Testimonial' : 'New Testimonial'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-3 hover:bg-bg-secondary rounded-2xl transition-all"><X size={24} /></button>
            </div>

            <form onSubmit={handleSave} className="space-y-6 text-xs font-black uppercase tracking-widest">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="ml-1">Client Name</label>
                  <input type="text" required value={currentClient?.name || ''} onChange={(e) => setCurrentClient({ ...currentClient!, name: e.target.value })} className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold shadow-inner" />
                </div>
                <div className="space-y-2">
                  <label className="ml-1">Role / Designation</label>
                  <input type="text" required value={currentClient?.role || ''} onChange={(e) => setCurrentClient({ ...currentClient!, role: e.target.value })} className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold shadow-inner" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="ml-1">Company Name</label>
                  <input type="text" required value={currentClient?.company || ''} onChange={(e) => setCurrentClient({ ...currentClient!, company: e.target.value })} className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold shadow-inner" />
                </div>
                <div className="space-y-2">
                  <label className="ml-1">Star Rating (1-5)</label>
                  <input type="number" min="1" max="5" required value={currentClient?.rating || 5} onChange={(e) => setCurrentClient({ ...currentClient!, rating: parseInt(e.target.value) })} className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold shadow-inner" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="ml-1">Avatar Image URL</label>
                  <input type="url" value={currentClient?.avatar_url || ''} onChange={(e) => setCurrentClient({ ...currentClient!, avatar_url: e.target.value })} className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold shadow-inner" placeholder="https://..." />
                </div>
                <div className="space-y-2">
                  <label className="ml-1">Company Logo URL</label>
                  <input type="url" value={currentClient?.logo_url || ''} onChange={(e) => setCurrentClient({ ...currentClient!, logo_url: e.target.value })} className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold shadow-inner" placeholder="https://..." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="ml-1">Testimonial Text</label>
                <textarea rows={4} required value={currentClient?.testimonial || ''} onChange={(e) => setCurrentClient({ ...currentClient!, testimonial: e.target.value })} className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold resize-none shadow-inner" />
              </div>

              <button type="submit" disabled={formLoading} className="w-full btn-primary py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl">
                {formLoading ? <Loader2 className="animate-spin" size={24} /> : <><Save size={24} /> {currentClient?.id ? 'Update Testimonial' : 'Save Testimonial'}</>}
              </button>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default ClientsManager;
