import { Component, Input } from '@angular/core';
import { TagModel } from './model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  @Input()
  tags: TagModel[];
}
