import styles from './Dialog.module.css';
import React from 'react'

function Dialog(props:any) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Dialog
