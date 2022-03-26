import { AnimatedSprite, Container, Graphics, Texture, Text, NineSlicePlane } from "pixi.js";
import { Lokihat } from "./Lokihat";

export class Scene extends Container{

    constructor(){
        super();

        //class extending form container
        const lokiconfez: Lokihat =new Lokihat();
		lokiconfez.scale.set(0.5);
        lokiconfez.x=400;
        lokiconfez.y=400;
        this.addChild(lokiconfez);

        //animated sprite
        const lokiAnimated: AnimatedSprite= new AnimatedSprite(
            [
                Texture.from("corre1"),
                Texture.from("corre2"),
                Texture.from("corre3"),
                Texture.from("corre3"),
                Texture.from("corre5"),
                Texture.from("corre6"),
                Texture.from("corre7"),
                Texture.from("corre8")
        ],true
        ); 
        lokiAnimated.play();
        lokiAnimated.animationSpeed=0.2;
        this.addChild(lokiAnimated);

        //primit. grafica

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

        //text

        const myText: Text= new Text("hello word",{fontSize: 150,fill:0xff0000, fontFamily:"Comic Sans MS"});
        
        myText.text="afdsfds"
        myText.position.x=500;
        myText.angle=75;
        myText.scale.set(1);
        this.addChild(myText);
        
        //nine slica plane

        const panelPlane = new NineSlicePlane(

            Texture.from("panelLcd"),35,35,35,35

        );
        this.addChild(panelPlane);
        panelPlane.width=500;
        panelPlane.height=500;
        panelPlane.position.x=700;
        panelPlane.position.y=100;

        

    }
}