#Termocupla - Arduino

##Conexión al arduino UNO del Max6675k

- VCC = 5V
- GND = GND

- SO = Pin 8
- CS = Pin 9
- CLK = Pin 10

## Descripción del programa
Se instala un pequeño programa en "C" para el Arduino, cuya función es leer cada diez segundos la temperatura del sensor, y escribirla por el puerto serial, en el siguiente formato: 

hora:minuto:segundo = temperatura

la temperatura se va a escribir en grados centígrados. 

## Requerimientos para el programa
El programa se instala a través de la IDE de Arduino, pero antes hay que instalar en la IDE la librería que controla el chip amplificador MAX6675K. 
Esto se hace a través de la opción Manager de la IDE de Arduino, que permite instalar librerías adicionales con un buscador incorporado. 

## Descripción del código
Ver los comentarios dentro del archivo [termocupla.ino](termocupla.ino)


## Ejecución del programa
Tan pronto el arduino esté conectado al cable USB del computador, empezará a enviar información de temperatura.
Para poder verla, se puede usar el Monitor de Puerto Serial que viene disponible en la IDE de Arduino. 
Pero como se trata de escribir en un puerto estándar, también se puede hacer con cualquier herramienta o comando para leer los puertos.

En cualquier caso, es necesario conocer la dirección (identificador) del puerto al que está conectado el arduino. Esto se puede hacer desde el Monitor de Puerto Serial del IDE Arduino. 

Por ejemplo, asi es como lucen las direcciones de un puerto serial USB en Linux:
*/dev/ttyACM0*

y en Mac Osx: 
*/dev/cu.usbmodem14101*

Estas direcciones variarán según el computador y el conector USB utilizado. 

### Ejecución por linea de comando
Se incluye un pequeño programa de Javascript que lee constantemente del puerto serial e imprime en la consola lo que reciba desde el arduino. 

para ejecutarlo, es necesario que el computador tenga instalado el ambiente de desarrollo para javascript "node.js" que incluye los programas de línea de comandos "npm" y "node". 

"npm" se utiliza para instalar dependencias, que se describen en un archivo package.json.

para instalar las dependencias, hay que ir hasta la carpeta "arduino" y ejecutar en la consola "npm install". 

Para ejecutar el programa, basta escribir: "node termocupla.js". 

