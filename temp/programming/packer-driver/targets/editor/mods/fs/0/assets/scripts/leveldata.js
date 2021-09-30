System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SystemEvent, director, SingletonClass, _dec, _class, _temp, _crd, ccclass, property, scoreManager, Leveldata;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingletonClass(extras) {
    _reporterNs.report("SingletonClass", "./single", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SystemEvent = _cc.SystemEvent;
      director = _cc.director;
    }, function (_unresolved_2) {
      SingletonClass = _unresolved_2.SingletonClass;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a6900d6svdEAoK0NTuqxtvS", "leveldata", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Leveldata
       * DateTime = Wed Sep 29 2021 16:14:12 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = leveldata.ts
       * FileBasenameNoExtension = leveldata
       * URL = db://assets/scripts/leveldata.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      scoreManager = (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
        error: Error()
      }), SingletonClass) : SingletonClass).getInstance();

      _export("Leveldata", Leveldata = (_dec = ccclass('Leveldata'), _dec(_class = (_temp = class Leveldata extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "mainscreen", void 0);
        }

        assignbg(bg) {
          this.mainscreen = bg;
        }

        touchdata() {
          if (this.node.level <= scoreManager.getCurrent()) {
            scoreManager.setlevelSelected(this.node.level);
            console.log("fine to go");
            this.mainscreen.preloader();
            director.loadScene('Main');
          }
        }

        start() {
          this.node.on(SystemEvent.EventType.TOUCH_START, this.touchdata, this); // [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=leveldata.js.map