
import { _decorator, Component, Node } from 'cc';
import { SingletonClass } from './single';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Popup
 * DateTime = Thu Sep 30 2021 11:05:08 GMT+0530 (India Standard Time)
 * Author = chandan_krishnani
 * FileBasename = popup.ts
 * FileBasenameNoExtension = popup
 * URL = db://assets/scripts/popup.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 var scoreManager:SingletonClass = SingletonClass.getInstance();
@ccclass('Popup')
export class Popup extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    bgmain:any;
    main_bg(home:any)
    {
        this.bgmain=home;
    }
    
    reload_click()
    {
        console.log("clicked on reload");
        scoreManager.setReload(true);

    }
    
    home_click()
    {
        scoreManager.setHomeScreen(true);
    }
    
    nextlevel_click()
    {
        scoreManager.setNextLevel(true);
    }

    start () {
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
