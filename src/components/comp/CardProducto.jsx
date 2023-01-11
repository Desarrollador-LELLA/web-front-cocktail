import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const CardProducto = ({ id, nombre, imagen, precio }) => {
    return (
        <div className='col'>
            <div className='card h-100 border-2 border-dark'>
                <div className='card-header hstack border-0'>
                    <div className='card-text text-start me-auto'>ID: {id}</div>
                    <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                        <button type="button" className="btn btn-outline-dark"><Icon.PencilFill size='24' /></button>
                        <button type="button" className="btn btn-outline-dark"><Icon.TrashFill size='24' /></button>
                    </div>
                </div>
                <img className='card-img-fluid' src={imagen} alt={nombre} />
                <div className='card-body'>
                    <h5 className='card-title'>{nombre}</h5>
                    <h4 className='card-text text-end'>{`$ ${precio}`}</h4>
                </div>
            </div>
        </div>
    );
};

export default CardProducto;