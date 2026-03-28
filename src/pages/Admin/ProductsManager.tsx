import { useState, useEffect } from 'react';
import AdminLayout from '../../components/Admin/AdminLayout';
import { supabase } from '../../lib/supabase';
import { getIcon, iconMap } from '../../lib/icons';
import { Plus, Trash2, X, Save, Loader2, ListPlus } from 'lucide-react';

interface Product {
  id?: string;
  title: string;
  description: string;
  icon_name: string;
  features: string[];
  color: string;
  order_index: number;
}

const COLORS = ['blue', 'rose', 'emerald', 'indigo', 'amber'];

const ProductsManager = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [, setError] = useState<string | null>(null);
  const [newFeature, setNewFeature] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setProducts(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (product: Product | null = null) => {
    setCurrentProduct(product || { 
      title: '', 
      description: '', 
      icon_name: 'ShoppingCart', 
      features: [], 
      color: 'blue',
      order_index: products.length + 1 
    });
    setIsModalOpen(true);
    setError(null);
  };

  const addFeature = () => {
    if (newFeature.trim() && currentProduct) {
      setCurrentProduct({
        ...currentProduct,
        features: [...currentProduct.features, newFeature.trim()]
      });
      setNewFeature('');
    }
  };

  const removeFeature = (index: number) => {
    if (currentProduct) {
      const updated = currentProduct.features.filter((_, i) => i !== index);
      setCurrentProduct({ ...currentProduct, features: updated });
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProduct) return;

    try {
      setFormLoading(true);
      setError(null);

      if (currentProduct.id) {
        const { error } = await supabase
          .from('products')
          .update(currentProduct)
          .eq('id', currentProduct.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('products')
          .insert([currentProduct]);
        if (error) throw error;
      }

      await fetchProducts();
      setIsModalOpen(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
      await fetchProducts();
    } catch (err: any) {
      alert('Failed: ' + err.message);
    }
  };

  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight italic uppercase tracking-tighter">Products <span className="text-primary italic">Manager</span></h1>
          <p className="text-xl text-text-secondary font-medium">Manage your flagship software products and features.</p>
        </div>
        <button onClick={() => handleOpenModal()} className="btn-primary flex items-center gap-3 px-8 py-4 rounded-2xl shadow-lg group">
          <Plus size={24} className="group-hover:rotate-90 transition-transform" /> Add New Product
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center p-20"><Loader2 className="animate-spin text-primary" size={48} /></div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => {
            const Icon = getIcon(product.icon_name || 'ShoppingCart');
            return (
              <div key={product.id} className="glass p-10 rounded-[3rem] border-white/40 shadow-xl group relative overflow-hidden">
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center shadow-lg ${
                  product.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  product.color === 'rose' ? 'bg-rose-100 text-rose-600' :
                  product.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                  'bg-indigo-100 text-indigo-600'
                }`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-black mb-2">{product.title}</h3>
                <p className="text-text-secondary mb-6 font-medium line-clamp-2">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.map((f, i) => (
                    <span key={i} className="px-3 py-1 bg-bg-secondary rounded-full text-xs font-bold text-text-muted">{f}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button onClick={() => handleOpenModal(product)} className="flex-grow py-3 bg-bg-secondary hover:bg-white rounded-xl font-bold transition-all">Edit</button>
                  <button onClick={() => handleDelete(product.id!)} className="px-4 py-3 text-rose-600 hover:bg-rose-50 rounded-xl transition-all"><Trash2 size={20} /></button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
          <div className="glass w-full max-w-3xl rounded-[3.5rem] p-10 border-white/40 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black tracking-tight">{currentProduct?.id ? 'Edit Product' : 'Add New Product'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-3 hover:bg-bg-secondary rounded-2xl transition-all"><X size={24} /></button>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-black uppercase tracking-widest text-xs">
                <div className="space-y-2">
                  <label className="ml-1">Product Title</label>
                  <input type="text" required value={currentProduct?.title || ''} onChange={(e) => setCurrentProduct({ ...currentProduct!, title: e.target.value })} className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="ml-1">Accent Color</label>
                  <select value={currentProduct?.color || ''} onChange={(e) => setCurrentProduct({ ...currentProduct!, color: e.target.value })} className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold cursor-pointer">
                    {COLORS.map(c => <option key={c} value={c}>{c.toUpperCase()}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2 text-xs font-black uppercase tracking-widest">
                <label className="ml-1">Icon Selection</label>
                <div className="grid grid-cols-6 sm:grid-cols-10 gap-3 p-4 bg-bg-secondary rounded-3xl">
                  {Object.keys(iconMap).map(icon => {
                    const Ic = iconMap[icon];
                    return (
                      <button key={icon} type="button" onClick={() => setCurrentProduct({ ...currentProduct!, icon_name: icon })} className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all ${currentProduct?.icon_name === icon ? 'bg-primary text-white scale-110 shadow-lg' : 'bg-white hover:bg-primary/10 hover:text-primary grayscale hover:grayscale-0'}`}>
                        <Ic size={18} />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4 text-xs font-black uppercase tracking-widest">
                <label className="ml-1">Key Features</label>
                <div className="flex gap-4">
                  <input type="text" value={newFeature} onChange={(e) => setNewFeature(e.target.value)} className="flex-grow px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold" placeholder="Add a feature..." onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())} />
                  <button type="button" onClick={addFeature} className="p-4 bg-primary text-white rounded-2xl"><ListPlus size={24} /></button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {currentProduct?.features.map((f, i) => (
                    <span key={i} className="px-4 py-2 bg-primary/10 text-primary rounded-full font-bold flex items-center gap-2 group">
                      {f} <button type="button" onClick={() => removeFeature(i)} className="hover:text-rose-500"><X size={14} /></button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 text-xs font-black uppercase tracking-widest">
                <label className="ml-1">Description</label>
                <textarea rows={3} required value={currentProduct?.description || ''} onChange={(e) => setCurrentProduct({ ...currentProduct!, description: e.target.value })} className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold resize-none" />
              </div>

              <button type="submit" disabled={formLoading} className="w-full btn-primary py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl">
                {formLoading ? <Loader2 className="animate-spin" size={24} /> : <><Save size={24} /> {currentProduct?.id ? 'Update Product' : 'Add Product'}</>}
              </button>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default ProductsManager;
