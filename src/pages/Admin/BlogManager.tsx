import { useState, useEffect } from 'react';
import AdminLayout from '../../components/Admin/AdminLayout';
import { supabase } from '../../lib/supabase';
import { Plus, Pencil, Trash2, X, Save, Loader2, Calendar, User, Eye } from 'lucide-react';

interface BlogPost {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image_url: string;
  published_at: string;
}

const CATEGORIES = ['Technology', 'Design', 'Business', 'Security', 'AI & ML'];

const BlogManager = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (post: BlogPost | null = null) => {
    setCurrentPost(post || { 
      title: '', 
      excerpt: '', 
      content: '', 
      author: 'Admin', 
      category: 'Technology', 
      image_url: '', 
      published_at: new Date().toISOString().split('T')[0] 
    });
    setIsModalOpen(true);
    setError(null);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPost) return;

    try {
      setFormLoading(true);
      setError(null);

      if (currentPost.id) {
        const { error } = await supabase.from('blog_posts').update(currentPost).eq('id', currentPost.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('blog_posts').insert([currentPost]);
        if (error) throw error;
      }

      await fetchPosts();
      setIsModalOpen(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this post?')) return;
    try {
      const { error } = await supabase.from('blog_posts').delete().eq('id', id);
      if (error) throw error;
      await fetchPosts();
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight italic uppercase tracking-tighter">Blog <span className="text-primary italic">Manager</span></h1>
          <p className="text-xl text-text-secondary font-medium">Create and manage your articles, news, and insights.</p>
        </div>
        <button onClick={() => handleOpenModal()} className="btn-primary flex items-center gap-3 px-8 py-4 rounded-2xl shadow-lg group">
          <Plus size={24} className="group-hover:rotate-90 transition-transform" /> Write New Post
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center p-20"><Loader2 className="animate-spin text-primary" size={48} /></div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="glass p-6 rounded-[2.5rem] border-white/40 shadow-xl flex flex-col md:flex-row gap-8 items-center group">
              <div className="w-full md:w-64 h-40 rounded-3xl overflow-hidden shadow-inner flex-shrink-0">
                <img src={post.image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-text-muted mb-3 italic">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.published_at}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-black mb-3 line-clamp-1">{post.title}</h3>
                <p className="text-text-secondary line-clamp-2 font-medium mb-6">{post.excerpt}</p>
                <div className="flex gap-4">
                  <button onClick={() => handleOpenModal(post)} className="flex items-center gap-2 px-6 py-2 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
                    <Pencil size={18} /> Edit
                  </button>
                  <button onClick={() => handleDelete(post.id!)} className="p-2 text-rose-500 hover:bg-rose-50 rounded-xl transition-all">
                    <Trash2 size={20} />
                  </button>
                  <a href={`/blog/${post.id}`} target="_blank" rel="noreferrer" className="ml-auto p-2 text-text-muted hover:text-primary transition-all">
                    <Eye size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
          {posts.length === 0 && <div className="p-20 text-center glass rounded-[3rem] font-bold text-text-muted italic uppercase tracking-widest">No blog posts yet.</div>}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
          <div className="glass w-full max-w-4xl rounded-[3.5rem] p-10 border-white/40 shadow-2xl max-h-[95vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black tracking-tight">{currentPost?.id ? 'Edit Article' : 'Compose New Article'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-3 hover:bg-bg-secondary rounded-2xl transition-all"><X size={24} /></button>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-black uppercase tracking-widest">
                <div className="space-y-2">
                  <label className="ml-1">Article Title</label>
                  <input type="text" required value={currentPost?.title || ''} onChange={(e) => setCurrentPost({ ...currentPost!, title: e.target.value })} className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold shadow-inner" />
                </div>
                <div className="space-y-2">
                  <label className="ml-1">Category</label>
                  <select value={currentPost?.category || ''} onChange={(e) => setCurrentPost({ ...currentPost!, category: e.target.value })} className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold cursor-pointer shadow-inner">
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-black uppercase tracking-widest">
                <div className="space-y-2">
                  <label className="ml-1">Author Name</label>
                  <input type="text" required value={currentPost?.author || ''} onChange={(e) => setCurrentPost({ ...currentPost!, author: e.target.value })} className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold shadow-inner" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="ml-1">Poster Image URL</label>
                  <input type="url" required value={currentPost?.image_url || ''} onChange={(e) => setCurrentPost({ ...currentPost!, image_url: e.target.value })} className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold shadow-inner" placeholder="https://..." />
                </div>
              </div>

              <div className="space-y-2 text-xs font-black uppercase tracking-widest">
                <label className="ml-1">Excerpt (Short Summary)</label>
                <textarea rows={2} required value={currentPost?.excerpt || ''} onChange={(e) => setCurrentPost({ ...currentPost!, excerpt: e.target.value })} className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold resize-none shadow-inner" placeholder="Provide a brief summary for the blog list view..." />
              </div>

              <div className="space-y-2 text-xs font-black uppercase tracking-widest">
                <label className="ml-1">Full Article Content</label>
                <textarea rows={10} required value={currentPost?.content || ''} onChange={(e) => setCurrentPost({ ...currentPost!, content: e.target.value })} className="w-full px-6 py-4 bg-bg-secondary rounded-2xl outline-none font-bold resize-none shadow-inner" placeholder="Type or paste your markdown/HTML content here..." />
              </div>

              <button type="submit" disabled={formLoading} className="w-full btn-primary py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl mt-4">
                {formLoading ? <Loader2 className="animate-spin" size={24} /> : <><Save size={24} /> {currentPost?.id ? 'Publish Changes' : 'Publish Article'}</>}
              </button>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default BlogManager;
