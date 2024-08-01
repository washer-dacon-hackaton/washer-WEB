import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { typo, palette } from "../../shared/styles/index";

const Btn = styled.button`
  ${typo};
  ${palette};
`;

export const IconButton = ({ icon, text, link }) => {
  const navigate = useNavigate();
  return (
    <Btn
      onClick={() => {
        navigate(link);
      }}
    >
      <img src={icon}></img>
      <div className="ibtn-text">{text}</div>
    </Btn>
  );
};
