
const maxRectangles = 20;
const maxText = 20;

export default class Glitch {
  constructor(ctx, text, width, height) {
    this.baseStyle = 'rgb(0, 0, 0)';
    this.backgroundStyle = 'rgb(255, 255, 255)';

    // 1. Add the text.
    this.textLayer(ctx, text, width, height);

    // ctx.fillRect(20 + Math.floor(Math.random() * 100), 20, 20, 20);

    // 2. Fill in random rectangles.
    this.rectangleLayer(ctx, width, height);

    // 3. Decolorize certain areas and glitch them.


    // 4. Some rgb split.
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

      const randomTextSubstring = text.substring(Math.floor(Math.random() * text.length), Math.floor(Math.random() * text.length));

      ctx.fillText(randomTextSubstring, Math.floor(Math.random() * width), Math.floor(Math.random() * height));
    }
  }

  // update(ctx) {
  //   // ctx.fillRect(20 + Math.floor(Math.random() * 100), 20, 20, 20);
  // }
}