# GitHub extension counter (Frontend)

Debes escribir una aplicación en React, que reciba unos datos de entrada (formulario o query parameters) y muestre el resultado obtenido.

La aplicación tendrá como dato de entrada un repositorio de Github y como salida una lista de extensiones de los archivos del repositorio. Además debe indicarse cuantas veces aparece cada extensión. No es necesario parsear el contenido de los archivos, únicamente el nombre de los mismos.

Se requiere que el repositorio de Github tenga al menos tres niveles de directorios pero se recomienda usar un repositorio no demasiado grande para hacer las pruebas.

Usa el **endpoint**: `https://api.github.com/repos/[OWNER]/[REPO]/git/trees`

NO debes usar el parametro `?recursive=1`

## Ejemplo

Repositorio de ejemplo: https://github.com/argoproj/argo-site

### **Entrada**

**Owner**: argoproj

**Respositorio**: argo-site

### **Salida deseada**

Puedes darle el formato y diseño que prefieras. Se valorará que el usuario pueda hacer algún tipo de interacción con el resultado, como una ordenación, búsqueda o filtrado de extensiones.

`{"md":187,"js":32,"json":2,"config":2,"lock":1,"woff":2,"woff2":2,"scss":3,"png":11,"svg":209,"mdx":4,"gif":1}`