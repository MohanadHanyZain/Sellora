import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://pblxllzryzqkvsbrsieh.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBibHhsbHpyeXpxa3ZzYnJzaWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5NTU4NTMsImV4cCI6MjEwMTUzMTg1M30.QmCOt82960LgYWz8Tn40YArQJOpIxX2XSfstSOJLxC4'; 

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);