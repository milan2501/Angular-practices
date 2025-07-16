import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';


@NgModule({
  declarations: [
    App,
    BasicHighlightDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
