import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// npx openapi-typescript https://fusgaoxgwlxrqmzrefmp.supabase.co/rest/v1/?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1c2dhb3hnd2x4cnFtenJlZm1wIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTA4MzY4NiwiZXhwIjoxOTc2NjU5Njg2fQ.05tGGUACQcXNFiJ4z_S0qyDXPDPfvrGIHmUOotUqUB0 --output utils/db-types.ts