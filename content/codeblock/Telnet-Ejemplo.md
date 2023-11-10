---
title: "Telnet Ejemplo"
---

#### 1. Crear una automatización en AS400 en SBOT

En este paso realizaras una automatización en AS400.

1. Se selecciona la opción "New Running Plan" en RPA

![RPA](./EjemploTelnet/0-RPA.png)

2. Se abre la ventana de suites y en la suite se selecciona el botón "edit suite automations" o se da doble clic en "new suite"

![SUITE](./EjemploTelnet/2-suite.png)

3. Se abre una ventana de automatizaciones, donde al dar clic derecho del mouse se despliegan diferentes acciones, se sobrepone el mouse en “Telnet” y selecciono la primera acción llamada “Open and Close Telnet”

![OPEN-TELNET](./EjemploTelnet/3-OPEN-TELNET.png)

4. Se selecciona lo que aparece en la línea de código de OPEN-TELNET “Host: (DLLOQA:23)” y se abre una ventana con los campos Host, Post, System type y Options, los cuales se parametrizarán de la siguiente forma y se presiona aceptar: 

![CONFIG-TELNET](./EjemploTelnet/4-Config-HOST.png)

5. Se presiona el botón de color azul "save all and back" 

![Save-TELNET](./EjemploTelnet/save.png)

6. Se presiona el botón "PLAY" y se visualiza la conexión a AS400 de IBM como en la siguiente imagen:

![Conexion-TELNET](./EjemploTelnet/conexion.png)