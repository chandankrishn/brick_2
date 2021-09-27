
import { _decorator, Component, Node, Button, tween, Vec2, Vec3, Prefab, instantiate, UITransform, Sprite, systemEvent, SystemEvent, KeyCode, SpriteFrame, Collider2D, Contact2DType, IPhysics2DContact, JsonAsset, Script, director } from 'cc';
const { ccclass, property } = _decorator;
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
enum tiles
{
   Onetimes=1,
   twoTimes=2,
   rewardtiles=3

}

@ccclass('Mainscript')
export class Mainscript extends Component {
    
@property(Button)
Play_button:any;
@property(Prefab)
Breaker:any;
@property(Sprite)
base:any;
@property(Sprite)
left:any;
@property(Sprite)
right:any;
@property(Sprite)
top:any;
@property(Prefab)
ball:any;
@property(Prefab)
brick:any;
@property(SpriteFrame)
Normal_bricks=[];
@property(JsonAsset)
levels:any=[];
redball:any;
bouncer:any;
height:number;
width:number;
temp_bricks:any;
titlelist:string[]=[];
tile_count:number=0;
current_level:number=0;


Are_they_rewardBrick(i:number)
{
    var reward_bricks=this.titlelist["rewards_tile"];
    for(var j=0;j<reward_bricks.length;j++)
    {
        if(reward_bricks[j]==i)
        {
           
            return true;

        }
        
    }
    return false;
}

boxpattern(asset:any)
{
    this.titlelist = asset.json["level1"];
    let row=this.titlelist["no_of_rows"];
    var columns=this.titlelist["no_of_columns"];
    var height:number=(this.height/2);
    var width:number=-(this.width/2);
    var scalex:any=((this.width-50)/columns)/this.brick.data.width;

        var startpositionx:number=(((this.brick.data.width)*scalex)/2)+25;
        var startpositiony:number=(((this.brick.data.height)*scalex)/2)+25;
        var brick_sizex:number=0;
        var brick_sizey:number=0;
        var positionx:number=0;
        var positiony:number=0;

        var count:number=1;
       for(var i=0;i<row*columns;i++)
       {
       
        if(this.titlelist["stucture"][i]>=1)
        {
          
            this.temp_bricks=instantiate(this.brick);
              this.node.addChild(this.temp_bricks);
              
              this.temp_bricks.setScale(scalex,scalex,1);
              this.temp_bricks.getComponent(Sprite).spriteFrame=this.Normal_bricks[this.titlelist["stucture"][i]-1];
              this.temp_bricks.brokensprite=this.titlelist["stucture"][i]-1;


              this.temp_bricks.name="Normal_bricks";
              var reward=this.Are_they_rewardBrick(i);
              
              this.temp_bricks.reward_bricks=reward;
              
              positionx=width+startpositionx+brick_sizex;        
              positiony=height-(startpositiony + brick_sizey);
              this.temp_bricks.setPosition(positionx,positiony,0);
              brick_sizex=((this.brick.data.width)*scalex)+brick_sizex;
              ++this.tile_count;
        }
        if(this.titlelist["stucture"][i]==0)
        {
            brick_sizex=((this.brick.data.width)*scalex)+brick_sizex;
        }
        if(count==columns)
        {
            count=0;
            brick_sizey=(this.brick.data.height)*scalex + brick_sizey + 10;
            brick_sizex=0;
        }
        count++;

       }
}
 buttonpressed()
 {
    tween(this.Play_button.node)
    .to(0.2,{scale : new Vec3(2,2,2)})
    .delay(0.1)
    .to(0.2,{scale :new Vec3(1,1,1)})
    .delay(0.3)
    .to(0.2,{scale :new Vec3(0,0,0)})
    .start();
    this.gamePlayStart();
 
 }
 onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) 
 {  
    if(otherCollider.name=="Ball_1<CircleCollider2D>")
    {
        otherCollider.getComponent(Sprite).destroy();
        otherCollider.destroy();
        console.log("Game over");
        director.pause();
    }
}
 
 checkbasecollision()
 {
     let colider=this.base.node.getComponent(Collider2D);
     if(colider)
     {
         colider.on(Contact2DType.BEGIN_CONTACT,this.onBeginContact,this);
     }

 }

 gamePlayStart()
 {
     this.bouncer=instantiate(this.Breaker);
     this.node.addChild(this.bouncer);
     this.redball=instantiate(this.ball);
     this.node.addChild(this.redball);
     this.height=this.node.getComponent(UITransform).height;
     this.width=this.node.getComponent(UITransform).width;
     this.bouncer.setPosition(0,-(this.height/2)+100,0);
     tween(this.base.node)
     .to(0.5,{position : new Vec3(0,-(this.height/2),0)})
     .start();

     tween(this.right.node)
     .to(0.5,{position : new Vec3((this.width/2),0,0)})
     .start();

     tween(this.left.node)
     .to(0.5,{position : new Vec3(-(this.width/2),0,0)})
     .start();

     tween(this.top.node)
     .to(0.5,{position : new Vec3(0,(this.height/2),0)})
     .start();
     this.checkbasecollision();
     this.boxpattern(this.levels[this.current_level++]);
 }
 Nextlevelcheck()
 {
    let ball_id:any=this.redball.getComponent('Ball').bricks_destroyed;
    if(this.tile_count==ball_id.length)
    {
        this.redball.getComponent('Ball').bricks_destroyed.length=0;
        this.tile_count=0;
        this.redball.destroy();
        this.bouncer.destroy();
        this.gamePlayStart();
    }
    
 }
    touchMove(event:any)
    {
        let current:number;
        if(event.getLocation().x>(this.width/2))
        {
            current=event.getLocation().x-this.width/2;
        }
        
        else
        {
            current=-((this.width/2)-event.getLocation().x);
        }
       
        if(current<this.width/2-70 && current>-(this.width/2)+70)
        {
        this.bouncer.setPosition(current,-(this.height/2)+100,0);
        }
        this.Nextlevelcheck()
     
    }
    onLoad()
    {
        // systemEvent.on(SystemEvent.EventType.KEY_DOWN,this.mouseMove,this);
        systemEvent.on(SystemEvent.EventType.TOUCH_MOVE,this.touchMove,this);
        
    }
}

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
