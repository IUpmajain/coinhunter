import React from 'react'

const SelectButton = ({children, selected, onClick}) => {


  return (
    
      <span onClick={onClick} className='clas' style={{backgroundColor:selected ? "gold":"", color:selected?"black":"", fontWeight:selected?700:500, marginBottom:20}}>{children}</span>
    
  )
}

export default SelectButton;
