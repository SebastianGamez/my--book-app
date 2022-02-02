My-book es una aplicación web, creada con el stack MERN. En esta app puedes ver tu historial de préstamo, 
reservar libros y también cancelar los mismos. El lado del servidor esta desarrollador con react; el backend con node y express; 
la base de datos es mongoDB, implementada con mongoose.




PASOS PARA SU FUNCIONAMIENTO (MODO DESARROLLO).



1). Instalación de la base de datos:

  
  -Instala mongoDB
  
  -Activar el servicio de mongoDB
  
  -Crear una base de datos llamada "my-book" en el puerto 27017, puedes cambiar el puerto en el archivo "/backend/app.js".
  
  -Agregar libros a una nueva colección llamada "books" (Un documento por cada libro; en el archivo "/backend/json/books.json" puedes encontrar ejemplos de libros y el formato de cada documento).
  
  
2). Preparación del servidor 
  
  
  -Instala nodeJS.
  
  -Ejecuta el comando "npm install" en la consola mientras esta se ubica en /backend/, para instalar las dependencias. Asegurate que en la carpeta existan los archivos package.json y package-lock.json.
  
  -Ejecuta el conmando "node app.js" en la consola mientras estás en la ubicación /my-book/ para inicializar el servidor el puerto 4000 (Debe correr en el puerto 4000)
  
  
3). Preparación de la interfaz gráfica 


  -Ejecuta el comando "npm install" en la consola mientras esta se ubica en /my-book/, para instalar las dependencias. Asegurate que en la carpeta existan los archivos package.json y package-lock.json.
  
  -Ejecuta el conmando "npx http-server -o" en la consola mientras estás en la ubicación /my-book/build para inicializar la aplicación.
  
  -Abre en el navegador http://localhost:8080/.
  
  
4). ¡LISTO!
  
  
  
