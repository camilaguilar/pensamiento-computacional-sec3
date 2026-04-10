# pensamiento computacional- p5.js / sec3
## Sobre este repositorio
Ejercicios realizados en clases       
Entregas/Encargos
# *solemne 1*
Para la elección de la obra, me fijé en que tuviera una estructura repetitiva, porque sabía que tendría que traducir a código. Elegí esta en específico debido a que tenía módulos definidos (vertical, horizontal y diagonales) y una paleta de colores diversa en su gama.Al analizarla en illustrator, primero me enfoqué en separar la imagen en partes. Identifiqué los bordes, después el rectángulo principal y luego los módulos internos.Todo funcionaba con proporciones bastante claras, los márgenes eran constantes y los módulos tienen tamaños similares entre sí. A su vez Observé que las franjas no eran líneas, sino bloques de color que ocupaban el espacio, lo que fue importante después al programar.Para llevar la imagen a coordenadas (X, Y), usé el plano de p5.js como referencia. Llamé al comando *winMouseX() y winMouseY()* Fui ubicando cada elemento según su distancia. Usé valores fijos para no perderme y me ayudé con el puntero del mouse mostrando las coordenadas en pantalla para saber exactamente dónde posicionar cada rectángulo o línea. Fui traduciendo lo visual a números, probando y ajustando hasta que coincidiera con la imagen.Tuve varias dificultades. La principal fue el módulo diagonal, porque al principio intenté hacerlo rotando figuras y no quedaba dentro del margen o se veía cortado. También me pasó que las franjas se veían como líneas separadas y no como bloques continuos, lo que hacía que no se pareciera a la imagen original.Para resolver esos problemas.Probé formas más básicas como usar líneas con mayor grosor o repetir rectángulos de forma más controlada. También ajusté los valores varias veces hasta que las franjas quedaran juntas y cubrieran bien el espacio. Fue un proceso de prueba y error.

**Sol Lewitt** *Bands of Color in Four Directions*

![iamgen](https://www.sollewittprints.org/wp-content/uploads/2019/02/lewitt_w_16_image2__800_.jpg)

**LINK P5.JS**
https://editor.p5js.org/camila.aguilar2/sketches/7ri6UH7vf


## Sketch 1 — Mi primer p5.js
— Qué hice primero:    
Lo primero que realice fue una grilla vía illustrator sobre la obra que seleccione, esto me ayudo a visualizar de mejor manera las formas, la cantidad especifica que necesitaba, como distribuirlas en el plano, que figuras utilizar, además de todos los códigos especificos de color.

— Qué intenté hacer:      
Personalmente, aún me cuesta demasiado distribuir las figuras en el background acorde al plano y encontré un código que me permitió ver en que punto del plano se encontraba el puntero del mouse, eso facilito la tarea de situar las franjas de color en el espacio.

— Qué aprendí:
Sobre códigos de ubicación, figuras y color.

— No me funcionó:
La obra original lleva una diagonales en su tercer y cuarto cuadrante, a  pesar de intentarlo varias veces no conseguí que estas se integraran dentro de un cuadro, se interponian sobre las otras figuras, asi que decidí repitir el patrón vertical y horizontal de los dos cuadrantes anteriorescon su respectivo patrón de color.

