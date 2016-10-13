# Reducer

El reducer es la función que tiene toda aplicación de redux, con la que se entrega siempre un nuevo estado de los datos, pasando como parámetros el state previo y el action a ejecutar.
Siempre que pasásemos como parámetro de la action, un valor que no estuviera definido, devolveríamos el mismo state que se entregó y si el state es undefined, devolveremos cero.
