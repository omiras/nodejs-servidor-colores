# El servidor que genera colores

Queremos crear un servidor que, al recibir peticiones de un cliente, emite diferente respuestas. La idea general es que el servidor dispone de una "base de datos" con los colores requeridos para una aplicación

[Vídeo demostrativo](https://oscarm.tinytake.com/df/1653a0b/thumbnail?type=attachments&version_no=0&file_version_no=0&thumbnail_size=preview)

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
http://localhost:3000/color?variant=Vermillion
```

Devolverá siempre el primer color del array.

```
#2E191B
```

En caso de que la variante de color no exista entonces devolverá un color **al azar**

## Requisito 4

Tenemos que informar de alguna manera al usuario de qué colores puede pedirnos. ¿Cómo va a saber que puede hacer consultas para el color _Vermillion_ o el _Coral_?

Modifica tu servidor para que cuando el usuario haga una petición a la siguiente ruta:

```
http://localhost:3000/get-colors
```

Le devolverá una lista en HTML con todos los colores disponibles.

**Pista**: El método de array _forEach_ o _map_ te puede ayudar a generar una lista en HTML  de forma sencilla a partir del array de colores

Resultado esperado:

![](https://oscarm.tinytake.com/media/175fe21?filename=1746780557008_TinyTake09-05-2025-10-49-03_638823773560585366.png&sub_type=thumbnail_preview&type=attachment&width=1200&height=517)

**Bonus**: Haz que cada elemento de la lista sea clicable. Es decir, que si hago clic en "Gold" hará una petición a 
```
http://localhost:3000/color?variant=Gold
```

## Requisito 5

Fíjate en el fichero ubicado en **files/animals.json**. Dispone de varios animales relacionados con una variante de color. 

Modifica tu servidor para que cuando el usario haga una petición a la siguiente ruta:


```
http://localhost:3000/get-animal?variant=Vermillion
```

Devuelva una imagen en HTML. La URL de la imagen es un amimal relacionado con ese color del parámetro _variant_. 

**Pista**: Debes cargar el fichero JSON. Además, piensa que método de array te permite _buscar_ facilmente un elemento dentro de un array.

Resultado esperado: 

![](https://oscarm.tinytake.com/media/175fe8b?filename=1746781731145_TinyTake09-05-2025-11-08-35_638823785299595171.png&sub_type=thumbnail_preview&type=attachment&width=800&height=589)




