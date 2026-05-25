# Sloth Tattoo - Página Web Oficial

## Descripción

### Documentación Técnica Actualizada

Para una referencia técnica del proyecto alineada con la implementación actual, revisa `INFORMACION_TECNICA.md` en la raíz del repositorio.

Este proyecto tiene como objetivo principal el desarrollo de una página web para la PYME **Sloth Tattoo**, un estudio especializado en tatuajes y servicios de arte corporal. El propósito fundamental de esta plataforma es fortalecer la presencia digital del negocio, permitiendo a clientes potenciales conocer los servicios ofrecidos, explorar el portafolio de trabajos realizados, obtener información sobre el estudio y facilitar el contacto para la solicitud de información o la programación de citas.

Sloth Tattoo se dedica a brindar servicios profesionales de tatuaje mediante diseños personalizados y técnicas especializadas, buscando ofrecer una experiencia segura, artística y de alta calidad a sus clientes.

---

# Instalación y Configuración

## Requisitos Previos

- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (viene incluido con Node.js)
- **Git** - [Descargar aquí](https://git-scm.com/)

## Pasos para Instalar el Proyecto

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd Tatto-sloth-page
```

### 2. Instalar las dependencias

```bash
npm install
```

**Dependencias principales:**
- `react` - Framework de interfaz de usuario
- `react-dom` - Librería de renderizado de React para el DOM
- `react-router-dom` - Enrutador para aplicaciones React
- `tailwindcss` - Framework CSS basado en utilidades
- `vite` - Bundler y herramienta de desarrollo rápida

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

El proyecto se abrirá automáticamente en `http://localhost:5173`

## Comandos Disponibles

```bash
# Modo desarrollo (con hot-reload)
npm run dev

# Compilar para producción
npm run build

# Vista previa de la build de producción
npm run preview

# Linting del código
npm run lint
```

## Comandos de Instalación Manual de Dependencias

Si necesitas instalar o actualizar las dependencias manualmente, utiliza estos comandos:

### Instalar React + Vite

```bash
npm create vite@latest . -- --template react
npm install
```

### Instalar Tailwind CSS y PostCSS

```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Este comando genera:
- `tailwind.config.js` - Configuración de Tailwind CSS
- `postcss.config.js` - Configuración de PostCSS

### Instalar React Router DOM

```bash
npm install react-router-dom
```

### Instalar todas las dependencias del proyecto

```bash
npm install react react-dom react-router-dom tailwindcss postcss autoprefixer
```

---

# 1. Introducción

Sloth Tattoo es un estudio profesional dedicado al arte del tatuaje. En el mercado actual, la presencia en línea es crucial para el crecimiento y la sostenibilidad de cualquier negocio. Este proyecto busca proporcionar a Sloth Tattoo una plataforma digital que les permita:

- Mostrar su galería de trabajos de manera atractiva y de alta calidad
- Compartir información sobre los servicios y técnicas especializadas
- Facilitar el contacto con clientes potenciales interesados en tatuajes personalizados
- Aumentar su visibilidad en línea y atraer a un público más amplio
- Permitir la programación de citas de forma más accesible

---

# 2. Objetivos del Proyecto

Los objetivos específicos del proyecto son:

- **Diseño y Desarrollo de la Página Web**: Crear una página web visualmente atractiva y fácil de usar que refleje la identidad de marca de Sloth Tattoo con un diseño moderno y profesional.

- **Galería de Trabajos (Portfolio)**: Implementar una galería interactiva que permita a los usuarios explorar los diferentes tatuajes realizados por el estudio. Cada trabajo debe incluir imágenes de alta calidad, descripciones y técnicas utilizadas.

- **Información del Estudio**: Incluir una sección "Acerca de Nosotros" que cuente la historia del estudio, los artistas tatuadores, sus especialidades y su compromiso con la calidad e higiene.

- **Servicios Detallados**: Crear una sección de servicios que explique claramente los tipos de tatuajes que realizan, procesos, tiempos de ejecución y políticas de cuidado post-tatuaje.

- **Formulario de Contacto**: Desarrollar un formulario de contacto que permita a los usuarios solicitar información, consultar sobre citas o hacer preguntas específicas.

- **Preguntas Frecuentes (FAQ)**: Incluir una sección de FAQ que responda dudas comunes sobre procesos, higiene, cuidados y políticas del estudio.

- **Integración con Redes Sociales**: Integrar enlaces a las redes sociales de Sloth Tattoo para fomentar la interacción con los clientes.

- **Optimización SEO**: Implementar técnicas de SEO para mejorar el posicionamiento en buscadores.

- **Diseño Responsivo**: Asegurar que la página sea compatible con dispositivos móviles, tablets y escritorio.

---

# 3. Tecnologías Utilizadas

El proyecto utiliza las siguientes tecnologías:

## Frontend

- **React 18.3** - Librería de interfaz de usuario
- **Vite 5.1** - Bundler y herramienta de desarrollo
- **Tailwind CSS 3.4** - Framework CSS basado en utilidades
- **React Router DOM 6.30** - Enrutador para navegación entre páginas
- **PostCSS** - Herramienta para procesar CSS

## Control de Versiones

- **Git** - Control de versiones del código fuente
- **GitHub** - Alojamiento del repositorio

---

# 4. Estructura del Repositorio

```
Tatto-sloth-page/
├── public/                  # Archivos estáticos (imágenes, favicons)
│   ├── images/             # Imágenes del proyecto
│   └── assets/             # Otros recursos
├── src/                    # Código fuente de la aplicación
│   ├── components/         # Componentes reutilizables
│   │   ├── Header.jsx      # Encabezado y navegación
│   │   ├── Footer.jsx      # Pie de página
│   │   └── ...
│   ├── pages/              # Páginas principales
│   │   ├── Home.jsx        # Página principal
│   │   ├── About.jsx       # Acerca de nosotros
│   │   ├── Portfolio.jsx   # Galería de trabajos
│   │   ├── Services.jsx    # Servicios ofrecidos
│   │   └── FAQ.jsx         # Preguntas frecuentes
│   ├── assets/             # Recursos locales (íconos, logos)
│   ├── hooks/              # Custom hooks de React
│   ├── utils/              # Funciones utilitarias
│   └── styles/             # Archivos CSS globales
├── index.html              # Archivo HTML principal
├── vite.config.js          # Configuración de Vite
├── tailwind.config.js      # Configuración de Tailwind CSS
├── postcss.config.js       # Configuración de PostCSS
├── package.json            # Dependencias y scripts
├── package-lock.json       # Lock file de dependencias
├── .gitignore              # Archivos ignorados por Git
└── README.md               # Este archivo

```

---

# 5. Flujo de Trabajo

El flujo de trabajo del proyecto seguirá el modelo de ramificación de Git:

- **main** - Rama principal con código estable y listo para producción
- **develop** - Rama de desarrollo donde se integran nuevas funcionalidades
- **feature/\*** - Ramas para el desarrollo de nuevas características
- **bugfix/\*** - Ramas para la corrección de errores
- **hotfix/\*** - Ramas para correcciones críticas en producción

---

# 6. Paleta de Colores

La página utiliza la siguiente paleta de colores que refleja la identidad de Sloth Tattoo:

- **Deep Sea Green** (#1a4d5c) - Color primario oscuro
- **Java Cyan** (#1dd4bf) - Color de acentos
- **Ebony Clay** (#2a2a2a) - Fondo oscuro
- **Catskill White** (#f5f5f5) - Texto claro
- **Buccaner** (#6b2d3f) - Color secundario
- **Dove Gray** (#717171) - Textos secundarios
- **Half Baked** (#82d4d4) - Acentos alternos

---

# 7. Próximos Pasos

Los próximos pasos del proyecto son:

1. Desarrollar los componentes base (Header, Footer, Navbar)
2. Crear las páginas principales del sitio
3. Implementar la galería del portfolio
4. Configurar formularios de contacto
5. Realizar pruebas de responsividad
6. Optimizar el rendimiento
7. Implementar SEO
8. Desplegar en servidor de producción

---

# 8. Colaboración

La colaboración en el proyecto se realiza a través de pull requests. Los desarrolladores deben:

1. Crear una rama `feature/*` para nuevas funcionalidades
2. Hacer commits descriptivos y frecuentes
3. Enviar un pull request a la rama `develop`
4. Esperar revisión e integración del código

---

# 9. Conclusión

Este proyecto representa una oportunidad significativa para Sloth Tattoo de expandir su alcance digital y aumentar su visibilidad en el mercado. La página web proporcionará una plataforma profesional para mostrar sus trabajos, compartir información sobre sus servicios y conectar directamente con clientes potenciales. Con una planificación cuidadosa y una ejecución eficiente, este proyecto contribuirá al crecimiento y al éxito de Sloth Tattoo en el mercado digital.
