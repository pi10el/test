export const getURL = (endpoint: string) => {
  const protocol =
    process.env.NODE_ENV === 'development' ? 'http://' : 'https://';

  return `${protocol}${process.env.NEXT_PUBLIC_API_URL}/api${endpoint}`;
};
