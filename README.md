# APP - App Cotiza Ventas Nuestros Parques whit React and MUI
## App para cotizar productos de Nuestros Parques
App desarrollada para solventar una necesidad real que enfrenta el ejecutivo de ventas de Nuestros Parques al necesitar cotizar los productos en su dispositivo movil.
## _Descripción_
Desarrollado en React, Javascript y MUI, permite mostrar y listar segun el plan seleccionado todos los valores del mismo, al agregar los valores de descuento, piue y cuotas realiza los calculos para luego crear la propuesta que le es entregada al cliente final. Diseñada para ser usada en dispositivos moviles. 

La data fue cargada en un archivo data.js que contiene toda la informacion de los planes y es usada para realizar los calculos segun las indicaciones de los ejecutivos.

Fue usada la libreria html2canvas (https://html2canvas.hertzen.com/) para permitir hacer capture de la propuesta final que sera enviada al cliente.

Proxima mejora: incluir conexion con API de SII para poder leer el monto de la UF de forma automatica.

- Components:
  - login
    - header
  - cotizador
    - CotizadorForm
    - CotizadorResult
  - propuesta
    - Propuesta
  - footer
    - Footer
    - Copyright
- containers
  - CotizadorContainer
  - PropuestaContainer
- context
  - CotizadorContext
- style
  - StyledTableCell
- utilis
  - exportAsImage


**Free Software, Oh Yeah! -  Desarrollado por: Armando Rivas**