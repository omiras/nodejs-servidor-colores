# El servidor que genera colores

Queremos crear un servidor que, al recibir peticiones de un cliente, emite diferente respuestas. La idea general es que el servidor dispone de una "base de datos" con los colores requeridos para una aplicación

[Vídeo demostrativo](https://oscarm.tinytake.com/tt/NTQxMzc1MF8xNjkzMDQyMA)

## Requisito 1

Si el usuario hace una petición al servidor, sin especificar ninguna ruta, este debe contestar con una respuesta del tipo HTML; dando la bienvenida al servidor.

BONUS: En el ejemplo, algunos caracteres no se ven correctamente. ¿Porqué sucede esto? ¿Cómo solucionarlo?

## Requisito 2

Si el usuario hace una petición a la URL '/color'; debe devolver un color  de la base de datos. Nuestra "base de datos" es un array de colores definido de forma global.

Por simplificar, devuelve el color en formato texto simple; y además, devuelve siempre **la primera posición** del array de colores.

**BONUS**: Devuelve un color aleatorio cada vez que te hagan una petición a '/color'

## Requisito 3

El usuario puede especificar el tipo de color que quiere recuperar. Si nos fijamos en los colores del array global de colores, veremos que el primero es un tipo de rojo, el segundo es un tipo verde, y el tercero es un tipo de azul.

Modifica tu servidor para que si, el usuario especifica un parámetro de QueryString; devuelva uno de esos colores siempre.

Ejemplo:

Para la petición:
```
http://localhost:3000/color?variant=red
```

Devolverá siempre el primer color del array.

```
#2E191B
```

## BONUS

Descarga el programa encargado de cambiar el color del fondo de la página Web del cliente - [Enlace](https://jsbeginners.com/change-background-color-project/)

Haz los cambios necesarios para que, en vez de cambiar a un color aleatorio cada vez que pulsamos el botón 'Click Me!'; haga una petición GET a nuestro servidor que acabamos de crear y obtenga un color aleatorio.
