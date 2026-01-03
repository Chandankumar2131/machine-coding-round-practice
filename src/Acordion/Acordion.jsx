import React, { useState } from 'react'

export default function Acordion({items}) {
const [isOpen, setIsOpen]=useState(null);
const handleClick =(index)=>{
setIsOpen(isOpen==index?null:index)
}
  return (
     !items || items.length===0 ? <div>No items to display</div> :
    <div>
      {items.map((item,index)=>{
        return(
          <div key={index}>
            <button onClick={()=>handleClick(index)}>{item.title}</button>
            {isOpen==index&& <div>{item.content}</div>}
          </div>
        )
      })}
    </div>
  )
}
