
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

    window.App = new BlogView({ model: new Blog() });
    
    window.App.model.fetch({
      success: function(collection, resp) {
        window.App.render();
      }
    });
