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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
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