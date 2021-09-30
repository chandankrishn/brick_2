System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SingletonClass, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f8cb00RzxxNZ52OLKLBmyly", "singleton", undefined);

      SingletonClass = class SingletonClass {
        constructor() {
          _defineProperty(this, "_score", 0);

          if (SingletonClass._instance) {
            throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
          }

          SingletonClass._instance = this;
        }

        static getInstance() {
          return SingletonClass._instance;
        }

        setScore(value) {
          this._score = value;
        }

        getScore() {
          return this._score;
        }

        addPoints(value) {
          this._score += value;
        }

        removePoints(value) {
          this._score -= value;
        }

      };

      _defineProperty(SingletonClass, "_instance", new SingletonClass());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=singleton.js.map