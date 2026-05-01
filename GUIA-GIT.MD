# 🚀 Guía de Trabajo con GitHub (Equipo)

Esta guía explica el flujo de trabajo recomendado para colaborar en este proyecto usando Git y GitHub.

---

## 📌 Objetivos

- No trabajar directamente en main
- Mantener un flujo ordenado y profesional
- Facilitar trabajo en equipo (2-3 personas)
- Evitar conflictos y errores

---

## 🌳 Estructura de Ramas
```
main        → Producción (estable)
develop     → Integración del equipo
feature/*   → Nuevas funcionalidades
fix/*       → Correcciones 
```
```
Ejemplos:
feature/navbar
feature/anime-md
fix/image-size
```
---

## 🔄 Flujo de Trabajo

1. Actualizar proyecto
```zsh
git checkout develop

git pull
```

---

2. Crear nueva rama
```zsh
git checkout -b feature/nombre-del-cambio
```

Ejemplo:
```zsh
git checkout -b feature/navbar
```

---

3. Trabajar y guardar cambios

```zsh
git add .
git commit -m "feat: add responsive navbar"
```
---

4. Subir la rama
```zsh
git push -u origin feature/navbar
```

---

## 🔀 Crear Pull Request (PR)

1. Ir a GitHub

- Entrar al repositorio
- Click en "Compare & pull request"

---

2. Configurar PR

``base: develop``

``compare: feature/navbar``

---

3. Título del PR

``feat: add responsive navbar``

---

4. Descripción del PR

- Se agrega navbar responsive
- Mejora diseño mobile
- Se corrigen bugs visuales

---

5. Crear PR

Click en:
Create Pull Request

---

## 👀 Revisión de Código

Antes de hacer merge:

- Otro miembro del equipo revisa el PR
- Se sugieren cambios si es necesario
- Se aprueba el PR

---

## 🔥 Merge del PR

Opciones:

- Squash and merge (RECOMENDADO)
- Create a merge commit

---

## 🧹 Limpieza después del merge

En local:
```zsh
git checkout develop
git pull
git branch -d feature/navbar
```
En GitHub:

- Click en Delete branch

---

## 🔁 Integración a Producción

Cuando develop esté listo:

``Pull Request → develop → main``

---

## 🧾 Convención de Commits
```
feat: nueva funcionalidad
fix: corrección de error
style: cambios visuales
docs: documentación
refactor: mejora interna
```
Ejemplos:
```
feat: add anime markdown files
fix: correct image size in cards
docs: add github workflow guide
```
---

## ⚠️ Reglas Importantes

- No hacer push directo a main
- No trabajar en develop directamente
- Siempre usar ramas feature/*
- Siempre usar Pull Requests
- Siempre revisar antes de merge

---

## 🛡️ Protección de Ramas (GitHub)

Ir a:
``Settings → Branches → Add rule``

Para main:

- Require pull request before merging
- Require at least 1 approval
- Block force pushes

---

## ⚡ Flujo Diario Resumido
```zsh
1. git checkout develop
2. git pull
3. git checkout -b feature/mi-cambio
4. trabajar
5. git add .
6. git commit
7. git push
8. crear PR → develop
9. review + merge
```

---

## 🧠 Organización del Equipo

Para 3 personas:

- Dev 1 → desarrolla
- Dev 2 → revisa PR
- Dev 3 → prueba cambios

---

## 🎯 Resultado

✔ Código limpio  
✔ Trabajo organizado  
✔ Fácil mantenimiento  
✔ Escalable  

---

Sigue este flujo siempre para mantener un proyecto profesional