import textura from "../../Imgs/Ruido.png";
import logo from "../../Imgs/Alt.png";


export default function Rodape(){
    return(
        <div className="Rodape-ftalt">
            <img src={textura} alt="textura" />
            <div className="logo-box">
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}