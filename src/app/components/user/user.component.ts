import { Component } from "@angular/core";

import { User } from "../../modals/User";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent {
  user: User;

  constructor() {
    this.user = {
      id: 1,
      username: "mathilde",
      phone: 992312312,
      role: "CEO",
      name: "Mathilde Saylors",
      editable: false
    };
  }
}
