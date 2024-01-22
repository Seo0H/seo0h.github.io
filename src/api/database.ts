import supabase from '@/api/client';

export const getBlogPost = async () => {
  const { data, error } = await supabase.from('post').select('*');

  if (error) {
    throw new Error(`${error.code} - ${error.message}`);
  }

  return data;
};
