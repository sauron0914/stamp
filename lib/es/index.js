/**
 * Bundle of @suolun/stamp
 * Generated: 2019-11-28
 * Version: 1.0.0
 * License: MIT
 * Author:
 */

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var UnitConversion =
/*#__PURE__*/
function () {
  function UnitConversion() {
    _classCallCheck(this, UnitConversion);

    _defineProperty(this, "screen", window.screen);
  }

  _createClass(UnitConversion, [{
    key: "conversionGetDPI",

    /**
     * 获取DPI
     * @returns {Array}
     */
    value: function conversionGetDPI() {
      var arrDPI = [];

      if (this.screen.deviceXDPI) {
        arrDPI[0] = this.screen.deviceXDPI;
        arrDPI[1] = this.screen.deviceYDPI;
      } else {
        var tmpNode = document.createElement('div');
        tmpNode.style.cssText = 'width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden';
        document.body.appendChild(tmpNode);
        arrDPI[0] = tmpNode.offsetWidth;
        arrDPI[1] = tmpNode.offsetHeight;
        tmpNode.parentNode.removeChild(tmpNode);
      }

      return arrDPI;
    }
    /**
     * px转换为mm
     * @param value
     * @returns {number}
     */

  }, {
    key: "pxConversionMm",
    value: function pxConversionMm(value) {
      var inch = value / this.conversionGetDPI()[0];
      var cValue = inch * 25.4;
      return cValue;
    }
    /**
     * 获取DPI
     * @returns {Array}
     */

  }, {
    key: "mmConversionPx",
    value: function mmConversionPx(value) {
      var inch = value / 25.4;
      var cValue = inch * this.conversionGetDPI()[0];
      return cValue;
    }
  }]);

  return UnitConversion;
}();

var unitConversion = new UnitConversion();
var width = Math.round(unitConversion.mmConversionPx(38.5));
var height = Math.round(unitConversion.mmConversionPx(30));
var border = Math.round(unitConversion.mmConversionPx(1));
var circleXRadius = width / 2;
var circleYRadius = height / 2;
var circleCenterX = circleXRadius + border;
var circleCenterY = circleYRadius + border;
var ratio = 4;

/**
 *
 * @param {*} context canvas画布
 * @param {*} x 圆心x位置
 * @param {*} y 圆心y位置
 * @param {*} XAxis x轴半径长度
 * @param {*} YAxis y轴半径长度
 */

var drawEllipse = function drawEllipse(context, x, y, XAxis, YAxis, border) {
  context.save();
  var r = XAxis > YAxis ? XAxis : YAxis;
  var ratioX = XAxis / r;
  var ratioY = YAxis / r;
  context.scale(ratio * ratioX, ratio * ratioY); // eslint-disable-next-line no-param-reassign

  context.lineWidth = border;
  context.beginPath();
  context.arc(x / ratioX, y / ratioY, r, 0, 2 * Math.PI, false);
  context.closePath();
  context.stroke();
  context.restore();
};

var FangSongFont = function () {
  if (/macintosh|mac os x/i.test(navigator.userAgent)) {
    return 'STFangsong';
  }

  if (/windows|win32/i.test(navigator.userAgent)) {
    return 'Fangsong';
  }

  return 'Fangsong';
}();
var rads = function rads(x) {
  return Math.PI * x / 180;
};

var positionData = {
  4: [{
    translate: {
      x: -14.3,
      y: -9.2
    },
    rotate: -43
  }, {
    translate: {
      x: -5.0,
      y: -13.4
    },
    rotate: -12
  }, {
    translate: {
      x: 5.0,
      y: -13.4
    },
    rotate: 12
  }, {
    translate: {
      x: 14.3,
      y: -9.2
    },
    rotate: 43
  }],
  5: [{
    translate: {
      x: -16.9,
      y: -6.0
    },
    rotate: -60
  }, {
    translate: {
      x: -9.1,
      y: -12.2
    },
    rotate: -22
  }, {
    translate: {
      x: 0,
      y: -13.9
    },
    rotate: 0
  }, {
    translate: {
      x: 9.1,
      y: -12.2
    },
    rotate: 22
  }, {
    translate: {
      x: 16.9,
      y: -6.0
    },
    rotate: 60
  }],
  6: [{
    translate: {
      x: -18,
      y: -2.8
    },
    rotate: -77
  }, {
    translate: {
      x: -12.4,
      y: -10.6
    },
    rotate: -30
  }, {
    translate: {
      x: -4.4,
      y: -13.5
    },
    rotate: -12
  }, {
    translate: {
      x: 4.4,
      y: -13.5
    },
    rotate: 12
  }, {
    translate: {
      x: 12.4,
      y: -10.6
    },
    rotate: 30
  }, {
    translate: {
      x: 18,
      y: -2.8
    },
    rotate: 77
  }],
  7: [{
    translate: {
      x: -18.2,
      y: -2.3
    },
    rotate: -80
  }, {
    translate: {
      x: -14,
      y: -9.4
    },
    rotate: -40
  }, {
    translate: {
      x: -7,
      y: -12.8
    },
    rotate: -15
  }, {
    translate: {
      x: 0,
      y: -14
    },
    rotate: 0
  }, {
    translate: {
      x: 7,
      y: -12.8
    },
    rotate: 15
  }, {
    translate: {
      x: 14,
      y: -9.4
    },
    rotate: 40
  }, {
    translate: {
      x: 18.2,
      y: -2.3
    },
    rotate: 80
  }],
  8: [{
    translate: {
      x: -18,
      y: -2.9
    },
    rotate: -75
  }, {
    translate: {
      x: -14.2,
      y: -9
    },
    rotate: -38
  }, {
    translate: {
      x: -8.8,
      y: -12.3
    },
    rotate: -20
  }, {
    translate: {
      x: -3.1,
      y: -13.7
    },
    rotate: -8
  }, {
    translate: {
      x: 3.1,
      y: -13.7
    },
    rotate: 8
  }, {
    translate: {
      x: 8.8,
      y: -12.3
    },
    rotate: 20
  }, {
    translate: {
      x: 14.2,
      y: -9
    },
    rotate: 38
  }, {
    translate: {
      x: 18,
      y: -2.9
    },
    rotate: 75
  }],
  9: [{
    translate: {
      x: -18.3,
      y: -1.4
    },
    rotate: -85
  }, {
    translate: {
      x: -15.6,
      y: -7.5
    },
    rotate: -50
  }, {
    translate: {
      x: -10.9,
      y: -11.3
    },
    rotate: -28
  }, {
    translate: {
      x: -5.5,
      y: -13.4
    },
    rotate: -12
  }, {
    translate: {
      x: 0,
      y: -14
    },
    rotate: 0
  }, {
    translate: {
      x: 5.5,
      y: -13.4
    },
    rotate: 12
  }, {
    translate: {
      x: 10.9,
      y: -11.3
    },
    rotate: 28
  }, {
    translate: {
      x: 15.6,
      y: -7.5
    },
    rotate: 50
  }, {
    translate: {
      x: 18.3,
      y: -1.4
    },
    rotate: 85
  }],
  10: [{
    translate: {
      x: -18.3,
      y: -0.65
    },
    rotate: -92
  }, {
    translate: {
      x: -16.4,
      y: -6.8
    },
    rotate: -53
  }, {
    translate: {
      x: -12.2,
      y: -10.6
    },
    rotate: -31
  }, {
    translate: {
      x: -7.5,
      y: -12.7
    },
    rotate: -19
  }, {
    translate: {
      x: -2.5,
      y: -13.8
    },
    rotate: -5
  }, {
    translate: {
      x: 2.5,
      y: -13.8
    },
    rotate: 5
  }, {
    translate: {
      x: 7.5,
      y: -12.7
    },
    rotate: 19
  }, {
    translate: {
      x: 12.2,
      y: -10.6
    },
    rotate: 31
  }, {
    translate: {
      x: 16.4,
      y: -6.8
    },
    rotate: 53
  }, {
    translate: {
      x: 18.3,
      y: -0.65
    },
    rotate: 92
  }],
  11: [{
    translate: {
      x: -18.3,
      y: -0.5
    },
    rotate: -90
  }, {
    translate: {
      x: -16.9,
      y: -5.9
    },
    rotate: -60
  }, {
    translate: {
      x: -13.3,
      y: -9.9
    },
    rotate: -35
  }, {
    translate: {
      x: -9.1,
      y: -12.2
    },
    rotate: -22
  }, {
    translate: {
      x: -4.6,
      y: -13.5
    },
    rotate: -10
  }, {
    translate: {
      x: 0,
      y: -14
    },
    rotate: 0
  }, {
    translate: {
      x: 4.6,
      y: -13.5
    },
    rotate: 10
  }, {
    translate: {
      x: 9.1,
      y: -12.2
    },
    rotate: 22
  }, {
    translate: {
      x: 13.3,
      y: -9.9
    },
    rotate: 35
  }, {
    translate: {
      x: 16.9,
      y: -5.9
    },
    rotate: 60
  }, {
    translate: {
      x: 18.3,
      y: -0.5
    },
    rotate: 90
  }],
  12: [{
    translate: {
      x: -18.3,
      y: 0
    },
    rotate: -90
  }, {
    translate: {
      x: -17.3,
      y: -5.1
    },
    rotate: -62
  }, {
    translate: {
      x: -14.3,
      y: -9
    },
    rotate: -40
  }, {
    translate: {
      x: -10.6,
      y: -11.5
    },
    rotate: -28
  }, {
    translate: {
      x: -6.4,
      y: -13.1
    },
    rotate: -15
  }, {
    translate: {
      x: -2.1,
      y: -13.8
    },
    rotate: -4
  }, {
    translate: {
      x: 2.1,
      y: -13.8
    },
    rotate: 4
  }, {
    translate: {
      x: 6.4,
      y: -13.1
    },
    rotate: 13
  }, {
    translate: {
      x: 10.6,
      y: -11.5
    },
    rotate: 28
  }, {
    translate: {
      x: 14.3,
      y: -9
    },
    rotate: 40
  }, {
    translate: {
      x: 17.3,
      y: -5.1
    },
    rotate: 62
  }, {
    translate: {
      x: 18.3,
      y: -0
    },
    rotate: 90
  }],
  13: [{
    translate: {
      x: -18.3,
      y: 0.8
    },
    rotate: -95
  }, {
    translate: {
      x: -17.7,
      y: -4.2
    },
    rotate: -68
  }, {
    translate: {
      x: -15.1,
      y: -8.1
    },
    rotate: -45
  }, {
    translate: {
      x: -11.7,
      y: -10.8
    },
    rotate: -30
  }, {
    translate: {
      x: -8,
      y: -12.6
    },
    rotate: -20
  }, {
    translate: {
      x: -4,
      y: -13.6
    },
    rotate: -9
  }, {
    translate: {
      x: 0,
      y: -14
    },
    rotate: 0
  }, {
    translate: {
      x: 4,
      y: -13.6
    },
    rotate: 9
  }, {
    translate: {
      x: 8,
      y: -12.6
    },
    rotate: 20
  }, {
    translate: {
      x: 11.7,
      y: -10.8
    },
    rotate: 30
  }, {
    translate: {
      x: 15.1,
      y: -8.1
    },
    rotate: 45
  }, {
    translate: {
      x: 17.7,
      y: -4.2
    },
    rotate: 68
  }, {
    translate: {
      x: 18.3,
      y: 0.8
    },
    rotate: 95
  }],
  14: [{
    translate: {
      x: -18.2,
      y: 1.4
    },
    rotate: -100
  }, {
    translate: {
      x: -18,
      y: -3.4
    },
    rotate: -72
  }, {
    translate: {
      x: -16,
      y: -7.2
    },
    rotate: -55
  }, {
    translate: {
      x: -13,
      y: -10.4
    },
    rotate: -35
  }, {
    translate: {
      x: -9.4,
      y: -12.1
    },
    rotate: -25
  }, {
    translate: {
      x: -5.9,
      y: -13.3
    },
    rotate: -15
  }, {
    translate: {
      x: -1.9,
      y: -14
    },
    rotate: -5
  }, {
    translate: {
      x: 1.9,
      y: -14
    },
    rotate: 5
  }, {
    translate: {
      x: 5.9,
      y: -13.3
    },
    rotate: 15
  }, {
    translate: {
      x: 9.4,
      y: -12.1
    },
    rotate: 25
  }, {
    translate: {
      x: 12.8,
      y: -10.2
    },
    rotate: 35
  }, {
    translate: {
      x: 16,
      y: -7.2
    },
    rotate: 55
  }, {
    translate: {
      x: 18,
      y: -3.4
    },
    rotate: 72
  }, {
    translate: {
      x: 18.2,
      y: 1.4
    },
    rotate: 100
  }],
  15: [{
    translate: {
      x: -18.1,
      y: 1.5
    },
    rotate: -100
  }, {
    translate: {
      x: -18.2,
      y: -3
    },
    rotate: -75
  }, {
    translate: {
      x: -16.3,
      y: -6.8
    },
    rotate: -55
  }, {
    translate: {
      x: -13.7,
      y: -9.6
    },
    rotate: -40
  }, {
    translate: {
      x: -10.6,
      y: -11.6
    },
    rotate: -30
  }, {
    translate: {
      x: -7.1,
      y: -13
    },
    rotate: -18
  }, {
    translate: {
      x: -3.8,
      y: -13.7
    },
    rotate: -9
  }, {
    translate: {
      x: 0,
      y: -14
    },
    rotate: -0
  }, {
    translate: {
      x: 3.8,
      y: -13.7
    },
    rotate: 9
  }, {
    translate: {
      x: 7.1,
      y: -13
    },
    rotate: 18
  }, {
    translate: {
      x: 10.6,
      y: -11.6
    },
    rotate: 30
  }, {
    translate: {
      x: 13.7,
      y: -9.6
    },
    rotate: 40
  }, {
    translate: {
      x: 16.3,
      y: -6.8
    },
    rotate: 55
  }, {
    translate: {
      x: 18.2,
      y: -3
    },
    rotate: 75
  }, {
    translate: {
      x: 18.1,
      y: 1.5
    },
    rotate: 100
  }],
  16: [{
    translate: {
      x: -18,
      y: 2.5
    },
    rotate: -105
  }, {
    translate: {
      x: -18.4,
      y: -1.9
    },
    rotate: -80
  }, {
    translate: {
      x: -17.1,
      y: -5.7
    },
    rotate: -60
  }, {
    translate: {
      x: -14.6,
      y: -8.8
    },
    rotate: -45
  }, {
    translate: {
      x: -11.9,
      y: -10.8
    },
    rotate: -35
  }, {
    translate: {
      x: -8.5,
      y: -12.5
    },
    rotate: -22
  }, {
    translate: {
      x: -5.2,
      y: -13.5
    },
    rotate: -14
  }, {
    translate: {
      x: -1.8,
      y: -14
    },
    rotate: -5
  }, {
    translate: {
      x: 1.8,
      y: -14
    },
    rotate: 5
  }, {
    translate: {
      x: 5.2,
      y: -13.5
    },
    rotate: 14
  }, {
    translate: {
      x: 8.5,
      y: -12.5
    },
    rotate: 22
  }, {
    translate: {
      x: 11.9,
      y: -10.8
    },
    rotate: 35
  }, {
    translate: {
      x: 14.6,
      y: -8.8
    },
    rotate: 45
  }, {
    translate: {
      x: 17.1,
      y: -5.7
    },
    rotate: 60
  }, {
    translate: {
      x: 18.4,
      y: -1.9
    },
    rotate: 80
  }, {
    translate: {
      x: 18,
      y: 2.5
    },
    rotate: 105
  }],
  17: [{
    translate: {
      x: -17.4,
      y: 3.9
    },
    rotate: -115
  }, {
    translate: {
      x: -18.5,
      y: -0.3
    },
    rotate: -90
  }, {
    translate: {
      x: -17.7,
      y: -4.3
    },
    rotate: -70
  }, {
    translate: {
      x: -15.6,
      y: -7.7
    },
    rotate: -50
  }, {
    translate: {
      x: -13,
      y: -10
    },
    rotate: -40
  }, {
    translate: {
      x: -10,
      y: -11.8
    },
    rotate: -27
  }, {
    translate: {
      x: -7,
      y: -13
    },
    rotate: -22
  }, {
    translate: {
      x: -3.4,
      y: -13.8
    },
    rotate: -10
  }, {
    translate: {
      x: 0,
      y: -14
    },
    rotate: 0
  }, {
    translate: {
      x: 3.4,
      y: -13.8
    },
    rotate: 10
  }, {
    translate: {
      x: 7,
      y: -13
    },
    rotate: 22
  }, {
    translate: {
      x: 10,
      y: -11.8
    },
    rotate: 27
  }, {
    translate: {
      x: 13,
      y: -10
    },
    rotate: 40
  }, {
    translate: {
      x: 15.6,
      y: -7.7
    },
    rotate: 50
  }, {
    translate: {
      x: 17.7,
      y: -4.3
    },
    rotate: 70
  }, {
    translate: {
      x: 18.5,
      y: -0.3
    },
    rotate: 90
  }, {
    translate: {
      x: 17.4,
      y: 3.9
    },
    rotate: 115
  }],
  18: [{
    translate: {
      x: -18,
      y: 2.1
    },
    rotate: -105
  }, {
    translate: {
      x: -18.4,
      y: -1.7
    },
    rotate: -83
  }, {
    translate: {
      x: -17.3,
      y: -5.1
    },
    rotate: -65
  }, {
    translate: {
      x: -15.5,
      y: -8
    },
    rotate: -50
  }, {
    translate: {
      x: -13,
      y: -10.2
    },
    rotate: -35
  }, {
    translate: {
      x: -10.3,
      y: -11.8
    },
    rotate: -25
  }, {
    translate: {
      x: -7.4,
      y: -13
    },
    rotate: -15
  }, {
    translate: {
      x: -4.5,
      y: -13.5
    },
    rotate: -10
  }, {
    translate: {
      x: -1.6,
      y: -14
    },
    rotate: -5
  }, {
    translate: {
      x: 1.6,
      y: -14
    },
    rotate: 5
  }, {
    translate: {
      x: 4.5,
      y: -13.5
    },
    rotate: 10
  }, {
    translate: {
      x: 7.4,
      y: -13
    },
    rotate: 15
  }, {
    translate: {
      x: 10.3,
      y: -11.8
    },
    rotate: 25
  }, {
    translate: {
      x: 13,
      y: -10.2
    },
    rotate: 35
  }, {
    translate: {
      x: 15.5,
      y: -8
    },
    rotate: 50
  }, {
    translate: {
      x: 17.3,
      y: -5.1
    },
    rotate: 65
  }, {
    translate: {
      x: 18.4,
      y: -1.7
    },
    rotate: 83
  }, {
    translate: {
      x: 18,
      y: 2.1
    },
    rotate: 105
  }],
  19: [{
    translate: {
      x: -17.8,
      y: 2.9
    },
    rotate: -108
  }, {
    translate: {
      x: -18.4,
      y: -0.8
    },
    rotate: -85
  }, {
    translate: {
      x: -17.8,
      y: -4.2
    },
    rotate: -68
  }, {
    translate: {
      x: -16.2,
      y: -7
    },
    rotate: -55
  }, {
    translate: {
      x: -13.9,
      y: -9.4
    },
    rotate: -40
  }, {
    translate: {
      x: -11.4,
      y: -11.2
    },
    rotate: -30
  }, {
    translate: {
      x: -8.7,
      y: -12.5
    },
    rotate: -20
  }, {
    translate: {
      x: -5.9,
      y: -13.2
    },
    rotate: -17
  }, {
    translate: {
      x: -2.9,
      y: -13.8
    },
    rotate: -5
  }, {
    translate: {
      x: 0,
      y: -14
    },
    rotate: 0
  }, {
    translate: {
      x: 2.9,
      y: -13.8
    },
    rotate: 5
  }, {
    translate: {
      x: 5.9,
      y: -13.2
    },
    rotate: 17
  }, {
    translate: {
      x: 8.7,
      y: -12.5
    },
    rotate: 20
  }, {
    translate: {
      x: 11.4,
      y: -11.2
    },
    rotate: 30
  }, {
    translate: {
      x: 13.9,
      y: -9.4
    },
    rotate: 40
  }, {
    translate: {
      x: 16.2,
      y: -7
    },
    rotate: 55
  }, {
    translate: {
      x: 17.8,
      y: -4.2
    },
    rotate: 68
  }, {
    translate: {
      x: 18.4,
      y: -0.8
    },
    rotate: 85
  }, {
    translate: {
      x: 17.8,
      y: 2.9
    },
    rotate: 108
  }],
  20: [{
    translate: {
      x: -17.9,
      y: 2.4
    },
    rotate: -105
  }, {
    translate: {
      x: -18.5,
      y: -1
    },
    rotate: -85
  }, {
    translate: {
      x: -17.8,
      y: -4.1
    },
    rotate: -70
  }, {
    translate: {
      x: -16.3,
      y: -6.9
    },
    rotate: -55
  }, {
    translate: {
      x: -14.2,
      y: -9.3
    },
    rotate: -40
  }, {
    translate: {
      x: -11.8,
      y: -10.8
    },
    rotate: -32
  }, {
    translate: {
      x: -9.5,
      y: -12.2
    },
    rotate: -25
  }, {
    translate: {
      x: -7,
      y: -13
    },
    rotate: -20
  }, {
    translate: {
      x: -4.1,
      y: -13.5
    },
    rotate: -10
  }, {
    translate: {
      x: -1.5,
      y: -13.8
    },
    rotate: -5
  }, {
    translate: {
      x: 1.5,
      y: -13.8
    },
    rotate: 5
  }, {
    translate: {
      x: 4.1,
      y: -13.5
    },
    rotate: 10
  }, {
    translate: {
      x: 7,
      y: -13
    },
    rotate: 20
  }, {
    translate: {
      x: 9.5,
      y: -12.2
    },
    rotate: 25
  }, {
    translate: {
      x: 11.8,
      y: -10.8
    },
    rotate: 32
  }, {
    translate: {
      x: 14.2,
      y: -9.3
    },
    rotate: 40
  }, {
    translate: {
      x: 16.3,
      y: -6.9
    },
    rotate: 55
  }, {
    translate: {
      x: 17.8,
      y: -4.1
    },
    rotate: 70
  }, {
    translate: {
      x: 18.5,
      y: -1
    },
    rotate: 85
  }, {
    translate: {
      x: 17.9,
      y: 2.4
    },
    rotate: 105
  }],
  21: [{
    translate: {
      x: -18,
      y: 2.4
    },
    rotate: -102
  }, {
    translate: {
      x: -18.3,
      y: -0.7
    },
    rotate: -85
  }, {
    translate: {
      x: -17.8,
      y: -3.7
    },
    rotate: -70
  }, {
    translate: {
      x: -16.3,
      y: -6.4
    },
    rotate: -55
  }, {
    translate: {
      x: -14.4,
      y: -8.7
    },
    rotate: -40
  }, {
    translate: {
      x: -12.6,
      y: -10.4
    },
    rotate: -35
  }, {
    translate: {
      x: -10.1,
      y: -11.8
    },
    rotate: -25
  }, {
    translate: {
      x: -7.7,
      y: -12.8
    },
    rotate: -20
  }, {
    translate: {
      x: -5.4,
      y: -13.5
    },
    rotate: -15
  }, {
    translate: {
      x: -2.5,
      y: -13.8
    },
    rotate: -5
  }, {
    translate: {
      x: 0,
      y: -13.8
    },
    rotate: 0
  }, {
    translate: {
      x: 2.5,
      y: -13.8
    },
    rotate: 5
  }, {
    translate: {
      x: 5.4,
      y: -13.5
    },
    rotate: 15
  }, {
    translate: {
      x: 7.7,
      y: -12.8
    },
    rotate: 20
  }, {
    translate: {
      x: 10.1,
      y: -11.8
    },
    rotate: 25
  }, {
    translate: {
      x: 12.6,
      y: -10.4
    },
    rotate: 35
  }, {
    translate: {
      x: 14.4,
      y: -8.7
    },
    rotate: 40
  }, {
    translate: {
      x: 16.3,
      y: -6.4
    },
    rotate: 55
  }, {
    translate: {
      x: 17.8,
      y: -3.7
    },
    rotate: 70
  }, {
    translate: {
      x: 18.3,
      y: -0.7
    },
    rotate: 85
  }, {
    translate: {
      x: 18,
      y: 2.4
    },
    rotate: 102
  }],
  22: [{
    translate: {
      x: -17.5,
      y: 3.9
    },
    rotate: -110
  }, {
    translate: {
      x: -18.3,
      y: 0.8
    },
    rotate: -95
  }, {
    translate: {
      x: -18.2,
      y: -2.2
    },
    rotate: -78
  }, {
    translate: {
      x: -17.2,
      y: -5
    },
    rotate: -65
  }, {
    translate: {
      x: -15.3,
      y: -7.5
    },
    rotate: -48
  }, {
    translate: {
      x: -13.4,
      y: -9.6
    },
    rotate: -38
  }, {
    translate: {
      x: -11.3,
      y: -11.1
    },
    rotate: -30
  }, {
    translate: {
      x: -9.1,
      y: -12.3
    },
    rotate: -25
  }, {
    translate: {
      x: -6.5,
      y: -13.1
    },
    rotate: -18
  }, {
    translate: {
      x: -3.8,
      y: -13.6
    },
    rotate: -10
  }, {
    translate: {
      x: -1,
      y: -13.8
    },
    rotate: -2
  }, {
    translate: {
      x: 1.5,
      y: -13.8
    },
    rotate: 5
  }, {
    translate: {
      x: 3.8,
      y: -13.6
    },
    rotate: 10
  }, {
    translate: {
      x: 6.5,
      y: -13.1
    },
    rotate: 18
  }, {
    translate: {
      x: 9.1,
      y: -12.3
    },
    rotate: 25
  }, {
    translate: {
      x: 11.3,
      y: -11.1
    },
    rotate: 30
  }, {
    translate: {
      x: 13.4,
      y: -9.6
    },
    rotate: 38
  }, {
    translate: {
      x: 15.3,
      y: -7.5
    },
    rotate: 48
  }, {
    translate: {
      x: 17.2,
      y: -5
    },
    rotate: 65
  }, {
    translate: {
      x: 18.2,
      y: -2.2
    },
    rotate: 78
  }, {
    translate: {
      x: 18.3,
      y: 0.8
    },
    rotate: 95
  }, {
    translate: {
      x: 17.5,
      y: 3.9
    },
    rotate: 110
  }],
  23: [{
    translate: {
      x: -17,
      y: 5.1
    },
    rotate: -115
  }, {
    translate: {
      x: -18,
      y: 2.4
    },
    rotate: -100
  }, {
    translate: {
      x: -18.3,
      y: -0.7
    },
    rotate: -85
  }, {
    translate: {
      x: -17.8,
      y: -3.8
    },
    rotate: -70
  }, {
    translate: {
      x: -16.4,
      y: -6.4
    },
    rotate: -55
  }, {
    translate: {
      x: -14.5,
      y: -8.5
    },
    rotate: -45
  }, {
    translate: {
      x: -12.5,
      y: -10.4
    },
    rotate: -35
  }, {
    translate: {
      x: -10.1,
      y: -11.6
    },
    rotate: -28
  }, {
    translate: {
      x: -7.8,
      y: -12.7
    },
    rotate: -22
  }, {
    translate: {
      x: -5.1,
      y: -13.5
    },
    rotate: -12
  }, {
    translate: {
      x: -2.3,
      y: -13.8
    },
    rotate: -2
  }, {
    translate: {
      x: 0,
      y: -13.8
    },
    rotate: 0
  }, {
    translate: {
      x: 2.3,
      y: -13.8
    },
    rotate: 2
  }, {
    translate: {
      x: 5.1,
      y: -13.5
    },
    rotate: 12
  }, {
    translate: {
      x: 7.8,
      y: -12.7
    },
    rotate: 22
  }, {
    translate: {
      x: 10.1,
      y: -11.6
    },
    rotate: 28
  }, {
    translate: {
      x: 12.5,
      y: -10.4
    },
    rotate: 35
  }, {
    translate: {
      x: 14.5,
      y: -8.5
    },
    rotate: 45
  }, {
    translate: {
      x: 16.4,
      y: -6.4
    },
    rotate: 55
  }, {
    translate: {
      x: 17.8,
      y: -3.8
    },
    rotate: 70
  }, {
    translate: {
      x: 18.3,
      y: -0.7
    },
    rotate: 85
  }, {
    translate: {
      x: 18,
      y: 2.4
    },
    rotate: 100
  }, {
    translate: {
      x: 17,
      y: 5.1
    },
    rotate: 115
  }],
  24: [{
    translate: {
      x: -16.2,
      y: 6.6
    },
    rotate: -125
  }, {
    translate: {
      x: -17.6,
      y: 3.9
    },
    rotate: -110
  }, {
    translate: {
      x: -18.3,
      y: 0.7
    },
    rotate: -90
  }, {
    translate: {
      x: -18.2,
      y: -2.2
    },
    rotate: -80
  }, {
    translate: {
      x: -17.3,
      y: -5
    },
    rotate: -65
  }, {
    translate: {
      x: -15.6,
      y: -7.6
    },
    rotate: -50
  }, {
    translate: {
      x: -13.6,
      y: -9.6
    },
    rotate: -40
  }, {
    translate: {
      x: -11.3,
      y: -11.2
    },
    rotate: -30
  }, {
    translate: {
      x: -8.8,
      y: -12.3
    },
    rotate: -22
  }, {
    translate: {
      x: -6.3,
      y: -13.2
    },
    rotate: -15
  }, {
    translate: {
      x: -3.8,
      y: -13.5
    },
    rotate: -10
  }, {
    translate: {
      x: -1,
      y: -13.8
    },
    rotate: -1
  }, {
    translate: {
      x: 1,
      y: -13.8
    },
    rotate: 1
  }, {
    translate: {
      x: 3.8,
      y: -13.5
    },
    rotate: 10
  }, {
    translate: {
      x: 6.3,
      y: -13.2
    },
    rotate: 15
  }, {
    translate: {
      x: 8.8,
      y: -12.3
    },
    rotate: 22
  }, {
    translate: {
      x: 11.3,
      y: -11.2
    },
    rotate: 30
  }, {
    translate: {
      x: 13.6,
      y: -9.6
    },
    rotate: 40
  }, {
    translate: {
      x: 15.6,
      y: -7.6
    },
    rotate: 50
  }, {
    translate: {
      x: 17.3,
      y: -5
    },
    rotate: 65
  }, {
    translate: {
      x: 18.2,
      y: -2.2
    },
    rotate: 80
  }, {
    translate: {
      x: 18.3,
      y: 0.7
    },
    rotate: 90
  }, {
    translate: {
      x: 17.6,
      y: 3.9
    },
    rotate: 110
  }, {
    translate: {
      x: 16.2,
      y: 6.6
    },
    rotate: 125
  }],
  25: [{
    translate: {
      x: -15.4,
      y: 7.7
    },
    rotate: -130
  }, {
    translate: {
      x: -17.1,
      y: 5.2
    },
    rotate: -115
  }, {
    translate: {
      x: -18.2,
      y: 2.4
    },
    rotate: -102
  }, {
    translate: {
      x: -18.3,
      y: -0.65
    },
    rotate: -88
  }, {
    translate: {
      x: -17.8,
      y: -3.8
    },
    rotate: -70
  }, {
    translate: {
      x: -16.6,
      y: -6.3
    },
    rotate: -60
  }, {
    translate: {
      x: -14.6,
      y: -8.6
    },
    rotate: -45
  }, {
    translate: {
      x: -12.5,
      y: -10.4
    },
    rotate: -35
  }, {
    translate: {
      x: -10.2,
      y: -11.8
    },
    rotate: -28
  }, {
    translate: {
      x: -7.7,
      y: -12.8
    },
    rotate: -20
  }, {
    translate: {
      x: -5.1,
      y: -13.3
    },
    rotate: -15
  }, {
    translate: {
      x: -2.4,
      y: -13.8
    },
    rotate: -2
  }, {
    translate: {
      x: 0,
      y: -14
    },
    rotate: 0
  }, {
    translate: {
      x: 2.4,
      y: -13.8
    },
    rotate: 2
  }, {
    translate: {
      x: 5.1,
      y: -13.3
    },
    rotate: 15
  }, {
    translate: {
      x: 7.7,
      y: -12.8
    },
    rotate: 20
  }, {
    translate: {
      x: 10.2,
      y: -11.8
    },
    rotate: 28
  }, {
    translate: {
      x: 12.5,
      y: -10.4
    },
    rotate: 35
  }, {
    translate: {
      x: 14.6,
      y: -8.6
    },
    rotate: 45
  }, {
    translate: {
      x: 16.6,
      y: -6.3
    },
    rotate: 60
  }, {
    translate: {
      x: 17.8,
      y: -3.8
    },
    rotate: 70
  }, {
    translate: {
      x: 18.3,
      y: -0.65
    },
    rotate: 88
  }, {
    translate: {
      x: 18.2,
      y: 2.4
    },
    rotate: 102
  }, {
    translate: {
      x: 17.1,
      y: 5.2
    },
    rotate: 115
  }, {
    translate: {
      x: 15.4,
      y: 7.7
    },
    rotate: 130
  }],
  26: [{
    translate: {
      x: -12.9,
      y: 9.2
    },
    rotate: -140
  }, {
    translate: {
      x: -15.2,
      y: 7.5
    },
    rotate: -128
  }, {
    translate: {
      x: -17,
      y: 5
    },
    rotate: -115
  }, {
    translate: {
      x: -18.2,
      y: 2
    },
    rotate: -104
  }, {
    translate: {
      x: -18.4,
      y: -1.3
    },
    rotate: -85
  }, {
    translate: {
      x: -17.8,
      y: -4.4
    },
    rotate: -70
  }, {
    translate: {
      x: -16.1,
      y: -7.1
    },
    rotate: -52
  }, {
    translate: {
      x: -14.1,
      y: -9.4
    },
    rotate: -40
  }, {
    translate: {
      x: -11.7,
      y: -11.2
    },
    rotate: -30
  }, {
    translate: {
      x: -9.1,
      y: -12.2
    },
    rotate: -23
  }, {
    translate: {
      x: -6.5,
      y: -13
    },
    rotate: -15
  }, {
    translate: {
      x: -4,
      y: -13.6
    },
    rotate: -10
  }, {
    translate: {
      x: -1.3,
      y: -13.8
    },
    rotate: -2
  }, {
    translate: {
      x: 1.3,
      y: -13.8
    },
    rotate: 2
  }, {
    translate: {
      x: 4,
      y: -13.6
    },
    rotate: 10
  }, {
    translate: {
      x: 6.5,
      y: -13
    },
    rotate: 15
  }, {
    translate: {
      x: 9.1,
      y: -12.2
    },
    rotate: 23
  }, {
    translate: {
      x: 11.7,
      y: -11.2
    },
    rotate: 30
  }, {
    translate: {
      x: 14.1,
      y: -9.4
    },
    rotate: 40
  }, {
    translate: {
      x: 16.1,
      y: -7.1
    },
    rotate: 52
  }, {
    translate: {
      x: 17.8,
      y: -4.4
    },
    rotate: 70
  }, {
    translate: {
      x: 18.4,
      y: -1.3
    },
    rotate: 85
  }, {
    translate: {
      x: 18.2,
      y: 2
    },
    rotate: 104
  }, {
    translate: {
      x: 17,
      y: 5
    },
    rotate: 115
  }, {
    translate: {
      x: 15.2,
      y: 7.5
    },
    rotate: 128
  }, {
    translate: {
      x: 12.9,
      y: 9.2
    },
    rotate: 140
  }],
  27: [{
    translate: {
      x: -12.4,
      y: 9.8
    },
    rotate: -145
  }, {
    translate: {
      x: -14.8,
      y: 8
    },
    rotate: -130
  }, {
    translate: {
      x: -16.6,
      y: 5.7
    },
    rotate: -120
  }, {
    translate: {
      x: -17.8,
      y: 3
    },
    rotate: -108
  }, {
    translate: {
      x: -18.3,
      y: 0
    },
    rotate: -90
  }, {
    translate: {
      x: -18,
      y: -3.1
    },
    rotate: -75
  }, {
    translate: {
      x: -16.9,
      y: -5.9
    },
    rotate: -60
  }, {
    translate: {
      x: -14.8,
      y: -8.5
    },
    rotate: -45
  }, {
    translate: {
      x: -12.6,
      y: -10.3
    },
    rotate: -35
  }, {
    translate: {
      x: -10.3,
      y: -11.8
    },
    rotate: -28
  }, {
    translate: {
      x: -7.6,
      y: -12.8
    },
    rotate: -19
  }, {
    translate: {
      x: -5,
      y: -13.5
    },
    rotate: -8
  }, {
    translate: {
      x: -2.4,
      y: -13.8
    },
    rotate: -2
  }, {
    translate: {
      x: 0,
      y: -14
    },
    rotate: 0
  }, {
    translate: {
      x: 2.4,
      y: -13.8
    },
    rotate: 2
  }, {
    translate: {
      x: 5,
      y: -13.5
    },
    rotate: 8
  }, {
    translate: {
      x: 7.6,
      y: -12.8
    },
    rotate: 19
  }, {
    translate: {
      x: 10.3,
      y: -11.8
    },
    rotate: 28
  }, {
    translate: {
      x: 12.6,
      y: -10.3
    },
    rotate: 35
  }, {
    translate: {
      x: 14.8,
      y: -8.5
    },
    rotate: 45
  }, {
    translate: {
      x: 16.9,
      y: -5.9
    },
    rotate: 60
  }, {
    translate: {
      x: 18,
      y: -3.1
    },
    rotate: 75
  }, {
    translate: {
      x: 18.3,
      y: 0
    },
    rotate: 90
  }, {
    translate: {
      x: 17.8,
      y: 3
    },
    rotate: 108
  }, {
    translate: {
      x: 16.6,
      y: 5.7
    },
    rotate: 120
  }, {
    translate: {
      x: 14.8,
      y: 8
    },
    rotate: 130
  }, {
    translate: {
      x: 12.4,
      y: 9.8
    },
    rotate: 145
  }],
  28: [{
    translate: {
      x: -11.3,
      y: 10.7
    },
    rotate: -150
  }, {
    translate: {
      x: -13.8,
      y: 9
    },
    rotate: -135
  }, {
    translate: {
      x: -15.7,
      y: 7
    },
    rotate: -125
  }, {
    translate: {
      x: -17.3,
      y: 4.5
    },
    rotate: -115
  }, {
    translate: {
      x: -18.3,
      y: 1.5
    },
    rotate: -100
  }, {
    translate: {
      x: -18.3,
      y: -1.8
    },
    rotate: -80
  }, {
    translate: {
      x: -17.3,
      y: -4.8
    },
    rotate: -65
  }, {
    translate: {
      x: -15.8,
      y: -7.5
    },
    rotate: -50
  }, {
    translate: {
      x: -13.8,
      y: -9.5
    },
    rotate: -40
  }, {
    translate: {
      x: -11.5,
      y: -11
    },
    rotate: -32
  }, {
    translate: {
      x: -8.9,
      y: -12.2
    },
    rotate: -22
  }, {
    translate: {
      x: -6.2,
      y: -13.2
    },
    rotate: -8
  }, {
    translate: {
      x: -3.8,
      y: -13.6
    },
    rotate: -5
  }, {
    translate: {
      x: -1.2,
      y: -14
    },
    rotate: -2
  }, {
    translate: {
      x: 1.2,
      y: -14
    },
    rotate: 2
  }, {
    translate: {
      x: 3.8,
      y: -13.6
    },
    rotate: 8
  }, {
    translate: {
      x: 6.2,
      y: -13.2
    },
    rotate: 10
  }, {
    translate: {
      x: 8.9,
      y: -12.2
    },
    rotate: 22
  }, {
    translate: {
      x: 11.5,
      y: -11
    },
    rotate: 32
  }, {
    translate: {
      x: 13.8,
      y: -9.5
    },
    rotate: 40
  }, {
    translate: {
      x: 15.8,
      y: -7.5
    },
    rotate: 50
  }, {
    translate: {
      x: 17.3,
      y: -4.8
    },
    rotate: 65
  }, {
    translate: {
      x: 18.3,
      y: -1.8
    },
    rotate: 80
  }, {
    translate: {
      x: 18.3,
      y: 1.5
    },
    rotate: 100
  }, {
    translate: {
      x: 17.3,
      y: 4.5
    },
    rotate: 115
  }, {
    translate: {
      x: 15.7,
      y: 7
    },
    rotate: 125
  }, {
    translate: {
      x: 13.8,
      y: 9
    },
    rotate: 135
  }, {
    translate: {
      x: 11.3,
      y: 10.7
    },
    rotate: 150
  }],
  29: [{
    translate: {
      x: -10,
      y: 12.2
    },
    rotate: -155
  }, {
    translate: {
      x: -13.2,
      y: 10.3
    },
    rotate: -130
  }, {
    translate: {
      x: -14.9,
      y: 8.4
    },
    rotate: -130
  }, {
    translate: {
      x: -16.5,
      y: 6.2
    },
    rotate: -125
  }, {
    translate: {
      x: -18,
      y: 3
    },
    rotate: -105
  }, {
    translate: {
      x: -18.4,
      y: -0.2
    },
    rotate: -90
  }, {
    translate: {
      x: -18,
      y: -3.2
    },
    rotate: -75
  }, {
    translate: {
      x: -16.7,
      y: -6.1
    },
    rotate: -60
  }, {
    translate: {
      x: -14.8,
      y: -8.5
    },
    rotate: -45
  }, {
    translate: {
      x: -12.5,
      y: -10.2
    },
    rotate: -35
  }, {
    translate: {
      x: -10,
      y: -11.8
    },
    rotate: -20
  }, {
    translate: {
      x: -7.5,
      y: -12.8
    },
    rotate: -15
  }, {
    translate: {
      x: -5.1,
      y: -13.5
    },
    rotate: -10
  }, {
    translate: {
      x: -2.5,
      y: -13.8
    },
    rotate: -5
  }, {
    translate: {
      x: 0,
      y: -14
    },
    rotate: 0
  }, {
    translate: {
      x: 2.5,
      y: -13.8
    },
    rotate: 5
  }, {
    translate: {
      x: 5.1,
      y: -13.5
    },
    rotate: 10
  }, {
    translate: {
      x: 7.5,
      y: -12.8
    },
    rotate: 15
  }, {
    translate: {
      x: 10,
      y: -11.8
    },
    rotate: 20
  }, {
    translate: {
      x: 12.5,
      y: -10.2
    },
    rotate: 35
  }, {
    translate: {
      x: 14.8,
      y: -8.5
    },
    rotate: 45
  }, {
    translate: {
      x: 16.7,
      y: -6.1
    },
    rotate: 60
  }, {
    translate: {
      x: 18,
      y: -3.2
    },
    rotate: 75
  }, {
    translate: {
      x: 18.4,
      y: -0.2
    },
    rotate: 90
  }, {
    translate: {
      x: 18,
      y: 3
    },
    rotate: 105
  }, {
    translate: {
      x: 16.5,
      y: 6.2
    },
    rotate: 125
  }, {
    translate: {
      x: 14.9,
      y: 8.4
    },
    rotate: 130
  }, {
    translate: {
      x: 13.2,
      y: 10.3
    },
    rotate: 130
  }, {
    translate: {
      x: 10,
      y: 12.2
    },
    rotate: 155
  }],
  30: [{
    translate: {
      x: -8.8,
      y: 12.2
    },
    rotate: -150
  }, {
    translate: {
      x: -11.8,
      y: 10.8
    },
    rotate: -140
  }, {
    translate: {
      x: -14,
      y: 9
    },
    rotate: -135
  }, {
    translate: {
      x: -15.8,
      y: 7
    },
    rotate: -130
  }, {
    translate: {
      x: -17.3,
      y: 4.5
    },
    rotate: -115
  }, {
    translate: {
      x: -18.4,
      y: 1.3
    },
    rotate: -97
  }, {
    translate: {
      x: -18.3,
      y: -1.6
    },
    rotate: -85
  }, {
    translate: {
      x: -17.4,
      y: -4.9
    },
    rotate: -65
  }, {
    translate: {
      x: -15.7,
      y: -7.4
    },
    rotate: -50
  }, {
    translate: {
      x: -13.7,
      y: -9.5
    },
    rotate: -40
  }, {
    translate: {
      x: -11.4,
      y: -11
    },
    rotate: -30
  }, {
    translate: {
      x: -8.8,
      y: -12.2
    },
    rotate: -22
  }, {
    translate: {
      x: -6.5,
      y: -13
    },
    rotate: -15
  }, {
    translate: {
      x: -4,
      y: -13.6
    },
    rotate: -10
  }, {
    translate: {
      x: -1.2,
      y: -14
    },
    rotate: -2
  }, {
    translate: {
      x: 1.2,
      y: -14
    },
    rotate: 2
  }, {
    translate: {
      x: 4,
      y: -13.6
    },
    rotate: 10
  }, {
    translate: {
      x: 6.5,
      y: -13
    },
    rotate: 15
  }, {
    translate: {
      x: 8.8,
      y: -12.2
    },
    rotate: 22
  }, {
    translate: {
      x: 11.4,
      y: -11
    },
    rotate: 30
  }, {
    translate: {
      x: 13.7,
      y: -9.5
    },
    rotate: 40
  }, {
    translate: {
      x: 15.7,
      y: -7.4
    },
    rotate: 50
  }, {
    translate: {
      x: 17.4,
      y: -4.9
    },
    rotate: 65
  }, {
    translate: {
      x: 18.3,
      y: -1.6
    },
    rotate: 85
  }, {
    translate: {
      x: 18.4,
      y: 1.3
    },
    rotate: 97
  }, {
    translate: {
      x: 17.3,
      y: 4.5
    },
    rotate: 115
  }, {
    translate: {
      x: 15.8,
      y: 7
    },
    rotate: 130
  }, {
    translate: {
      x: 14,
      y: 9
    },
    rotate: 135
  }, {
    translate: {
      x: 11.8,
      y: 10.8
    },
    rotate: 140
  }, {
    translate: {
      x: 8.8,
      y: 12.2
    },
    rotate: 150
  }]
};

var unitConversion$1 = new UnitConversion();

var drawTextItem = function drawTextItem(ctx, el, item, len) {
  ctx.save();
  ctx.font = "bold ".concat(3.9 * ratio, "mm ").concat(FangSongFont);
  ctx.textBaseline = 'top';
  ctx.translate(ratio * (circleCenterX + unitConversion$1.mmConversionPx(item.translate.x)), ratio * (circleCenterY + unitConversion$1.mmConversionPx(item.translate.y)));
  ctx.rotate(rads(item.rotate));

  if (len > 16) {
    ctx.scale(0.8 * Math.sqrt(16 / len), 1.2);
  } else {
    ctx.scale(0.8, 1.2);
  }

  ctx.fillText(el, 0, 0);
  ctx.restore();
};

var drawTextCompanyName = function drawTextCompanyName(ctx, arr) {
  if (arr.length > 30 || arr.length < 4) {
    return;
  }

  arr.forEach(function (el, index) {
    drawTextItem(ctx, el, positionData[arr.length][index], arr.length);
  });
};

var unitConversion$2 = new UnitConversion();

var createSeal = function createSeal(ctx, companyName, taxNo, sealNo) {
  ctx.strokeStyle = '#f00';
  ctx.fillStyle = '#f00';
  drawEllipse(ctx, circleCenterX, circleCenterY, circleXRadius, circleYRadius, border);
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center'; // 绘制公司名称

  drawTextCompanyName(ctx, companyName.split('')); // 绘制税号

  ctx.save();
  ctx.font = "".concat(3.8 * ratio, "mm Arial");
  ctx.fillText(taxNo, ratio * circleCenterX, ratio * (circleCenterY + unitConversion$2.mmConversionPx(0.1)), unitConversion$2.mmConversionPx(26 * ratio));
  ctx.restore(); // 绘制发票专用章字样

  ctx.save();
  ctx.font = "".concat(4.6 * ratio, "mm ").concat(FangSongFont);
  ctx.textBaseline = 'top';
  ctx.fillText('发票专用章', ratio * (circleCenterX + unitConversion$2.mmConversionPx(-0.2)), ratio * (circleCenterY + unitConversion$2.mmConversionPx(3.8)), unitConversion$2.mmConversionPx(ratio * 19));
  ctx.restore(); // 绘制号码
  // eslint-disable-next-line no-restricted-globals

  if (!isNaN(Number(sealNo))) {
    ctx.save();
    ctx.font = "".concat(2.5 * ratio, "mm Arial");
    ctx.textBaseline = 'top'; // 设置文本的垂直对齐方式

    ctx.fillText("\uFF08 ".concat(sealNo, " \uFF09"), ratio * circleCenterX, ratio * (circleCenterY + unitConversion$2.mmConversionPx(11)));
    ctx.restore();
  }
};

/**
 *
 * @param {*} companyName 公司名称
 * @param {*} taxNo 公司税号
 * @param {*} sealNo 印章号码
 *
 * @return {*} base64
 */

var createCanvasDom = function createCanvasDom(params) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var ctxW = width + 2 * border;
  var ctxH = height + 2 * border;
  canvas.setAttribute('width', (ratio * ctxW).toString());
  canvas.setAttribute('height', (ratio * ctxH).toString());
  canvas.setAttribute('style', "width:".concat(ctxW, "px; height: ").concat(ctxH, "px;"));
  createSeal(ctx, params.companyName, params.taxNo, params.sealNo);
  return canvas.toDataURL();
};

export default createCanvasDom;
