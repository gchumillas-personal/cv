import { Component } from '@angular/core';
import { environment as env } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  sections = [
    {
      title: 'Content Management System',
      description: 'Blah blah blah, blah blah blah',
      snapshots: [
        { src: 'data/images/axistools1.png', title: 'Listado de registros' },
        { src: 'data/images/axistools2.png', title: 'Editor de registros' },
        { src: 'data/images/axistools3.png', title: 'Editor de imágenes' },
        { src: 'data/images/axistools4.png', title: 'Editor de textos' },
        { src: 'data/images/axistools5.png', title: 'Editor de vídeos' }
      ]
    }
  ];

  getFullPath(src: string) {
    return [env.apiUrl, src].join('/');
  }
}
