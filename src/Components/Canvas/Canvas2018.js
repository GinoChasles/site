import React from "react";
import Canvas from "./Canvas";

export default function Canvas2018() {
  const fleche = (ctx, frameCount) => {
    let wid = ctx.canvas.width;
    let hei = ctx.canvas.height;
    ctx.clearRect(0, 0, wid, hei);
    ctx.fillStyle = "#919191";

    //fleche skill
    ctx.beginPath();
    ctx.moveTo(wid / 2, hei - 20);
    ctx.lineTo(wid - 20, (hei * 2) / 3);
    ctx.lineTo(wid - 20, hei / 3);
    ctx.lineTo(wid - 23, hei / 3);
    ctx.lineTo(wid - 23, (hei * 2) / 3 - 2);
    ctx.lineTo(wid / 2, hei - 23);
    ctx.fill();
    ctx.fillRect(wid - 29, hei / 3 - 10, 15, 15);

    //fleche central
    ctx.beginPath();
    ctx.moveTo(wid / 2 + 2, hei);
    ctx.lineTo(wid / 2 + 2, 10);
    ctx.lineTo(wid / 2 - 2, 10);
    ctx.lineTo(wid / 2 - 2, hei);
    ctx.fill();

    //tête de flèche central
    ctx.beginPath();
    ctx.moveTo(wid / 2 - 10, 15);
    ctx.lineTo(wid / 2, 0);
    ctx.lineTo(wid / 2 + 10, 15);
    ctx.lineTo(wid / 2 - 10, 15);
    ctx.fill();

    //fleche expérience 1
    ctx.beginPath();
    ctx.moveTo(wid / 2, (hei * 2) / 3 + 15);
    ctx.lineTo(70, (hei * 4) / 7);
    ctx.lineTo(70, hei / 3);
    ctx.lineTo(73, hei / 3);
    ctx.lineTo(73, (hei * 4) / 7 - 2);
    ctx.lineTo(wid / 2, (hei * 2) / 3 + 12);
    ctx.fill();

    //cercle fleche experience 1
    ctx.beginPath();
    ctx.arc(71, hei / 3, 8, 0 * Math.PI, 2 * Math.PI);
    ctx.fill();

    //fleche expérience 2
    ctx.beginPath();
    ctx.moveTo(wid / 2 + 2, hei - 5);
    ctx.lineTo(20, (hei * 4) / 5);
    ctx.lineTo(20, (hei * 2) / 3);
    ctx.lineTo(23, (hei * 2) / 3);
    ctx.lineTo(23, (hei * 4) / 5 - 2);
    ctx.lineTo(wid / 2 + 2, hei - 8);
    ctx.fill();

    //cercle fleche experience 2
    ctx.beginPath();
    ctx.arc(21, (hei * 2) / 3, 8, 0 * Math.PI, 2 * Math.PI);
    ctx.fill();
  };
  return <Canvas draw={fleche} className="formcanvas" id="canvas2018" />;
}
