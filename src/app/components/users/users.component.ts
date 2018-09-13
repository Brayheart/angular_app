import { Component, OnInit } from "@angular/core";

import { User } from "../../modals/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User = {
    id: 1,
    username: "",
    phone: null,
    role: "",
    name: "",
    image: "",
    editable: false
  };

  ngOnInit() {
    this.users = [
      {
        id: 1,
        username: "mathilde",
        phone: 992312312,
        role: "CEO",
        name: "Mathilde Saylors",
        image: "http://loremflickr.com/600/600/cat",
        editable: false
      },
      {
        id: 2,
        username: "alia",
        phone: 986733455,
        role: "Designer",
        name: "Alia Ginder",
        image: "http://loremflickr.com/600/600/dog",
        editable: false
      },
      {
        id: 3,
        username: "freeman",
        phone: 971232343,
        role: "Developer",
        name: "Freeman Litten",
        image: "http://loremflickr.com/600/600/rabbit",
        editable: false
      },
      {
        id: 4,
        username: "piedad",
        phone: 992362345,
        role: "Sales",
        name: "Piedad Dewald ",
        image: "http://loremflickr.com/600/600/bird",
        editable: false
      },
      {
        id: 5,
        username: "beau",
        phone: 912342303,
        role: "PR",
        name: "Beau Siegel",
        image: "http://loremflickr.com/600/600/whale",
        editable: false
      }
    ];
    let editable = false;
  }

  onSubmit(e) {
    e.preventDefault();
  }

  deleteUser(e) {
    var index = this.users.indexOf(e);
    this.users.splice(index, 1);
  }

  setEditable(e) {
    var index = this.users.indexOf(e);
    this.users[index].editable = true;
  }

  editUser(e) {
    var index = this.users.indexOf(e);
    this.users[index].editable = false;
    this.users[index] = e;

    this.user = {
      name: "",
      username: "",
      phone: null,
      role: "",
      id: null,
      editable: false
    };
  }

  addUser() {
    this.users.unshift(this.user);

    this.user = {
      name: "",
      username: "",
      phone: null,
      role: "",
      id: null,
      editable: false
    };
  }
}
