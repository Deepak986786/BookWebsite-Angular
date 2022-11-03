import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorAddScreenComponent } from './screens/author-add-screen/author-add-screen.component';
import { AuthorEditScreenComponent } from './screens/author-edit-screen/author-edit-screen.component';
import { AuthorListScreenComponent } from './screens/author-list-screen/author-list-screen.component';
import { AuthorDetailsScreenComponent } from './screens/author-details-screen/author-details-screen.component';
import { AuthorManageScreenComponent } from './screens/author-manage-screen/author-manage-screen.component';
import { RoutesModule } from '../routes/routes.module';
import { UtilsModule } from '../utils/utils.module';
import { AuthorCardComponent } from './components/author-card/author-card.component';
import { AuthorEditorComponent } from './components/author-editor/author-editor.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthorAddScreenComponent,
    AuthorEditScreenComponent,
    AuthorListScreenComponent,
    AuthorDetailsScreenComponent,
    AuthorManageScreenComponent,
    AuthorCardComponent,
    AuthorEditorComponent,
    AuthorDetailsComponent
  ],
  imports: [
    CommonModule,
    RoutesModule,
    UtilsModule,
    FormsModule
  ]
})
export class AuthorsModule { }
