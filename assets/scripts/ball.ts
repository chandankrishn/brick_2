
import { _decorator, Component, Node, Collider, ICollisionEvent, Contact2DType, PhysicsSystem2D, Collider2D, IPhysics2DContact, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

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
 
@ccclass('Ball')
export class Ball extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
   

    start () {
        let collider = this.node.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            
        }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
@property(SpriteFrame)
damaged_bricks:any=[];
bricks:any=[];
bricks_destroyed:any=[];
alldestroyed:boolean=false;
onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

    
   var name:string="Normal_bricks";
   var colider_type:string="<BoxCollider2D>";
   console.log(otherCollider);


   
    if(otherCollider.name==name+colider_type)
    {
        let flag:boolean=false;

        for(let i=0;i<this.bricks.length;i++)
        {
            
            if(otherCollider.uuid===this.bricks[i])
            {
                flag=true;
                break;
            }
            
        }
        if(flag)
        {
            if(!otherCollider.node.reward_bricks)
            {
               
            this.bricks_destroyed.push(otherCollider.uuid);
            otherCollider.getComponent(Sprite).destroy();
            otherCollider.destroy();
            }

        }
        else
        {
        this.bricks.push(otherCollider.uuid);
        otherCollider.getComponent(Sprite).spriteFrame=this.damaged_bricks[otherCollider.node.brokensprite];
        }


    }


    

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
