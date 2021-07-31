import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { PastLaunchesListGQL } from '../services/spacexGraphql.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchListComponent {
  constructor(private readonly pastLaunchesService: PastLaunchesListGQL) {}

  myImgUrl: string =
    'http://www.hallens.co.uk/wp-content/themes/consultix/images/no-image-found-360x260.png';

  pastLaunches$ = this.pastLaunchesService
    .fetch({ limit: 30 })
    .pipe(map((res) => res.data.launchesPast));
}
