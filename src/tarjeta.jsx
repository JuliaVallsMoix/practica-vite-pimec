/** Componente funcional que representa una tarjeta */
// Me gustaria poder configurar el titulo h2 de esta tarjeta y su descripción
// Por convención le llamamosa la variable que contene todas las propiedades que nos pasan 'props'

function Tarjeta(props) {
    console.log('Props que le pasamos: ', props);
    return <div>
      <h2>{props.titulo}</h2>
      <p>{props.descripcion}</p>
    </div>
  }
  
  export default Tarjeta;