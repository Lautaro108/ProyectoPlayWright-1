# QA Automation Framework - Practice Software Testing

Este repositorio contiene un framework de automatización de pruebas End-to-End (E2E) construido desde cero utilizando **Playwright** y **TypeScript**. 

El proyecto está enfocado en aplicar las mejores prácticas de la industria para el aseguramiento de calidad, priorizando la estabilidad de las pruebas, el manejo de asincronismo en aplicaciones web dinámicas (Angular/React) y la escalabilidad del código.

## 🚀 Tecnologías Utilizadas
* **Core:** Playwright, TypeScript, Node.js
* **Plataforma bajo prueba:** Practice Software Testing (Toolshop Demo)
* **Control de Versiones:** Git / GitHub

## 🎯 Buenas Prácticas y Decisiones Técnicas Implementadas

* **Estrategias de Espera Dinámicas:** Eliminación total de esperas estáticas (`waitForTimeout`). Implementación de validaciones basadas en la renderización de datos reales del servidor (uso de `getByText` con selectores estrictos como `.first()`) para evitar pruebas inestables (*flaky tests*) durante la carga de componentes pesados como Dashboards.
* **Validación de URLs con Expresiones Regulares:** Uso de RegEx para aserciones de navegación parciales (ej. `/.*category\/hand-tools/`), garantizando que los tests funcionen en múltiples entornos (Local, QA, Producción) sin atarse a dominios base ni fallar por parámetros dinámicos.
* **Configuración de Localización (i18n):** Configuración global del motor de Playwright en `es-ES` (`locale`) para estandarizar el renderizado del navegador y asegurar aserciones de texto consistentes independientemente del entorno de ejecución.
* **Integración de Navegadores Personalizados:** Configuración de `launchOptions.executablePath` para ejecutar suites de prueba directamente sobre navegadores específicos del sistema, como Brave Browser.
* **Flujo de Trabajo Git:** Adopción de un modelo de ramas estructurado. El desarrollo de nuevas funcionalidades y pruebas E2E se aísla en ramas descriptivas (ej. `test/ToolShop`) protegiendo la rama principal.

## ⚙️ Estructura del Proyecto

El repositorio utiliza una arquitectura de carpeta raíz plana para mantener la simplicidad y el acceso directo a los archivos de configuración y scripts de prueba, facilitando su integración continua.

## 💻 Instalación y Uso

1. Clonar el repositorio y posicionarse en la rama de desarrollo:
```bash
git clone https://github.com/Lautaro108/ProyectoPlayWright-1.git https://github.com/Lautaro108/ProyectoPlayWright-1.git
cd qa-automation-framework
git checkout test/ToolShop