import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useBlogPosts } from '../hooks/useData';

const Blog = () => {
  const { data: posts, loading, error } = useBlogPosts();

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(dateString));
  };

  return (
    <Layout>
      <SEO 
        title="Blog & News" 
        description="Stay updated with the latest trends in technology, design, and business strategy from TNXBD IT Solution." 
        keywords="Blog, Tech Insights, UX Design Tips, Digital Marketing Trends"
      />
      <section className="pt-40 pb-24 bg-text-primary text-white">
        <div className="container" data-aos="fade-up">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight">Blog & <span className="text-primary italic">News</span></h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed font-medium">
            Stay updated with the latest trends in technology, design, and business strategy.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {loading ? (
                <>
                  <div className="h-96 w-full bg-gray-200/50 rounded-[2rem] animate-pulse"></div>
                  <div className="h-96 w-full bg-gray-200/50 rounded-[2rem] animate-pulse"></div>
                </>
              ) : error ? (
                <div className="text-center py-20 bg-rose-50 rounded-[3rem] border border-rose-100">
                  <p className="text-rose-600 font-bold text-xl">Error loading blog: {error}</p>
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-20 glass rounded-[3rem] border-white/40 shadow-xl">
                  <p className="text-text-muted font-bold text-xl uppercase tracking-widest">No articles found yet.</p>
                </div>
              ) : (
                posts.map((post, i) => (
                  <article key={post.id} className="group" data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="relative overflow-hidden rounded-[2rem] aspect-video mb-6 shadow-xl border border-white/40">
                      <img src={post.image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-6 left-6 bg-primary text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
                        {post.category}
                      </div>
                    </div>
                    <div className="flex items-center gap-8 text-sm text-text-muted mb-4 font-black uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-primary" /> {formatDate(post.published_at)}
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={18} className="text-primary" /> By {post.author}
                      </div>
                    </div>
                    <h2 className="text-4xl font-extrabold mb-6 group-hover:text-primary transition-colors text-text-primary tracking-tighter leading-tight drop-shadow-sm">{post.title}</h2>
                    <p className="text-text-secondary text-xl mb-8 leading-relaxed font-medium">{post.excerpt}</p>
                    <a href={`/blog/${post.id}`} className="inline-flex items-center gap-3 font-black text-primary group/btn text-lg uppercase tracking-widest">
                      Read Full Article <ArrowRight className="group-hover/btn:translate-x-3 transition-transform" size={24} />
                    </a>
                  </article>
                ))
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-12" data-aos="fade-left">
              <div className="glass p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Search</h3>
                <div className="relative">
                  <input type="text" placeholder="Search articles..." className="w-full px-5 py-3 bg-bg-secondary rounded-xl outline-none focus:ring-2 focus:ring-primary/20 border border-gray-200" />
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <div className="space-y-4">
                  {["Technology", "Design", "Business", "Security", "AI & ML"].map(cat => (
                    <a key={cat} href="#" className="flex justify-between items-center group/cat hover:text-primary font-medium transition-colors">
                      {cat} <span className="w-6 h-6 rounded-full bg-bg-secondary flex items-center justify-center text-xs group-hover/cat:bg-primary group-hover/cat:text-white transition-colors">12</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-primary p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
                <p className="text-blue-100 mb-6">Subscribe to get the latest updates right in your inbox.</p>
                <input type="email" placeholder="email@example.com" className="w-full px-5 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-blue-100 mb-4 outline-none " />
                <button className="w-full bg-white text-primary py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Subscribe Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
