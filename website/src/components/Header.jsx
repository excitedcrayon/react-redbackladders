import { useState } from "react" 
import { NavLink } from "react-router-dom"

export default function Header(){

    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuOnClick = () => {
        setMenuClicked((prev) => !prev);
    }

    return (
        <header>
            <section className="header_top">
                <div className="header_logo">
                    <NavLink to='/' title="Redback Ladders" aria-label="Link for homepage">
                        <img src="../../public/logo.png" alt="Redback Ladders" />
                    </NavLink>
                </div>
                <div className="header_search">
                    <form>
                        <input type="text" />
                        <button type="submit"></button>
                    </form>
                </div>
                <button className={menuClicked ? "header_menu_icon menu_icon_active" : "header_menu_icon"} onClick={ toggleMenuOnClick }>
                    <div className="menu_icon"></div>
                    <div className="menu_icon"></div>
                    <div className="menu_icon"></div>
                </button>
            </section>
            <section className={menuClicked ? "header_bottom nav_active" : "header_bottom"}>
                <nav>
                    <ul>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/redback-advantage">Redback Advantage</NavLink></li>
                        <li><NavLink to="/suppliers">Suppliers</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}