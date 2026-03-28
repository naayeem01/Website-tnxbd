import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import { ChevronRight, Zap } from 'lucide-react';
import { useProducts } from '../hooks/useData';
import { getIcon } from '../lib/icons';
import LoadingSkeleton from '../components/Common/LoadingSkeleton';

const Products = () => {
  const { data: products, loading, error } = useProducts();

  return (
    <Layout>
      <SEO 
        title="Our Products" 
        description="Discover TNXBD's flagship products including Electro POS, MediSlot, and SmartEdu ERP." 
        keywords="Electro POS, MediSlot Hospital Management, SmartEdu ERP, Software Products"
      />
      <section className="pt-40 pb-24 bg-bg-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -z-10 blur-[120px]"></div>
        <div className="container" data-aos="fade-up">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 py-2 px-4 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
              <Zap size={16} /> Ready-to-Deploy Solutions
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 text-text-primary tracking-tight uppercase tracking-tighter">Our Premium <span className="text-primary italic">Products</span></h1>
            <p className="text-xl text-text-secondary leading-relaxed font-medium">
              We build specialized software products designed to solve complex business problems. Empower your industry with TNXBD technology.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {loading ? (
            <LoadingSkeleton count={4} />
          ) : error ? (
            <div className="text-center py-20 bg-rose-50 rounded-[3rem] border border-rose-100">
              <p className="text-rose-600 font-bold text-xl">Error loading products: {error}</p>
              <button onClick={() => window.location.reload()} className="mt-4 btn-primary">Try Again</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, index) => {
                const Icon = getIcon(product.icon_name || 'ShoppingCart');
                return (
                  <div 
                    key={product.id || index} 
                    className="glass p-10 rounded-[3rem] group hover:bg-white/60 transition-all duration-500 hover:-translate-y-2 border-white/40 shadow-xl"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className={`w-20 h-20 rounded-3xl mb-8 flex items-center justify-center transition-transform group-hover:scale-110 duration-500 shadow-lg ${
                      product.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      product.color === 'rose' ? 'bg-rose-100 text-rose-600' :
                      product.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                      'bg-indigo-100 text-indigo-600'
                    }`}>
                      <Icon size={32} />
                    </div>
                    <h3 className="text-3xl font-extrabold mb-4 tracking-tight">{product.title}</h3>
                    <p className="text-text-secondary mb-8 text-lg leading-relaxed font-medium">
                      {product.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      {product.features?.map((feature: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-sm font-bold text-text-primary">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <button className="btn-outline w-full justify-center group/btn py-4 rounded-2xl">
                      Request Demo <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="glass-dark p-12 lg:p-20 rounded-[4rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 relative z-10">Need a Custom Product?</h2>
            <p className="text-blue-100/70 text-xl max-w-2xl mx-auto mb-10 relative z-10">
              Your business is unique, and sometimes off-the-shelf software isn't enough. Let's build something specifically for you.
            </p>
            <button className="btn-primary py-5 px-12 text-lg relative z-10">
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
