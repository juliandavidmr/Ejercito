# Store

El store contiene los 3 principios de redux. Será el centro de nuestra aplicación ya que con él, conoceremos el estado actual de la aplicación y nos permitirá ejecutar actions que modifiquen nuestro estado.
Para poder crear un store, necesitamos pasarle un reducer con la lógica de los cambios. Si nos fijamos, el reducer que le pasaremos, será la única información que necesitaremos que Redux conozca de nuestra aplicación. El resto, lo crearemos nosotros.
Esto es muy diferente a los marcos que propone un framework, y hace que nuestro código sea altamente portable, pudiendo usar sin restricciones programación funcional.
