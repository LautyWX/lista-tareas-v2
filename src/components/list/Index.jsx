import React from 'react'
import Item from './item/Index'
import './styles.css'

function List() {
  return (
    <ul className="list-container">
      <Item/>
      <Item/>
      <Item/>
      <Item/>
    </ul>
  )
}

export default List
