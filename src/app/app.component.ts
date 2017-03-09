import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input()
  title = 'Select A Prompt';

  promptSelected(prompt) {
    this.title = prompt;
  }
}
