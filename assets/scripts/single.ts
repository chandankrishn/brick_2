export class SingletonClass {

    private static _instance:SingletonClass = new SingletonClass();

    
    private _levelSelected=0;
    private _score=0;
    private _totalLevels=10;
    private _currentLevel=1;
    private _reload=false;
    private _nextLevel=false;
    private _homesceen=false;
    constructor() {
        if(SingletonClass._instance){
            throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
        }
        SingletonClass._instance = this;
    }
    public setCurrent(value:number):void
    {
        this._currentLevel=value;
    }

    public setReload(value:boolean):void
    {
        this._reload=value;
    }
    public getReload():boolean
    {
        return this._reload;

    }
    public setNextLevel(value:boolean):void
    {
        this._nextLevel=value;
    }
    public getNextLevel():boolean
    {
        return this._nextLevel;
    }
    public setHomeScreen(value:boolean):void
    {
        this._homesceen=value;
    }
    public getHomeScreen():boolean
    {
        return this._homesceen;
    }
    public static getInstance():SingletonClass
    {
        return SingletonClass._instance;
    }
    public setlevelSelected(value:number):void
    {
        this._levelSelected = value;
    }
    public getlevelSelected():number
    {
        return this._levelSelected;
    }
    public addScore(value:number):void
    {
        this._score += value;
        this.setScore();
    }
    public getScore():number
    {
        return this._score;
    }
    public getTotalLevel():number
    {
        return this._totalLevels;
    }
    public getCurrent():number
    {
        return this._currentLevel;
    }

    public setScore()
    {
        

    }

}