import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IssueService } from './issue.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: IssueService,
      useValue: new IssueService('test'),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
