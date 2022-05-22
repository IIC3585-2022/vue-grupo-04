import api from './index';

const API_URL = 'https://opentdb.com';

export default {
  getQuestions(params) {
    return api({
      method: 'get',
      url: `${API_URL}/api.php`,
      params,
    });
  },
};
