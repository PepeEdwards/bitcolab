# BitCoLab

Sitio web personal y portafolio construido con Hugo y el tema Blowfish.

## Requisitos Previos

- [Hugo Extended](https://gohugo.io/installation/) versión 0.87.0 o superior
- [Git](https://git-scm.com/downloads)
- Un editor de texto (VS Code recomendado)

## Instalación

### 1. Clonar el Repositorio

```bash
git clone <tu-repositorio-url>
cd bitcolab
```

### 2. Inicializar Git Submodules

El tema Blowfish está incluido como un submódulo de Git. Debes inicializarlo:

```bash
# Inicializar y actualizar los submódulos
git submodule init
git submodule update

# O en un solo comando:
git submodule update --init --recursive
```

Si clonaste el repositorio sin los submódulos, también puedes usar:

```bash
git clone --recurse-submodules <tu-repositorio-url>
```

### 3. Verificar la Instalación de Hugo

```bash
hugo version
```

Asegúrate de que sea la versión **Extended** de Hugo. Debería mostrar algo como:
```
hugo v0.xxx.x-extended ...
```

## Ejecutar el Servidor de Desarrollo

Para iniciar el servidor local de Hugo:

```bash
hugo server
```

O con borradores y futuros posts habilitados:

```bash
hugo server -D
```

El sitio estará disponible en `http://localhost:1313`

### Opciones Útiles del Servidor

- `hugo server --disableFastRender` - Regenera todo en cada cambio
- `hugo server --navigateToChanged` - Navega automáticamente a la página modificada
- `hugo server --bind 0.0.0.0` - Permite acceso desde otros dispositivos en la red

## Actualizar el Tema Blowfish

Para actualizar el tema a la última versión:

```bash
git submodule update --remote --merge
```

## Estructura del Proyecto

```
bitcolab/
├── archetypes/          # Plantillas para nuevos contenidos
├── assets/
│   ├── css/            # CSS personalizado
│   └── img/            # Imágenes del sitio
├── config/
│   └── _default/       # Archivos de configuración
│       ├── hugo.toml
│       ├── languages.en.toml
│       ├── languages.es.toml
│       ├── menus.es.toml
│       ├── params.toml
│       └── ...
├── content/            # Contenido del sitio
│   ├── _index.es.md
│   ├── bit0/          # Sección Bit-0
│   ├── posts/         # Blog posts
│   └── projects/      # Proyectos
├── layouts/            # Plantillas personalizadas
│   └── partials/
├── public/             # Sitio generado (Git ignored)
├── resources/          # Recursos generados (Git ignored)
├── static/             # Archivos estáticos
└── themes/
    └── blowfish/       # Tema (submódulo Git)
```

## Configuración

### Archivos de Configuración Principales

- `config/_default/hugo.toml` - Configuración general de Hugo
- `config/_default/params.toml` - Parámetros del tema Blowfish
- `config/_default/languages.es.toml` - Configuración de idioma español
- `config/_default/menus.es.toml` - Menús del sitio

### Crear Nuevo Contenido

```bash
# Nuevo post
hugo new posts/mi-nuevo-post.md

# Nuevo proyecto
hugo new projects/mi-proyecto/index.md
```

## Compilar para Producción

Para generar el sitio estático:

```bash
hugo
```

Los archivos se generarán en la carpeta `public/`

Para limpiar y regenerar:

```bash
hugo --cleanDestinationDir
```

## Personalización

### CSS Personalizado

Edita `assets/css/custom.css` para añadir estilos personalizados.

### Imágenes

- Coloca imágenes globales en `static/img/`
- Coloca imágenes de posts/proyectos junto al archivo `.md` correspondiente

## Solución de Problemas

### El tema no se carga

```bash
# Verifica que el submódulo esté inicializado
git submodule status

# Si muestra un "-" al inicio, inicializa:
git submodule update --init
```

### Errores de compilación

```bash
# Limpia los recursos generados
rm -rf resources/ public/

# Regenera el sitio
hugo server
```

### Actualizar dependencias del tema

```bash
cd themes/blowfish
git pull origin main
cd ../..
git add themes/blowfish
git commit -m "Update Blowfish theme"
```

## Recursos

- [Documentación de Hugo](https://gohugo.io/documentation/)
- [Documentación de Blowfish](https://blowfish.page/docs/)
- [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

## Despliegue

### GitHub Pages

Ver [Hosting & Deployment - Blowfish](https://blowfish.page/docs/hosting-deployment/)

### Netlify

1. Conecta tu repositorio
2. Build command: `hugo --gc --minify`
3. Publish directory: `public`
4. Hugo version: Configura en `netlify.toml` o variables de entorno

## Licencia

[Tu licencia aquí]
