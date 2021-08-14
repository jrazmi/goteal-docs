import {  Link } from "react-router-dom";

export const Layout = ({children}) => {
    return(
        <>
        <header>
        <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
        </header>
        <main>
            {children}
        </main>
        <footer>
            footer
        </footer>
        </>
    )
}