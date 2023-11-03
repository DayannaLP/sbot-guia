---
title: "Selectores"
metaTitle: "Selectores"
metaDescription: "Selectores"
---

Los selectores son usados en la mayoría de las funciones que se tienen en S-BOT para automatizaciones web, por lo tanto son funciones que se pueden utilizar reiteradas veces según sea el caso de cada automatización hecha por el probador o tester.

#### Selector XPATH

Este selector permite usar el valor de un campo en **XPATH** en el inspector de elementos de una página y así poder tener una acción automatizada en S-BOT

![Click-XPATH](./XPATH/Click-XPATH.png)

![Click-XPATH](./XPATH/XPATH.png)

#### Selector ID

Este selector permite usar el valor de **ID** en el inspector de elementos de una página y así poder tener una acción como el click automatizada en S-BOT

![Click-ID](./ID/ID.png)

![Click-IDExplorador](./ID/ID-Explorador.png)

#### Selector ClassName
Este selector permite usar el valor de la clase de un elemento **class** en el inspector de elementos de una página y así poder tener una acción como el click automatizada en S-BOT

![ClassName-SBOT](./ClassName/SBOT-ClassName.png)

![ClassName-Explorador](./ClassName/explorador.png)

![ClassName-Inspector](./ClassName/inspector.png)

#### Selector CssSelector
Este selector permite usar el valor de la clase de un elemento **CssSelector** en el iunspector de elementos de una página y así tener una acción como el click automatizada en S-BOT

![ClassName-SBOT](./CssSelector/SBOTCssSelector.png)

![ClassName-SBOT](./CssSelector/CssSelectorExplorador.png)

![ClassName-SBOT](./CssSelector/CssSelectorEstilos.png)

#### Selector LinkText

Este selector permite usar el valor dentro de una etiqueta <a\> que se encuentra en el selector de elementos y dentro tiene un valor como por ejemplo "Wikipedia":

![SBOT-Link](./LinkText/SBOTLink.png)

     <a class="ruhjFe NJLBac fl" href="https://es.wikipedia.org/wiki/Q" data-jsarwt="1" data-usg="AOvVaw3zvIbNWEf-F5XBtrilbZ1l" data-ved="2ahUKEwjO_e-WqKaCAxUnk2oFHRbcAoEQmhN6BAgVEAI"> Wikipedia </a>

#### Selector Name
Este selector permite usar el valor de un selector **name** en el inspector de elementos de una página y así poder tener una acción automatizada en S-BOT

![Click-Name](./Name/SBOT-Name.png)

![Click-NameExplorador](./Name/inspector-name.png)

#### Selector TagName

Este selector permite usar cualquier etiqueta de forma general en el inspector de elementos, por ejemplo <div\> y será obtenido el valor de la primera etiqueta que encuentre en el explorador

![Tag-SBOT](./TagName/SbotTag.png)

Y este hará click en la primera etiqueta <div\> que encuentre en el explorador, no es recomendable su uso si se requiere una sola etiqueta en especifico

#### Función TimeOut

Esta función permite configurar el tiempo de espera para encontrar el selector seleccionado en la automatización web, de no encontrarla en el tiempo indicado se mostraá en la pantalla de ejecución un error

![TimeOut-SBOT](./TimeOut/SbotTime.png)

![Time-Error](./TimeOut/errortime.png)