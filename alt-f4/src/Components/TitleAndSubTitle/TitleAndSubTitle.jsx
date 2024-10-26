import { Link } from "react-router-dom"
import inviteIcon from "../../Imgs/invite.png"
import iconeUm from "../../Imgs/iconeUm.png"
import equipe from "../../Imgs/equipe.jpeg"

export default function TitleAndSubTitle() {
    return (
        <div className="TitleAndSubTitle">
            <div className="assest-title">
                <img src={iconeUm} alt="iconeUm" />
            </div>
            <div className="title-and-subtitle">
                <h1 className="principal-title">
                    Quitando e recomeçando no mundo dos E-sports.
                </h1>
                <p className="subtitle">
                    Consultoria Especializada para a Reinserção Profissional de Ex-Atletas de E-Sports
                </p>
                <div className="Cta">
                    <Link to="/contato">
                        <img src={inviteIcon} alt="inviteIcon" />
                        Invita a gente
                    </Link>
                </div>
            </div>
            <div className="Equipe">
                <img src={equipe} alt="equipe" />
            </div>
        </div>
    )
}