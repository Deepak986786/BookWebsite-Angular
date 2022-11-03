import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { NotFoundScreenComponent } from './screens/not-found-screen/not-found-screen.component';
import { RoutesModule } from '../routes/routes.module';
import { UsersModule } from '../users/users.module';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
    HomeScreenComponent,
    NotFoundScreenComponent
  ],
  imports: [
    CommonModule,
    RoutesModule,
    UsersModule,
    UtilsModule

  ],
  exports:[
    AppHeaderComponent,
    AppFooterComponent,
    HomeScreenComponent,
    NotFoundScreenComponent
  ]
})
export class ShellModule { }
