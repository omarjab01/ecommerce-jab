import React from 'react'

const buttonStyles = {
    default : `bg-blue-500 px-8 py-4 text-white`,
    inverted: `bg-blue-50 px-8 py-4 text-black `
}


const Button = ({children}) => {
  return (
    <button className={`${buttonStyles.default}`}>
        {children}
    </button>
  )
}

export default Button