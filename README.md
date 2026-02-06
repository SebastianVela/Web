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

