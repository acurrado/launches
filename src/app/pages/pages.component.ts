import { Component, OnInit } from '@angular/core';
import { Launch } from '../models/launch.model';
import { LaunchesService } from '../services/launches.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  public launches: Launch[] = [];

  constructor(private postsService: LaunchesService) {
    this.postsService.getLaunches().subscribe((resp) => {
      this.launches = resp;
      console.log(this.launches);
    });
  }

  ngOnInit(): void {}
}
