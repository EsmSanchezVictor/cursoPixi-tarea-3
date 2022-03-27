import { Container, Point, Sprite,Text } from "pixi.js";

export class Nivel extends Container{

    constructor(){
        super();
        const nivel: Sprite = Sprite.from("completoNivel");
        const myText: Text= new Text("hello word",{fontSize: 40,fill:0x00FEFE, fontFamily:"Comic Sans MS"});
        
        myText.text="¡NIVEL COMPLETO!"
        myText.scale.set(1);
        myText.position.set(130,100);
          
        nivel.anchor.set(0);
            
        this.addChild(nivel);
        this.addChild(myText);
        
        myText.toGlobal(new Point()); //el point lo convierte en coor globales-  gorro decime donde queda tu origen
	    myText.parent.toGlobal(myText.position);// padre de fez decime la posicion global del gorro
	
        
    }

}