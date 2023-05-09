import * as React from 'react'
import { row } from './row.module.css'

const Row = ({title, players, children})=> {
    return (
        <>
        <h3>{title}</h3>
        <div className={row}>
            {children}
        </div>
        </>
    )
}

export default Row