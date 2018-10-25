import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  matchUser: function(id) {
    return axios.post("/api/matches" + id);
  }, 

  deleteMatch: function(id) {
    return axios.delete("/api/matches/" + id);
  },

  getMatches: function() {
    return axios.get("/api/matches");
  },

  newMatch: function(id, data) {
    return axios.post("/api/chats/" + id, {email: data})
  },

  updateMatch: function(id, match) {
    return axios.put("/api/chats/" + id, match)
  },

  getRoom: function(id) {
    return axios.get("/api/chats/" + id);
  },
  // updateChat: function(id, message, hook) {
  //   return axios.post("/api/chats" + id, message, hook)
  // }
  addMessage: function(id, message) {
    return axios.post("/api/chats/" + id, message)
  },
  changeStatus: function(id, hook) {
    return axios.put("/api/chats/" + id, hook)
  }

};

