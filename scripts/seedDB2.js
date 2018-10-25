const mongoose = require("mongoose");
const db = require("../models");

// This file empties the users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/matchlist"
);

const userSeed = [
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
    date: new Date(Date.now()),
    matched: false,
    hooked: false
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
    date: new Date(Date.now()),
    matched: true,
    hooked: false
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
    date: new Date(Date.now()),
    matched: true,
    hooked: false
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
    date: new Date(Date.now()),
    matched: false,
    hooked: false
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
    date: new Date(Date.now()),
    matched: true,
    hooked: false
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
    date: new Date(Date.now()),
    matched: false,
    hooked: false
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
    date: new Date(Date.now()),
    matched: false,
    hooked: false
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
    date: new Date(Date.now()),
    matched: true,
    hooked: false
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
    date: new Date(Date.now()),
    matched: false,
    hooked: false
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
    date: new Date(Date.now()),
    matched: false,
    hooked: false
  },
  {
    email: "brian@fakemail.com",
    password: "password",
    firstName: "Brian",
    lastName: "Silver",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/148893-0041-1526654751.jpg?crop=1.00xw:0.668xh;0,0.0438xh",
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
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/148893-1546-1526655291.jpg?crop=1.00xw:0.668xh;0,0.0588xh",
    age: 32,
    neighborhood: "Fairmount",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now()),
    matched: false,
    hooked: false
  },
  {
    email: "nelson@fakemail.com",
    password: "password",
    firstName: "Nelson",
    lastName: "Griffin",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/148893-1491-1526655420.jpg?crop=1.00xw:0.668xh;0,0.0772xh",
    age: 22,
    neighborhood: "Old City",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now()),
    matched: false,
    hooked: false
  },
  {
    email: "zack@fakemail.com",
    password: "password",
    firstName: "Zack",
    lastName: "Mesa",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/148893-0915-1526656606.jpg?crop=1.00xw:0.668xh;0,0.0703xh&resize=640:*",
    age: 27,
    neighborhood: "Center City",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now()),
    matched: false,
    hooked: false
  },
  {
    email: "jake@fakemail.com",
    password: "password",
    firstName: "Jake",
    lastName: "Black",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/148893-1594-1526656911.jpg?crop=1.00xw:0.668xh;0,0.0829xh&resize=640:*",
    age: 25,
    neighborhood: "South Philly",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now()),
    matched: false,
    hooked: false
  },
  {
    email: "blake@fakemail.com",
    password: "password",
    firstName: "Blake",
    lastName: "Mars",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/148893-1193-1526657181.jpg?crop=1.00xw:0.668xh;0,0.0657xh&resize=640:*",
    age: 26,
    neighborhood: "South Philly",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now()),
    matched: false,
    hooked: false
  },
  {
    email: "jared@fakemail.com",
    password: "password",
    firstName: "Jared",
    lastName: "Grey",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/148893-1078-1526657726.jpg?crop=1.00xw:0.668xh;0,0.0657xh&resize=640:*",
    age: 33,
    neighborhood: "Northern Liberties",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now()),
    matched: false,
    hooked: false
  },
  {
    email: "scott@fakemail.com",
    password: "password",
    firstName: "Scott",
    lastName: "Fulton",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/148893-0462-1526663118.jpg?crop=1.00xw:0.668xh;0,0.0403xh&resize=640:*",
    age: 24,
    neighborhood: "Fishtown",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now()),
    matched: false,
    hooked: false
  },
  {
    email: "will@fakemail.com",
    password: "password",
    firstName: "Will",
    lastName: "Quinn",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/148893-0620-1526663206.jpg?crop=1.00xw:0.668xh;0,0.111xh",
    age: 31,
    neighborhood: "Center City",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now()),
    matched: false,
    hooked: false
  },
  {
    email: "grant@fakemail.com",
    password: "password",
    firstName: "Grant",
    lastName: "Jones",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/148893-1124-1526663252.jpg?crop=1.00xw:0.668xh;0,0.0622xh",
    age: 27,
    neighborhood: "Old City",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now()),
    matched: false,
    hooked: false
  },
  {
    email: "jeff@fakemail.com",
    password: "password",
    firstName: "Jeff",
    lastName: "Smith",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/148893-0494-1526663287.jpg?crop=1.00xw:0.668xh;0,0.0622xh",
    age: 28,
    neighborhood: "Northeast",
    gender: "Male",
    genderInterest: "Female",
    date: new Date(Date.now()),
    matched: false,
    hooked: false
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

const matchSeed = [
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
    date: new Date(Date.now()),
    matched: true,
    hooked: false
  },
  {
    email: "jessica@fakemail.com",
    password: "password",
    firstName: "Jessica",
    lastName: "Ryan",
    image: "http://a.abcnews.com/images/Entertainment/bachelor-contestants-lauren-g-abc-jef-171211_2x3_1600.jpg",
    age: 25,
    neighborhood: "Old City",
    gender: "Female",
    genderInterest: "Male",
    date: new Date(Date.now()),
    matched: true,
    hooked: false
  },
  {
    email: "kerry@fakemail.com",
    password: "password",
    firstName: "Kerry",
    lastName: "Green",
    image: "http://a.abcnews.com/images/Entertainment/bachelor-contestants-amber-abc-jef-171211_2x3_1600.jpg",
    age: 25,
    neighborhood: "Grad Hospital",
    gender: "Female",
    genderInterest: "Male",
    date: new Date(Date.now()),
    matched: true,
    hooked: true
  }    
];

const hookSeed = [
  {
    hooked: false
  }
]

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

db.Match
  .remove({})
  .then(() => db.Match.collection.insertMany(matchSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Hook
  .remove({})
  .then(() => db.Hook.collection.insertMany(hookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });