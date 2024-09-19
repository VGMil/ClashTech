import { SkillModel } from "../../models/skillModel";

export const skillsData: { [key: string]: SkillModel[] } = {
  'Guerrero': [
    new SkillModel('Poder Avanzado',
      'Arma Secreta',
      30,
      'Todos los miembros del equipo del guerrero reciben una pista sobre una pregunta.'),
    new SkillModel('Poder basico',
      'PROTEGER',
      30,
      'El guerrero puede recibir hasta 10 de daño en lugar de su compañero de equipo, y recibe solo el 80% del daño inicial.'),
    new SkillModel('Poder intermedio',
      'Emboscada',
      25,
      'El guerrero puede disponer de un día adicional para una tarea.'),
    new SkillModel('Poder Avanzado',
      'ASALTO FRONTAL',
      30,
      'Todos los miembros del equipo del guerrero disponen de un día adicional para una tarea.')
  ],
  'Mago': [
    new SkillModel('Poder Avanzado',
      'CÍRCULO DE MAGO',
      50,
      'Todos los miembros del equipo del mago pueden saltarse parte de una tarea.'),
    new SkillModel('Poder basico',
      'TRANSFERENCIA DE MANÁ',
      35,
      'Todos los miembros del equipo, excepto los magos, ganan 7 PA.'),
    new SkillModel('Poder basico',
      'INVISIBILIDAD',
      20,
      'El mago dispone de una hora adicional para entregar una tarea.'),
    new SkillModel('Poder Avanzado',
      'CLARIVIDENCIA',
      40,
      'Todos los miembros del equipo del mago disponen de una hora adicional para entregar una tarea.')
  ],
  'Curandero': [
    new SkillModel('Poder intermedio',
      'RESUCITAR',
      25,
      'Cuando un compañero de equipo (sin incluir al sanador) cae a 0 PS, evita todas las penalizaciones y resucita con 1 PS.'),
    new SkillModel('Poder basico',
      'FE ARDIENTE',
      10,
      'El sanador tiene una reunión de 10 minutos con el profesor.'),
    new SkillModel('Poder avanzado',
      'ORACIÓN',
      30,
      'El equipo del sanador puede trabajar en conjunto en una tarea individual.'),
    new SkillModel('Poder avanzado',
      'CÍRCULO DE CURACIÓN',
      30,
      'Todos los miembros del equipo, excepto el sanador, ganan 15 PS.')
  ]

};
