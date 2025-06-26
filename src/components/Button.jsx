import React from 'react'

const Button = ({ label, iconURL, 
  backgroundColor,
  textColor,
  borderColor,
  fullWidth }) => {
  return (
     <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full font-semibold transition-colors duration-500 ease-in-out
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red hover:bg-red-600"
      } ${fullWidth && "w-full"}`}
    >
        {label}
        {iconURL && 
        <img src={iconURL} alt="arrow right icon"
        className='ml-2 rounded-full w-5 h-5'
        />
        }
    </button>
  )
}

export default Button
