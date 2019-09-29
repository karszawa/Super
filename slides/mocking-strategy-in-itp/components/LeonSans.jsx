import React from "react";
import LeonSans from "./node_modules/leonsans";

const sw = 800;
const sh = 600;
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

    window.requestAnimationFrame(this.animate.bind(this));
  }

  animate(t) {
    window.requestAnimationFrame(animate);

    ctx.clearRect(0, 0, sw, sh);

    const x = (sw - leon.rect.w) / 2;
    const y = (sh - leon.rect.h) / 2;

    leon.position(x, y);
    leon.draw(ctx);
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

export { LeonSansText };
