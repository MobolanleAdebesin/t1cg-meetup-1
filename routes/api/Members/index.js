const router = require('express').Router();

//controllers
const memberController = require('../../../controllers').Members.members;

//this route can have GET and POST
router
  .route('/')
  .get(memberController.findAll)
  .post(memberController.addMember);

//this route only has a GET
router.route('/:id').get(memberController.findById);

module.exports = router;
