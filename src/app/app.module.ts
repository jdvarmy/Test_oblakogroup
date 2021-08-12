import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { ButtonComponent } from './ui/button/button.component';
import { TableComponent } from './ui/table/table.component';
import { TextComponent } from './ui/text/text.component';
import { InputComponent } from './ui/input/input.component';
import { InputSearchComponent } from './ui/input-search/input-search.component';
import { InputListComponent } from './ui/input-list/input-list.component';
import { IconComponent } from './ui/icon/icon.component';
import { RadioGroupComponent } from './ui/radio-group/radio-group.component';
import { CheckBoxGroupComponent } from './ui/check-box-group/check-box-group.component';
import { ContextMenuComponent } from './ui/context-menu/context-menu.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ButtonComponent, TableComponent, TextComponent, InputComponent, InputSearchComponent, InputListComponent, IconComponent, RadioGroupComponent, CheckBoxGroupComponent, ContextMenuComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
