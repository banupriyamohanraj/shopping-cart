import React from 'react'



export default function Card(props) {

    return <div className='col-lg-4'>
        <div className="card mb-5 mb-lg-5" >
            <div className="card-body">
                <h5 className="card-title">{props.data.itemno}</h5>
                <h6 className="card-subtitle mb-2">{props.data.currency}{props.data.price}</h6>
                <p className="card-text">{props.data.itemdescription}</p>
                <small class="text-muted">★ ★ ★ ★ ☆</small>
                <button type="button" class="btn btn-dark" onClick={() => {
                    props.handleCart(props.data)
                }}>Add to Cart</button>

            </div>
        </div>
    </div>
}
