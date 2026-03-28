import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, LogIn, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/admin';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err.message || 'Invalid login credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-secondary p-4">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/10 -z-10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/5 -z-10 blur-[120px] rounded-full"></div>
      
      <div className="w-full max-w-md" data-aos="zoom-in">
        <div className="glass p-10 rounded-[3rem] shadow-2xl border-white/40">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black tracking-tighter text-primary mb-2">
              TNX<span className="text-text-primary">BD</span>
            </h1>
            <p className="text-text-secondary font-bold uppercase tracking-widest text-sm">Admin Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-text-primary ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors" size={20} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-white/50 border border-white/40 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                  placeholder="admin@tnxbd.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-text-primary ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors" size={20} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-white/50 border border-white/40 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-3 p-4 bg-rose-50 text-rose-600 rounded-2xl animate-shake">
                <AlertCircle size={20} />
                <p className="text-sm font-bold">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full py-5 rounded-2xl flex items-center justify-center gap-3 text-lg group"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Secure Login <LogIn className="group-hover:translate-x-1 transition-transform" size={20} />
                </>
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <button 
              type="button"
              onClick={() => navigate('/')}
              className="text-text-muted hover:text-primary font-bold text-sm transition-colors"
            >
              ← Back to Main Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
