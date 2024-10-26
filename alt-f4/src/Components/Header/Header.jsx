import LogoAltF4 from "../../Imgs/Alt.png";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="Header">
            <span className="Logo">
                <img src={LogoAltF4} alt="Logo" />
            </span>
            <div className="Acessess">
                <ul className="Links">
                    <li>
                        <Link to="/contato">
                            Contato
                        </Link>
                    </li>
                    <li>
                        <Link to="/Equipe">
                            Equipe
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}