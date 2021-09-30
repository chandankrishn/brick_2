System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, SingletonClass;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f8cb00RzxxNZ52OLKLBmyly", "singleton", undefined);

      SingletonClass = /*#__PURE__*/function () {
        function SingletonClass() {
          _defineProperty(this, "_score", 0);

          if (SingletonClass._instance) {
            throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
          }

          SingletonClass._instance = this;
        }

        SingletonClass.getInstance = function getInstance() {
          return SingletonClass._instance;
        };

        var _proto = SingletonClass.prototype;

        _proto.setScore = function setScore(value) {
          this._score = value;
        };

        _proto.getScore = function getScore() {
          return this._score;
        };

        _proto.addPoints = function addPoints(value) {
          this._score += value;
        };

        _proto.removePoints = function removePoints(value) {
          this._score -= value;
        };

        return SingletonClass;
      }();

      _defineProperty(SingletonClass, "_instance", new SingletonClass());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=singleton.js.map