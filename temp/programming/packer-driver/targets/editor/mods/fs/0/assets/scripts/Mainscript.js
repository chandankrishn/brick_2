System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Button, tween, Vec3, Prefab, instantiate, UITransform, Sprite, systemEvent, SystemEvent, SpriteFrame, Collider2D, Contact2DType, JsonAsset, director, Label, sys, Intersection2D, SingletonClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _temp, _crd, ccclass, property, tiles, scoreManager, Mainscript;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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
      Label = _cc.Label;
      sys = _cc.sys;
      Intersection2D = _cc.Intersection2D;
    }, function (_unresolved_2) {
      SingletonClass = _unresolved_2.SingletonClass;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "33946kAz/hNWambHanYnxIq", "Mainscript", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      (function (tiles) {
        tiles[tiles["ONCE"] = 1] = "ONCE";
        tiles[tiles["TWICE"] = 2] = "TWICE";
        tiles[tiles["THRICE"] = 3] = "THRICE";
      })(tiles || (tiles = {}));

      scoreManager = (_crd && SingletonClass === void 0 ? (_reportPossibleCrUseOfSingletonClass({
        error: Error()
      }), SingletonClass) : SingletonClass).getInstance();

      _export("Mainscript", Mainscript = (_dec = ccclass('Mainscript'), _dec2 = property(Button), _dec3 = property(Prefab), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Prefab), _dec9 = property(Prefab), _dec10 = property(SpriteFrame), _dec11 = property(Prefab), _dec12 = property(Prefab), _dec13 = property(JsonAsset), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = class Mainscript extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Play_button", _descriptor, this);

          _initializerDefineProperty(this, "Breaker", _descriptor2, this);

          _initializerDefineProperty(this, "base", _descriptor3, this);

          _initializerDefineProperty(this, "left", _descriptor4, this);

          _initializerDefineProperty(this, "right", _descriptor5, this);

          _initializerDefineProperty(this, "top", _descriptor6, this);

          _initializerDefineProperty(this, "ball", _descriptor7, this);

          _initializerDefineProperty(this, "brick", _descriptor8, this);

          _initializerDefineProperty(this, "Normal_bricks", _descriptor9, this);

          _initializerDefineProperty(this, "reword", _descriptor10, this);

          _initializerDefineProperty(this, "popup", _descriptor11, this);

          _initializerDefineProperty(this, "levels", _descriptor12, this);

          _initializerDefineProperty(this, "level_string", _descriptor13, this);

          _initializerDefineProperty(this, "score_string", _descriptor14, this);

          _initializerDefineProperty(this, "rewords_images", _descriptor15, this);

          _defineProperty(this, "redball", void 0);

          _defineProperty(this, "bouncer", void 0);

          _defineProperty(this, "height", void 0);

          _defineProperty(this, "width", void 0);

          _defineProperty(this, "temp_bricks", void 0);

          _defineProperty(this, "titlelist", []);

          _defineProperty(this, "fruits", []);

          _defineProperty(this, "tile_count", 0);

          _defineProperty(this, "current_level", 0);

          _defineProperty(this, "fruitprefab", void 0);

          _defineProperty(this, "playerscore", 0);

          _defineProperty(this, "reward_fruit", []);

          _defineProperty(this, "start_fruit", 0);

          _defineProperty(this, "nextlevel", void 0);

          _defineProperty(this, "popoutscript", void 0);

          _defineProperty(this, "moveOn", false);

          _defineProperty(this, "bricks_destroyed", 0);

          _defineProperty(this, "wait", false);
        }

        boxpattern(asset) {
          this.titlelist = asset.json["level1"];
          let row = this.titlelist["no_of_rows"];
          var columns = this.titlelist["no_of_columns"];
          var height = this.height / 2;
          var width = -(this.width / 2);
          var scalex = (this.width - 50) / columns / this.brick.data.width;
          this.brick.data.scale.x = scalex;
          this.brick.data.scale.y = scalex;
          var startpositionx = width + 25 + this.brick.data.width * scalex / 2;
          var startpositiony = height - (25 + this.brick.data.height * scalex / 2);
          var tile_widht = this.brick.data.width * scalex;
          var tile_height = this.brick.data.height * scalex;
          var numberOfTiles = this.titlelist["Tiles"];
          var index = 0;
          var color = 0;
          var type = 0;
          var current_positionx = 0;
          var current_positiony = 0;
          this.tile_count = numberOfTiles.length;

          for (var i = 0; i < numberOfTiles.length; i++) {
            this.temp_bricks = instantiate(this.brick);
            this.node.addChild(this.temp_bricks);
            type = numberOfTiles[i].type;
            index = numberOfTiles[i].index;
            color = numberOfTiles[i].color;

            switch (type) {
              case tiles.ONCE:
                {
                  this.temp_bricks.hasrewards = false;
                  this.temp_bricks.colidetime = tiles.ONCE;
                  break;
                }

              case tiles.TWICE:
                {
                  this.temp_bricks.hasrewards = false;
                  this.temp_bricks.colidetime = tiles.TWICE;
                  break;
                }

              case tiles.THRICE:
                {
                  this.temp_bricks.hasrewards = true;
                  this.temp_bricks.colidetime = tiles.THRICE;
                  break;
                }
            }

            this.temp_bricks.name = `Normal_bricks`;
            this.temp_bricks.getComponent(Sprite).spriteFrame = this.Normal_bricks[color];
            this.temp_bricks.brickindex = color;
            current_positionx = startpositionx + Math.floor(index % columns) * tile_widht;
            current_positiony = startpositiony - Math.floor(index / columns) * tile_height;
            this.temp_bricks.setPosition(current_positionx, current_positiony, 1);
          }

          this.wait = true;
        }

        buttonpressed() {
          tween(this.Play_button.node).to(0.2, {
            scale: new Vec3(2, 2, 2)
          }).delay(0.1).to(0.2, {
            scale: new Vec3(1, 1, 1)
          }).delay(0.3).to(0.2, {
            scale: new Vec3(0, 0, 0)
          }).start();
          this.current_level = scoreManager.getlevelSelected() - 1;
          this.gamePlayStart(this.current_level);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.name == "Ball_1<CircleCollider2D>") {
            this.gameoverpop();
            console.log("Game over");
          } else {
            this.reward_fruit.shift();
          }

          otherCollider.getComponent(Sprite).destroy();
          otherCollider.destroy();
        }

        checkbasecollision() {
          let colider = this.base.node.getComponent(Collider2D);

          if (colider) {
            colider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        testing(positionx, positiony, positionz) {
          this.fruitprefab = instantiate(this.reword);
          this.node.addChild(this.fruitprefab);
          var random = Math.floor(Math.random() * 4);
          this.fruitprefab.getComponent(Sprite).spriteFrame = this.rewords_images[random];
          this.fruitprefab.setPosition(positionx, positiony, positionz);
          this.reward_fruit.push(this.fruitprefab);
        }

        Fruit_collision(reword) {
          var colide1 = Intersection2D.rectRect(reword.getComponent(UITransform).getBoundingBoxToWorld(), this.bouncer.getComponent(UITransform).getBoundingBoxToWorld());
          return colide1;
        }

        Fruit_basecollision(reword) {
          var colide1 = Intersection2D.rectRect(reword.getComponent(UITransform).getBoundingBoxToWorld(), this.base.getComponent(UITransform).getBoundingBoxToWorld());
          return colide1;
        }

        gamePlayStart(level) {
          this.redball = instantiate(this.ball);
          this.node.addChild(this.redball);
          let abc = this.redball.getComponent('Ball');
          this.moveOn = true;
          abc.bg_node(this);
          this.height = this.node.getComponent(UITransform).height;
          this.width = this.node.getComponent(UITransform).width;
          this.bouncer.setPosition(0, -(this.height / 2) + 150, 0);
          tween(this.base.node).to(0.5, {
            position: new Vec3(0, -(this.height / 2) + 50, 0)
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
          this.boxpattern(this.levels[level]);
        }

        Nextlevelcheck() {
          let ball_id = this.redball.getComponent('Ball').bricks_destroyed;

          if (this.tile_count == ball_id.length && this.reward_fruit.length == 0 && this.wait) {
            this.moveOn = false;
            this.wait = false;
            sys.localStorage.setItem('levelcompleted', `${scoreManager.getCurrent() + 1}`);
            this.bricks_destroyed = this.redball.getComponent('Ball').bricks_destroyed.length;
            this.redball.destroy();
            this.nextlevelpop();
            this.tile_count = 0;
          }
        }

        gameoverpop() {
          this.nextlevel = instantiate(this.popup);
          this.node.addChild(this.nextlevel);
          this.nextlevel.getChildByName('play').destroy();
          this.nextlevel.setPosition(0, -(this.height / 2 + this.popup.data.height), 0);
          tween(this.nextlevel).to(0.5, {
            position: new Vec3(0, 0, 0)
          }).start();
        }

        pop_down_next_level() {
          tween(this.nextlevel).to(0.5, {
            position: new Vec3(0, -(this.height / 2 + this.popup.data.height), 0)
          }).delay(0.5).call(() => {
            this.nextlevel.destroy();
          }).start();
        }

        flushall() {
          var chil;
          chil = this.node.getChildByName('Normal_bricks');

          while (chil) {
            chil.removeFromParent();
            chil = this.node.getChildByName('Normal_bricks');
          }
        }

        clickcall() {
          if (scoreManager.getNextLevel()) {
            scoreManager.setNextLevel(false);
            console.log("Next level");
            this.gamePlayStart(++this.current_level);
            this.moveOn = true;
            this.pop_down_next_level();
          } else if (scoreManager.getHomeScreen()) {
            console.log("Home screen");
            this.pop_down_next_level();
            director.loadScene('level');
            scoreManager.setHomeScreen(false);
          } else if (scoreManager.getReload()) {
            scoreManager.setReload(false);
            console.log("Reload clicked");
            this.moveOn = true;
            this.pop_down_next_level();
            console.log("before flush");
            this.flushall();
            console.log("flushed");
            this.gamePlayStart(this.current_level);
          }
        }

        nextlevelpop() {
          this.nextlevel = instantiate(this.popup);
          this.node.addChild(this.nextlevel);
          this.nextlevel.setPosition(0, -(this.height / 2 + this.popup.data.height), 0);
          tween(this.nextlevel).to(0.5, {
            position: new Vec3(0, 0, 0)
          }).start();
        }

        touchMove(event) {
          if (this.moveOn) {
            let current = this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x, event.getUILocation().y, 1));
            var xpos = current.x;
            let moon = this.base.node.width / 5;

            if (this.width / 2 - this.Breaker.data.width / 2 > xpos && -(this.width / 2 - this.Breaker.data.width / 2) < xpos) {
              this.bouncer.setPosition(xpos, -(this.height / 2) + moon, 0);
            }
          }
        }

        update() {
          this.level_string.getComponent(Label).string = `Level No:${this.current_level + 1}`;
          this.clickcall();

          for (let i = 0; i < this.reward_fruit.length; i++) {
            this.reward_fruit[i].setPosition(this.reward_fruit[i].position.x, this.reward_fruit[i].position.y - 10, 1);

            if (this.Fruit_collision(this.reward_fruit[i])) {
              this.playerscore = +2;
              this.reward_fruit[i].destroy();
              this.reward_fruit.shift();
            }

            if (this.Fruit_basecollision(this.reward_fruit[i])) {
              this.reward_fruit[i].destroy();
              this.reward_fruit.shift();
            }
          }

          this.Nextlevelcheck();
        }

        onLoad() {
          this.bouncer = instantiate(this.Breaker);
          this.node.addChild(this.bouncer);
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.touchMove, this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Play_button", [_dec2], {
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Normal_bricks", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "reword", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "popup", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "levels", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "level_string", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "score_string", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "rewords_images", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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