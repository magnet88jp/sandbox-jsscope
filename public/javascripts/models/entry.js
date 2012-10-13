// underscore と backbone に依存
define(["lib/underscore-min", "lib/backbone-min"], function(_, Backbone) {
  var Entry = Backbone.Model.extend({
    defaults: {
      title: "",
      content: ""
    }
  });

  var Blog = Backbone.Collection.extend({
    model: Entry,
    url: "/admin/blogs"
  });

  return {
  	"Entry": Entry,
  	"Blog": Blog
  };
});