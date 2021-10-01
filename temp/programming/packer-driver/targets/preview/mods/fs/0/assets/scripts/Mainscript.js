System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Button, tween, Vec3, Prefab, instantiate, UITransform, Sprite, systemEvent, SystemEvent, SpriteFrame, Collider2D, Contact2DType, JsonAsset, director, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp, _crd, ccclass, property, Mainscript;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      UITransform = _cc.UITransform;
      Sprite = _cc.Sprite;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      SpriteFrame = _cc.SpriteFrame;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      JsonAsset = _cc.JsonAsset;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "33946kAz/hNWambHanYnxIq", "Mainscript", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Mainscript
       * DateTime = Wed Sep 22 2021 10:24:04 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = Mainscript.ts
       * FileBasenameNoExtension = Mainscript
       * URL = db://assets/scripts/Mainscript.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Mainscript", Mainscript = (_dec = ccclass('Mainscript'), _dec2 = property(Button), _dec3 = property(Prefab), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Prefab), _dec9 = property(Prefab), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(JsonAsset), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mainscript, _Component);

        function Mainscript() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "Play_button", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Breaker", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "base", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "left", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "right", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "top", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "ball", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "brick", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "bricks", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "damagedbricks", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "levels", _descriptor11, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "redball", void 0);

          _defineProperty(_assertThisInitialized(_this), "bouncer", void 0);

          _defineProperty(_assertThisInitialized(_this), "height", void 0);

          _defineProperty(_assertThisInitialized(_this), "width", void 0);

          _defineProperty(_assertThisInitialized(_this), "temp_bricks", void 0);

          _defineProperty(_assertThisInitialized(_this), "titlelist", []);

          _defineProperty(_assertThisInitialized(_this), "tile_count", 0);

          _defineProperty(_assertThisInitialized(_this), "current_level", 0);

          return _this;
        }

        var _proto = Mainscript.prototype;

        _proto.boxpattern = function boxpattern(asset) {
          this.titlelist = asset.json["level1"];
          var height = this.height / 2;
          var width = this.width / 2; // console.log(width);
          // console.log(screen.width);
          // let row=this.titlelist["no_of_rows"];
          // let tile:number;
          // var count:number=0;
          // var columns=this.titlelist["no_of_columns"];
          // var scalex:any=(screen.width-100/columns)/this.brick.data.width;
          // let tile_width:number=this.brick.data.width*scalex;
          //    this.temp_bricks=instantiate(this.brick);
          //     this.node.addChild(this.temp_bricks);
          //     this.temp_bricks.setScale(scalex,1,1);
          //     ++this.tile_count;
          //     this.temp_bricks.setPosition(-(this.width/2)+150,height,0);
          // for(var i=0;i<row*columns;i++)
          // {
          //     if(this.titlelist["stucture"][i]==1)
          //     {
          //     this.temp_bricks=instantiate(this.brick);
          //     this.node.addChild(this.temp_bricks);
          //     this.temp_bricks.setScale(scalex,1,1);
          //     ++this.tile_count;
          //     this.temp_bricks.setPosition(width,height,0);
          //     width=width+tile_width;
          //     }
          //     if(this.titlelist["stucture"][i]==0)
          //     {
          //         width=width+tile_width;
          //     }
          //     if(count>=columns-1)
          //     {
          //         count=-1;
          //         height=height-60;
          //         width=-(this.width/2)+200;
          //     }
          //     count++;   
          // }
        };

        _proto.buttonpressed = function buttonpressed() {
          tween(this.Play_button.node).to(0.2, {
            scale: new Vec3(2, 2, 2)
          }).delay(0.1).to(0.2, {
            scale: new Vec3(1, 1, 1)
          }).delay(0.3).to(0.2, {
            scale: new Vec3(0, 0, 0)
          }).start();
          this.gamePlayStart();
        };

        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.name == "Ball_1<CircleCollider2D>") {
            console.log(otherCollider);
            otherCollider.getComponent(Sprite).destroy();
            otherCollider.destroy();
            console.log("Game over");
            director.pause();
          }

          console.log(otherCollider.name);
        };

        _proto.checkbasecollision = function checkbasecollision() {
          var colider = this.base.node.getComponent(Collider2D);

          if (colider) {
            colider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        };

        _proto.gamePlayStart = function gamePlayStart() {
          this.bouncer = instantiate(this.Breaker);
          this.node.addChild(this.bouncer);
          this.redball = instantiate(this.ball);
          this.node.addChild(this.redball);
          this.height = this.node.getComponent(UITransform).height;
          this.width = this.node.getComponent(UITransform).width;
          this.bouncer.setPosition(0, -(this.height / 2) + 100, 0);
          tween(this.base.node).to(0.5, {
            position: new Vec3(0, -(this.height / 2), 0)
          }).start();
          tween(this.right.node).to(0.5, {
            position: new Vec3(this.width / 2, 0, 0)
          }).start();
          tween(this.left.node).to(0.5, {
            position: new Vec3(-(this.width / 2), 0, 0)
          }).start();
          tween(this.top.node).to(0.5, {
            position: new Vec3(0, this.height / 2, 0)
          }).start();
          this.checkbasecollision();
          this.boxpattern(this.levels[this.current_level++]);
        };

        _proto.Nextlevelcheck = function Nextlevelcheck() {
          var ball_id = this.redball.getComponent('Ball').bricks_destroyed;

          if (this.tile_count == ball_id.length) {
            this.redball.destroy();
            this.bouncer.destroy();
            this.gamePlayStart();
          }
        };

        _proto.touchMove = function touchMove(event) {
          var current;

          if (event.getLocation().x > this.width / 2) {
            current = event.getLocation().x - this.width / 2;
          } else {
            current = -(this.width / 2 - event.getLocation().x);
          }

          if (current < this.width / 2 - 70 && current > -(this.width / 2) + 70) {
            this.bouncer.setPosition(current, -(this.height / 2) + 100, 0);
          }

          this.Nextlevelcheck();
        };

        _proto.onLoad = function onLoad() {
          // systemEvent.on(SystemEvent.EventType.KEY_DOWN,this.mouseMove,this);
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.touchMove, this);
        };

        return Mainscript;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Play_button", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Breaker", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "base", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "left", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "right", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "top", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "ball", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "brick", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bricks", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "damagedbricks", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "levels", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
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
//# sourceMappingURL=Mainscript.js.map