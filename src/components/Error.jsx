const Error = (props)=>{
    const {message} = props

    return(
        <div className="error">
            <h2>an Error occured</h2>
            <h3>{message}</h3>
        </div>
    )
}

export default Error