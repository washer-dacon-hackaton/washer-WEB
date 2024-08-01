import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { typo, palette } from "../../shared/styles/index";

const Btn = styled.Button`
  ${typo};
  ${palette};
`;

export const Button = ({ text, action }) => {
  const navigate = useNavigate();
  return (
    <Btn
      onClick={() => {
        navigate(action);
      }}
    >
      {text}
    </Btn>
  );
};
