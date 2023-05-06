import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdviceGeneratorComponent } from './advice-generator/advice-generator.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [AdviceGeneratorComponent, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
