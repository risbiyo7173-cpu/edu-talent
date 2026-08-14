import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zlyulcttuatvzjpfrtwy.supabase.co';
const supabaseKey = 'sb_publishable_bbURlSyo5P5IgtlrhucRgA_Hja7Siae';

export const supabase = createClient(supabaseUrl, supabaseKey);
