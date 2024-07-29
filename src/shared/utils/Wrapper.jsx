import styled from "@emotion/styled";

export const Space = styled.div`
  height: ${({ height }) => (height ? `${height}px` : "")};
  width: ${({ width }) => (width ? `${width}px` : "")};
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : "row")};
  justify-content: ${({ justify }) => (justify ? `${justify}` : "center")};
  align-items: ${({ align }) => (align ? `${align}` : "center")};
`;
