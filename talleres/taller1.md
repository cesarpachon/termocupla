#Taller 1: captura de datos desde la linea de comandos

El objetivo de este taller es conectar la termocupla al computador a través del Arduino, y ejecutar un programa de javascript que leerá la temperatura y la imprimirá en la consola.

1. Leer el archivo arduino/README.md
2. estudiar el código del programa arduino/termocupla.ino
3. Instalar el arduino IDE en el computador. 
4. Abrir el Manager del arduino IDE y buscar la librería adicional para el sensor amplificador. 
5. Abrir el programa "termocupla.ino" en el Arduino IDE y cargarlo en el Arduino.
6. Conectar el arduino y verificar que esté imprimiendo temperaturas en la consola (usando el monitor de puertos de Arduino IDE).
7. Instalar el entorno de desarrollo para javascript "node.js" de acuerdo al archivo arduino/README.md
8. Estudiar el código del programa "arduino/termocupla.js"
9. instalar las dependencias para el programa "termocupla.js" utilizando el comando npm install.
10. ejecutar el programa termocupla.js usando la linea de comandos (node termocupla.js)
11. Verificar que esté imprimiendo valores de temperatura en la consola.


Siguientes pasos: 
12. Seleccionar un sensor diferente a la termocupla (fotocelda, presión, humedad, etc) 
13. Investigar sus características: 
- voltaje de operación.
- rango de trabajo.
- tipo de datos capturados (digital? analógico?)
14. Investigar cómo se conecta al arduino. 
- necesita una librería adicional? 
- se necesita algún chip extra, como el amplificador usado con la termocupla?
15. crear un programa derivado de "termocupla.ino" para leer del sensor seleccionado.
16. cargar el programa en la board arduino y verificar que funcione con el monitor de puertos de Arduino IDE.
17. crear un programa derivado de "termocupla.js" para leer del sensor seleccionado.
18. ejecutar el programa en línea de comandos y verificar que esté imprimiendo los datos esperados. 


