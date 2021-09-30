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

      _cclegacy._RF.push({}, "ad96eEdGqtK856cBagCOH+t", "single", undefined);

      _export("SingletonClass", SingletonClass = /*#__PURE__*/function () {
        function SingletonClass() {
          _defineProperty(this, "_levelSelected", 0);

          _defineProperty(this, "_score", 0);

          _defineProperty(this, "_totalLevels", 10);

          _defineProperty(this, "_currentLevel", 1);

          _defineProperty(this, "_reload", false);

          _defineProperty(this, "_nextLevel", false);

          _defineProperty(this, "_homesceen", false);

          if (SingletonClass._instance) {
            throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
          }

          SingletonClass._instance = this;
        }

        var _proto = SingletonClass.prototype;

        _proto.setCurrent = function setCurrent(value) {
          this._currentLevel = value;
        };

        _proto.setReload = function setReload(value) {
          this._reload = value;
        };

        _proto.getReload = function getReload() {
          return this._reload;
        };

        _proto.setNextLevel = function setNextLevel(value) {
          this._nextLevel = value;
        };

        _proto.getNextLevel = function getNextLevel() {
          return this._nextLevel;
        };

        _proto.setHomeScreen = function setHomeScreen(value) {
          this._homesceen = value;
        };

        _proto.getHomeScreen = function getHomeScreen() {
          return this._homesceen;
        };

        SingletonClass.getInstance = function getInstance() {
          return SingletonClass._instance;
        };

        _proto.setlevelSelected = function setlevelSelected(value) {
          this._levelSelected = value;
        };

        _proto.getlevelSelected = function getlevelSelected() {
          return this._levelSelected;
        };

        _proto.addScore = function addScore(value) {
          this._score += value;
          this.setScore();
        };

        _proto.getScore = function getScore() {
          return this._score;
        };

        _proto.getTotalLevel = function getTotalLevel() {
          return this._totalLevels;
        };

        _proto.getCurrent = function getCurrent() {
          return this._currentLevel;
        };

        _proto.setScore = function setScore() {};

        return SingletonClass;
      }());

      _defineProperty(SingletonClass, "_instance", new SingletonClass());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=single.js.map