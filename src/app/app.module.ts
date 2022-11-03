import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { RoutesModule } from './routes/routes.module';
import { SimpleAuthorHttpService } from './services/apiservices/http-author-service';
import { SimpleBookHttpService } from './services/apiservices/http-book-service';
import { SimpleUserHttpService } from './services/apiservices/http-user-service';
import { ShellModule } from './shell/shell.module';
import { UsersModule } from './users/users.module';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RoutesModule,
    BrowserModule,
    ShellModule,
    UtilsModule,
    UsersModule,
    BooksModule,
    AuthorsModule,
    FormsModule
    
  ],
  providers: [
    {
      provide:"UserService",
      useClass: SimpleUserHttpService
    },
    {
      provide : "AuthorService",
      useClass: SimpleAuthorHttpService
    },
    {
      provide: "BookService",
      useClass: SimpleBookHttpService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
