# 🧪 Desafío de Automatización con Cypress

Pruebas automatizadas End-to-End para la funcionalidad de login de:
https://demo4.dexmanager.com/

---

## 🚀 Descripción General

Este proyecto implementa automatización E2E utilizando Cypress, aplicando el patrón Page Object Model (POM) para garantizar mantenibilidad, escalabilidad y claridad en los tests.

---

## 🏗️ Arquitectura y Diseño

### 📌 Patrón Implementado: Page Object Model (POM)

¿Por qué POM?

- Separa la lógica de test de la interacción con la UI
- Reduce duplicación de código
- Mejora la mantenibilidad
- Hace los tests más legibles
- Facilita futuras refactorizaciones

---

## 📁 Estructura del Proyecto
cypress/

├── e2e/

    └── login.cy.js # Casos de prueba

├── fixtures/

        └── loginData.json # Datos de prueba

├── pages/

    └── LoginPage.js # Implementación del Page Object

├── support/

        └── e2e.js # Configuración global

cypress.config.js

package.json

README.md

---

🚫 Los archivos sensibles y artefactos de ejecución se encuentran correctamente ignorados mediante .gitignore

---

## 🔐 Estrategia de Datos de Prueba

Los datos se almacenan en: cypress/fixtures/loginData.json


Beneficios:

- Evita hardcodear valores
- Facilita mantenimiento
- Permite escalar a data-driven testing

---

## ✅ Casos de Prueba Implementados

### 1️⃣ Login Exitoso
- Uso de credenciales válidas
- Ejecución del flujo completo
- Validación de redirección (URL)

### 2️⃣ Login Inválido
- Uso de credenciales inválidas
- Validación de mensaje de error
- Verificación de permanencia en pantalla de login
- Cierre del modal de error

### 3️⃣ Recuperación de Contraseña
- Navegación a pantalla de recuperación
- Ingreso de usuario/email
- Validación de mensaje de confirmación
- Retorno a login

---

## 📋 Requisitos Previos
- Node.js v20+
- npm v9+
- nvm (opcional pero recomendado)

---

## ▶️ Instalación

### Clonar el repositorio
- git clone https://github.com/PrimisDev/login-dexmanager-cypress-automation
- cd cypress-challenge/

### Seleccionar version de Node
- nvm use 20

### Instalar dependencias
- npm install

---

## 🌐 Base URL

La base URL está configurada en:

cypress.config.js

baseUrl: https://demo4.dexmanager.com

---

## ▶️ Ejecución de Tests
### Modo Interactivo
- npm run cy:open
- E2E Testing
- Navegador
- login.cy.js

### Modo Headless
- npm run cy:run

---

## 🧠 Decisiones Técnicas

### Estrategia de Selectores
Dado que la aplicación utiliza componentes Polymer y no expone atributos estables como id o name, los selectores fueron definidos considerando:
- Clases relativamente estables
- Comportamiento del componente
- Estructura consistente
- Evitar selectores frágiles

---

## 🛠️ Tecnologías

- Cypress
- JavaScript
- Node.js

---

## 👨‍💻 Autor

### Martin Primo Grasselli

