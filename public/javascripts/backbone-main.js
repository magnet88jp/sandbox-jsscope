// サードパーティのライブラリをモジュールとして読み込めるようにする

var Diva = Diva || {};

requirejs.config({
    shim: {
        "jquery-1.6.4.min": {
            exports: "jQuery"
        },
        "lib/underscore-min": {
            exports: "_"
        },
        "lib/backbone-min": {
            deps: ["jquery-1.6.4.min", "lib/underscore-min"],
            exports: "Backbone"
        }
    }
});

require(['jquery-1.6.4.min', 'lib/underscore-min', 'lib/backbone-min' ], 
  function($, _, Backbone) {

//    require(['models/entry', 'models/blog'], function(Entry, Blog){
/*    
    require(['models/entry'], function(models){
    var Entry = models.Entry;
    var Blog = models.Blog;
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

    var EntryView = Backbone.View.extend({
      template: _.template($("#entry-template").html()),
      render: function() {
        var json = this.model.toJSON();
        var html = this.template(json);
        $(this.el).html(html);
        return this;
      }
    });

    var BlogView = Backbone.View.extend({
      el: $("#main"),
      render: function() {
        $(this.el).empty();
        this.model.each(function(entry) {
          var view = new EntryView({ model:entry });
          view.render();
          $(this.el).append(view.el);
        }, this);
        return this;
      }
    });
*/
    require(['models/entry', 'views/EntryView'], function(models, views){
      var Blog = models.Blog;
      var BlogView = views.BlogView;

//      this.App.view = {};

      this.Diva.NoteApp = new BlogView({ model: new Blog() });
      var self = this;
      this.Diva.NoteApp.model.fetch({
        success: function(collection, resp) {
          self.Diva.NoteApp.render();
        }
      });
    });

  }
);
