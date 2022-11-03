import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from '../routes/routes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CompareDirective } from './validators/compare.directive';
import {HttpClientModule} from '@angular/common/http';
import { PopupComponent } from './components/popup/popup.component';
import { Bs5AutocompleteComponent } from './components/bs5-autocomplete/bs5-autocomplete.component';
import { TrimPipe } from './pipes/trim.pipe';
import { InfoLineComponent } from './components/info-line/info-line.component';
import { TagListComponent } from './components/tag-list/tag-list.component'



@NgModule({
  declarations: [
    CompareDirective,
    PopupComponent,
    Bs5AutocompleteComponent,
    TrimPipe,
    InfoLineComponent,
    TagListComponent
  ],
  imports: [
    CommonModule,
    RoutesModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    ReactiveFormsModule,
    CompareDirective,
    HttpClientModule,
    PopupComponent,
    TrimPipe,
    InfoLineComponent,
    TagListComponent
  ]
})
export class UtilsModule { }
