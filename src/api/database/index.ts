import { createClient } from '@supabase/supabase-js';

import { postTableName } from '@/lib/mode';
import { Database } from '@/types/database.types';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;

export const getBlogPost = async () => {
  if (postTableName === undefined) throw new Error('table name is undefined');

  const { data, error } = await supabase.from(postTableName).select('*');

  if (error) {
    throw new Error(`${error.code} - ${error.message}`);
  }

  return data;
};
