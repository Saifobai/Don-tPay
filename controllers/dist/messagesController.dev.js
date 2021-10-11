"use strict";

var roomModel = require('../models/roomModel');

var userModel = require('../models/userModel');

exports.writeMessage = function _callee(req, res) {
  var owner, articleRoom;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(userModel.findById(req.params.owner));

        case 3:
          owner = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(roomModel.findOne({
            article_id: req.params.id,
            sender: req.user._id
          }));

        case 6:
          articleRoom = _context.sent;

          if (!(articleRoom !== null)) {
            _context.next = 13;
            break;
          }

          _context.next = 10;
          return regeneratorRuntime.awrap(roomModel.findOneAndUpdate({
            article_id: req.params.id,
            sender: req.user._id
          }, {
            $push: {
              messages: {
                sender: req.user.username,
                reciever: owner.username,
                message_body: req.body.message
              }
            }
          }, {
            "new": true
          }));

        case 10:
          articleRoom = _context.sent;
          _context.next = 16;
          break;

        case 13:
          _context.next = 15;
          return regeneratorRuntime.awrap(roomModel.create({
            article_id: req.params.id,
            sender: req.user._id,
            reciever: req.params.owner,
            messages: [{
              sender: req.user.username,
              reciever: owner.username,
              message_body: req.body.message
            }]
          }));

        case 15:
          articleRoom = _context.sent;

        case 16:
          return _context.abrupt("return", res.status(200).json({
            note: "message send success",
            message: articleRoom,
            articleRoom: articleRoom
          }));

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: "error happens here",
            error: _context.t0.message
          });

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 19]]);
};

exports.showMessagesForSender = function _callee2(req, res) {
  var articleRoom;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(roomModel.findOne({
            article_id: req.params.id,
            sender: req.user._id
          }).populate("sender reciever"));

        case 3:
          articleRoom = _context2.sent;
          res.status(200).json({
            articleRoom: articleRoom
          });
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: "error happens here",
            error: _context2.t0.message
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.showMessagesForReciever = function _callee3(req, res) {
  var articleRooms;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(roomModel.find({
            article_id: req.params.id,
            reciever: req.user._id
          }).populate("sender reciever"));

        case 3:
          articleRooms = _context3.sent;
          res.status(200).json({
            articleRooms: articleRooms
          });
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: "error happens here",
            error: _context3.t0.message
          });

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};