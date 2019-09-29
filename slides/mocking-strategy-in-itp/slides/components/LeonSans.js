import React from "react";
import { LeonSans } from "./leon";
import { TweenMax, Power4 } from "gsap";

const sw = 800;
const sh = 400;
const pixelRatio = 2;

class LeonSansText extends React.Component {
  canvasRef = React.createRef();
  ctx = null;
  leon = null;

  componentDidMount() {
    const canvas = this.canvasRef.current;

    this.ctx = canvas.getContext("2d");

    canvas.width = sw * pixelRatio;
    canvas.height = sh * pixelRatio;
    canvas.style.width = sw + "px";
    canvas.style.height = sh + "px";
    this.ctx.scale(pixelRatio, pixelRatio);

    this.leon = new LeonSans({
      text: "The quick brown\nfox jumps over\nthe lazy dog",
      color: ["#000000"],
      size: 80,
      weight: 200
    });

    for (let i = 0; i < this.leon.drawing.length; i++) {
      TweenMax.fromTo(
        this.leon.drawing[i],
        1.6,
        {
          value: 0
        },
        {
          delay: i * 0.05,
          value: 1,
          ease: Power4.easeOut
        }
      );
    }

    window.requestAnimationFrame(this.animate.bind(this));
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, sw, sh);

    const x = (sw - this.leon.rect.w) / 2;
    const y = (sh - this.leon.rect.h) / 2;

    this.leon.position(x, y);
    this.leon.draw(this.ctx);
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

export { LeonSansText };
