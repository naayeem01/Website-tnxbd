import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, Globe, Briefcase, ShoppingBag, FileText, Users, LogOut, PanelLeftClose, PanelLeftOpen, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

const navLinks = [
  { path: '/admin', icon: LayoutGrid, label: 'Dashboard' },
  { path: '/admin/services', icon: Globe, label: 'Services' },
  { path: '/admin/portfolio', icon: Briefcase, label: 'Portfolio' },
  { path: '/admin/products', icon: ShoppingBag, label: 'Products' },
  { path: '/admin/blog', icon: FileText, label: 'Blog' },
  { path: '/admin/clients', icon: Users, label: 'Clients' },
];

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="flex min-h-screen bg-bg-secondary text-text-primary">
      {/* Sidebar */}
      <aside className={`bg-bg-primary border-r border-white/40 shadow-xl transition-all duration-300 ${collapsed ? 'w-24' : 'w-72'} flex flex-col fixed h-full z-50`}>
        <div className="p-6 flex items-center justify-between">
          {!collapsed && (
            <Link to="/" className="text-2xl font-black tracking-tighter text-primary">
              TNX<span className="text-text-primary">BD</span>
            </Link>
          )}
          <button onClick={() => setCollapsed(!collapsed)} className="p-2 hover:bg-bg-secondary rounded-xl transition-colors">
            {collapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
          </button>
        </div>

        <nav className="flex-grow p-4 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-4 p-4 rounded-2xl font-bold transition-all duration-300 group ${
                  isActive ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'hover:bg-bg-secondary text-text-muted hover:text-text-primary'
                }`}
              >
                <Icon className={`transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-primary'}`} size={24} />
                {!collapsed && <span>{link.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mt-auto border-t border-white/40 space-y-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full p-4 rounded-2xl font-bold text-emerald-600 hover:bg-emerald-50 transition-all duration-300 group"
          >
            <ExternalLink className="group-hover:scale-110 transition-transform" size={24} />
            {!collapsed && <span>View Site</span>}
          </a>
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 w-full p-4 rounded-2xl font-bold text-rose-500 hover:bg-rose-50 transition-all duration-300 group"
          >
            <LogOut className="group-hover:translate-x-1 transition-transform" size={24} />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-grow transition-all duration-300 ${collapsed ? 'ml-24' : 'ml-72'} p-8 lg:p-12`}>
        <div className="max-w-7xl mx-auto animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
