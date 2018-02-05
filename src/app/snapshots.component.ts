import { Component, Input } from '@angular/core';
import { SnapshotModel } from './model';
import { environment as env } from '../environments/environment';

@Component({
  selector: 'app-snapshots',
  templateUrl: './snapshots.component.html',
  styleUrls: ['./snapshots.component.scss']
})
export class SnapshotsComponent {
  @Input()
  snapshots: SnapshotModel[];

  getFullPath(src: string) {
    return [env.apiUrl, src].join('/');
  }
}
