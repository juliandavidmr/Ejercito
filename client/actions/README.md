# Actions

El estado de nuestra aplicación sólo cambiará si ejecutamos un action. 
Un action es un simple objeto plano de javascript que describe un cambio. 
Así como el state es la mínima representación de los datos de nuestra app, 
el action es la mínima representación del cambio en los datos.
Cualquier action deberá tener siempre una propiedad type, cuyo valor sea diferente a undefined. 
Cada app, tendrá definidas sus propios actions para describir los cambios en el estado de sus datos.
