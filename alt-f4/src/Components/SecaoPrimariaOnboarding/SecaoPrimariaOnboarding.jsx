import ImgPrimeiraSec from "../../Imgs/PrimeiraSecao.png";
import { Link } from "react-router-dom";
import inviteIcon from "../../Imgs/invite.png";

export default function SecaoPrimariaOnboarding() {
    return (
        <div className="SecaoPrimariaOnboarding">
            <div className="Text-part-sec">
                <h3 className="Subtitle-Text-part-sec">
                    Orientar jogadores de E-sports em transição de carreira para novas oportunidades profissionais.
                </h3>
                <span className="box-title">
                    <p>
                        A aposentadoria precoce de jogadores de eSports é um desafio, pois muitos deixam o cenário competitivo sem planos de carreira definidos. Diferente dos esportes tradicionais, a transição para uma nova profissão ainda é um campo em desenvolvimento no mundo dos eSports. Este programa surge para preencher essa lacuna, ajudando ex-jogadores a redescobrirem seus interesses e encontrarem novas formas de atuar no ecossistema dos jogos digitais, seja como desenvolvedores, treinadores ou criadores de conteúdo.
                    </p>
                </span>
                <Link to="/contato">
                    <img src={inviteIcon} alt="inviteIcon" />
                    Invita a gente
                </Link>
            </div>
            <div className="img-part-sec">
                <img src={ImgPrimeiraSec} alt="ImgPrimeiraSec" />
            </div>
        </div>
    )
}