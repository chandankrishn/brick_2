System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, instantiate, Label, Sprite, UITransform, sys, SingletonClass, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, scoreManager, Selectlevel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      SingletonClass = _unresolved_2.SingletonClass;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cff8dK4mHJG8a+oiLndjcCP", "selectlevel", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Selectlevel
       * DateTime = Wed Sep 29 2021 14:37:09 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = selectlevel.ts
       * FileBasenameNoExtension = selectlevel
       * URL = db://assets/scripts/selectlevel.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      scoreManager = (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
        error: Error()
      }), SingletonClass) : SingletonClass).getInstance();

      _export("Selectlevel", Selectlevel = (_dec = ccclass('Selectlevel'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Selectlevel, _Component);

        function Selectlevel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "card", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "star", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lock", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "loader", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "mainbg", void 0);

          return _this;
        }

        var _proto = Selectlevel.prototype;

        _proto.preloader = function preloader() {
          var loader = instantiate(this.loader);
          this.node.addChild(loader);
          console.log(loader);
        };

        _proto.start = function start() {
          console.log(scoreManager.getTotalLevel());
          var tempcard;
          var star;
          var height = this.card.data.height * Math.ceil(scoreManager.getTotalLevel() / 2);
          var space = scoreManager.getTotalLevel() / 2 * 20 + 20;
          this.node.getComponent(UITransform).setContentSize(this.node.getComponent(UITransform).contentSize.width, height + space);
          var level = sys.localStorage.getItem('levelcompleted');
          console.log(level);

          if (level == null) {
            console.log("okay setted");
            sys.localStorage.setItem('levelcompleted', "1");
          }

          level = parseInt(level);
          console.log(level);
          scoreManager.setCurrent(level);
          var script_data;

          for (var i = 0; i < scoreManager.getTotalLevel(); i++) {
            tempcard = instantiate(this.card);
            this.node.addChild(tempcard);

            if (i >= scoreManager.getCurrent()) {
              star = instantiate(this.lock);
              tempcard.addChild(star);
              tempcard.getComponent(Sprite).grayscale = true;
            } else {
              star = instantiate(this.star);
              tempcard.addChild(star);
            }

            script_data = tempcard.getComponent('Leveldata');
            script_data.assignbg(this);
            tempcard.level = i + 1;
            tempcard.getChildByName("Level").getComponent(Label).string = "" + (i + 1);
          } // [3]

        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Selectlevel;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "card", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "star", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lock", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loader", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
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
//# sourceMappingURL=selectlevel.js.map