import { Component } from '@angular/core';
import { Launch } from './models/launch.model';
import { LaunchesService } from './services/launches.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'deptTechnicalInterview';

  public launches: Launch[] = [];

  constructor() {
    /* this.postsService.createPost().subscribe((resp) => {
      console.log(resp);
    }); */
  }
}
