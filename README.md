# Proyecto de Cliente e Impuestos usando Babel

Este proyecto demuestra cómo usar clases en JavaScript ES6, 
separarlas en archivos individuales, y compilarlas usando Babel. 
El proyecto incluye las clases `Cliente` e `Impuestos`, 
y un archivo principal `main.js` donde se realizan las operaciones.

## Estructura del Proyecto
```
ClassES6-DesafioLatam/
├── dist
│   └── (archivos compilados)
├── src
│   ├── cliente.js
│   ├── impuestos.js
│   └── main.js
├── .gitignore
├── babel.config.json
├── index.html
├── package.json
└── README.md
```

## Instalación

1. Clona el repositorio
  ```bash
  git clone https://github.com/VickyAzola/ClassES6-DesafioLatam.git
  ```
2. Ve a la carpeta
  ```bash
  cd ClassES6-DesafioLatam
  ```
3. Instala las dependencias
  ```bash
  npm install
  ```
4. Abre index.html o la consola

### Compilación de Babel
En consola escribe
  ```
  npx babel src --out-dir dist
  ```
Esto generará los archivos compilados en la carpeta dist.

### Ejecutar el Código Compilado
  ```
  node dist/main.js
  ```
