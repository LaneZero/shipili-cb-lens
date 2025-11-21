/*
 * Shipili CB-Lens - Final Math Logic
 * Handles Intensity interpolation and Matrix calculation.
 */

var SVG_NS = "http://www.w3.org/2000/svg";
var FILTER_ID = "shipili-cb-filter";
var MATRIX_ID = "shipili-matrix";

// Base definition of matrices (Target colors at 100% intensity)
var RAW_MATRICES = {
  protanopia: [
    0.567, 0.433, 0, 0, 0,
    0.558, 0.442, 0, 0, 0,
    0, 0.242, 0.758, 0, 0,
    0, 0, 0, 1, 0
  ],
  deuteranopia: [
    0.625, 0.375, 0, 0, 0,
    0.7, 0.3, 0, 0, 0,
    0, 0.3, 0.7, 0, 0,
    0, 0, 0, 1, 0
  ],
  tritanopia: [
    0.95, 0.05, 0, 0, 0,
    0, 0.433, 0.567, 0, 0,
    0, 0.475, 0.525, 0, 0,
    0, 0, 0, 1, 0
  ],
  achromatopsia: [
    0.299, 0.587, 0.114, 0, 0,
    0.299, 0.587, 0.114, 0, 0,
    0.299, 0.587, 0.114, 0, 0,
    0, 0, 0, 1, 0
  ],
  normal: [
    1, 0, 0, 0, 0,
    0, 1, 0, 0, 0,
    0, 0, 1, 0, 0,
    0, 0, 0, 1, 0
  ]
};

// Helper: Convert array to string for SVG
function arrayToString(arr) {
  return arr.join(' ');
}

// Helper: Calculate matrix based on intensity (0 to 1)
function interpolateMatrix(type, intensity) {
  var target = RAW_MATRICES[type] || RAW_MATRICES.normal;
  var normal = RAW_MATRICES.normal;
  var result = [];

  // Formula: Result = (Normal * (1 - intensity)) + (Target * intensity)
  for (var i = 0; i < 20; i++) {
    var val = (normal[i] * (1 - intensity)) + (target[i] * intensity);
    // Fix floating point precision issues slightly
    result.push(val.toFixed(3)); 
  }
  
  return arrayToString(result);
}

function ensureFilterExists() {
  var container = document.getElementById("shipili-svg-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "shipili-svg-container";
    container.style.cssText = "position:fixed; top:0; left:0; width:0; height:0; pointer-events:none; z-index:-9999;";
    
    var svg = document.createElementNS(SVG_NS, "svg");
    var filter = document.createElementNS(SVG_NS, "filter");
    filter.id = FILTER_ID;
    filter.setAttribute("color-interpolation-filters", "sRGB");

    var colorMatrix = document.createElementNS(SVG_NS, "feColorMatrix");
    colorMatrix.setAttribute("type", "matrix");
    colorMatrix.setAttribute("values", arrayToString(RAW_MATRICES.normal));
    colorMatrix.id = MATRIX_ID;

    filter.appendChild(colorMatrix);
    svg.appendChild(filter);
    container.appendChild(svg);
    document.documentElement.appendChild(container);
  }
}

function applySettings(settings) {
  ensureFilterExists();
  
  var html = document.documentElement;
  var matrixElem = document.getElementById(MATRIX_ID);
  
  if (!matrixElem) return;

  if (!settings.enabled) {
    html.style.filter = "";
    html.style.webkitFilter = "";
    return;
  }

  // Calculate Intensity (0.0 to 1.0)
  // Ensure intensity is treated as a number
  var rawIntensity = parseInt(settings.intensity);
  if (isNaN(rawIntensity)) rawIntensity = 100;
  var factor = rawIntensity / 100;

  // Get calculated matrix string
  var finalMatrix = interpolateMatrix(settings.type, factor);
  
  matrixElem.setAttribute("values", finalMatrix);

  var filterString = "url(#" + FILTER_ID + ")";
  html.style.filter = filterString;
  html.style.webkitFilter = filterString;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "updateSettings") {
    applySettings(request.settings);
  }
});

chrome.storage.local.get(['settings'], function(result) {
  if (result.settings) {
    applySettings(result.settings);
  }
});
