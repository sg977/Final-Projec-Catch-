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