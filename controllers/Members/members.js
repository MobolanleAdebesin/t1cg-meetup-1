const { Members } = require('../../models');

module.exports = {
  findAll: function(req, res) {
    Members.find(req.query || req.body)
      .sort({ _id: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    Members.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addMember: function(req, res) {
    Members.create(req.body).then(doc => {
      console.log(doc);
    });
  }
};
