import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorProductos, setListProductos, setLoadingProductos } from '../../../redux/actions/homeAction';
import CardProducto from '../../comp/CardProducto';
import Loading from '../../comp/Loading';

const Home = () => {

    const dispatch = useDispatch();
    const { listProductos, errorProductos, loadingProductos } = useSelector(state => state.home);

    useEffect(() => {
        return () => {
            if (errorProductos) {
                dispatch(setErrorProductos(''));
            }
        };
    }, [errorProductos, dispatch]);

    useEffect(() => {
        dispatch(setLoadingProductos(true));
        dispatch(setListProductos());
    }, [dispatch]);

    return (
        <div className='container-fluid my-2'>
            <div className='row row-cols-1 row-cols-sm-3 row-cols-md-4 g-2'>
                {loadingProductos ?
                    <Loading />
                    :
                    listProductos.map(p => {
                        return (
                            <CardProducto id={p.id} nombre={p.nombre} imagen={p.imagen} precio={p.precio} key={p.id} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Home;