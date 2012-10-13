require(
  [
    '/public/javascripts/lib/a'
    ,'/public/javascripts/lib/b'
    ,'/public/javascripts/lib/c'
  ],
  function(){
    // lib/a.js,lib/b.js,lib/c.jsが読み込まれていることが保証されているcallback
    require(
    [
      '/public/javascripts/lib/d' // lib/a.jsに依存しているライブラリ
      ,'/public/javascripts/lib/f'// lib/b.jsに依存しているライブラリ
    ],
    function(){
      // lib/a.js,lib/b.js,lib/c.js,lib/d.js,lib/e.jsが読み込まれていることが保証されているcallback
    });
  }
);