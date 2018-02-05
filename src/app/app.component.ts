import { Component } from '@angular/core';
import { environment as env } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.component.tablet.scss']
})
export class AppComponent {
  title = 'app';
  description = `
    Durante más de quince años me he dedicado al desarrollo de aplicaciones y
    sitios web. Aunque he programado en diferentes plataformas y lenguajes,
    como Delphi o Java, actualmente centro mi atención en Angular y TypeScript,
    una combinación ideal para el desarrollo de aplicaciones web.

    No dude contactar si desea conocer más información`;

  sections = [
    {
      title: 'Gestor de Contenidos',
      description: `Aplicación altamente configurable para gestionar el contenido de cualquier sitio web,
      sin importar cómo haya sido desarrollado. Esta aplicación nació de la necesidad de crear un gestor
      de contenidos universal. Entre muchas de sus funcionalidades, permite la edición de textos, imágenes y vídeos.`,
      client: {
        name: 'Axis-Studios',
        url: 'http://www.axis-studios.com',
        demo: 'http://axistools.gchumillas.com'
      },
      snapshots: [
        { src: 'data/images/axistools1.png', title: 'Listado de registros' },
        { src: 'data/images/axistools2.png', title: 'Editor de registros' },
        { src: 'data/images/axistools3.png', title: 'Editor de imágenes' }
      ]
    },
    /*
    {
      title: 'Organizador de fotografías',
      description: 'blah blah blah...',
      client: {
        name: 'Projecto Personal',
        url: 'http://www.petitphotobox.com',
        demo: 'axistools.gchumillas.com'
      },
      snapshots: [
        { src: 'data/images/photobox1.png', title: 'Categoría' },
        { src: 'data/images/photobox2.png', title: 'Nueva Categoría' },
        { src: 'data/images/photobox3.png', title: 'Subir imágenes' },
      ]
    }*/
  ];

  getFullPath(src: string) {
    return [env.apiUrl, src].join('/');
  }
}
