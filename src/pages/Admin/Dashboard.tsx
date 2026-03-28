import AdminLayout from '../../components/Admin/AdminLayout';
import { 
  Globe, Briefcase, ShoppingBag, FileText, 
  Database, Sparkles, Loader2, Activity, Clock, 
  ExternalLink, CheckCircle2, AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { seedDatabase } from '../../lib/seed';

interface StatItem {
  label: string;
  count: number;
  icon: any;
  color: string;
  path: string;
}

interface ActivityItem {
  id: string;
  type: 'service' | 'project' | 'post' | 'product';
  title: string;
  timestamp: string;
}

const Dashboard = () => {
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedSuccess, setSeedSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<StatItem[]>([]);
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [dbStatus, setDbStatus] = useState<'online' | 'error'>('online');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch Counts
      const [services, portfolio, products, blog] = await Promise.all([
        supabase.from('services').select('*', { count: 'exact', head: true }),
        supabase.from('portfolio').select('*', { count: 'exact', head: true }),
        supabase.from('products').select('*', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
      ]);

      setStats([
        { label: 'Services', count: services.count || 0, icon: Globe, color: 'blue', path: '/admin/services' },
        { label: 'Portfolio', count: portfolio.count || 0, icon: Briefcase, color: 'emerald', path: '/admin/portfolio' },
        { label: 'Products', count: products.count || 0, icon: ShoppingBag, color: 'rose', path: '/admin/products' },
        { label: 'Blog Posts', count: blog.count || 0, icon: FileText, color: 'amber', path: '/admin/blog' },
      ]);

      // Fetch Recent Activity (simulated cross-table fetch for demo purposes, picking latest from each)
      const [recentServices, recentPortfolio, recentBlog] = await Promise.all([
        supabase.from('services').select('id, title, created_at').order('created_at', { ascending: false }).limit(2),
        supabase.from('portfolio').select('id, title, created_at').order('created_at', { ascending: false }).limit(2),
        supabase.from('blog_posts').select('id, title, created_at').order('created_at', { ascending: false }).limit(2),
      ]);

      const allActivity: ActivityItem[] = [
        ...(recentServices.data || []).map(item => ({ id: item.id, type: 'service' as const, title: item.title, timestamp: item.created_at })),
        ...(recentPortfolio.data || []).map(item => ({ id: item.id, type: 'project' as const, title: item.title, timestamp: item.created_at })),
        ...(recentBlog.data || []).map(item => ({ id: item.id, type: 'post' as const, title: item.title, timestamp: item.created_at })),
      ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 5);

      setActivities(allActivity);
      setDbStatus('online');
    } catch (err) {
      console.error('Dashboard fetch error:', err);
      setDbStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const handleSeed = async () => {
    if (!window.confirm('This will populate your database with initial static data. Continue?')) return;
    setIsSeeding(true);
    const result = await seedDatabase();
    setIsSeeding(false);
    if (result.success) {
      setSeedSuccess(true);
      fetchDashboardData();
      setTimeout(() => setSeedSuccess(false), 5000);
    } else {
      alert('Seeding failed.');
    }
  };

  const getTimeAgo = (date: string) => {
    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
    if (seconds < 60) return 'Just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return new Date(date).toLocaleDateString();
  };

  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12" data-aos="fade-down">
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary mb-3">
            Admin <span className="text-primary italic">Dashboard</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed font-medium flex items-center gap-2">
            Welcome back, System Admin. 
            <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
              dbStatus === 'online' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
            }`}>
              {dbStatus === 'online' ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
              DB {dbStatus}
            </span>
          </p>
        </div>
        <div className="flex gap-4">
          <a href="/" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-3 px-6 rounded-2xl">
            <ExternalLink size={20} /> View Site
          </a>
          <button onClick={fetchDashboardData} className="p-4 glass hover:bg-white rounded-2xl transition-all shadow-sm">
            <Clock size={20} className={loading ? 'animate-spin text-primary' : 'text-text-muted'} />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {loading ? [...Array(4)].map((_, i) => (
          <div key={i} className="glass h-40 rounded-[2.5rem] animate-pulse bg-white/40"></div>
        )) : stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Link 
              key={i} 
              to={stat.path}
              className="glass p-8 rounded-[2.5rem] group hover:bg-white/70 transition-all duration-500 border-white/40 shadow-xl relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-transform group-hover:scale-110 duration-500 shadow-lg ${
                stat.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                stat.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                stat.color === 'rose' ? 'bg-rose-50 text-rose-600' :
                'bg-amber-50 text-amber-600'
              }`}>
                <Icon size={28} />
              </div>
              <h3 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-1">{stat.label}</h3>
              <p className="text-4xl font-black text-text-primary">{stat.count}</p>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Recent Activity */}
        <div className="lg:col-span-2 glass p-10 rounded-[3rem] border-white/40 shadow-xl" data-aos="fade-right">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-black flex items-center gap-3">
              <Activity className="text-primary" size={24} /> Recent Activity
            </h3>
            <span className="text-xs font-black uppercase tracking-widest text-text-muted italic">Live Feed</span>
          </div>
          
          <div className="space-y-8">
            {loading ? [...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-4 animate-pulse">
                <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                <div className="flex-grow space-y-2">
                  <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                  <div className="h-3 w-1/4 bg-gray-200 rounded"></div>
                </div>
              </div>
            )) : activities.length > 0 ? activities.map((activity, i) => (
              <div key={activity.id} className="flex gap-6 relative group" data-aos="fade-up" data-aos-delay={i * 50}>
                {i !== activities.length - 1 && <div className="absolute left-6 top-14 bottom-[-2rem] w-0.5 bg-gray-100 group-hover:bg-primary/20 transition-colors"></div>}
                <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center shadow-inner ${
                  activity.type === 'service' ? 'bg-blue-50 text-blue-500' :
                  activity.type === 'project' ? 'bg-emerald-50 text-emerald-500' :
                  'bg-rose-50 text-rose-500'
                }`}>
                  {activity.type === 'service' ? <Globe size={20} /> : activity.type === 'project' ? <Briefcase size={20} /> : <FileText size={20} />}
                </div>
                <div>
                  <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors">
                    {activity.type === 'service' ? 'New Service Added' : activity.type === 'project' ? 'New Project Published' : 'New Blog Post Drafted'}
                  </h4>
                  <p className="text-sm text-text-secondary font-medium mb-1">{activity.title}</p>
                  <p className="text-xs text-text-muted font-bold uppercase tracking-widest italic">{getTimeAgo(activity.timestamp)}</p>
                </div>
              </div>
            )) : (
              <div className="py-10 text-center italic text-text-muted font-medium">No recent activity detected.</div>
            )}
          </div>
        </div>

        {/* Quick Setup */}
        <div className="space-y-8" data-aos="fade-left">
          <div className="glass p-10 rounded-[3rem] border-white/40 shadow-xl bg-gradient-to-br from-primary/5 to-transparent">
            <h3 className="text-xl font-black mb-6 flex items-center gap-3">
              <Sparkles className="text-primary" size={20} /> Quick Setup
            </h3>
            <p className="text-sm text-text-secondary font-medium mb-8 leading-relaxed">
              Populate your database with original site content in one click.
            </p>
            {seedSuccess ? (
              <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-4 text-emerald-600 animate-fade-in">
                <CheckCircle2 size={24} />
                <p className="font-bold text-sm">Migration Complete</p>
              </div>
            ) : (
              <button 
                onClick={handleSeed}
                disabled={isSeeding}
                className={`w-full py-4 rounded-2xl font-black flex items-center justify-center gap-3 transition-all ${
                  isSeeding ? 'bg-bg-accent text-text-muted cursor-not-allowed' : 'bg-primary text-white shadow-lg shadow-primary/20 hover:scale-[1.02]'
                }`}
              >
                {isSeeding ? <Loader2 className="animate-spin" size={20} /> : <Database size={20} />}
                {isSeeding ? 'Migrating...' : 'Seed Data'}
              </button>
            )}
          </div>

          <div className="glass p-10 rounded-[3rem] border-white/40 shadow-xl">
            <h3 className="text-xl font-black mb-6">System Info</h3>
            <div className="space-y-4 text-sm font-bold">
              <div className="flex justify-between py-2 border-b border-gray-100 italic">
                <span className="text-text-muted">Environment</span>
                <span className="text-emerald-600">Production</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100 italic">
                <span className="text-text-muted">Database</span>
                <span className="text-text-primary">Supabase v2</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100 italic">
                <span className="text-text-muted">Storage Bucket</span>
                <span className="text-primary hover:underline cursor-pointer">uploads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
