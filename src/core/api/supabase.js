import { createClient } from '@supabase/supabase-js';

// These environment variables will be injected securely by GitHub Actions and Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL |

| 'YOUR_URL_HERE';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |

| 'YOUR_KEY_HERE';

export const supabase = createClient(supabaseUrl, supabaseKey);
