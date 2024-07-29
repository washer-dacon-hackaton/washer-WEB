import styled from "@emotion/styled";

const Btn = styled.Button``;

export const Button = ({ text, action }) => {
  return <Btn onClick={action}>{text}</Btn>;
};
