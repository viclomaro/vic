import { Injectable } from '@angular/core';
import { Post } from './models/post';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  arrPost: Post[];
  arrPostLateral: Post[];
  id: number;

  constructor() {
    this.arrPost = [
      new Post('21 lugares recomendados por fotógrafos', 'Componer es sin duda una de las tareas con las que todo fotógrafo debe de lidiar para conseguir buenas fotografías. Sabemos que aprender las reglas básicas de composición es algo imprescindible por lo que todo buen fotógrafo debe de pasar. Pero además de las reglas básicas hay trucos que nos van a ayudar mucho en la práctica.', 'Mario Perez', '../../assets/images/blog/foto.png', 'tecnicas', 0),
      new Post('Trípode f-stop para fotógrafos. modelo Ajna', 'Atención fotógrafos: Este trípode no es para ir vestidos de guapos y pasear por la ciudad con un cuerpo y un objetivo. Este trípode, si se le quiere sacar partido, deberás usarlo en condiciones atmosféricas desfaborables y terrenos con desniveles abultados', 'Pilar Jerico', '../assets/images/blog/foto2.jpg', 'viaje', 1),
      new Post('FOTOCLASS el curso de Fotografía online con tutor', 'Fotoclass es un curso online de fotografía para todos aquellos que queráis dominar vuestra cámara. Un curso con tutor, lo que significa que os ofrecemos un seguimiento y una orientación constante. El curso tiene una duración de 5 semanas.', 'Raul Alvarez', '../assets/images/blog/foto3.jpg', 'tecnica', 3),
    ]

    this.arrPostLateral = [

      new Post('Fotografiando Islandia', 'Durante una semana he recorrido el oeste y sur de Islandia con la intención de fotografiar las localizaciones más emblemáticas.', 'Pedro Zuazua', '../assets/images/blog/fotografia3.jpg', 'viaje', 2),

      new Post('6 Trucos para mejorar tu composición fotográfica', 'El blog Alterconsumismo cumple 6 años proponiendo un consumo alternativo y responsable', 'Anna Argemi', '../assets/images/blog/foto5.jpg', 'tecnologia', 4),
      new Post('Viajeros incansables...', 'Hoy martes y el próximo 2 de marzo se celebran las Jornadas IATI de los Grandes Viajes, donde 24 aventureros relatan sus experiencias por el mundo', 'Isidoro Merino', '../assets/images/blog/fotografia1.png', 'viaje', 5),
      new Post('Los 20 blogs de viajes en español más influyentes para 2019', 'Una lista con las mejores bitácoras viajeras hechas en España en función de su importancia en el buscador de Google. Todas, con grandes cantidades de información útil y miles de fieles seguidores', 'Paco Nadal', '../assets/images/blog/fotografia2.jpg', 'viaje', 6),

    ]

  }


  // Recuperamos todos los post centrales
  getAll(): Post[] {
    return this.arrPost;
  }


  // Recuperamos todos los post laterales
  getAllLateral(): Post[] {
    return this.arrPostLateral;
  }


}