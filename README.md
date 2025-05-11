# Servicio telematico - Piedra, Papel o Tijera API

Este proyecto es una **API REST** desarrollada con **Node.js y Express** que permite jugar al clásico juego de **Piedra, Papel o Tijera** contra la computadora. El servicio está empaquetado en un contenedor **Docker** para facilitar su despliegue en un entorno de producción.

## Índice

1. [Requisitos](#requisitos)
2. [Instalación](#instalación)
3. [Uso](#uso)

   * [Jugar a Piedra, Papel o Tijera](#jugar-a-piedra-papel-o-tijera)
   * [Acceder desde el navegador](#acceder-desde-el-navegador)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Despliegue en Producción](#despliegue-en-producción)
6. [Licencia](#licencia)

---

## Requisitos

* **Docker**: Para ejecutar la aplicación en un contenedor.
* **Node.js**: Para el desarrollo y ejecución de la API.
* **npm**: Para la gestión de dependencias.

Si no tienes Docker, Node.js o npm instalados, por favor, sigue las instrucciones de instalación en sus respectivas páginas:

* [Docker](https://docs.docker.com/get-docker/)
* [Node.js](https://nodejs.org/es/)

---

## Instalación

Para iniciar el proyecto de manera local en tu máquina o en un servidor:

### Paso 1: Clona el repositorio

```bash
git clone https://github.com/Niscko/TelematicaFinal.git
cd TelematicaFinal
```

### Paso 2: Instala las dependencias

Si no estás usando Docker y prefieres ejecutar la aplicación de forma local en tu máquina, instala las dependencias con `npm`:

```bash
npm install
```

---

## Uso

### Jugar a Piedra, Papel o Tijera

La API expone un único endpoint para jugar:

#### POST `/jugar`

Este endpoint recibe una elección del jugador (piedra, papel o tijera) y responde con el resultado del juego.

**Cuerpo de la solicitud (JSON):**

```json
{
  "eleccion": "piedra"
}
```

**Ejemplo de respuesta:**

```json
{
  "tuEleccion": "piedra",
  "eleccionCPU": "papel",
  "resultado": "perdiste"
}
```

**Posibles resultados**:

* `"ganaste"`
* `"perdiste"`
* `"empate"`

### Acceder desde el navegador

Para jugar desde un navegador, accede a:

```
http://<IP_PUBLICA>:8000/
```

Este archivo HTML permite al jugador interactuar con la API a través de botones para elegir entre Piedra, Papel o Tijera.

---

## Estructura del Proyecto

El proyecto tiene la siguiente estructura:

```
telematic-service-js/
├── Dockerfile                # Archivo para construir la imagen Docker
├── package.json              # Dependencias y scripts de Node.js
├── README.md                 # Este archivo
├── src/
│   └── index.js              # Código de la API en Node.js (Express)
├── public/
│   └── index.html            # Interfaz de usuario (HTML) para jugar desde el navegador
└── .gitignore                # Archivos y carpetas a ignorar por Git (ej. node_modules)
```

---

## Despliegue en Producción

### Opción 1: Despliegue usando Docker

Para desplegar la aplicación en un contenedor Docker, asegúrate de tener **Docker** instalado y ejecuta los siguientes comandos:

#### Paso 1: Construir la imagen Docker

```bash
docker build -t telematic-service-js .
```

#### Paso 2: Ejecutar el contenedor Docker

```bash
docker run -d -p 8000:8000 telematic-service-js
```

Esto hará que la API esté accesible en el puerto **8000** de tu máquina o servidor.

#### Paso 3: Acceder a la API

Desde un navegador o herramienta como Postman, accede a la API en:

```
http://<IP_PUBLICA>:8000/
```

### Opción 2: Despliegue sin Docker

Si prefieres no usar Docker, puedes ejecutar el servicio directamente en tu máquina o servidor con Node.js:

#### Paso 1: Instalar dependencias

```bash
npm install
```

#### Paso 2: Ejecutar el servidor

```bash
npm start
```

Esto levantará la API en **[http://localhost:8000](http://localhost:8000)** (o **http\://\<IP\_PUBLICA>:8000** si es en un servidor remoto).

---

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

Este **README.md** es una guía completa sobre cómo **instalar, usar y desplegar** la API de **Piedra, Papel o Tijera** en tu máquina o servidor.
