var texto;
texto = `
1. esto lo estoy escribiendo en la rama main
2. esto otro lo estoy escribiendo en main2
3. creada en main2 luego de merge exitoso para comprobar actualizacion github (con o sin push?)
4. aparentemento main1 y 2 están fusionadas.se creara un commnit
5. se elimino main2 y creo nuevamente. se creo esta linea + un nuevo archivo.

6. se edito la linea 5  se descubrio que aun despues de hacer
 git add no hay diferencia entre las ramas
nuevamente se elimino y se volvio a crear, inmediatamente
 despues se hizo un commit sin ningun cambio.
7. ahora si hay diferencia: no se puede cambiar de rama sin guardar cambios
en git (ni siquiera admite git add tiene que ser commit
8. aparte de editar este archivo se creara otro archivo en blanco
9. ni las ediciones ni el el nuevo archivo aparecen:
la gran diferencia es commit
10. se va a hacer un merge y luego una comprobacion en github
11. no hay cambios en github. luego del merge pasaron los commit
de main2. git status indica todo ok. se a hacer un push
12 el git push subio todo pero sigue existindo main 2 en github


`

console.log(texto);
