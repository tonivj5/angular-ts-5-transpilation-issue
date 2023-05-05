import { Component, Optional } from '@angular/core';
import { IssueService } from './issue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'babel-issue';

  constructor(public readonly issue: IssueService) {}
}
