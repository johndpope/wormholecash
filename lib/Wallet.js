'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wallet = function () {
  function Wallet(restURL) {
    _classCallCheck(this, Wallet);

    this.restURL = restURL;
  }

  _createClass(Wallet, [{
    key: 'newAddress',
    value: async function newAddress() {
      try {
        var response = await _axios2.default.get(this.restURL + 'wallet/newAddress');
        return response.data;
      } catch (err) {
        return JSON.stringify(error.response.data.error.message);
      }
    }
  }, {
    key: 'sendToAddress',
    value: async function sendToAddress(address, amount) {
      try {
        var response = await _axios2.default.post(this.restURL + 'wallet/sendToAddress/' + address + '/' + amount);
        return response.data;
      } catch (err) {
        return JSON.stringify(error.response.data.error.message);
      }
    }
  }]);

  return Wallet;
}();

exports.default = Wallet;