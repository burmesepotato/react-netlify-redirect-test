import { Link } from 'react-router-dom'
import cssModule from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Link to="/" className={ cssModule.headerLink }>Home</Link>
      <Link to="/about" className={ cssModule.headerLink }>About</Link>
    </header>
  )
}

export default Header
