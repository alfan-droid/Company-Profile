import { createClient } from '@supabase/supabase-js';

const rawUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL;

const supabaseUrl =
  rawUrl && rawUrl.startsWith('http')
    ? rawUrl
    : 'https://wcpjfmlsqwysqcsfiytl.supabase.co';

const rawKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabaseAnonKey =
  rawKey && !rawKey.startsWith('sb_secret')
    ? rawKey
    : 'sb_publishable_dLsSkCZ0w-AQvjq3yOYK4A_QHJIB0qt';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
