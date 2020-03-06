import React, { Component } from "react";
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import "./styles.css";

export default class Home extends Component {
    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="home-main">
                <img
                    alt="Gustavo Roger Creutzberg"
                    src="https://avatars0.githubusercontent.com/u/20562320?s=460&v=4"
                    className="avatar-img"
                />
                <hr className="line-divider"></hr>
                <p className="home-desc">
                    Meu nome é Gustavo, sou desenvolvedor full stack, esse site é um projeto desenvolvido em reactJs. 
                    O objetivo dele é primeiramente ser uma nova experiença para mim como desenvolvedor, pois estou constantemente aprendendo novas tecnologias e agora finalmente pondo em prática publicamente.
                    E também quero poder compartilhar diversos temas relacionado ao mundo da programação. 
                    Aqui disponibilizo funcionalidades para ajudar no seu dia-dia, bem como o codigo fonte de cada funcionalidade para que possa te ajudar.
                    Esse projeto está apenas no inicio, mas aos poucos irei adicionando mais conteúdo.
                </p>
                <hr className="line-divider"></hr>
                <div className="home-links">
                    <div className="home-link" id="github">
                        <GitHubIcon fontSize="large" onClick={() => window.open('https://github.com/grcreutzberg')} />
                    </div>
                    <div className="home-link" id="facebook">
                        <FacebookIcon fontSize="large" onClick={() => window.open('https://www.facebook.com/gustavo.creutzberg')} />
                    </div>
                    <div className="home-link" id="instagram">
                        <InstagramIcon fontSize="large" onClick={() => window.open('https://www.instagram.com/guxxtavoroger/')} />
                    </div>
                    <div className="home-link" id="linkedin">
                        <LinkedInIcon fontSize="large" onClick={() => window.open('https://www.linkedin.com/in/gustavorogercreutzberg/')} />
                    </div>
                    <div className="home-link" id="twitter">
                        <TwitterIcon fontSize="large" onClick={() => window.open('https://twitter.com/rogerrGustavo')} />
                    </div>
                    <div className="home-link" id="youtube">
                        <YouTubeIcon fontSize="large" onClick={() => window.open('https://www.youtube.com/channel/UCJr97VXJKF2-U7A2Rc2j-3g?view_as=subscriber')} />
                    </div>
                </div>
            </div>
        );
    }
}