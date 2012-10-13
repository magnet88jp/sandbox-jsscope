var diva = {}; // グローバル名前空間オブジェクト
with (diva) { // 名前空間オブジェクトの変数アクセスに prefix を不要に
  var ns = diva; // shorthand (必須ではない)
  let private = "private"; // private 変数
  let func = function() { alert("func"); }; // private 関数
  ns.public = "public"; // public 変数
  ns.method = function() { alert("method"); }; // public メソッド
  ns.model = {
  	work: function() {
      alert(private);
      alert(public); // public 変数も prefix 不要
      func();
      method(); // public メソッドも prefix 不要
      setTimeout(function() {
        alert(private);
        alert(public); // コールバック内でも prefix 不要
      }, 1000);
    }
  }
}
