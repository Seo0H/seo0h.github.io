import { memo } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import CationIcon from '@/assets/icons/status/error';
import LoadingDot from '@/assets/icons/status/loading';
import { usePostViewContext } from '@/components/blog-post/post-info/context';
import cvar from '@/utils/cvarAutoComp';

import * as S from './style';

const Views = () => {
  const { views, status: viewsApiStatus } = usePostViewContext();
  const { isLoading, isSuccess, isError, isAbort } = viewsApiStatus;

  return (
    <AnimatePresence mode='wait'>
      {isLoading || isAbort ? (
        <S.DotWrapper
          key='dot'
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LoadingDot />
        </S.DotWrapper>
      ) : isError ? (
        <S.CationIconWrapper key='error' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <CationIcon width={22} height={22} fill={cvar({ key: 'gray', idx: '300' })} />
        </S.CationIconWrapper>
      ) : (
        isSuccess && (
          <motion.div key='views' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {views} views
          </motion.div>
        )
      )}
    </AnimatePresence>
  );
};

export default memo(Views);
