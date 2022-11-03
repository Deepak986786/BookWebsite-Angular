import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFavoriteScreenComponent } from './screens/user-favorite-screen/user-favorite-screen.component';
import { UserLoginScreenComponent } from './screens/user-login-screen/user-login-screen.component';
import { UserRegisterScreenComponent } from './screens/user-register-screen/user-register-screen.component';
import { UserManageScreenComponent } from './screens/user-manage-screen/user-manage-screen.component';
import { RouterModule } from '@angular/router';
import { MembershipComponent } from './components/membership/membership.component';
import { UserProfileScreenComponent } from './screens/user-profile-screen/user-profile-screen.component';
import { UtilsModule } from '../utils/utils.module';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { FavoriteCardComponent } from './components/favorite-card/favorite-card.component';
import { FavoriteAuthorCardComponent } from './components/favorite-author-card/favorite-author-card.component';



@NgModule({
  declarations: [
    UserFavoriteScreenComponent,
    UserLoginScreenComponent,
    UserRegisterScreenComponent,
    UserManageScreenComponent,
    MembershipComponent,
    UserProfileScreenComponent,
    ProfileCardComponent,
    FavoriteCardComponent,
    FavoriteAuthorCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilsModule
  ],
  exports:[
    MembershipComponent
  ]
})
export class UsersModule { }
