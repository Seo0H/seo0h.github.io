export const isDev = process.env.NODE_ENV === 'development';
export const postTableName = (
  isDev ? process.env.DEV_TABLE_NAME : process.env.TABLE_NAME
) as string; // only use server
