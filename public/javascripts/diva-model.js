var diva = diva || {};

//diva.model.work();
with (diva) { // 名前空間オブジェクトの変数アクセスに prefix を不要に
  let ns = diva; // shorthand (必須ではない)
//  model.work();
  ns.model.work();
}