import * as A from './animation';
import * as S from './style';

const LoadingDot = () => {
  return (
    <S.LoadingDotContainer variants={A.ContainerVariants} initial='initial' animate='animate'>
      <AnimatedDot />
      <AnimatedDot />
      <AnimatedDot />
    </S.LoadingDotContainer>
  );
};

export default LoadingDot;

const AnimatedDot = () => {
  return <S.Dot variants={A.DotVariants} transition={A.DotTransition} />;
};
