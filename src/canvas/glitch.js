const glitch = require('glitch-canvas');

const maxRectangles = 20;
const maxText = 20;

function getRandomGlitchParams() {
  return {
    seed:       Math.floor(Math.random() * 99), // Integer between 0 and 99.
    quality:    Math.floor(Math.random() * 99), // Integer between 0 and 99.
    amount:     Math.floor(Math.random() * 99), // Integer between 0 and 99.
    iterations: Math.floor(Math.random() * 99)  // Integer.
  };
}

export default class Glitch {
  constructor() {
    this.baseStyle = 'rgb(255, 0, 255)';
    this.backgroundStyle = 'rgb(255, 255, 255)';
  }

  async glitch(ctx, text, width, height) {
    // 1. Add the text.
    this.textLayer(ctx, text, width, height);

    // ctx.fillRect(20 + Math.floor(Math.random() * 100), 20, 20, 20);

    // 2. Fill in random rectangles.
    this.rectangleLayer(ctx, width, height);

    // 3. Decolorize certain areas and glitch them.


    // 4. Some rgb split.
    await this.glitchCanvas(ctx, width, height);
  }

  async glitchCanvas(ctx, width, height) {
    const glitchParams = getRandomGlitchParams();

    const glitchImageData = await glitch(glitchParams)
      .fromImageData(ctx.getImageData(0, 0, width, height))
      .toImageData();

    ctx.clearRect(0, 0, width, height);
    ctx.putImageData(glitchImageData, 0, 0);
  }

  rectangleLayer(ctx, width, height) {
    const rectangles = Math.floor(Math.random() * maxRectangles);

    const maxRectangleWidth = width * (1 / 10);
    const maxRectangleHeight = height * (1 / 10);

    ctx.fillStyle = this.baseStyle;
    ctx.strokeStyle = this.baseStyle;

    for (let i = 0; i < rectangles; i++) {
      ctx.strokeRect(Math.floor(Math.random() * width), Math.floor(Math.random() * height), Math.floor(Math.random() * maxRectangleWidth), Math.floor(Math.random() * maxRectangleHeight));
      ctx.fillRect(Math.floor(Math.random() * width), Math.floor(Math.random() * height), Math.floor(Math.random() * maxRectangleWidth), Math.floor(Math.random() * maxRectangleHeight));
    }
  }

  textLayer(ctx, text, width, height) {

    const maxFontSize = Math.floor(width * (1 / 5));
    const textCount = Math.floor(Math.random() * maxText);

    for (let i = 0; i < textCount; i++) {
      ctx.font = `${Math.floor(Math.random() * maxFontSize)}px Arial`;

      const randomTextSubstring = text.substring(Math.floor(Math.random() * (text.length + 1)), Math.floor(Math.random() * (text.length + 1)));

      ctx.fillText(randomTextSubstring, Math.floor(Math.random() * width), Math.floor(Math.random() * height));
    }
  }

  // update(ctx) {
  //   // ctx.fillRect(20 + Math.floor(Math.random() * 100), 20, 20, 20);
  // }
}