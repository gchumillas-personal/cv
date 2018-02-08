import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TagModel } from './model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  @Input()
  tags: TagModel[];

  constructor(private _sanitizer: DomSanitizer) { }

  sanitize(url: string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
}
