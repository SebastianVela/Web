# CV académico - Vista previa local

Si al abrir la página ves "Not Found", normalmente es porque el servidor
estático no está apuntando al archivo correcto o no se está sirviendo la
carpeta raíz del proyecto. Para previsualizar este sitio en local:

## Pasos rápidos
1. Abre una terminal en la carpeta del proyecto (`/workspace/Web`).
2. Ejecuta:

   ```bash
   python -m http.server 8000
   ```

3. En tu navegador abre:

   ```text
   http://localhost:8000/index.html
   ```

> Nota: si usas otro puerto, reemplázalo en la URL.

## Publicar con GitHub Pages
Sí, puedes publicar este sitio directamente con GitHub Pages. Pasos rápidos:

1. Sube estos archivos (`index.html`, `styles.css`, `script.js`) a un repositorio
   de GitHub.
2. En GitHub ve a **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Elige la rama (por ejemplo `main`) y la carpeta raíz (`/`).
5. Guarda los cambios y espera a que GitHub genere la URL pública.

Cuando el despliegue termine, la página estará disponible en la URL de Pages
que muestra GitHub.
