// import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import GlitchCanvas from '../canvas/glitch';

const padding = 100;

// const updateFreq = 20; // 20 ms (1/50) s

const textToRender = 'Wearwiki';


/**
var PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
})();


createHiDPICanvas = function(w, h, ratio) {
    if (!ratio) { ratio = PIXEL_RATIO; }
    var can = document.createElement("canvas");
    can.width = w * ratio;
    can.height = h * ratio;
    can.style.width = w + "px";
    can.style.height = h + "px";
    can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return can;
}

//Create canvas with the device resolution.
var myCanvas = createHiDPICanvas(500, 250);

//Create canvas with a custom resolution.
var myCustomCanvas = createHiDPICanvas(500, 200, 4);

 */

class Glitch extends Component {
  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number
  };

  static defaultProps = {
    height: 500,
    width: 500
  };

  componentDidMount() {
    this.refreshGlitch();
  }

  componentDidUpdate() {
    this.refreshGlitch();
  }

  refreshGlitch() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }

    this.ctx = this.canvasRef.getContext('2d');
    this.glitch = new GlitchCanvas(this.ctx, textToRender, this.props.width, this.props.height);

    // this.updateInterval = setInterval(() => {
    //   this.glitch.update(this.ctx);
    // }, updateFreq);
  }

  canvasRef = null;
  ctx = null;
  glitch = null;
  svgContainerRef = null;

  render() {
    const {
      width, height
    } = this.props;

    return (
      <canvas
        className="glitch-canvas"
        height={height - padding}
        ref={ref => this.canvasRef = ref}
        width={width - padding}
      />
      // <svg
      //   className="dunes-svg"
      //   height={height - padding}
      //   ref={ref => this.svgContainerRef = ref}
      //   width={width - padding}
      // />
    );
  }
}

export default Glitch;
