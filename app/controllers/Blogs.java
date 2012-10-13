package controllers;
 
import java.util.*;
import play.*;
import play.mvc.*;
import models.*;
 
@With(Secure.class)
public class Blogs extends CRUD {

  @After(only={"list"})
  static void setRenderArgs(){
    List<Blog> blogs = Blog.findAll();
    renderJSON(blogs);
  }

}