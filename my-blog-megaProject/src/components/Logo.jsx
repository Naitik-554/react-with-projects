import logo from '../assets/logo1.png'

function Logo({width = '100px' }) {
  return (
    <div className="w-20">
      <img src={logo} alt="Logo"/>
    </div>
  )
}

export default Logo