import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Launch } from '../models/launch.model';
import { map } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class LaunchesService {
  constructor(private http: HttpClient) {}

  getLaunches() {
    const url = `${base_url}/launches`;

    return this.http.get<Launch[]>(url);
  }

  getRockets() {
    const url = `${base_url}/rockets`;

    return this.http.get<any[]>(url);
  }

  /* createPost() {
    const url = `${base_url}/posts`;

    const post: Post = new Post('hola', 5, 'título', 5);

    return this.http.post(`${base_url}/posts`, post);
  } */
}
