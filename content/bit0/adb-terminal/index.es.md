---
title: "Guía: Usar ADB para acceder a Bit-0 desde tu computador"
date: 2026-02-03T12:00:00-03:00
draft: false
description: "Instala ADB, configura los drivers y abre una terminal para mover archivos y navegar la consola Bit-0."
tags: ["bit-0", "v0.1", "adb", "guía"]
categories: ["Tutoriales"]
---
## Algo de contexto

<!-- Sugerencia de imagen: Bit-0 conectada por USB a un computador, con un terminal abierto. -->

Esta guía te muestra **cómo instalar ADB** (una herramienta para “hablar” con Bit-0) y abrir una consola desde tu computador. Asumimos que ya sabes qué es Bit-0 y que tienes una unidad con nuestra imagen de **Buildroot**.

En resumen, aquí aprenderás a:

* Instalar ADB en tu computador.
* Instalar los **drivers** para que el PC reconozca la placa.
* Abrir un **terminal** con `adb shell`.
* Usar comandos básicos para **moverte** entre carpetas.
* Subir archivos con `adb push`.

## Antes de comenzar ✅

Necesitas:

* Un **Bit-0** con su imagen de Buildroot instalada.
* Un **cable USB** para conectar Bit-0 al computador.
* Un computador con **Windows**.

> [!IMPORTANT]
> Es mejor instalar ADB **antes** de conectar Bit-0, así el computador lo reconoce sin problemas.

## 1. Instalar ADB (platform-tools) 🧰

ADB viene dentro de los **platform-tools** (es un paquete con herramientas). Este proceso funciona en **Windows**, porque los drivers están disponibles solo para ese sistema.

### Windows

1. Descarga **platform-tools** desde este enlace:
   * https://wiki.luckfox.com/assets/files/adb_fastboot-69ff80c6369fb5d1faa6e44b6857d2d0.zip
2. Descomprime el ZIP en una carpeta fácil (por ejemplo: `C:\adb`).
3. Abre la terminal (PowerShell) y entra a esa carpeta:

```powershell
cd C:\adb
```

> ✅ **Tip:** si quieres usar `adb` desde cualquier carpeta, agrega `C:\adb` al **PATH**. Si no sabes qué es eso, no te compliques: puedes seguir entrando a la carpeta con `cd C:\adb`.

## 2. Instalar drivers de la placa (para que ADB la reconozca) 🔧

<!-- Sugerencia de imagen: captura de “Administrador de dispositivos” en Windows mostrando el dispositivo USB. -->

Este paso es **clave en Windows**. Piensa en los drivers como un “traductor” que le dice al computador qué dispositivo conectaste.

### Windows (recomendado)

1. Conecta Bit-0 al computador por USB.
2. Descarga **RK Driver Assistant** desde este enlace:
   * https://files.luckfox.com/wiki/Omni3576/TOOLS/DriverAssitant_v5.13.zip
3. Descomprime el ZIP y abre el programa.
4. Haz clic en **Install Driver**.

![RK Driver Assistant](gallery/rk-driver-assistant.png "RK Driver Assistant")

<!-- Agregar aquí la imagen entregada del RK Driver Assistant. -->

## 3. Verificar conexión con ADB 🔌

Con Bit-0 conectado por USB, ejecuta:

```bash
adb devices
```

Deberías ver algo así:

```text
List of devices attached
0123456789ABCDEF\tdevice
```

Si aparece `unauthorized` o no aparece nada, revisa los drivers y el cable. A veces ayuda desconectar y conectar de nuevo.

## 4. Abrir un terminal con `adb shell` 💻

Para entrar a la consola de Bit-0 desde tu computador (la ventana donde escribes comandos):

```bash
adb shell
```

Verás un prompt similar a:

```text
~#
```

¡Listo! ya estás dentro del sistema de Bit-0.

## 5. Comandos básicos para navegar archivos 🗂️

Aquí tienes una lista corta de comandos útiles. Son los típicos para moverse, ver cosas y ordenar archivos:

| Comando | Qué hace | Ejemplo |
| --- | --- | --- |
| `pwd` | Muestra la ruta actual | `pwd` |
| `ls` | Lista archivos | `ls -la` |
| `cd` | Cambia de carpeta | `cd /root` |
| `mkdir` | Crea carpeta | `mkdir proyectos` |
| `cat` | Muestra contenido | `cat archivo.txt` |
| `cp` | Copia archivos | `cp origen destino` |
| `mv` | Mueve o renombra | `mv viejo.txt nuevo.txt` |
| `rm` | Elimina archivos | `rm archivo.txt` |
| `df -h` | Muestra espacio | `df -h` |
| `exit` | Sale del shell | `exit` |

> [!TIP]
> Puedes subir un nivel con `cd ..` y ver dónde estás con `ls`.

## 6. Subir archivos con `adb push` 📤

Para copiar archivos **desde tu computador hacia Bit-0**, usa:

```bash
adb push /ruta/en/tu/computador /ruta/en/bit-0
```

Ejemplo: subir una carpeta de proyectos a `/root`:

```bash
adb push ./mis-proyectos /root/mis-proyectos
```

Ejemplo: subir un solo archivo:

```bash
adb push ./juego.p8.png /root/pico-8/carts/
```

> ✅ **Tip:** si el destino no existe, créalo antes con `mkdir` desde `adb shell`.

## Comentarios importantes en caso de errores ⚠️

* Si `adb devices` no muestra nada, revisa el **cable USB**, los **drivers** y prueba otro puerto.
* En Windows, si el dispositivo aparece con un ícono amarillo, el driver no está bien instalado.
* Si nada resulta, prueba otro cable o pide ayuda a alguien con experiencia.

## Referencias para seguir aprendiendo 📚

* https://learn.microsoft.com/es-es/windows/terminal/

---
