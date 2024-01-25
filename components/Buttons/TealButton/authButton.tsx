'use client'
import './AuthButton.css'

interface buttonProps {
    title:string,
    width:string,
    height:string,
    background?:string,
};


export default function AuthButton({title, width, height, background}:buttonProps) {
  const buttonStyle = {width, height}

  return (
    <button style={buttonStyle} className={`auth-button mt-5 mb-3.5 bg-teal-600 ${background? background: ''}`} >
      {title}
    </button>
  )
}
