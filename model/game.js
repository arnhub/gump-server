'use strict';

var generateKey = function () {
      return (Math.random() * 1e36).toString(36);
    },
    game = {
      status: 'server-confirmed',
      server: 'player1',
      player1: {
        firstName: '?',
        lastName: '',
        email: '',
        score: 0,
        connected: false,
        key: ''
      },
      player2: {
        firstName: '?',
        lastName: '',
        email: '',
        score: 0,
        connected: false,
        key: ''
      }
    };

exports.get = function () {
  return game;
};

exports.reset = function () {
  game.player1.key = generateKey();
  game.player2.key = generateKey();
};