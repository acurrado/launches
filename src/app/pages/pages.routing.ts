import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: 'launches',
    component: PagesComponent,
  },
  {
    path: 'launches/detail/:flight_number/:rocket_id',
    component: DetailComponent,
    data: { titulo: 'Launch detail' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
