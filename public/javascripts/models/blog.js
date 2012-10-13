define(["lib/underscore-min", "lib/backbone-min", "models/entry"], function(_, Backbone, Entry) {
  var Blog = Backbone.Collection.extend({
    model: Entry,
    url: "/admin/blogs"
  });
  return Blog;
});