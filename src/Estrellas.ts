import { Container, Point, Sprite } from "pixi.js";

export class Estrellas extends Container{

    constructor(){
        super();
        const estrella: Sprite = Sprite.from("estrella");
        const mEstrella: Sprite = Sprite.from("mediaEstrella");
        const sEstrella: Sprite = Sprite.from("sinEstrella");
        
        //mEstrella.scale.set(0.2,0.2);
        mEstrella.position.set(170,0);
     
        sEstrella.position.set(340,0);
        
        estrella.anchor.set(0);
            
        this.addChild(estrella);
        this.addChild(mEstrella);
        this.addChild(sEstrella); 
        
        mEstrella.toGlobal(new Point()); //el point lo convierte en coor globales-  gorro decime donde queda tu origen
	mEstrella.parent.toGlobal(mEstrella.position);// padre de fez decime la posicion global del gorro
	
        sEstrella.toGlobal(new Point()); //el point lo convierte en coor globales-  gorro decime donde queda tu origen
	sEstrella.parent.toGlobal(sEstrella.position);// padre de fez decime la posicion global del gorro
	
    }

}