
import { _decorator, Component, Node, systemEvent, SystemEvent, director } from 'cc';
import { SingletonClass } from './single';
const { ccclass, property } = _decorator;

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
 var scoreManager:SingletonClass = SingletonClass.getInstance();
 
@ccclass('Leveldata')
export class Leveldata extends Component {
    // [1]
    // dummy = '';

    // [2]s
    // @property
    // serializableDummy = 0;
    mainscreen:any;
    assignbg(bg:any)
    {
       
        this.mainscreen=bg;
        
    }

    touchdata()
    {
        if(this.node.level<=scoreManager.getCurrent())
        {
            scoreManager.setlevelSelected(this.node.level);
            console.log("fine to go");
            this.mainscreen.preloader();
            director.loadScene('Main');
        }
        
    }


    start () {
        this.node.on(SystemEvent.EventType.TOUCH_START,this.touchdata,this)
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
