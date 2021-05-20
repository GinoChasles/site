import React from "react";
import Canvas from "./Canvas";


export default function Canvas2012() {
  const fleche = (ctx, frameCount) => {
    let wid = ctx.canvas.width
let hei = ctx.canvas.height
    ctx.clearRect(0, 0, wid, hei);
    ctx.fillStyle = "#919191";

    //fleche skill
    ctx.beginPath();
    ctx.moveTo((wid/2),hei-20)
    ctx.lineTo(wid-20,(hei*2)/3)
    ctx.lineTo(wid-20,hei/3)
    ctx.lineTo(wid-23,hei/3)
    ctx.lineTo(wid-23,(hei*2/3)-2)
    ctx.lineTo((wid/2),hei-23)
    ctx.fill()
    ctx.fillRect(wid-29,hei/3-10,15,15)

    //fleche central
    ctx.beginPath();
    ctx.moveTo((wid/2)+2,hei)
    ctx.lineTo((wid/2)+2,0)
    ctx.lineTo((wid/2)-2,0)
    ctx.lineTo((wid/2)-2,hei)
    ctx.fill()


    //cercle central
    ctx.beginPath()
    ctx.arc(wid/2,hei-8,8,0*Math.PI,2*Math.PI)
    ctx.fill()

  };
  return <Canvas draw={fleche} className="formcanvas" id="canvas2012" />;
}
