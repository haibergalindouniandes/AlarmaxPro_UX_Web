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

El proyecto está compuesto por la siguiente estructura de carpetas:

![Estructura de carpetas](https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/4a4d717c-93dc-4b75-9259-e50a3bdfa701)

- **dist:** Es la carpeta que contiene los archivos ya listos para pasar el proyecto a entornos productivos. Esta carpeta junto a los archivos se genera una vez ejecutado el comando `ng build`.
- **node_modules:** Es la carpeta que contiene todas las dependencias del proyecto, y se genera una vez ejecutado el comando `npm install`.
- **src:** Es la carpeta padre que contiene todas estructura interna de carpetas y archivos del proyecto:
  - **app:** En esta carpeta se encuentra la implementación de los componentes principales, junto a los template html y archivos de estilos csss.
    - **components:** En esta carpeta se encuentran los diferentes componentes del proyecto, lo cuales se utilizan para el diseño de las páginas o vistas del proyecto.
      - **alarms:** En esta carpeta se encuentra los componentes (html, scss, ts) de lista de alarmas.
      - **alarms-create:** En esta carpeta se encuentra los componentes (html, scss, ts) de creación de alarmas.
      - **alarms-item:** En esta carpeta se encuentra los componentes (html, scss, ts) de los ítems de la lista de alarmas.
      - **devices:** En esta carpeta se encuentra los componentes (html, scss, ts) de lista de dispositivos.
      - **devices-create:** En esta carpeta se encuentra los componentes (html, scss, ts) de creación de dispositivos.
      - **devices-item:** En esta carpeta se encuentra los componentes (html, scss, ts) de los ítems de la lista de dispositivos.
      - **init:** En esta carpeta se encuentra los componentes (html, scss, ts) de la vista inicial del proyecto.
      - **not-found:** En esta carpeta se encuentra los componentes (html, scss, ts) de la vista Not Found del proyecto, cuando se ingrese a una URL que no existe.
      - **reminders:** En esta carpeta se encuentra los componentes (html, scss, ts) de lista de recordatorios.
      - **reminders-create:** En esta carpeta se encuentra los componentes (html, scss, ts) de creación de recordatorios.
      - **reminders-item:** En esta carpeta se encuentra los componentes (html, scss, ts) de los ítems de la lista de recordatorios.
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
    - **images:** En esta carpeta se encuentran las imágenes que permiten dar un estilo visual mucho más agradable al proyecto.
    - **json:** En esta carpeta se encuentran los archivos json que contienen la data dummy para darle dinamismo a las listas de los componentes de Alarmas, Recordatorios y Dispositivos.
  - **environments:** En esta carpeta se encuentra los archivos con la configuración y variables de entorno del proyecto para los diferentes ambientes (Desarrollo, Producción).

## Despliegue del proyecto de Angular en local
### Prerrequisitos
- En primera instancia se debe tener instalado **Angular CLI**. Para esto se comparte el siguiente enlace donde se especifica el cómo instalar los diferentes componentes necesarios para la ejecución de la aplicación Web:
  - **Instalación de Angular en Windows:** https://www.freecodecamp.org/espanol/news/como-instalar-angular-en-windows/
- En segunda instancia se debe tener descargado el código fuente de la aplicación
  - Se debe clonar el proyecto **AlarmaxProUXWeb**: [Repositorio](https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web.git)

### Despliegue en local
- Una vez descargado o clonado el proyecto **AlarmaxProUXWeb**, nos dirigimos a la carpeta donde se descargó y abrimos un terminal en dicha ruta (en este caso se utilizó Visual Studio Code, si desea pude descargarlo del siguiente [enlace](https://code.visualstudio.com/download)).
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/9d7e2c58-bd59-4367-93d7-83019e82c9a4" alt="folder" style="zoom:75%;" />
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/3e2c7de1-005e-4aa6-8f14-f7d04d7c047b" alt="terminal" style="zoom:75%;" />

- Procedemos a instalar las dependencias del proyecto ejecutando en el terminal el comando `npm install`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/e68581a7-f196-4c20-a3d9-7b308b478f38" alt="npm_install" style="zoom:75%;" />

- Una vez instaladas las dependencias, continuamos con el levantamiento del servidor local a través del comando `ng serve`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/dd9ae4ca-a404-485b-ae99-08c7b7a52b31" alt="ng_serve" style="zoom:75%;" />

- Una vez finalizado el levantamiento del servidor nos dirigimos a nuestro navegador de preferencia y abrimos la siguiente URL `http://localhost:4200/`, donde visualizaremos la ventana inicial de la aplicación.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/51d66d89-6c1e-4e24-9c4a-6df95d16e518" alt="navegador" style="zoom:75%;" />

## Despliegue del proyecto en un Hosting
### Prerrequisitos
- En primera instancia se debe tener adquirir un Hosting en el cual se pueda realizar despliegue del proyecto:
  - En este caso se utilizará un Hosting de GoDaddy
- Se debe tener instalados los prerrequisitos mencionados en el apartado de `Despliegue del proyecto de Angular en local`.

### Despliegue en Hosting (GoDaddy)
- Para la construcción de los componentes del proyecto, se debe ejecutar en la terminal el comando `npm install`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/d9a7cc9b-ec2e-473c-9cfc-03b50324c4d1" alt="ng_build" style="zoom:75%;" />

- Una vez terminada la construcción de los componentes se generará la carpeta `dist` con los archivos necesarios para el despliegue del proyecto.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/842b5f4c-05d5-4b98-820e-45fbd597323d" alt="dist" style="zoom:75%;" />

- Ahora nos dirigimos a nuestro proveedor de Hosting (en este caso GoDaddy) y seleccionamos la cuenta.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/7116a16a-f8b5-4cfd-a75d-0c892225a190" alt="hosting" style="zoom:75%;" />

- Seleccionamos la opción `Quiero agregar un sitio web nuevo`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/70823afc-bb8a-4ac4-a127-7d4525ec70b2" alt="sitio_nuevo" style="zoom:75%;" />

- Seleccionamos el dominio a utilizar.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/63478cdc-73b3-4919-b13e-8bebe73372e3" alt="seleccion_dominio" style="zoom:75%;" />

- Seleccionamos el Centro de datos, que este caso será `Norteamérica`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/2825b6c7-1565-47b0-80c0-f48a0c346d5c" alt="centro_datos" style="zoom:75%;" />

-A continuación, en la `Crea un sitio web de WordPress` seleccionamos `Ahora no, gracias`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/da129423-6834-4070-89ab-3d5ff63b0e43" alt="sitio_wordpress" style="zoom:75%;" />

- GoDaddy dará inicio con el aprovisionamiento de la cuenta.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/25ed79b2-89ee-4f31-8a45-0a8d9b8ff1ae" alt="aprovisionamiento" style="zoom:75%;" />

- Ahora en la ventana de `Conecta tu dominio` nos mostrará la información del dominio y procederemos a dar clic en `Terminé, continuar con la configuración`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/38525321-cae4-4c32-a64e-ad345361ce3e" alt="conecta_dominio" style="zoom:75%;" />

- Una vez echo lo anterior, saldrá la ventana de `Completado con éxito`, aquí nos damos clic en `Ir al panel de control`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/42c8b9b4-602d-4ff1-b59a-df7751e86177" alt="panel_control" style="zoom:75%;" />

- En esta ventana damos clic en `Admin de cPanel`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/b5278576-1191-4105-8421-09488cd2b07d" alt="ir_admin_cpanel" style="zoom:75%;" />

- Ya dentro del cPanel, damos clic en `Administrador de archivos`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/2c42c4fc-0087-4e7c-aa58-a64c5352d6ee" alt="ir_panel_control" style="zoom:75%;" />

- Damos doble clic en `public_html`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/65b295c0-1ee2-48fe-8316-9b6f39bc6261" style="zoom:75%;" />

- Dentro de esta carpeta hay unos archivos por defecto los cuales seleccionaremos y daremos en la opción `Eliminar`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/a34dce73-de3f-4337-82aa-98cf7e0e26a4" style="zoom:75%;" />

- A continuación, seleccionamos la opción `Evite la basura y elimine permanentemente los archivos` y damos clic en `Confirm`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/780db31b-1a07-414f-a7e0-46d0c43b47e1" style="zoom:75%;" />

- Antes de subir los archivos es mejor comprimirlos en un `ng build`, para lo cual nos dirigimos a la ruta donde están los archivos, los seleccionaremos y damos clic derecho `Add to archive`, seleccionamos la extensión `zip` y damos clic en `OK`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/39fb796f-5974-4c29-a688-d37e67e13580" style="zoom:75%;" />

- Posterior a la eliminación procederemos a cargar los archivos del proyecto generados con el comando `ng build`, para lo cual damos clic en `Cargar`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/1f9b17b2-edfe-4c68-9d56-7606548dfc96" style="zoom:75%;" />

- Seleccionamos el archivo comprimido y damos clic en `Open`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/6cb7571e-0ce5-4fcb-967e-48895bd358ba" style="zoom:75%;" />

- Esperamos que el archivo termine de subir, y damos clic en `Volver`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/46d9f19e-430f-406a-bff9-5adce4423bce" style="zoom:75%;" />

- Seleccionamos el archivo comprimido y damos clic en `Extraer`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/da2b172e-7fad-44e1-9997-2f435d608d85" style="zoom:75%;" />

- Confirmamos la extracción de archivos y damos en `Close`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/a4108836-60f5-4c62-92de-937a5f12323c" style="zoom:75%;" />

<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/3f0bd907-17ef-456d-bb35-4c35bbaf902e" style="zoom:75%;" />

- Posterior a esto, eliminamos el archivo comprimido seleccionándolo y dando clic en `Eliminar`.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/05a5db2a-79e3-4a72-8e8a-cfcf4d1a7ffa" style="zoom:75%;" />

- Una vez finalizados todos los pasos anteriores abrimos nuestra aplicación en el navegador Web.
<img src="https://github.com/haibergalindouniandes/AlarmaxPro_UX_Web/assets/110913673/9d1f0fe9-9759-4911-a71d-88233bfa7991" style="zoom:75%;" />
