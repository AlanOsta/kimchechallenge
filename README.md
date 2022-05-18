
Nombre del postulante: Alan Ostaszynski

Link a la app en produccion: https://kimche.osta.com.ar/

Pregunta:
"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

Solución propuesta:
Creo que es una pregunta capciosa y acá expongo mi explicación:

90 millones de filas para registrar la información sobre la asistencia diaria de un niño me parece una cantidad absurda y creo que la pregunta busca justamente eso: encontrar "sentido común" al set de datos que evaluamos.

Partimos de la base de que es un niño de edad escolar, por lo tanto, su edad está comprendida entre los 6 y los 12 años con cierto margen de error de acuerdo a factores socio/políticos de cada país. Por lo tanto, nuestra BDD tiene un alcance definido de aproximadamente 6 años.

Si bien el enunciado habla de asistencia diaria, podríamos analizar el peor caso y asumir que la asistencia se toma por materia/bloque de estudio. Continuando el análisis para el peor caso de un niño que cumple un horario de tres bloques de 80 minutos por la mañana y tres bloques de 80 minutos por la tarde arribamos a la conclusión de que se le toma asistencia 6 veces por día, tres veces por la mañana y tres veces por la tarde.

Por lo tanto, en un año escolar promedio, que podría establecerse en 190 días/año, caben 1140 tomas de asistencia. Teniendo en cuenta la cantidad de años previamente definida de un alumno promedio podemos establecer que 190 días x 6 veces por día x 6 años nos da como resultado 6840 tomas de asistencia en toda su instrucción primaria. Cifra abismalmente lejana a la dada en el enunciado.

Entonces... si el caso no tiene aplicación real, cual es la respuesta?: "Divide y vencerás" 

Sin ver cómo es que se llegó a una tabla con 90 millones de filas me es difícil dar una solución concreta. Solo puedo suponer que se están volcando en una única tabla datos que podrían segmentarse en un esquema de tablas interrelacionadas mucho más eficiente.
Las tablas pueden definirse por alumno, año, materia, turno, etc. y establecer relaciones entre sí. Incluso si llegara a darse el caso de una consulta con 90 millones de filas como respuesta se podría paginar la información para bajar los tiempos de servicio.