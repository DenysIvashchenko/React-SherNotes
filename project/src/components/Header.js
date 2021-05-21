import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-bar">
          <h1 className="logo">SharNotes</h1>
          <nav className="nav">
            <ul className="nav-ul">
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/note">Note</NavLink>
              </li>
              <li>
                <NavLink to="/create">Create</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
