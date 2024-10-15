import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Pagination() {

    const page = useSelector(state => state.products.page)

    const dispatch = useDispatch();

    let numberPorpage = 9
    let ultimoReg = page * numberPorpage;
    let primerReg = ultimoReg - ultimoReg;

    let newData = products.slice(primerReg, ultimoReg);

    const paginar = (np) => {
        dispatch(setPage(np))
    }

    return (
        <div>

        </div>
    )
}
