
import { _decorator, Component, Node, Prefab, instantiate, Label, Sprite, UITransform, ScrollView, sys } from 'cc';
import { SingletonClass } from './single';
const { ccclass, property } = _decorator;

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
 var scoreManager:SingletonClass = SingletonClass.getInstance();
 
@ccclass('Selectlevel')
export class Selectlevel extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
@property(Prefab)
card:any=null;
@property(Prefab)
star:any=null;
@property(Prefab)
lock:any=null;
@property(Prefab)
loader:any;
mainbg:any;


preloader()
{
    var loader: any = instantiate(this.loader);
    this.node.addChild(loader);
    console.log(loader);
}

    start () {
        console.log(scoreManager.getTotalLevel());
        var tempcard:any;
        var star:any;
        let height=this.card.data.height*Math.ceil(scoreManager.getTotalLevel()/2);
        let space =((scoreManager.getTotalLevel()/2)*20)+20;
        this.node.getComponent(UITransform).setContentSize(this.node.getComponent(UITransform).contentSize.width,height+space);
        var level:any=sys.localStorage.getItem('levelcompleted');

        console.log(level);
        if(level==null)
        {
            console.log("okay setted");
            sys.localStorage.setItem('levelcompleted' ,`1`);
        }
        level=parseInt(level);
        console.log(level);
        scoreManager.setCurrent(level);


        var script_data:any;

        for(var i=0;i<scoreManager.getTotalLevel();i++)
        {
            

            tempcard=instantiate(this.card);
            this.node.addChild(tempcard);
            if(i>=scoreManager.getCurrent())
            {
                star=instantiate(this.lock);
                tempcard.addChild(star);
                tempcard.getComponent(Sprite).grayscale=true;
            }
            else
            {
                star=instantiate(this.star);
                tempcard.addChild(star);
            }
            script_data = tempcard.getComponent('Leveldata');
            script_data.assignbg(this);
            tempcard.level=i+1;
            tempcard.getChildByName("Level").getComponent(Label).string=`${i+1}`;


        }
       
        
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
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
