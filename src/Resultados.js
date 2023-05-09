export default function Resultados(props) {
    return (
        <div>
            <ul id="resultados">
                {props.resultado.map((item,index) => {
                    return(
                    <li key ={item.id}>
                            <p>Nombre: <b>{item.firstName}</b> {item.lastName}</p>
                            <p>Email: <b>{item.email}</b></p>
                            <p><img src={item.image} alt={"imagen del usuario" + item.firstName } /></p>
                        
                    </li>)
                })}
            </ul>
        </div>)
}