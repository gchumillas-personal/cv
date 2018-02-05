import { Component } from '@angular/core';
import { SectionModel } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bio: SectionModel = {
    description: `
    Durante más de quince años me he dedicado al desarrollo de aplicaciones
    de gestión y sitios web. Aunque he programado en diferentes plataformas
    y lenguajes, como Delphi o Java, actualmente centro mi atención en
    Angular y TypeScript, una combinación ideal para el desarrollo de
    aplicaciones web. No dude en contactar si desea
    conocer más información.`,
    tags: [
      {
        label: 'GitHub',
        text: 'https://github.com/gchumillas',
        link: 'https://github.com/gchumillas',
        isExternalLink: true
      },
      {
        label: 'LinkedIn',
        text: 'https://linkedin.com/in/gonzalo-chumillas-21326110b/',
        link: 'https://linkedin.com/in/gonzalo-chumillas-21326110b/',
        isExternalLink: true
      },
      {
        label: 'Skype',
        text: '685 510117',
        link: 'skype:gonzalo.chumillas',
        icon: 'fa-phone'
      },
      {
        label: 'Email',
        text: 'gonzalo.chumillas@email.com',
        link: 'mailto:gonzalo.chumillas@email.com',
        icon: 'fa-envelope'
      }
    ]
  };

  sections: SectionModel[] = [
    {
      title: 'Gestor de Contenidos',
      description: `Aplicación altamente configurable para gestionar el contenido de cualquier sitio web,
      sin importar cómo haya sido desarrollado. Esta aplicación nació de la necesidad de crear un gestor
      de contenidos universal. Entre muchas de sus funcionalidades, permite la edición de textos, imágenes y vídeos.`,
      tags: [
        {
          label: 'Cliente',
          text: 'Axis-Studios',
          link: 'http://www.axis-studios.com',
          isExternalLink: true
        },
        {
          label: 'Demo',
          text: 'http://cms.gchumilas.com',
          link: 'http://cms.gchumilas.com',
          isExternalLink: true
        },
        {
          label: 'Tecnologías',
          text: 'PHP, MySQL, jQuery, XML, CSS3, HTML5'
        }
      ],
      snapshots: [
        { src: 'data/images/axistools1.png', caption: 'Listado de registros' },
        { src: 'data/images/axistools2.png', caption: 'Editor de registros' },
        { src: 'data/images/axistools3.png', caption: 'Editor de imágenes' }
      ]
    }
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
}
