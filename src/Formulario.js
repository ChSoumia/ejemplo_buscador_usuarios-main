export default function Formulario(props) { 
    return (
        <div>
            <input id='query' value={props.contenido} onChange={e=>props.setContenido(e.target.value)} type="text" placeholder='Text a buscar'/>
                <button id='botonsearch' onClick={() => props.callServer()} >Buscar</button>
        </div>
    )
}