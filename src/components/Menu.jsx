import {NavLink} from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({isActive}) => (isActive ? 'Link activeLink' : 'Link')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({isActive}) => (isActive ? 'Link activeLink' : 'Link')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contacts'
              className={({isActive}) => (isActive ? 'Link activeLink' : 'Link')}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
