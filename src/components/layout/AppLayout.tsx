import type { ReactNode } from 'react';

import * as Layout from '@/components/layout';

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout.Box maxWidth='920px' margin='auto' width='100%' height='100%'>
      {children}
    </Layout.Box>
  );
};

export default AppLayout;
