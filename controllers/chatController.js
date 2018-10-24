const db = require("../models");

module.exports = { 
    findAllChats: function(req, res) {
        db.Chat
            .find(req.query)
            .sort({ roomID: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findChatById: function(req, res) {
        db.Chat
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findChatByUser: function(req, res) {
        db.Chat
            .findChatByUser(req.parms.user)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createRoom: function(req, res) {
        db.Chat
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
   addMessage: function(req, res) {
        db.Chat
            .update(
                { _id: req.params.id },
                { $push: { messages: req.body } }
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    updateStatus: function(req, res) {
        db.Chat
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err)); 
    }
};