#!/bin/bash

echo "Shutdown RPI LEDs"
sudo /home/pi/.bin/led/llctl f0 l0 d0

echo "Start discord Bot"
npm run start:prod