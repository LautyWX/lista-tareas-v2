import React from 'react'
import Name from './name'
import Delete from './delete/Index.jsx'
import Checkbox from './checkbox'
import './styles.css'


function Item() {
  return (
    <div className="item-container">
        <Checkbox/>
        <Name/>
        <Delete/>
    </div>
  )
}

export default Item
