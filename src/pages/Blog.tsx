import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of AI in Web Development",
      excerpt: "How artificial intelligence is reshaping the way we build and interact with the web.",
      author: "Nayeem Islam",
      date: "March 25, 2024",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Technology"
    },
    {
      id: 2,
      title: "10 Tips for Better UX Design",
      excerpt: "Improve your conversion rates by following these simple yet effective UX principles.",
      author: "Sarah Ahmed",
      date: "March 20, 2024",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Design"
    },
    {
      id: 3,
      title: "Why Cyber Security is Crucial in 2024",
      excerpt: "Protecting your digital business from the latest vulnerabilities and threats.",
      author: "Rahat Kabir",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Security"
    }
  ];

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
              {posts.map((post, i) => (
                <article key={post.id} className="group" data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="relative overflow-hidden rounded-[2rem] aspect-video mb-6">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-6 left-6 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-text-muted mb-4 font-semibold uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} /> {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} /> By {post.author}
                    </div>
                  </div>
                  <h2 className="text-3xl font-extrabold mb-4 group-hover:text-primary transition-colors text-text-primary tracking-tight leading-tight">{post.title}</h2>
                  <p className="text-text-secondary text-lg mb-6 leading-relaxed font-medium">{post.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-2 font-bold text-primary group/btn">
                    Read More <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" size={20} />
                  </a>
                </article>
              ))}
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
