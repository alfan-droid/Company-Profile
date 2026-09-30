import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://wcpjfmlsqwysqcsfiytl.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_dLsSkCZ0w-AQvjq3yOYK4A_QHJIB0qt';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
