const cubism2Model =
  "https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model@master/%E7%A2%A7%E8%93%9D%E8%88%AA%E7%BA%BF%20Azue%20Lane/Azue%20Lane(JP)/dujiaoshou_4/dujiaoshou_4.model3.json";
(async function main() {
  const app = new PIXI.Application({
    view: document.getElementById("canvas"),
    autoStart: true,
    resizeTo: window
  });
  const model2 = await PIXI.live2d.Live2DModel.from(cubism2Model);
  app.stage.addChild(model2);
  model2.scale.set(0.3);
})();
