Crea una presentación de bootstrap que solvente las siguientes cuestiones:
* ¿Qué es Bootstrap?¿Para qué sirve?

    Bootstrap es una biblioteca de herramientas de código abierto (acceso gratuito y de libre uso del código fuente) para diseñar el front-end de aplicaciones web.

* ¿Por qué usar Bootstrap?

    Es una buena forma de comenzar tu proyecto sin tener que hacerlo desde cero ya que te ofrece un modelo básico a partir del cual puedes ir haciendo modificaciones para personalizarlo.

* Características de Bootstrap:

    Es _mobile-first_, lo cual significa que el diseño del proyecto comienza desde la vista móvil (ya que es la más restrictiva en cuanto a tamaño) y luego se va expandiendo a tablet y escritorio dado que también es _responsive_.

* Ventajas y desventajas de usar bootstrap:

    Como comentábamos, Bootstrap te ofrece la posibilidad de crear el front-end de tu aplicación web de forma sencilla y gratuita con una gran variedad de componentes a los que puedes acceder desde su código y simplemente copiarlos y pegarlos en el tuyo.

    A su vez, aunque ofrezcan una gran cantidad de diversos componentes, las opciones de personalizar cada uno de ellos son limitadas. Quizá te ofrecen un pequeño grupo de colores o un par de tamaños diferentes entre los que puedes elegir, pero si buscas algo muy específico para uno de esos componentes, personalizarlo puede convertirse en un procedimiento un tanto tedioso.

* Cómo instalar o implementar bootstrap en mi proyecto:

    Bootstrap al fin y al cabo es (de forma muy simplificada) un documento de CSS, así que, al igual que en el resto de nuestros proyectos, lo primero que hay que hacer es conectar dicho documento de CSS a nuestro HTML copiando el link (<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">) en el head del documento HTML en el que vayamos a trabajar.
    Los siguientes pasos serían ir copiando y pegando el codigo de cada componente que queramos implementar, los cuales podemos encontrar en su índice o a través del buscador que encontramos arriba a la derecha.
    ![foto](../assets/images/Captura%201.PNG)

* ¿Se puede implementar responsive con Bootstrap? Si es asi podrías explicar cómo funciona y poner un ejemplo.

    Como indicábamos antes, los componentes que nos ofrece Bootstrap ya son responsive, así que no hace falta implementar nada extra en tu código. Bootstrap tambien dispone de su propio sistema de grid, que tambien funciona mediante clases, puedes asignarle el hueco que va a ocupar cada elemento y como va a cambiar segun el ancho de la pantalla.

* ¿Que es un componente de bootstrap? Pon un ejemplo:

    Un componente es cada uno de los elementos que te ofrece Bootstrap para implementar en tu proyecto, desde un simple input hasta una barra de navegación completa.

* ¿Hay muchos tipos de diseños en Bootstrap? Si los hay, explícalos:

    Para cada componente, por lo general, te suelen ofrecer algunas opciones con las que puedes cambiar, la forma, el tamaño y/o el color. Por ejemplo, en el apartado de Card encontramos varias tarjetas con formas diferentes y en el de Buttons tenemos hasta 8 colores entre los que elegir.

* ¿Cuáles son los diferentes tipos de botones en bootstrap? Pon ejemplos.
    <!-- Mind your own business -->

* ¿Qué es un Carousel de bootstrap? Pon un ejemplo.

    Un Carousel es un conjunto de imágenes las cuales van apareciendo una tras otra de forma cíclica. Bootstrap además te ofrece la posibilidad de incluir indicadores y/o controles de anterior/siguiente así como diferentes opciones de transición entre dichas imágenes.
    En cuanto a las transiciones, Bootstrap tiene de forma predefinida Slides only (una imagen se desliza de derecha a izquierda para sustituir a la anterior), pero si queremos, por ejemplo, que la primera imagen vaya desapareciendo progresivamente mientras la siguiente va apareciendo de la misma forma, podemos implementar un _Crossfade (.carousel-fade)_.

* ¿Qué es un spinner de bootstrap? Pon un ejemplo.

    Este componente es la animación de una circunferencia incompleta que gira sobre sí misma indicando el estado de carga de otro componente o de la aplicación en sí. Bootstrap ofrece opciones en cuanto al color y tamaño y también otro modelo diferente llamado _Growing spinner_ que cumple con la misma función pero con otra apariencia.
    (Ver aquí: https://getbootstrap.com/docs/5.1/components/spinners/#growing-spinner)

* ¿Qué es un navBar de bootstrap? Pon un ejemplo.

    Un navBar es la Barra de Navegación que aparece en el header. Dentro de las opciones que nos ofrece Bootstrap, encontramos navBars con espacio para el nombre del proyecto y/o su logo, links de navegación e incluso un buscador.
    Este último se implementaría como un input de un formulario:
    ![foto](../assets/images/Captura%202.PNG)
    Además también encontramos modelos con diferentes colores, posiciones y responsividades.

* ¿Qué es un modal de bootstrap? Pon un ejemplo.

    Son cuadros de diálogo que puedes implementar para que aparezcan como notificaciones. Con Bootstrap podemos añadir en cada modal títulos, texto, botones... así como cambiar la animación, posición y tamaño.
    Así que si, por ejemplo, queremos que el modal aparezca en el centro de la pantalla, podemos cambiar su posición con _.modal-dialog-centered_.

* ¿Existen inputs para subir archivos en Bootstrap? Pon un ejemplo.

    En Bootstrap, si accedemos a _Forms_ y luego a _Form control_, encontramos la opción _File input_ donde podemos optar a varios tipos de inputs para subir archivos.
    Entre estos tipos podemos escoger, por ejemplo, la opción _Disabled file input_ que hará que dicho input aparezca desactivado.

* ¿Qué es un plugin scrollspy en Bootstrap? Pon un ejemplo.

    Cuando tienes varias secciones dentro de una página y necesitas hacer scroll debido a la longitud del contenido, Bootstrap te ofrece la posibilidad de implementar un _Scrollspy_ que detectará en qué sección te encuentras y destacará el link correspondiente en la barra de navegación o en un _list-group_ como vemos en el siguiente ejemplo:
    ![foto](../assets/images/Captura%203.PNG)

Extra:

* Implementa nuevos puntos sobre bootstrap que hayas descubierto durante tu investigación y creas que son importantes.

    Bootstrap dispone de una gran cantida de componentes muy utiles y con un aspecto impecable, algunos de los mas destacables son los siguientes:

    * Spinners ![spinner](../assets/images/M_Captura%201.png)