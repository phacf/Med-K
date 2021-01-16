export default function Card(props) {
    
    const divStyle ={
        height: '17vh',
        width: '20vw',
        backgroundColor: 'white',
        borderRadius: '10px',
        display: 'flex',
        boxShadow: '4px 4px 16px 8px rgba(0, 0, 0, 0.25)',
        flexDirection: 'column',
        justifyContent: 'space-around',
        color: 'black',
        margin: '10px '

    }

    const divStyle2 = {
        height: '5vh',
        width: '20vw',
        backgroundColor: 'green',
        borderRadius: '10px 10px 0 0',
        boxShadow: 'inset 4px 4px 16px 8px rgba(0, 0, 0, 0.25)',
        overflowX: 'auto'
    }
    
    const divStyle3 = {
        height: '4vh'
    }
    return (
        <div style={divStyle} >
            <div style={divStyle2}>{props.vaccine}</div>
            <div style={divStyle3}><h2><span>Data:</span>{props.date} </h2> </div>
            <div style={divStyle3}><h2><span>Local: </span>{props.local}</h2> </div>
            <div style={divStyle3}><h2><span>Validade:</span>{props.validade}</h2></div>
        </div>
    )
}