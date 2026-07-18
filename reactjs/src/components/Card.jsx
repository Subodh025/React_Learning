function Card(props){
    return (
        <>
        <div className="card">
            <h1>{props.name}</h1>
            <p>My age is {props.age}</p>
        </div>
        </>
    )
}

export default Card;