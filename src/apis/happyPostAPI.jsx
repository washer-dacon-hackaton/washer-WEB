import client from "./index";

const happyPostAPI = {
  GET_HAPPY_POST: async (id) => {
    const response = await client.get(`/post/${id}`);
    return response.data;
  },
  EDIT_HAPPY_POST: async () => {}, // 수정은 급한 내용이 아니라 후순위로 미뤄서 작업함.
  GET_POST_FEEDBACK: async () => {}, // 해당 글에 대한 피드백
};

export default happyPostAPI;
