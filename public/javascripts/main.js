// main
require(["helper/util", "lib/a", "lib/b", "lib/c" ], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
      console.debug("main");
//    alert("main");
/*
      require(["lib/e", "lib/f"], function(){
    	  console.debug("after ef");
    	}
      );      
      require(["lib/hoge"], function(hoge){
        console.log(hoge.hoge); // 5
        console.log(hoge.fuga); // 'piyo'      	
      });
*/
      require(['lib/hoge','lib/foo'],function(hoge, foo){
        console.log(foo.bar); // 6
        console.log(hoge.fuga); // 'piyo'
      });

      require(['lib/hage'],function(hage){
        console.log(hage.bar); // 6
        console.log(hage.fuga); // 'piyo'
      });
    }
);