export class Hero {
    private img:string;
    private name:string;
    private health:number;
    private mana:number;
    
    constructor(img:string,name:string,health:number,mana:number){
        this.img=img;
        this.name=name;
        this.health=health;
        this.mana=mana;
    }

    getImg():string{
        return this.img;
    }

    getName():string{
        return this.name;
    }
    getHealth(){
        return this.health;
    }
    getMana(){
        return this.mana;
    }
}
