import styled from "@emotion/styled";
// import { useNavigate } from "react-router-dom";
import { typo, palette } from "../../shared/styles/index";

const Btn = styled.button`
  ${typo};
  ${palette};
`;

export const IconButton = ({ icon, text, link }) => {
  return (
    <Btn
      onClick={() => {
        link;
      }}
    >
      {icon}
      <div className="ibtn-text">{text}</div>
    </Btn>
  );
};
