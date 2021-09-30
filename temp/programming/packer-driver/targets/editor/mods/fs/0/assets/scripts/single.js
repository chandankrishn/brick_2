System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SingletonClass, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("SingletonClass", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ad96eEdGqtK856cBagCOH+t", "single", undefined);

      _export("SingletonClass", SingletonClass = class SingletonClass {
        constructor() {
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

        setCurrent(value) {
          this._currentLevel = value;
        }

        setReload(value) {
          this._reload = value;
        }

        getReload() {
          return this._reload;
        }

        setNextLevel(value) {
          this._nextLevel = value;
        }

        getNextLevel() {
          return this._nextLevel;
        }

        setHomeScreen(value) {
          this._homesceen = value;
        }

        getHomeScreen() {
          return this._homesceen;
        }

        static getInstance() {
          return SingletonClass._instance;
        }

        setlevelSelected(value) {
          this._levelSelected = value;
        }

        getlevelSelected() {
          return this._levelSelected;
        }

        addScore(value) {
          this._score += value;
          this.setScore();
        }

        getScore() {
          return this._score;
        }

        getTotalLevel() {
          return this._totalLevels;
        }

        getCurrent() {
          return this._currentLevel;
        }

        setScore() {}

      });

      _defineProperty(SingletonClass, "_instance", new SingletonClass());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=single.js.map