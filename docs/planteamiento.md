# Mascota virtual

## Comportamiento

* Estados
  * Hambre = 100:
  * Sueño = 100;
  * Idle

* Procesador de colas FIFO.
  * Ocupado

Cada x tiempo tanto hambre como sueño iran descendiendo.
Cuando hambre y sueño lleguen a 0, comerán o dormirán.

En caso de que los estados se solapen, hambre tiene prioridad a sueño.

En cada bucle de tiempo idle, va haber una cierta posibilidad de que se dispare el saludo.
