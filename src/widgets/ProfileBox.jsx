import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles/index";
import { Flex } from "../shared/utils/Wrapper";
import profile from "../assets/Profile.png";
import { Edit } from "../assets/icons/Edit";
import { Like } from "../assets/icons/Like";
import { IconButton } from "../components/Button/IconButton";

const Wrapper = styled(Flex)`
  div {
    .profile-user-name {
      ${typo.Head.h2};
      color: ${palette.Gray.gray100};
    }
    .profile-user-country {
      ${typo.Body.b0};
      color: ${palette.Gray.gray70};
    }
    .profile-user-lang {
      ${typo.Body.b0};
      color: ${palette.Gray.gray70};
    }
  }
`;

export const ProfileBox = ({ user }) => {
  return (
    <Wrapper direction="column" align="center">
      <img src={profile}></img> {/** 우선 유저 프로필을 기본 프로필로 */}
      <div className="profile-user">
        <div className="profile-user-name">{user.name}</div>
        <div className="profile-user-country">{user.country}</div>
        <div className="profile-user-lang">{user.lang}</div>
      </div>
      <div className="profile-btn">
        <IconButton
          icon={<Edit />}
          text={"내가 작성한 글 보기"}
          link={() => {
            alert("ㅋ");
          }}
        ></IconButton>
        <IconButton
          icon={<Like />}
          text={"내가 좋아하는 글 보기"}
          link={() => {
            alert("ㅋ");
          }}
        ></IconButton>
      </div>
    </Wrapper>
  );
};

// link={`/edit/${user}`}
// link={`/like/${user}`}
