import {  Container, Texture, NineSlicePlane,Text } from "pixi.js";
import { Lokihat } from "./Lokihat";
import { Estrellas } from "./Estrellas";
import { Nivel } from "./Nivel";

export class Scene extends Container{

    constructor(){
        super();


        const panelPlane = new NineSlicePlane(

            Texture.from("panelLcd"),35,35,35,35

        );
        this.addChild(panelPlane);
        panelPlane.width=500;
        panelPlane.height=500;
        const posRelX= panelPlane.position.x=400;
        const posRelY= panelPlane.position.y=100;


        //Loki con sobrero
        const lokiconfez: Lokihat =new Lokihat();
		lokiconfez.scale.set(0.5);
        lokiconfez.x=posRelX+10;
        lokiconfez.y=posRelY+70;
        this.addChild(lokiconfez);

        //estrellas
        const estrellas: Estrellas =new Estrellas();
		estrellas.scale.set(0.5);
        estrellas.x=posRelX+200;
        estrellas.y=posRelY+70;
        this.addChild(estrellas);
       
        //panel de nivel
        const nivel: Nivel =new Nivel();
		nivel.scale.set(0.5);
        nivel.x=posRelX+150;
        nivel.y=posRelY+150;
        this.addChild(nivel);
       

        //primit. grafica
/*
        const myGraph:Graphics=new Graphics();
        myGraph.lineStyle({color:0xff55ff, width:10, alpha:1});
        myGraph.moveTo(0,0);
        myGraph.lineTo(300,500);
        myGraph.lineTo(300,100);
        myGraph.lineTo(0,0);

        myGraph.clear();

        myGraph.lineStyle({color:0xff55ff, width:10, alpha:1});
        myGraph.beginFill(0x00ff00,1);
        myGraph.drawCircle(0,0,100);
        myGraph.endFill()
        myGraph.drawCircle(50,50,100);

        myGraph.position.set(1280/2,720/2);
        this.addChild(myGraph);

       */ //text

        const myText: Text= new Text("hello word",{fontSize: 20,fill:0x00c000, fontFamily:"Comic Sans MS"});
        
        myText.text="¿Sólo una estrella y media?"
        myText.position.x=610;
        myText.position.y=130;
   
        myText.scale.set(1);

        const myText1: Text= new Text("hello word",{fontSize: 20,fill:0x00e000, fontFamily:"Comic Sans MS"});
        myText1.text="¡Mira como te mira Loki..!"
        myText1.position.x=615;
        myText1.position.y=250;
   
        myText1.scale.set(1);

        this.addChild(myText);
        this.addChild(myText1);
        
        //nine slica plane



        

    }
}