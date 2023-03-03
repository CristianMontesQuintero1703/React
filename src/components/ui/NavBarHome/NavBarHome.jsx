import { Link } from 'react-router-dom';

import './navBarHome.css';

// const itemsNavBar = ["Home", "Services", "FAQ", "About us"];

export const NavBarHome = () => {
  return (

<nav>
      <ul className='header'>
        <Link to="/"><li>Home</li></Link>
        {/* <Link to="/AboutUS"><li>AboutUS</li></Link>
        <Link to="/ContactUS"><li>ContactUS</li></Link> */}
        <Link to="/ChangeColor"><li>ChangeColor</li></Link>
        <Link to="/UseState"><li>UseState</li></Link>
        <Link to="/Tweets"><li>Tweets</li></Link>
        {/* <Link to="*"><li>Not Found</li></Link> */}
      </ul>
    </nav>


  )
}