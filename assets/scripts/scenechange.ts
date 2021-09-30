
import { _decorator, Component, Node, director, Sprite } from 'cc';
import { SingletonClass } from './single';
const { ccclass, property } = _decorator;


/**
 * Predefined variables
 * Name = Scenechange
 * DateTime = Tue Sep 28 2021 13:19:36 GMT+0530 (India Standard Time)
 * Author = chandan_krishnani
 * FileBasename = scenechange.ts
 * FileBasenameNoExtension = scenechange
 * URL = db://assets/scripts/scenechange.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
 
 
 
 
 var scoreManager:SingletonClass = SingletonClass.getInstance();

@ccclass('Scenechange')
export class Scenechange extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Sprite)
    button:any;
    buttonclick()
    {
        console.log("clicked !!");
        director.loadScene('Main');
    }
    start () {
    
       
        
        director.preloadScene('Main');
        this.button.node.on(Node.EventType.TOUCH_START,this.buttonclick,this);

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
