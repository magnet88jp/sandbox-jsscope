define(['lib/hoge','lib/foo'],function(hoge,foo){
  return {
    bar : foo.bar
    ,baz : foo.baz
    ,hoge : hoge.hoge
    ,fuga : hoge.fuga
  }
});