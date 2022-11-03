import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListScreenComponent } from './screens/book-list-screen/book-list-screen.component';
import { BookEditScreenComponent } from './screens/book-edit-screen/book-edit-screen.component';
import { BookDetailsScreenComponent } from './screens/book-details-screen/book-details-screen.component';
import { BookAddScreenComponent } from './screens/book-add-screen/book-add-screen.component';
import { BookManageScreenComponent } from './screens/book-manage-screen/book-manage-screen.component';
import { RoutesModule } from '../routes/routes.module';
import { UtilsModule } from '../utils/utils.module';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookEditorComponent } from './components/book-editor/book-editor.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  
    BookListScreenComponent,
       BookEditScreenComponent,
       BookDetailsScreenComponent,
       BookAddScreenComponent,
       BookManageScreenComponent,
       BookCardComponent,
       BookDetailsComponent,
       BookEditorComponent
  ],
  imports: [
    CommonModule,
    RoutesModule,
    UtilsModule,
    FormsModule
  ]
})
export class BooksModule { }
