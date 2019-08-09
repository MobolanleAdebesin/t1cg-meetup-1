const router = require('express').Router();

//paths
const MeetUp = require('./MeetUp');
const Members = require('./Members');

//any path with /api/meetup should use the routes in MeetUp
router.use('/meetup', MeetUp);
router.use('/members', Members);

//if anyone goes to localhost:3002/api/, it'll send this error
router.get('/', (req, res) => {
  res.status(500).json({
    msg: 'path not found',
    code: 500
  });
});

module.exports = router;
