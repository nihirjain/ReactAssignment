function button(props){
    return(
        <>
        <button onClick={props.onclick}>{props.text}</button>
        </>
    )
}

export default button