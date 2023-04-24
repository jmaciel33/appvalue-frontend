import React from 'react';
import {Link} from "react-router-dom";
import {FiArrowRight} from "react-icons/fi";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="#">Home</Link></li>
            <li><a href="#aboutus">Sobre nós</a></li>
            <li className="has-droupdown"><Link to="/blog-grid">Blog</Link></li>
            <li className="has-droupdown"><Link to="/contact">Contato</Link></li>
        </ul>
    )
}
export default Nav;
