[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/HgrjD5Sh)
# Briefing: Fast-Hackathon - Mob Page de Repositorios GitHub

¡Bienvenidos a la Fast-Hackathon! En este desafío, cada equipo desarrollará una **"mob page"** que interactúe con GitHub, mostrando los repositorios de sus miembros y ofreciendo funcionalidades adicionales.

## 🎯 Objetivo General

Crear una **aplicación web responsive (mob page)** que se conecte a GitHub para visualizar y gestionar los repositorios de los integrantes del equipo.

## ✨ Funcionalidades Requeridas

* **Página Principal (Home/Dashboard):**
    * Muestra una lista de los **repositorios de todos los miembros del equipo**.
    * Implementa **filtros** para los repositorios (por ejemplo, por lenguaje, por nombre del repositorio, por propietario).

* **Autenticación y Página de Perfil (Profile Page):**
    * Incorpora un sistema de **autenticación** que permita al usuario iniciar sesión con su cuenta de GitHub.
    * Una vez autenticado, la página de perfil debe **mostrar solo los repositorios que pertenecen al usuario** que ha iniciado sesión.
    * Permite la **edición de ciertas características de los repositorios** (por ejemplo, añadir etiquetas personalizadas, una breve descripción). Estos cambios *no tienen por qué sincronizarse con GitHub*; pueden ser datos almacenados localmente en la aplicación.

* **Página "About":**
    * Presenta una **pequeña descripción de cada miembro del equipo**.

## 🛠️ Consideraciones Técnicas

* **Integración con GitHub:** La aplicación deberá consumir la **API pública de GitHub** para obtener la información de los repositorios. Para la autenticación, investigad la [OAuth de GitHub](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps).
* **Responsive Design:** La "mob page" debe estar **optimizada para dispositivos móviles** y ser completamente responsive.
* **Tecnologías Permitidas:** Se puede elegir entre las siguientes tecnologías frontend:
    * **Vanilla JS/HTML/CSS**
    * **React**
    * **Angular**

## ⏱️ Estructura y Dinámica de la Hackathon

* **Equipos:** Los equipos estarán compuestos por **3 o 4 personas**.
* **Duración:** Esta es una **fast-hackathon** con una duración total de **3 horas**.
* **Objetivo:**
    1.  **Desarrollo y Despliegue:** Construir y **desplegar la aplicación** funcional. Se pueden usar plataformas como Netlify, Vercel o GitHub Pages para un despliegue rápido.
    2.  **Preparación de la Presentación:** Preparar una **pequeña presentación de 3 minutos** para mostrar el resultado final.

## 🌟 Bonus

* **Testing:** Implementar pruebas unitarias o de integración para las funcionalidades clave.
* **GitHub Actions:** Configurar un flujo de CI/CD básico para la aplicación.

## 🏆 Criterios de Valoración
* **Funcionalidad:** Que las funcionalidades requeridas estén implementadas y sean operativas.
* **Diseño y Usabilidad:** La interfaz de usuario, la experiencia de usuario y el diseño responsive.
* **Calidad del Código:** Limpieza, organización y buenas prácticas en el código.
* **Accesibilidad:** Que el sitio sea accesible para todos los usuarios, siguiendo principios básicos de accesibilidad web.
* **Presentación:** Claridad y concisión al mostrar su trabajo en los 3 minutos asignados.

## 🎬 DEMO

Al finalizar la hackathon, **cada equipo tendrá 3 minutos para presentar su aplicación** ante el resto de participantes y mentores. La demo debe incluir:

1. **Breve explicación funcional** de la app: ¿Qué hace? ¿Cómo lo hace? ¿Qué funcionalidades implementaron?
2. **Demostración en vivo** de la aplicación ya desplegada.

🔚 Una vez finalizadas todas las presentaciones, **todos los participantes y mentores votarán** por la mejor aplicación. **No se permite votar por el propio equipo.** La aplicación más votada será reconocida como la ganadora de esta Fast-Hackathon.

💡 Consejo: No intentéis mostrar todo. Elegid **los puntos más fuertes** y destacad lo que habéis aprendido y conseguido en tan poco tiempo.
