// underscore と backbone に依存
define(["jquery-1.6.4.min", "lib/underscore-min", "lib/backbone-min", "models/entry"], function($, _, Backbone, models) {

  var Entry = models.Entry;
  var Blog = models.Blog;

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

  return {
  	"EntryView": EntryView,
  	"BlogView": BlogView
  };
});