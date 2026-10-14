/* Initialize the original public creative without Adfox click or event wrappers. */
var canvas, stage, exportRoot, anim_container, dom_overlay_container;
// Chromium reports DPR 1 in opaque sandbox frames; preserve the host display scale.
var hostDpr = Math.min(4, Math.max(1, Number(new URLSearchParams(location.search).get('dpr')) || 1));
Object.defineProperty(window, 'devicePixelRatio', {value: hostDpr, configurable: true});
window.addEventListener('load', function () {
  canvas = document.getElementById('canvas');
  anim_container = document.getElementById('animation_container');
  dom_overlay_container = document.getElementById('dom_overlay_container');
  var composition = AdobeAn.getComposition('5C5B9F8FED70DF4D809B31E87FBF230F');
  var lib = composition.getLibrary();
  var atlas = new Image();
  atlas.onload = function () {
    composition.getImages().index_atlas_P_1 = atlas;
    lib.ssMetadata.forEach(function (metadata) {
      composition.getSpriteSheet()[metadata.name] = new createjs.SpriteSheet({
        images: [atlas], frames: metadata.frames
      });
    });
    exportRoot = new lib._100prc_1200x200();
    stage = new lib.Stage(canvas);
    stage.addChild(exportRoot);
    AdobeAn.makeResponsive(false, 'both', false, 1,
      [canvas, anim_container, dom_overlay_container]);
    AdobeAn.compositionLoaded(lib.properties.id);
    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener('tick', stage);
    stage.update();
    document.documentElement.dataset.bannerReady = 'true';
  };
  atlas.src = 'atlas.webp';
});
