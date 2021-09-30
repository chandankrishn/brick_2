
import { _decorator, Component, Node, Button, tween, Vec2, Vec3, Prefab, instantiate, UITransform, Sprite, systemEvent, SystemEvent, KeyCode, SpriteFrame, Collider2D, Contact2DType, IPhysics2DContact, JsonAsset, Script, director, RenderFlow, RigidBody2D, game, spriteAssembler, Label, sys, Intersection2D } from 'cc';
import { SingletonClass } from './single';
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
   ONCE=1,
   TWICE=2,
   THRICE=3

}
var scoreManager:SingletonClass = SingletonClass.getInstance();

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
@property(Prefab)
reword:any;
@property(Prefab)
popup:any;


@property(JsonAsset)
levels:any=[];

@property(Label)
level_string:Label;
@property(Label)
score_string:Label;


@property(SpriteFrame)
rewords_images=[];

redball:any;
bouncer:any;
height:number;
width:number;
temp_bricks:any;
titlelist:string[]=[];
fruits:any=[];
tile_count:number=0;
current_level:number=0;
fruitprefab:any;
playerscore:number=0;
reward_fruit=[];
start_fruit:number=0;
nextlevel:any;
popoutscript:any;
moveOn:boolean=false;



boxpattern(asset:any)
{

    this.titlelist = asset.json["level1"];
    let row=this.titlelist["no_of_rows"];
    var columns=this.titlelist["no_of_columns"];
    var height:number=(this.height/2);
    var width:number=-(this.width/2);
    var scalex:any=((this.width-50)/columns)/this.brick.data.width;


        this.brick.data.scale.x=scalex;
        this.brick.data.scale.y=scalex;
        var startpositionx:number=(width)+25+(((this.brick.data.width)*scalex)/2);
        var startpositiony:number=(height)-(25+((this.brick.data.height*scalex)/2));
        var tile_widht:number=(this.brick.data.width)*scalex;
        var tile_height:number=(this.brick.data.height)*scalex;
        var numberOfTiles:any=this.titlelist["Tiles"];
        var index:number=0;
        var color:number=0;
        var type:number=0;
        var current_positionx:number=0;
        var current_positiony:number=0;
        this.tile_count=numberOfTiles.length;
        
        for(var i=0;i<numberOfTiles.length;i++)
        {
            
           this.temp_bricks=instantiate(this.brick);
           this.node.addChild(this.temp_bricks);
        
           type=numberOfTiles[i].type;
           index=numberOfTiles[i].index;
           color=numberOfTiles[i].color;
           switch(type)
           {
           case tiles.ONCE:
               {
                   this.temp_bricks.hasrewards=false;
                   this.temp_bricks.colidetime=tiles.ONCE;
                   break;
               }
            case tiles.TWICE:
                {
                    this.temp_bricks.hasrewards=false;
                    this.temp_bricks.colidetime=tiles.TWICE;
                    break;
                }
            case tiles.THRICE:
                {
                   
                    this.temp_bricks.hasrewards=true;
                    this.temp_bricks.colidetime=tiles.THRICE;
                    break;
                }
           }
           this.temp_bricks.name=`Normal_bricks`;
            this.temp_bricks.getComponent(Sprite).spriteFrame=this.Normal_bricks[color];
            this.temp_bricks.brickindex=color;
            current_positionx=startpositionx + (Math.floor(index % columns)*tile_widht);
            current_positiony=startpositiony - (Math.floor(index / columns)*tile_height);
            this.temp_bricks.setPosition(current_positionx,current_positiony,1);
        }
        this.wait=true;

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

    this.current_level=scoreManager.getlevelSelected()-1;
    this.gamePlayStart(this.current_level);
 }
 onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) 
 {  
    if(otherCollider.name=="Ball_1<CircleCollider2D>")
    {
        this.gameoverpop();
        console.log("Game over");
     
    }
    else
    {
        this.reward_fruit.shift();
    }
    otherCollider.getComponent(Sprite).destroy();
    otherCollider.destroy();
} 
 checkbasecollision()
 {
     
     let colider=this.base.node.getComponent(Collider2D);
     if(colider)
     {
         colider.on(Contact2DType.BEGIN_CONTACT,this.onBeginContact,this);
     }

 }
 testing(positionx:number,positiony:number,positionz:number)
 {

     this.fruitprefab= instantiate(this.reword);
     this.node.addChild(this.fruitprefab);
     var random=Math.floor(Math.random()*4);
     this.fruitprefab.getComponent(Sprite).spriteFrame=this.rewords_images[random];
     this.fruitprefab.setPosition(positionx,positiony,positionz);
     this.reward_fruit.push(this.fruitprefab);
 }
 Fruit_collision(reword:any)
 {
    
    var colide1=Intersection2D.rectRect(
        reword.getComponent(UITransform).getBoundingBoxToWorld(),this.bouncer.getComponent(UITransform).getBoundingBoxToWorld()
        );
       
    return colide1;
 }
 Fruit_basecollision(reword:any)
 {
    var colide1=Intersection2D.rectRect(
        reword.getComponent(UITransform).getBoundingBoxToWorld(),this.base.getComponent(UITransform).getBoundingBoxToWorld()
        );
    return colide1;
 }
 gamePlayStart(level:number)
 {
     this.redball=instantiate(this.ball);
     this.node.addChild(this.redball);
     let abc:any = this.redball.getComponent('Ball');
     this.moveOn=true;
     abc.bg_node(this);
     this.height=this.node.getComponent(UITransform).height;
     this.width=this.node.getComponent(UITransform).width;
     this.bouncer.setPosition(0,-(this.height/2)+150,0);
     tween(this.base.node)
     .to(0.5,{position : new Vec3(0,-(this.height/2)+50,0)})
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
     this.boxpattern(this.levels[level]);
 }
 bricks_destroyed:number=0;
 wait:boolean=false;
 Nextlevelcheck()
 {
    let ball_id:any=this.redball.getComponent('Ball').bricks_destroyed;

    if(this.tile_count==ball_id.length && this.reward_fruit.length==0 && this.wait)
    {
        this.moveOn=false;
        this.wait=false;
        sys.localStorage.setItem('levelcompleted' ,`${scoreManager.getCurrent()+1 }`);
        this.bricks_destroyed=this.redball.getComponent('Ball').bricks_destroyed.length;
        this.redball.destroy();
        this.nextlevelpop();
        this.tile_count=0;
        
    }
    
 }
 gameoverpop()
 {
    this.nextlevel=instantiate(this.popup);
    this.node.addChild(this.nextlevel);
    this.nextlevel.getChildByName('play').destroy();
    this.nextlevel.setPosition(0,-((this.height/2 )+ this.popup.data.height),0);
    tween(this.nextlevel)
    .to(0.5,{position : new Vec3(0,0,0)})
   .start();
 }
 pop_down_next_level()
 {
   
    tween(this.nextlevel)
    .to(0.5,{position : new Vec3(0,-((this.height/2 )+ this.popup.data.height),0)})
    .delay(0.5)
    .call(()=>{this.nextlevel.destroy();})
    .start();
 }
 flushall()
 {
  
    var chil:Node;
        chil=this.node.getChildByName('Normal_bricks');
        while(chil)
        {
           chil.removeFromParent();
           chil=this.node.getChildByName('Normal_bricks');
        }
    
 }

 clickcall()
 {
    if(scoreManager.getNextLevel())
    {
        scoreManager.setNextLevel(false);
        console.log("Next level");
        this.gamePlayStart(++this.current_level);
        this.moveOn=true;
        this.pop_down_next_level();
       
    }
    else if(scoreManager.getHomeScreen())
    {
        console.log("Home screen");
        this.pop_down_next_level();
        director.loadScene('level');
        scoreManager.setHomeScreen(false);
    }
   
    else if(scoreManager.getReload())
    {
        scoreManager.setReload(false);
        console.log("Reload clicked");
        this.moveOn=true;

        this.pop_down_next_level();
         console.log("before flush");
        this.flushall();
        console.log("flushed");
        this.gamePlayStart(this.current_level);
    }
 }

 nextlevelpop()
 {
     this.nextlevel=instantiate(this.popup);
     this.node.addChild(this.nextlevel);
     this.nextlevel.setPosition(0,-((this.height/2)+ this.popup.data.height),0);
     tween(this.nextlevel)
     .to(0.5,{position : new Vec3(0,0,0)})
    .start();
   
 }

touchMove(event:any)
    {
        if(this.moveOn)
        {
        let current:Vec3=this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x,event.getUILocation().y,1));
        var xpos=(current.x); 
        let moon=this.base.node.width/5;
        if((this.width/2)-(this.Breaker.data.width/2)>xpos && -((this.width/2)-(this.Breaker.data.width/2))<xpos)
        {

        this.bouncer.setPosition(xpos,-(this.height/2)+moon,0);
        }
    }
    
    }
update()
    {
        this.level_string.getComponent(Label).string=`Level No:${this.current_level+1}`;
        this.clickcall();
        for(let i=0;i<this.reward_fruit.length;i++)
        {
            this.reward_fruit[i].setPosition(this.reward_fruit[i].position.x,this.reward_fruit[i].position.y-10,1);
            if(this.Fruit_collision(this.reward_fruit[i]))
            {
                this.playerscore=+2;
                this.reward_fruit[i].destroy();
                this.reward_fruit.shift();
            }
            if(this.Fruit_basecollision(this.reward_fruit[i]))
            {
                this.reward_fruit[i].destroy();
                this.reward_fruit.shift();
                
            }
        }
        this.Nextlevelcheck();       
      
       

    }
onLoad()
    {
        this.bouncer=instantiate(this.Breaker);
        this.node.addChild(this.bouncer);
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
