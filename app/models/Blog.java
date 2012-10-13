package models;
 
import java.util.*;
import javax.persistence.*;
 
import play.db.jpa.*;
import play.data.validation.*;
 
@Entity
public class Blog extends Model {

  public String title;
  public String content; 
    
  public Blog(String title, String content) {
    this.title = title;
    this.content = content;
  }

}