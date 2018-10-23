const mongoose = require("mongoose");
const db = require("../models");

// This file empties the users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/matchlist"
);

const userSeed = [
  {
    email: "erica@fakemail.com",
    password: "password",
    firstName: "Erica",
    lastName: "Howard",
    image: "https://s.abcnews.com/images/Entertainment/bachelor-contestants-chelsea-abc-jef-171211_2x3_1600.jpg",
    age: 25,
    neighborhood: "Northern Liberties",
    gender: "Female",
    genderInterest: "Male",
    date: new Date(Date.now())
  },
  {
    email: "alicia@fakemail.com",
    password: "password",
    firstName: "Alicia",
    lastName: "Silver",
    image: "http://a.abcnews.com/images/Entertainment/bachelor-contestants-valerie-abc-jef-171211_2x3_1600.jpg",
    age: 28,
    neighborhood: "Fishtown",
    gender: "Female",
    genderInterest: "Male",
    date: new Date(Date.now())
  },
  {
    email: "sarah@fakemail.com",
    password: "password",
    firstName: "Sarah",
    lastName: "Stevens",
    image: "http://a.abcnews.com/images/Entertainment/bachelor-contestants-jacqueline-abc-jef-171211_2x3_1600.jpg",
    age: 32,
    neighborhood: "Fairmount",
    gender: "Female",
    genderInterest: "Male",
    date: new Date(Date.now())
  },
  {
    email: "katie@fakemail.com",
    password: "password",
    firstName: "Katie",
    lastName: "Griffin",
    image: "http://a.abcnews.com/images/Entertainment/bachelor-contestants-jenna-abc-jef-171211_2x3_1600.jpg",
    age: 22,
    neighborhood: "Old City",
    gender: "Female",
    genderInterest: "Male",
    date: new Date(Date.now())
  },
  {
    email: "christina@fakemail.com",
    password: "password",
    firstName: "Christina",
    lastName: "Mesa",
    image: "http://a.abcnews.com/images/Entertainment/bachelor-contestants-jennifer-abc-jef-171211_2x3_1600.jpg",
    age: 27,
    neighborhood: "Center City",
    gender: "Female",
    genderInterest: "Male",
    date: new Date(Date.now())
  },
  {
    email: "erin@fakemail.com",
    password: "password",
    firstName: "Erin",
    lastName: "Black",
    image: "http://a.abcnews.com/images/Entertainment/bachelor-contestants-kendall-abc-jef-171211_2x3_1600.jpg",
    age: 25,
    neighborhood: "South Philly",
    gender: "Female",
    genderInterest: "Male",
    date: new Date(Date.now())
  },
  {
    email: "veronica@fakemail.com",
    password: "password",
    firstName: "Veronica",
    lastName: "Mars",
    image: "http://a.abcnews.com/images/Entertainment/bachelor-contestants-jessica-abc-jef-171211_2x3_1600.jpg",
    age: 26,
    neighborhood: "South Philly",
    gender: "Female",
    genderInterest: "Male",
    date: new Date(Date.now())
  },
  {
    email: "chelsea@fakemail.com",
    password: "password",
    firstName: "Chelsea",
    lastName: "Grey",
    image: "http://a.abcnews.com/images/Entertainment/bachelor-contestants-krystal-abc-jef-171211_2x3_1600.jpg",
    age: 33,
    neighborhood: "Northern Liberties",
    gender: "Female",
    genderInterest: "Male",
    date: new Date(Date.now())
  },
  {
    email: "megan@fakemail.com",
    password: "password",
    firstName: "Megan",
    lastName: "Fulton",
    image: "http://a.abcnews.com/images/Entertainment/bachelor-contestants-lauren-s-abc-jef-171211_2x3_1600.jpg",
    age: 24,
    neighborhood: "Fishtown",
    gender: "Female",
    genderInterest: "Male",
    date: new Date(Date.now())
  },
  {
    email: "vanessa@fakemail.com",
    password: "password",
    firstName: "Vanessa",
    lastName: "Quinn",
    image: "http://a.abcnews.com/images/Entertainment/bachelor-contestants-lauren-b-abc-jef-171211_2x3_1600.jpg",
    age: 31,
    neighborhood: "Center City",
    gender: "Female",
    genderInterest: "Male",
    date: new Date(Date.now())
  },
  {
    email: "joanne@fakemail.com",
    password: "password",
    firstName: "Joanne",
    lastName: "Jones",
    image: "http://a.abcnews.com/images/Entertainment/bachelor-contestants-olivia-abc-jef-171211_2x3_1600.jpg",
    age: 27,
    neighborhood: "Old City",
    gender: "Female",
    genderInterest: "Male",
    date: new Date(Date.now())
  },
  {
    email: "rachel@fakemail.com",
    password: "password",
    firstName: "Rachel",
    lastName: "Smith",
    image: "http://a.abcnews.com/images/Entertainment/bachelor-contestants-rebekah-abc-jef-171211_2x3_1600.jpg",
    age: 28,
    neighborhood: "Northeast",
    gender: "Female",
    genderInterest: "Male",
    date: new Date(Date.now())
  },
  {
    email: "john@fakemail.com",
    password: "password",
    firstName: "John",
    lastName: "Howard",
    image: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelorette/person/2136969/e10036f0412ab1099c50284275ab045f/1000x400-Q90_e10036f0412ab1099c50284275ab045f.jpg",
    age: 25,
    neighborhood: "Northern Liberties",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now())
  },
  {
    email: "brian@fakemail.com",
    password: "password",
    firstName: "Brian",
    lastName: "Silver",
    image: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelorette/person/2136973/48c4249219eeb9a0cdd7543432d28d83/1000x400-Q90_48c4249219eeb9a0cdd7543432d28d83.jpg",
    age: 28,
    neighborhood: "Fishtown",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now())
  },
  {
    email: "shane@fakemail.com",
    password: "password",
    firstName: "Shane",
    lastName: "Stevens",
    image: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelorette/person/2136975/1f76fcb9206d66c6e6d73e443577af2f/1000x400-Q90_1f76fcb9206d66c6e6d73e443577af2f.jpg",
    age: 32,
    neighborhood: "Fairmount",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now())
  },
  {
    email: "nelson@fakemail.com",
    password: "password",
    firstName: "Nelson",
    lastName: "Griffin",
    image: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelorette/person/2136976/6d97a1a49631757e7c9fdf4a2bbf9000/1000x400-Q90_6d97a1a49631757e7c9fdf4a2bbf9000.jpg",
    age: 22,
    neighborhood: "Old City",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now())
  },
  {
    email: "zack@fakemail.com",
    password: "password",
    firstName: "Zack",
    lastName: "Mesa",
    image: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelorette/person/2136978/cce918b10c5d35e9009074ea5dd0240b/1000x400-Q90_cce918b10c5d35e9009074ea5dd0240b.jpg",
    age: 27,
    neighborhood: "Center City",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now())
  },
  {
    email: "jake@fakemail.com",
    password: "password",
    firstName: "Jake",
    lastName: "Black",
    image: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelorette/person/2136979/30ed56e54f74885d5e1451236301c709/1000x400-Q90_30ed56e54f74885d5e1451236301c709.jpg",
    age: 25,
    neighborhood: "South Philly",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now())
  },
  {
    email: "blake@fakemail.com",
    password: "password",
    firstName: "Blake",
    lastName: "Mars",
    image: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelorette/person/2136980/7d02610a2548d240b380fc19a713a698/1000x400-Q90_7d02610a2548d240b380fc19a713a698.jpg",
    age: 26,
    neighborhood: "South Philly",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now())
  },
  {
    email: "jared@fakemail.com",
    password: "password",
    firstName: "Jared",
    lastName: "Grey",
    image: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelorette/person/2136982/6cc3b10c69196c89966800f22496b859/1000x400-Q90_6cc3b10c69196c89966800f22496b859.jpg",
    age: 33,
    neighborhood: "Northern Liberties",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now())
  },
  {
    email: "scott@fakemail.com",
    password: "password",
    firstName: "Scott",
    lastName: "Fulton",
    image: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelorette/person/2136983/1ddabff2f57f434e8e804316fd30a5c3/1000x400-Q90_1ddabff2f57f434e8e804316fd30a5c3.jpg",
    age: 24,
    neighborhood: "Fishtown",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now())
  },
  {
    email: "will@fakemail.com",
    password: "password",
    firstName: "Will",
    lastName: "Quinn",
    image: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelorette/person/2136984/88632fc509d5fc4789437ba866af40ea/1000x400-Q90_88632fc509d5fc4789437ba866af40ea.jpg",
    age: 31,
    neighborhood: "Center City",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now())
  },
  {
    email: "grant@fakemail.com",
    password: "password",
    firstName: "Grant",
    lastName: "Jones",
    image: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelorette/person/2136986/68619ce45c5b99376262543c775d046c/1000x400-Q90_68619ce45c5b99376262543c775d046c.jpg",
    age: 27,
    neighborhood: "Old City",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now())
  },
  {
    email: "jeff@fakemail.com",
    password: "password",
    firstName: "Jeff",
    lastName: "Smith",
    image: "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelorette/person/2136987/943c3b5313a037e53a95c00d763eb8d7/1000x400-Q90_943c3b5313a037e53a95c00d763eb8d7.jpg",
    age: 28,
    neighborhood: "Northeast",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now())
  }  
];

const messageSeed = [
  {
    userOne: 1,
    userTwo: 2,
    hooked: false,
    messages: [
      {
        text: "I am userOne",
        senderID: 1,
        date: new Date(Date.now())
      },
      {
        text: "I am userTwo",
        senderID: 2,
        date: new Date(Date.now())
      }
    ],
  date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Chat
  .remove({})
  .then(() => db.Chat.collection.insertMany(messageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });