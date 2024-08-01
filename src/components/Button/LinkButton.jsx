import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { typo, palette } from "../../shared/styles/index";

const Btn = styled.button`
  ${typo};
  ${palette};
`;

export const LinkButton = ({ text, link }) => {
  const navigate = useNavigate();
  return (
    <Btn
      onClick={() => {
        navigate(link);
      }}
    >
      <div className="lbtn-text">{text}</div>
    </Btn>
  );
};
