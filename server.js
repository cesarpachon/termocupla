const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const fs = require("fs");
const express = require("express");
const serveStatic = require('serve-static')

var host = "0.0.0.0";
var http_port = 3000;

//we want to store data in a text file too
let stream = fs.createWriteStream("session.txt", {flags:'a'});

//linux /dev/ttyACM0
//mac /dev/cu.usbmodem14201
const serialport_path = '/dev/ttyACM0';

const port = new SerialPort(serialport_path, { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

//we will store here all the data
let session_data = [];

// Read the port data
port.on("open", () => {
  console.log('serial port open');
});

port.on("error", err => {
    console.log(err);
    console.log("bad luck opening the port? check the available ports here:");
    SerialPort.list(function (err, ports) {
      ports.forEach(function(port) {
        console.log(port.comName);
        console.log(port.pnpId);
        console.log(port.manufacturer);
      });
    });
});

parser.on('data', data =>{
  let t = new Date();
  let msg = t.getHours()+':'+ t.getMinutes()+":"+t.getSeconds()+" = "+ data;
  console.log(msg);
  stream.write(msg + "\n");
  let entry = 
  {
    time: t,
    temperature: +data
  }
  session_data.push(entry);
});

let server = express();

server.options("/*", function(request, response){
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, authtoken");
    response.sendStatus(200);
});

server.use(serveStatic('client', {}))

server.listen(http_port, host);
