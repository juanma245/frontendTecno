

export function ProductCard({nombre,existencias,valor}){

    return(
        <>
            <article className="productCard">
                <div>This should be a image</div>
                <h3>{nombre}</h3>
                <h3>{valor}</h3>
                {existencias === 0 ? <h3>agotado</h3> : <h3>{existencias}</h3>}
            </article>
        
        </>
    );

}