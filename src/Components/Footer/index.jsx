import React from "react"
import "../../Styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    

    return (
        <>
        <div className="Footer">
            <div className="copyright">
                <p>Design by CaptainBeatty. All rights reserved</p>
            </div>
            <div className="contact" >
                <a href="mailto:picturescope@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </div>
        </>
    )
}

export default Footer;