import Header from "../Components/Header/Header"
import Rodape from "../Components/Rodape/Rodape"
import SecaoPrimariaOnboarding from "../Components/SecaoPrimariaOnboarding/SecaoPrimariaOnboarding"
import TitleAndSubTitle from "../Components/TitleAndSubTitle/TitleAndSubTitle"
import ruido from "../Imgs/Ruido.png"
import codeImagem from "../Imgs/code.png"

export default function Home(){
    return(
        <div className="Home-altf4">
            <div className="Bakground-imagees">
                <img src={ruido} alt="ruid" className="Ruido" />
                <span className="img-lateral">
                    <img src={codeImagem} alt="codeImagem" className="codeImagem"/>
                </span>
            </div>
            <div className="Main-contents">
                <Header />
                <TitleAndSubTitle />
                <SecaoPrimariaOnboarding />
                <Rodape />
            </div>
        </div>
    )
}