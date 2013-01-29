'use strict';

var player,
    game;

player = {
  init    : function () {
    this.firstName = '?';
    this.lastName = '';
    this.email = '';
    this.score = 0;
    this.connected = false;
    this.resetKey();
    return this;
  },
  resetKey: function () {
    this.key = (Math.random() * 1e36).toString(36);
  },
  reset   : function (firstName, lastName, email) {
    this.score = 0;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
};

game = {
  SERVER_UNKNOWN    : 0,
  SERVER_UNCONFIRMED: 1,
  SERVER_CONFIRMED  : 2,
  server            : null,
  player1           : Object.create(player).init(),
  player2           : Object.create(player).init(),
  init              : function () {
    this.status = this.SERVER_UNKNOWN;
    return this;
  }
}.init();

exports.get = function () {
  return game;
};
