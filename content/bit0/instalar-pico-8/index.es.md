---
title: "Guía: Instalar Pico-8 en Bit-0"
date: 2026-02-04T12:00:00-03:00
draft: false
description: "Aprende a instalar Pico-8 en Bit-0 usando ADB y a crear un script para lanzarlo en pantalla completa."
tags: ["bit-0", "v0.1", "pico-8", "guía"]
categories: ["Tutoriales"]
---

## Algo de contexto

**Pico-8** es una *fantasy console*: un programa que simula una consola retro para crear juegos con límites creativos (como si fueran cartuchos clásicos). Está pensado para que cualquiera pueda **programar, dibujar y hacer música** en un solo lugar.

* Página oficial: https://www.lexaloffle.com/pico-8.php
* Versión educativa en la web (gratis): https://www.pico-8-edu.com/

### ¿Cuánto cuesta?

* La versión **ejecutable** (descargable) cuesta **15 USD**.
* La versión **web educativa** es **gratis** y se usa desde el navegador en la página oficial.

> ✅ **Idea rápida:** si estás empezando, puedes probar la versión web gratis y luego comprar la versión ejecutable cuando quieras instalarlo en tu Bit-0.

### Un poquito de comunidad ✨

Pico-8 tiene una comunidad enorme y súper creativa. Hay **miles de juegos**, tutoriales y cartuchos gratis. Algunos ejemplos populares:

* **Celeste** (sí, el famoso juego nació como un cartucho de Pico-8 en una game jam).
* **Dusk Child** (aventura y exploración).
* **Pico Racer** (carreras retro).
* **Just One Boss** (peleas estilo arcade).

> 🧠 **Dato curioso:** el primer *Celeste* fue un prototipo corto hecho en Pico-8. ¡Después se convirtió en un juego súper conocido en consolas y PC!

Aquí tienes un par de gifs para inspirarte:

![Gameplay de Celeste Classic](https://www.lexaloffle.com/bbs/files/1/celeste.gif)
![Colección de carts en Splore](https://www.lexaloffle.com/bbs/files/1/splore.gif)

## Antes de comenzar ✅

Necesitas:

* Un **Bit-0** funcionando.
* Un computador con **ADB** instalado.
* El archivo ejecutable de **Pico-8** (comprado en la web oficial).

> [!TIP]
> Si aún no tienes ADB, revisa la guía de Bit-0 sobre ADB y terminal para conectarte desde tu computador.

## 1. Crear la carpeta de Pico-8 📁

En Bit-0, la instalación irá dentro de esta ruta:

```text
./root/pico-8/
```

Puedes crearla con:

```bash
adb shell "mkdir -p /root/pico-8"
```

## 2. Subir los archivos con ADB 📤

Conecta Bit-0 por USB y copia los archivos de Pico-8 con `adb push`:

```bash
adb push ./pico-8/* /root/pico-8/
```

> ✅ **Tip:** asegúrate de que el archivo `pico8_dyn` quede dentro de `/root/pico-8`.

## 3. Crear un archivo `.sh` para lanzar Pico-8 🧩

Un archivo **`.sh`** es un **script** (lista de instrucciones) que la consola puede ejecutar. Aquí definimos cómo debe iniciar Pico-8 en la pantalla de Bit-0.

Crea un archivo llamado `pico8.sh` con este contenido:

```sh
#!/bin/sh
# Launch PICO-8 on the SPI framebuffer with no audio.

export SDL_VIDEODRIVER=directfb
export SDL_AUDIODRIVER=alsa
# Replace eventX with the real one you found above:
export DFBARGS="system=fbdev,no-cursor,keyboard=linux_input,disable-module=keyboard"

# ./pico8_dyn -windowed 0 -width 240 -height 320 -pixel_perfect 0
~/pico-8/pico8_dyn -home /root/pico-8 -windowed 0 -width 256 -height 320 -pixel_perfect 0
```

### ¿Qué hace este script? 🤔

* **El primer renglón** (`#!/bin/sh`) le dice a la consola que esto es un script.
* Las líneas `export` configuran cómo se muestra el video y cómo se maneja el teclado.
* La última línea **ejecuta Pico-8** en pantalla completa y con el tamaño correcto para Bit-0.

## 4. Hacer el script ejecutable ✅

Ahora hay que darle permiso para que se pueda ejecutar:

```bash
adb shell "chmod +x /root/pico-8/pico8.sh"
```

> 🧠 **En palabras simples:** `chmod +x` significa “este archivo puede abrirse como un programa”.

## 5. Abrir Pico-8 en Bit-0 🚀

Finalmente, ejecuta el script:

```bash
adb shell "/root/pico-8/pico8.sh"
```

¡Listo! Ahora deberías ver la pantalla de Pico-8 en tu Bit-0.

## Comentarios importantes en caso de errores ⚠️

* Si la pantalla queda negra, revisa que `pico8_dyn` exista en `/root/pico-8/`.
* Si el script no se ejecuta, confirma que hiciste `chmod +x`.
* Si copiaste archivos con nombres extraños, vuelve a subirlos con `adb push`.

## Para seguir aprendiendo 📚

* Página oficial de Pico-8: https://www.lexaloffle.com/pico-8.php
* Versión educativa web (gratis): https://www.pico-8-edu.com/
* Foro y comunidad (BBS): https://www.lexaloffle.com/bbs/

---
