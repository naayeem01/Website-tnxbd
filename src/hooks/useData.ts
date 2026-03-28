import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

// Generic hook for fetching public data
export function useSupabaseData<T>(tableName: string, order_by: string = 'order_index') {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: result, error: fetchError } = await supabase
          .from(tableName)
          .select('*')
          .order(order_by, { ascending: true });

        if (fetchError) throw fetchError;
        setData(result || []);
      } catch (err: any) {
        setError(err.message);
        console.error(`Error fetching ${tableName}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tableName, order_by]);

  return { data, loading, error };
}

// Specific hooks for each entity
export const useServices = () => useSupabaseData<any>('services');
export const usePortfolio = () => useSupabaseData<any>('portfolio');
export const useProducts = () => useSupabaseData<any>('products');
export const useBlogPosts = () => useSupabaseData<any>('blog_posts', 'published_at');
export const useClients = () => useSupabaseData<any>('clients');
