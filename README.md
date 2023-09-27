# AlarmaxProUXWeb

Repositorio para la entrega final del Proyecto MISW-4302-2023-14 Versión Web

## Integrantes

|   Nombre                         |   Correo                      |
|----------------------------------|-------------------------------|
| Haiber Humberto Galindo Sanchez  | h.galindos@uniandes.edu.co    |
| Shiomar Alberto Salazar Castillo | s.salazarc@uniandes.edu.co    |

## Objetivo del proyecto

Este proyecto tiene como objetivo la Maquetación del Front End de la aplicación Web Alarmax Pro.  

## Estructura de carpetas del proyecto

El proyecto esta compuesto por la siguiente estructura de carpetas:

![Estructura de carpetas](https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/4a4d717c-93dc-4b75-9259-e50a3bdfa701)

- **dist:** Es la carpeta que contiene los archivos ya listos para pasar el proyecto a entornos productivos. Esta carpeta junto a los archivos se genera una vez ejecutado el comando `ng build`.
- **node_modules:** Es la carpeta que contiene todas las dependencias y librerias del proyecto, y se genera una vez ejecutado el comando `npm install`.
- **src:** Es la carpeta padre que contiene todas estructura interna de carpetas y archivos del proyecto:
  - **app:** En esta carpeta se encuentra la implementación de los componentes principales, junto a los template html y archivos de estilos csss .
    - **components:** En esta carpeta se encuentran los diferentes componentes del proyecto, lo cuales se utilizan para el diseño de las páginas o vistas del proyecto.
      - **alarms:** En esta carpeta se encuentra los componentes (html, scss, ts) de lista de alarmas.
      - **alarms-create:** En esta carpeta se encuentra los componentes (html, scss, ts) de creación de alarmas.
      - **alarms-item:** En esta carpeta se encuentra los componentes (html, scss, ts) de los items de la lista de alarmas.
      - **devices:** En esta carpeta se encuentra los componentes (html, scss, ts) de lista de dispositivos.
      - **devices-create:** En esta carpeta se encuentra los componentes (html, scss, ts) de creación de dispositivos.
      - **devices-item:** En esta carpeta se encuentra los componentes (html, scss, ts) de los items de la lista de dispositivos.
      - **init:** En esta carpeta se encuentra los componentes (html, scss, ts) de la vista inicial del proyecto.
      - **not-found:** En esta carpeta se encuentra los componentes (html, scss, ts) de la vista Not Found del proyecto, cuando se ingrese a una URL que no existe.
      - **reminders:** En esta carpeta se encuentra los componentes (html, scss, ts) de lista de recordatorios.
      - **reminders-create:** En esta carpeta se encuentra los componentes (html, scss, ts) de creación de recordatorios.
      - **reminders-item:** En esta carpeta se encuentra los componentes (html, scss, ts) de los items de la lista de recordatorios.
      - **settings-account-info:** En esta carpeta se encuentra los componentes (html, scss, ts) de la vista de información de configuración de cuenta.
      - **settings-account-menu:** En esta carpeta se encuentra los componentes (html, scss, ts) de la vista del menú de configuración de cuenta.
    - **modules:** En esta carpeta se encuentran los diferentes modulos del proyecto.
      - **alarms:** En esta carpeta se encuentra los componentes (html, scss, ts) del módulo de alarmas.
      - **dashboard:** En esta carpeta se encuentra los componentes (html, scss, ts) del módulo de dashboard.
      - **devices:** En esta carpeta se encuentra los componentes (html, scss, ts) del módulo de dispositivos.
      - **login:** En esta carpeta se encuentra los componentes (html, scss, ts) del módulo de inicio de sesión.
      - **reminders:** En esta carpeta se encuentra los componentes (html, scss, ts) del módulo de recordatorios.
      - **settings:** En esta carpeta se encuentra los componentes (html, scss, ts) del módulo de configuraciones. 
    - **shared:** En esta carpeta se encuentran los componentes utilitarios que se utilizan en el proyecto.
      - **footer:** En esta carpeta se encuentra los componentes (html, scss, ts) del Footer que se utiliza en todas las vistas del proyecto.
      - **header:** En esta carpeta se encuentra los componentes (html, scss, ts) del Header que se utiliza en la mayoria de vistas del proyecto.
  - **assets:** En esta carpeta se encuentra los archivos adicionales necesarios para que el correcto funcionamiento del proyecto.
    - **images:** En esta carpeta se encuentran las imagenes que permiten dar un estilo visual mucho mas agradable al proyecto.
    - **json:** En esta carpeta se encuentran los archivos json que contienen la data dummy para darle dinamismo a las listas de los componentes de Alarmas, Recordatorios y Dispositivos.
  - **environments:** En esta carpeta se encuentra los archivos con la configuración y variables de entorno del proyecto para los diferentes ambientes (Desarrollo, Producción).

## Despliegue del proyecto de Angular en local
### Prerrequisitos
- En primera instancia se debe tener instalado **Angular CLI**. Para esto se comparte el siguiente enlace donde se especifica el como instalar los diferentes componentes necesarios para la ejeucución de la aplicación Web:
  - **Instalación de Angular en Windows:** https://www.freecodecamp.org/espanol/news/como-instalar-angular-en-windows/
- En segudna instancia se debe tener descargado el código fuente de la aplicación
  - Se debe clonar el proyecto **AlarmaxProUXWeb**: [Repositorio](https://github.com/shiomar-salazar/MISW4204-202312-SWNube) 
 
