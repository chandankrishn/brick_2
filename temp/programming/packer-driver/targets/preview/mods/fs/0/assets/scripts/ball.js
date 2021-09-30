System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Contact2DType, Collider2D, Sprite, SpriteFrame, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Ball;

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
      Contact2DType = _cc.Contact2DType;
      Collider2D = _cc.Collider2D;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48d12JAl9pDELFrcax1QEox", "ball", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Ball
       * DateTime = Thu Sep 23 2021 10:24:27 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = ball.ts
       * FileBasenameNoExtension = ball
       * URL = db://assets/scripts/ball.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Ball", Ball = (_dec = ccclass('Ball'), _dec2 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Ball, _Component);

        function Ball() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "damaged_bricks", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "bricks", []);

          _defineProperty(_assertThisInitialized(_this), "bricks_destroyed", []);

          _defineProperty(_assertThisInitialized(_this), "alldestroyed", false);

          _defineProperty(_assertThisInitialized(_this), "reword_instance", null);

          _defineProperty(_assertThisInitialized(_this), "bg", null);

          return _this;
        }

        var _proto = Ball.prototype;

        _proto.start = function start() {
          var collider = this.node.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          } // update (deltaTime: number) {
          //     // [4]
          // }

        };

        _proto.bg_node = function bg_node(background) {
          this.bg = background;
        };

        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider, contact) {
          var name = "Normal_bricks";
          var colider_type = "<BoxCollider2D>";
          var par = this.node.getParent();

          if (otherCollider.name == name + colider_type) {
            if (otherCollider.node.colidetime < 1) {
              if (otherCollider.node.hasrewards) {
                this.bg.testing(otherCollider.node.position.x, otherCollider.node.position.y, otherCollider.node.position.z);
              }

              this.bricks_destroyed.push(otherCollider.uuid);
              otherCollider.getComponent(Sprite).destroy();
              par.removeChild(otherCollider);
              otherCollider.destroy();
            } else {
              otherCollider.getComponent(Sprite).spriteFrame = this.damaged_bricks[otherCollider.node.brickindex];
              otherCollider.node.colidetime = otherCollider.node.colidetime - 1;
            }
          }
        };

        return Ball;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "damaged_bricks", [_dec2], {
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
      //     mouseMove(event:any)
      //     {
      //         if(this.bouncer.position.x<this.width/2-70 && this.bouncer.position.x+130 >-(this.width/2)+70)
      //         {
      //         switch(event.keyCode)
      //         {
      //         case KeyCode.ARROW_LEFT:
      //             tween(this.bouncer)
      //             .by(0.1,{position : new Vec3(-30,0,0)})
      //            .start();
      //            break;
      //         case KeyCode.ARROW_RIGHT:
      //             console.log("Arrow right key");
      //             tween(this.bouncer)
      //             .by(0.1,{position : new Vec3(30,0,0)})
      //             .start();
      //             break;
      //         }
      //     }
      //     else
      //     {
      //         if(this.bouncer.position.x<this.width/2+70)
      //         {
      //             switch(event.keyCode)
      //             {
      //                 case KeyCode.ARROW_RIGHT:
      //                 console.log("Arrow right key");
      //                 tween(this.bouncer)
      //                 .by(0.1,{position : new Vec3(30,0,0)})
      //                 .start();
      //                 break;
      //             }
      //     }
      //     else
      //     {
      //         switch(event.keyCode)
      //         {
      //         case KeyCode.ARROW_LEFT:
      //             tween(this.bouncer)
      //             .by(0.1,{position : new Vec3(-30,0,0)})
      //            .start();
      //            break;
      //     }
      //     }
      //     }
      // }


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ball.js.map