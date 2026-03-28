import { useState, useEffect } from 'react';
import AdminLayout from '../../components/Admin/AdminLayout';
import { supabase } from '../../lib/supabase';
import { getIcon, iconMap } from '../../lib/icons';
import { Plus, Pencil, Trash2, X, Save, AlertCircle, Loader2 } from 'lucide-react';

interface Service {
  id?: string;
  title: string;
  description: string;
  icon_name: string;
  order_index: number;
}

const ServicesManager = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState<Service | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setServices(data || []);
    } catch (err: any) {
      console.error('Error fetching services:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (service: Service | null = null) => {
    setCurrentService(service || { title: '', description: '', icon_name: 'Globe', order_index: services.length + 1 });
    setIsModalOpen(true);
    setError(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentService(null);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentService) return;

    try {
      setFormLoading(true);
      setError(null);

      if (currentService.id) {
        // Update
        const { error } = await supabase
          .from('services')
          .update({
            title: currentService.title,
            description: currentService.description,
            icon_name: currentService.icon_name,
            order_index: currentService.order_index,
          })
          .eq('id', currentService.id);

        if (error) throw error;
      } else {
        // Create
        const { error } = await supabase
          .from('services')
          .insert([currentService]);

        if (error) throw error;
      }

      await fetchServices();
      handleCloseModal();
    } catch (err: any) {
      console.error('Error saving service:', err);
      setError(err.message);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this service?')) return;

    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchServices();
    } catch (err: any) {
      console.error('Error deleting service:', err);
      alert('Failed to delete service: ' + err.message);
    }
  };

  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-text-primary mb-2 italic uppercase tracking-tighter">Services <span className="text-primary italic">Manager</span></h1>
          <p className="text-xl text-text-secondary leading-relaxed font-medium">Manage the list of services offered by TNXBD IT Solution.</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="btn-primary flex items-center gap-3 px-8 py-4 rounded-2xl shadow-lg shadow-primary/25 group"
        >
          <Plus size={24} className="group-hover:rotate-90 transition-transform" /> Add New Service
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
          <button onClick={fetchServices} className="btn-primary">Try Again</button>
        </div>
      ) : (
        <div className="glass rounded-[3rem] border-white/40 shadow-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-bg-accent/50 text-text-muted font-bold tracking-widest uppercase text-sm">
                <th className="px-8 py-6">Icon</th>
                <th className="px-8 py-6">Title</th>
                <th className="px-8 py-6">Description</th>
                <th className="px-8 py-6">Order</th>
                <th className="px-8 py-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/50">
              {services.map((service) => {
                const Icon = getIcon(service.icon_name);
                return (
                  <tr key={service.id} className="hover:bg-bg-secondary/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shadow-inner">
                        <Icon size={24} />
                      </div>
                    </td>
                    <td className="px-8 py-6 font-extrabold text-lg text-text-primary">{service.title}</td>
                    <td className="px-8 py-6 text-text-secondary line-clamp-1 max-w-xs">{service.description}</td>
                    <td className="px-8 py-6">
                      <span className="bg-bg-accent px-4 py-1.5 rounded-full font-bold text-sm">{service.order_index}</span>
                    </td>
                    <td className="px-8 py-6 text-right space-x-3">
                      <button 
                        onClick={() => handleOpenModal(service)}
                        className="p-3 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                      >
                        <Pencil size={20} />
                      </button>
                      <button 
                        onClick={() => handleDelete(service.id!)}
                        className="p-3 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {services.length === 0 && (
            <div className="p-20 text-center">
              <p className="text-xl font-bold text-text-muted italic uppercase tracking-widest">No services found. Click Add New Service to start.</p>
            </div>
          )}
        </div>
      )}

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-fade-in">
          <div className="glass w-full max-w-2xl rounded-[3.5rem] p-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-white/40 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-black tracking-tight">{currentService?.id ? 'Edit Service' : 'Add New Service'}</h2>
              <button onClick={handleCloseModal} className="p-3 hover:bg-bg-secondary rounded-2xl transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-black text-text-muted ml-1 uppercase tracking-widest">Service Title</label>
                  <input
                    type="text"
                    required
                    value={currentService?.title || ''}
                    onChange={(e) => setCurrentService({ ...currentService!, title: e.target.value })}
                    className="w-full px-6 py-4 bg-bg-secondary rounded-2xl border-none outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold"
                    placeholder="Web Development"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-text-muted ml-1 uppercase tracking-widest">Display Order</label>
                  <input
                    type="number"
                    required
                    value={currentService?.order_index || 0}
                    onChange={(e) => setCurrentService({ ...currentService!, order_index: parseInt(e.target.value) })}
                    className="w-full px-6 py-4 bg-bg-secondary rounded-2xl border-none outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-text-muted ml-1 uppercase tracking-widest">Select Icon</label>
                <div className="grid grid-cols-6 sm:grid-cols-12 gap-3 p-6 bg-bg-secondary rounded-[2rem]">
                  {Object.keys(iconMap).map((iconName) => {
                    const Icon = iconMap[iconName];
                    const isSelected = currentService?.icon_name === iconName;
                    return (
                      <button
                        key={iconName}
                        type="button"
                        onClick={() => setCurrentService({ ...currentService!, icon_name: iconName })}
                        className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all shadow-sm ${
                          isSelected ? 'bg-primary text-white scale-110 shadow-lg' : 'bg-white hover:bg-primary/10 hover:text-primary grayscale hover:grayscale-0'
                        }`}
                        title={iconName}
                      >
                        <Icon size={20} />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-text-muted ml-1 uppercase tracking-widest">Description</label>
                <textarea
                  required
                  rows={4}
                  value={currentService?.description || ''}
                  onChange={(e) => setCurrentService({ ...currentService!, description: e.target.value })}
                  className="w-full px-6 py-4 bg-bg-secondary rounded-2xl border-none outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold resize-none"
                  placeholder="Describe the service in detail..."
                />
              </div>

              {error && (
                <div className="flex items-center gap-3 p-5 bg-rose-50 text-rose-600 rounded-2xl animate-shake">
                  <AlertCircle size={24} />
                  <p className="text-sm font-black">{error}</p>
                </div>
              )}

              <div className="pt-6 flex gap-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-grow py-5 rounded-2xl font-black text-lg bg-bg-accent hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="flex-[2] btn-primary py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/30"
                >
                  {formLoading ? <Loader2 className="animate-spin" size={24} /> : <><Save size={24} /> {currentService?.id ? 'Update Service' : 'Add Service'}</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default ServicesManager;
