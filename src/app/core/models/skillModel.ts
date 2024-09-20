export class SkillModel {
  private tipo:string;
  private name:string;
  private mana:number;
  private description:string;

    constructor(tipo:string ='',name:string='',mana:number=0, description:string=''){
        this.tipo=tipo;
        this.name=name;
        this.mana=mana;
        this.description = description
    }
    public getTipo(){
      return this.tipo;
    }
    public getName(){
      return this.name;
    }
    public getMana(){
      return this.mana;
    }
    public getDescription(){
      return this.description;
    }
}
