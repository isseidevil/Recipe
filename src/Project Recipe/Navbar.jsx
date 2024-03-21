import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <nav>
            <div className="Logo">
                <img src={'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'} alt=""  height={'100px'} width={'100px'}/>
            </div>
            <div className="Link">
                <Link to={'/'}>Home</Link>
                <input type="text" placeholder='Search recipies...' />
            </div>
        </nav>
    </div>
  )
}

export default Navbar
