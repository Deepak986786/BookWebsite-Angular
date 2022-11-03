import { Route } from "@angular/router";
import { AuthorAddScreenComponent } from "../authors/screens/author-add-screen/author-add-screen.component";
import { AuthorDetailsScreenComponent } from "../authors/screens/author-details-screen/author-details-screen.component";
import { AuthorEditScreenComponent } from "../authors/screens/author-edit-screen/author-edit-screen.component";
import { AuthorListScreenComponent } from "../authors/screens/author-list-screen/author-list-screen.component";
import { AuthorManageScreenComponent } from "../authors/screens/author-manage-screen/author-manage-screen.component";
import { BookAddScreenComponent } from "../books/screens/book-add-screen/book-add-screen.component";
import { BookDetailsScreenComponent } from "../books/screens/book-details-screen/book-details-screen.component";
import { BookEditScreenComponent } from "../books/screens/book-edit-screen/book-edit-screen.component";
import { BookListScreenComponent } from "../books/screens/book-list-screen/book-list-screen.component";
import { BookManageScreenComponent } from "../books/screens/book-manage-screen/book-manage-screen.component";
import { HomeScreenComponent } from "../shell/screens/home-screen/home-screen.component";
import { NotFoundScreenComponent } from "../shell/screens/not-found-screen/not-found-screen.component";
import { UserFavoriteScreenComponent } from "../users/screens/user-favorite-screen/user-favorite-screen.component";
import { UserLoginScreenComponent } from "../users/screens/user-login-screen/user-login-screen.component";
import { UserManageScreenComponent } from "../users/screens/user-manage-screen/user-manage-screen.component";
import { UserProfileScreenComponent } from "../users/screens/user-profile-screen/user-profile-screen.component";
import { UserRegisterScreenComponent } from "../users/screens/user-register-screen/user-register-screen.component";


export const appRoutes : Route[]=[

    {path:'' , component: HomeScreenComponent} ,

    // authors
    { path:'author/list' , component: AuthorListScreenComponent},
    {path:'author/add' , component: AuthorAddScreenComponent},
    {path: 'author/details/:id' , component:AuthorDetailsScreenComponent},
    {path:'author/edit', component:AuthorEditScreenComponent},
    {path:'author/manage' , component: AuthorManageScreenComponent},

    // books
    {path:'book/list' , component: BookListScreenComponent},
    {path:'book/details/:id', component:BookDetailsScreenComponent},
    {path:'book/add', component:BookAddScreenComponent},
    {path:'book/edit', component:BookEditScreenComponent},
    {path:'book/manage', component:BookManageScreenComponent},

    // users
    {path:'user/login' , component:UserLoginScreenComponent},
    {path:'user/register', component: UserRegisterScreenComponent},
    {path:'user/profile/:id', component:UserProfileScreenComponent},
    {path:'user/favorites', component:UserFavoriteScreenComponent},
    {path:'user/manage', component:UserManageScreenComponent},

    // handle all other routes
    {path:'**', component: NotFoundScreenComponent}
]