import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Tecnologia {
  readonly nombre: string;
  readonly inicial: string;
  readonly clase: string;
  readonly descripcion: string;
}

interface Cualidad {
  readonly num: string;
  readonly titulo: string;
  readonly texto: string;
}

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class PresentacionComponent {

  readonly anio = new Date().getFullYear();

  readonly tecnologias: readonly Tecnologia[] = [
    {
      nombre: 'Angular',
      inicial: 'A',
      clase: 'mosaico mosaico--angular',
      descripcion: 'Aplicaciones de una página con componentes reutilizables, una arquitectura ordenada y una experiencia de usuario fluida.'
    },
    {
      nombre: 'Java',
      inicial: 'J',
      clase: 'mosaico mosaico--java',
      descripcion: 'Lógica de negocio en el servidor: servicios robustos y mantenibles que sostienen el producto en producción.'
    },
    {
      nombre: 'Bases de datos',
      inicial: 'DB',
      clase: 'mosaico mosaico--datos',
      descripcion: 'Diseño de esquemas, consultas eficientes e integridad de los datos para que la información sea siempre fiable.'
    }
  ];

  readonly cualidades: readonly Cualidad[] = [
    {
      num: '01',
      titulo: 'Resolución de problemas',
      texto: 'Desafíos complejos los descompongo en pasos claros hasta llegar a una solución simple y medible.'
    },
    {
      num: '02',
      titulo: 'Trabajo en equipo',
      texto: 'Código compartido, revisiones honestas y decisiones tomadas en conjunto con el equipo.'
    },
    {
      num: '03',
      titulo: 'Comunicación',
      texto: 'Explico las decisiones técnicas con claridad, tanto con desarrolladores como con perfiles no técnicos.'
    },
    {
      num: '04',
      titulo: 'Aprendizaje continuo',
      texto: 'La industria avanza rápido: me mantengo actualizado y adopto lo nuevo donde aporta valor real.'
    },
    {
      num: '05',
      titulo: 'Atención a la calidad',
      texto: 'Código limpio, pruebas donde importan y detalles cuidados en cada entrega.'
    },
    {
      num: '06',
      titulo: 'Compromiso con los plazos',
      texto: 'Organizo el trabajo para entregar a tiempo sin sacrificar la calidad.'
    }
  ];

}
