import { Component, OnInit } from "@angular/core";
import { Post } from "../../modals/Post";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: Post[];
  post: Post = {
    name: "",
    message: "",
    date: null,
    editable: false
  };

  ngOnInit() {
    this.posts = [
      {
        name: "Mathilde",
        message:
          "eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in",
        date: new Date(),
        editable: false
      },
      {
        name: "Alia",
        message:
          "eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in",
        date: new Date(),
        editable: false
      },
      {
        name: "Freeman",
        message:
          "eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in",
        date: new Date(),
        editable: false
      },
      {
        name: "piedad",
        message:
          "eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in",
        date: new Date(),
        editable: false
      }
    ];
  }

  onSubmit(e) {
    e.preventDefault();
  }

  deletePost(e) {
    var index = this.posts.indexOf(e);
    this.posts.splice(index, 1);
  }

  setEditable(e) {
    var index = this.posts.indexOf(e);
    this.posts[index].editable = true;
  }

  editPost(e) {
    var index = this.posts.indexOf(e);
    this.posts[index].editable = false;
    this.posts[index] = e;

    this.post = {
      name: "",
      message: "",
      date: null,
      editable: false
    };
  }

  addPost() {
    this.posts.unshift(this.post);

    this.post = {
      name: "",
      message: "",
      date: new Date(),
      editable: false
    };
  }
}
