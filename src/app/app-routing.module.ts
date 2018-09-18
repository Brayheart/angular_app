import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UsersComponent } from "./components/users/users.component";
import { PostsComponent } from "src/app/components/posts/posts.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "admin",
    component: UsersComponent
  },
  {
    path: "posts",
    component: PostsComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
