import axios from 'axios';

export default {
  getAllMembers: function() {
    return axios.get('/api/members');
  },
  getOneMember: function(id) {
    return axios.get('/api/members/' + id);
  },
  addMember: function() {
    return axios.post('/api/members').then(res => {
      console.log(res);
    });
  }
};
