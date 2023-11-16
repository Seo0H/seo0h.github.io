export type OpenGraphData = {
  error: boolean;
  result: {
    ogTitle: string;
    ogDescription: string;
    twitterImage: { url: string }[];
    ogImage: { url: string }[];
    ogUrl: string;
    success: boolean;
  };
};
