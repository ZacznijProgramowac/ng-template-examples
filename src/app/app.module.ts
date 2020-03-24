import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateSelectorComponent } from './template-selector/template-selector.component';
import { TemplateAttributeComponent } from './template-attribute/template-attribute.component';
import { TemplateCssComponent } from './template-css/template-css.component';
import { TemplateMoreAttributesComponent } from './template-more-attributes/template-more-attributes.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateSelectorComponent,
    TemplateAttributeComponent,
    TemplateCssComponent,
    TemplateMoreAttributesComponent,
    TemplateComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
