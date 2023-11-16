import { useEffect, useState } from 'react';

import Image from 'next/image';

import { getOpenGraphData } from '@/components/mdx/Bookmark/utils';

import type { OpenGraphData } from '@/components/mdx/Bookmark/type';

const Bookmark = ({ url }: { url: string }) => {
  const [openGraphData, setOpenGraphData] = useState<OpenGraphData>();

  useEffect(() => {
    getOpenGraphData(url).then((res) => setOpenGraphData(res));
  }, []);

  return (
    <div>
      <Image
        alt='bookmark image'
        src={openGraphData?.result.ogImage[0].url!}
        width={200}
        height={200}
      />
      <span>{openGraphData?.result.ogTitle}</span>
      <p>{openGraphData?.result.ogDescription}</p>
    </div>
  );
};

export default Bookmark;
