import { Component } from '@angular/core';
import { SectionModel } from './model';
import { config } from '../config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  email = config.email;
  phone = config.phone;
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
        isExternalLink: true,
        icon: 'fa-linkedin',
        isIconVisible: false
      },
      {
        label: 'LinkedIn',
        text: 'https://linkedin.com/in/gonzalo-chumillas-21326110b/',
        link: 'https://linkedin.com/in/gonzalo-chumillas-21326110b/',
        isExternalLink: true,
        icon: 'fa-github',
        isIconVisible: false
      },
      {
        label: 'Skype',
        text: config.phone,
        link: `skype:${config.skypeId}`,
        icon: 'fa-phone',
        isIconVisible: true
      },
      {
        label: 'Email',
        text: config.email,
        link: `mailto:${config.email}`,
        icon: 'fa-envelope',
        isIconVisible: true
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
          link: 'http://axis-studios.com',
          isExternalLink: true
        },
        {
          label: 'Demo',
          text: 'http://gchumilas.com/cms',
          link: 'http://gchumilas.com/cms',
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
    },
    {
      title: 'Organizador de fotografías',
      description: `Me entusiasma la fotografía y, al no encontrar un software
      adaptado a mis necesidades, desarrollé esta aplicación para gestionar
      mis fotografías. La aplicación fue desarrollada principalmente
      en Angular y TypeScript.`,
      tags: [
        {
          label: 'Cliente',
          text: 'Proyecto personal',
          isExternalLink: true
        },
        {
          label: 'Repositorio',
          text: 'gchumillas/petitphotobox',
          link: 'https://github.com/gchumillas/petitphotobox',
          isExternalLink: true
        },
        {
          label: 'Tecnologías',
          text: 'Angular, TypeScript, PHP, MySQL, CSS3, HTML5'
        }
      ],
      snapshots: [
        { src: 'data/images/photobox1.png', caption: 'Categoría' },
        { src: 'data/images/photobox2.png', caption: 'Nueva Categoría' },
        { src: 'data/images/photobox3.png', caption: 'Subir imágenes' },
      ]
    }
  ];
}
