/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

//TODO #2 : interface의 key를 추출하는 방식에서 중복되게 key값을 작성하는 문제 해결하기
export interface FlexProps extends SizeAndMarginAndPaddingProps {
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'center'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  flexWrap?: 'nowrap' | 'wrap';
  gap?: string;
}

interface SizeAndMarginAndPaddingProps {
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
}

interface GridProps extends SizeAndMarginAndPaddingProps {
  gridTemplateColumns?: string;
  gridTemplateRow?: string;
  gap?: string;
  gridColumn?: string;
  gridRow?: string;
  gridAutoFlow?: string;
  placeItems?: 'stretch' | 'start' | 'center' | 'end';
  placeContent?:
    | 'stretch'
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  placeSelf?: 'stretch' | 'start' | 'center' | 'end';
}

type KeysEnum<T> = { [P in keyof Required<T>]: string };

const FlexPropsKeys: KeysEnum<FlexProps> = {
  flexDirection: '',
  justifyContent: '',
  alignItems: '',
  flexWrap: '',
  gap: '',
  position: '',
  margin: '',
  padding: '',
  width: '',
  height: '',
  maxWidth: '',
  maxHeight: '',
  minWidth: '',
  minHeight: '',
};

const SizeAndMarginAndPaddingKeys: KeysEnum<SizeAndMarginAndPaddingProps> = {
  position: '',
  margin: '',
  padding: '',
  width: '',
  height: '',
  maxWidth: '',
  maxHeight: '',
  minWidth: '',
  minHeight: '',
};

const GridPropsKeys: KeysEnum<GridProps> = {
  gridTemplateColumns: '',
  gridTemplateRow: '',
  gap: '',
  gridColumn: '',
  gridRow: '',
  gridAutoFlow: '',
  placeItems: '',
  placeContent: '',
  placeSelf: '',
  position: '',
  margin: '',
  padding: '',
  width: '',
  height: '',
  maxWidth: '',
  maxHeight: '',
  minWidth: '',
  minHeight: '',
};

const SizeAndMarginAndPaddingProperty = css<SizeAndMarginAndPaddingProps>`
  position: ${({ position }) => position || 'static'};
  width: ${({ width }) => width || ''};
  height: ${({ height }) => height || ''};
  margin: ${({ margin }) => margin || ''};
  padding: ${({ padding }) => padding || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  max-height: ${({ maxHeight }) => maxHeight || ''};
  min-width: ${({ minWidth }) => minWidth || ''};
  min-height: ${({ minHeight }) => minHeight || ''};
`;

const FlexProperty = css<FlexProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || ''};
  align-items: ${({ alignItems }) => alignItems || ''};
  gap: ${({ gap }) => gap || '0'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  flex-direction: ${({ flexDirection }) => flexDirection || ''};
`;

const GridProperty = css<GridProps>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns || ''};
  grid-template-rows: ${({ gridTemplateRow }) => gridTemplateRow || ''};
  gap: ${({ gap }) => gap || '0'};
  grid-column: ${({ gridColumn }) => gridColumn || ''};
  grid-row: ${({ gridRow }) => gridRow || ''};
  grid-auto-flow: ${({ gridAutoFlow }) => gridAutoFlow || ''};
  place-items: ${({ placeItems }) => placeItems || ''};
  place-content: ${({ placeContent }) => placeContent || ''};
  place-self: ${({ placeSelf }) => placeSelf || ''};
`;

export const Flex = styled.div.withConfig({
  shouldForwardProp: (prop) => !Object.keys(FlexPropsKeys).includes(prop),
})<FlexProps>`
  ${FlexProperty}
  ${SizeAndMarginAndPaddingProperty}
`;

export const VStack = styled(Flex)`
  flex-direction: column;
`;

export const HStack = styled(Flex)`
  flex-direction: row;
`;

export const Fixed = styled.div`
  position: fixed;
`;

export const Box = styled.div.withConfig({
  shouldForwardProp: (prop) => !Object.keys(SizeAndMarginAndPaddingKeys).includes(prop),
})<SizeAndMarginAndPaddingProps>`
  display: block;
  ${SizeAndMarginAndPaddingProperty}
`;

export const Grid = styled.div.withConfig({
  shouldForwardProp: (prop) => !Object.keys(GridPropsKeys).includes(prop),
})<GridProps>`
  ${GridProperty}
  ${SizeAndMarginAndPaddingProperty}
`;
