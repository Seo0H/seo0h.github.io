import { Transition } from 'framer-motion';

import { defaultEasing } from '@/lib/animations';

export const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const DotVariants = {
  initial: {
    y: '-50%',
  },
  animate: {
    y: '50%',
  },
};

export const DotTransition: Transition = {
  duration: 1,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: defaultEasing,
};
