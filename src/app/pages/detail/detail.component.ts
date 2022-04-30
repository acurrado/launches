import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, map, tap } from 'rxjs';
import { LaunchesService } from 'src/app/services/launches.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public resultado: any;
  public mostrarResultado: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private launchService: LaunchesService
  ) {}

  ngOnInit(): void {
    this.mostrarResultado = false;

    this.route.params.subscribe(({ flight_number, rocket_id }) => {
      console.log(flight_number);
      console.log(rocket_id);

      forkJoin([
        this.launchService
          .getLaunches()
          .pipe(
            map((res) =>
              res.filter(
                (l) => Number(l.flight_number) === Number(flight_number)
              )
            )
          ),
        this.launchService
          .getRockets()
          .pipe(map((resp) => resp.filter((r) => r.rocket_id === rocket_id))),
      ]).subscribe((allResults) => {
        console.log(allResults);
        this.mostrarResultado = true;

        this.resultado = {
          flight_number: 39,
          mission_name: 'NROL-76',
          launch_date_unix: 1493637300,
          details: '',
          rocket: {
            rocket_id: 'falcon1',
            rocket_name: 'Falcon 1',
            active: true,
            cost_per_launch: 6700000,
            company: 'SpaceX',
          },
        };
      });
    });
  }
}
