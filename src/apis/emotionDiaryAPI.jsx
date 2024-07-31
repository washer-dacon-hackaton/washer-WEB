import client from "./index";

const emotionDiaryAPI = {
  POST_EMOTION_DIARY: async (user, emotionList, date) => {
    const response = client.post(`/diary/${user}`, { emotionList, date });
    return response;
  },
  GET_DIARY_FEEDBACK: async (id) => {
    const response = client.get(`/diary/feedback/${id}`);
    return response; // 내가 선택했던 단어들 리스트도 함께 받을 수 있게
  },
  GET_ALLTIME_EMOTION: async (user, month) => {
    const response = client.get(`/diary/${user}/${month}`); // month라는 월을 표현하는 문자열 사용?
    return response;
  },
};

export default emotionDiaryAPI;
