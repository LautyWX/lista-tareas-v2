import React from 'react'
import "./styles.css"
import deleteIcon from "./icon.png"


function Delete() {
  function handleDelete(){
    console.log("HOLA")
  }
  return (
    <img onClick={()=>{
      handleDelete;
    }} className="delete-icon" src={deleteIcon} alt="delete" />
  )
}

export default Delete
