// Sample Arduino MAX6675 Arduino Sketch

/*
 * Esta es la librería especial para controlar el chip
 * amplificador max6675. 
 * se instala en el IDE de Arduino a través del Manager.
 */ 
#include "max6675.h"

//Estos son los pines de Arduino a los que se conecta el Max6675.
int ktcSO = 8;
int ktcCS = 9;
int ktcCLK = 10;

MAX6675 ktc(ktcCLK, ktcCS, ktcSO);

/**
* esta funcion se ejecuta una vez al conectar el arduino. 
* se encarga de configurar la velocidad de comunicación del 
* puerto serial y esperar medio segundo a que el arduino
* esté listo.
*/   
void setup() {
  Serial.begin(9600);
  delay(500);
}

/**
 * esta funcion se ejecuta cada 10 segundos, imprime en el 
 * puerto serial el valor de la temperatura en grados centígrados.
 */ 
void loop() {
   Serial.println(ktc.readCelsius()); 
   delay(10000);
}
