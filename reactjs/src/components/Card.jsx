function Card(){
    const name = "Subodh Uprety";
    const age = 22;
    return (
        <>
        <div className="card">
            <h1>{name}</h1>
            <p>My age is {age}</p>
        </div>
        </>
    )
}

export default Card;