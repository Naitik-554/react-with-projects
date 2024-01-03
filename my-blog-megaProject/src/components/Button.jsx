function Button({btnText, type='button', bgColor = 'bg-blue-600', textColor = 'white', className = '', ...props}) {
  return (
    <buttton className={`px-4 py-2 rounded-lg ${className} ${textColor} ${bgColor}`} {...props}>{btnText}</buttton>
  )
}

export default Button