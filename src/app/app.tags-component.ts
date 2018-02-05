import { Component, Input } from '@angular/core';
import { TagModel } from './model';

@Component({
  selector: 'app-tags',
  templateUrl: './app.tags-component.html',
  styleUrls: ['./app.tags-component.scss']
})
export class TagsComponent {
  @Input()
  tags: TagModel[];
}
