# Variable global context

          // pregunta si la variable no está creada
          if ( !context.global.array ) { 
          // crea el arreglo de 6 posiciones.
          context.global.array = new Array (6);
        }
        // elimina el primer elemento para poder sobre escribir las posiciones.
        var shifted = context.global.array.shift();
        // escribe en la última posición del arreglo el dato de entrada al nodo
        context.global.array.push(msg.payload);
        //agrega a la salida el arreglo
        msg.array = context.global.array;
        //agrega a la salida la cantidad de elementos del arreglo
        msg.length = context.global.array.length;
        // Retorna la msg.
        return msg

 
