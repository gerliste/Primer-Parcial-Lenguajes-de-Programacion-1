**# Primer Parcial | Lenguajes de Programación 1**

Lic. en Ciencia de Datos – Universidad CAECE

.
.

Materia: Lenguajes de Programación 1
Profesor: Víctor Di Lena
Alumno: Germán Liste
Año: 2025

.
.

**Descripción del proyecto**

Este repositorio contiene el desarrollo del Primer Parcial – Tema 2 de la materia Lenguajes de Programación 1.

El trabajo consiste en analizar y filtrar un conjunto de series obtenidas desde un archivo JSON utilizando JavaScript, aplicando conceptos de:
- lectura de datos externos con fetch()
- uso de funciones flecha y métodos de array (filter, map)
- manipulación del DOM para mostrar resultados dinámicos en HTML
- manejo de condiciones lógicas y operadores

El objetivo es mostrar en pantalla distintos subconjuntos de series según su año de estreno, estado de emisión y duración.

.
.

**Estructura del proyecto**

📂 primer-parcial-lp1

 ├── index.html         # Página principal con los resultados
 
 ├── script.js          # Lógica de filtrado en JavaScript
 
 ├── series (1).json    # Archivo de datos con información de series
 
 └── README.md          # Descripción del proyecto

**Instrucciones de ejecución**

1. Clonar o descargar este repositorio.

2. Abrir la carpeta del proyecto en Visual Studio Code.

3. Hacer clic derecho sobre index.html → “Open with Live Server”.

4. Ver los resultados directamente en el navegador.
   - También se puede ejecutar desde la terminal con:
       python -m http.server
   y luego abrir http://localhost:8000.

.
.

**Funcionalidades principales**

1. Filtrado por año de estreno (2005–2013)
2. Series en emisión con ‘the’ en el título (menos de 25 caracteres)
3. Series canceladas con ‘good’ en el nombre (menos de 30 caracteres)
4. Series de 20 a 50 minutos estrenadas en 2005
5. Series de más de 50 minutos estrenadas en 2008

Cada conjunto de resultados se muestra en bloques dentro de la página principal con un estilo moderno y legible.

.
.

**Vista previa**

<img width="1909" height="997" alt="image" src="https://github.com/user-attachments/assets/bca8b1d1-8cf8-40de-918b-8e487a23f550" />

.
.

📧 germanliste@gmail.com
 
