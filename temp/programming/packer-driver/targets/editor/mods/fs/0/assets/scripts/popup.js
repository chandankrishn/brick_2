System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SingletonClass, _dec, _class, _temp, _crd, ccclass, property, scoreManager, Popup;

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
    }, function (_unresolved_2) {
      SingletonClass = _unresolved_2.SingletonClass;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "257e2OGFWpIEaAz82WjGZ8l", "popup", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Popup
       * DateTime = Thu Sep 30 2021 11:05:08 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = popup.ts
       * FileBasenameNoExtension = popup
       * URL = db://assets/scripts/popup.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      scoreManager = (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
        error: Error()
      }), SingletonClass) : SingletonClass).getInstance();

      _export("Popup", Popup = (_dec = ccclass('Popup'), _dec(_class = (_temp = class Popup extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "bgmain", void 0);
        }

        main_bg(home) {
          this.bgmain = home;
        }

        reload_click() {
          console.log("clicked on reload");
          scoreManager.setReload(true);
        }

        home_click() {
          scoreManager.setHomeScreen(true);
        }

        nextlevel_click() {
          scoreManager.setNextLevel(true);
        }

        start() {// [3]
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
//# sourceMappingURL=popup.js.map