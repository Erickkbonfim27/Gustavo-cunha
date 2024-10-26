import HubspotForm from "../Components/Form/FormHubspot";
import logoAlt from "../Imgs/Alt.png";
import { Link } from "react-router-dom";

export default function Contato() {
    return (
        <div className="Contato">
            <div className="Side">
                <h1 className="title-Contato">
                    Estamos aqui pra te ajudar a dar um play no mercado!
                </h1>
            </div>
            <div className="Form">
                <div className="Cabecalho-form-contato">
                    <Link to="/">
                        <img src={logoAlt} alt="logoAlt" />
                    </Link>
                </div>
                <div className="Form-hubspot">
                    <HubspotForm />
                </div>
            </div>
        </div>
    )
}