const mongoose = require('mongoose');

const { Members } = require('../../models');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/t1cgmeetup',
  {
    useNewUrlParser: true
  },
  err => {
    if (err) throw err;
    console.log(`member seed file connected to DB...`);
  }
);

let memberSeed = [
  {
    Name: 'Tony DeCarlo',
    imgURL: '',
    Occupation: 'Technical Analyst',
    Bio:
      'I majored in Computer Science at Towson University. Passionate about all things full stack web development. In my free time I enjoy video games, soccer, and working out.',
    socialMedia: true,
    Twitter: '@tonydecarlo11',
    Facebook: 'https://www.facebook.com/tony.decarlo.777',
    LinkedIn: 'https://www.linkedin.com/in/anthony-decarlo-521010108/',
    Github: 'https://www.github.com/tony-decarlo-t1cg'
  },
  {
    Name: 'Ashell Fernando',
    imgURL: '',
    Occupation: "Part-time Teacher's Assistant, full-time coder :)",
    Bio:
      "I am a TA for GW Coding Boot Camp, I don't have college experience but I've been coding better half of my life. Before being a TA, I was a nationally certified pharmacy techinician for 4 years.",
    socialMedia: true,
    Twitter: '@entofmd',
    Facebook: false,
    LinkedIn: 'https://www.linkedin.com/in/ashell-fernando/',
    Github: 'https://www.github.com/entofmd'
  },
  {
    Name: 'Alexander Vela',
    imgURL: '',
    Occupation: 'Junior Web Developer',
    Bio:
      'I’m a recent graduate of Bloc’s online Web Development Mentorship program. I love learning and am always excited to pick up some new skills. Aside from web development I’m also passionate about gaming and food.',
    socialMedia: false,
    Twitter: false,
    Facebook: false,
    LinkedIn: 'https://www.linkedin.com/in/alexander-vela',
    Github: 'https://www.github.com/alexandervela'
  }
];

Members.deleteMany({})
  .then(() => Members.collection.insertMany(memberSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
