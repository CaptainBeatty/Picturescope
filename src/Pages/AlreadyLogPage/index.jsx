import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/ErrorPage.css"

function AlreadyLogPage () {
    return (
        <div className="p404">
            <div className="page404">
        
                    <p>
                        <span>Vous êtes déjà connecté!</span>
                    </p>
            </div>
            <Link to ="/" className="lin">
                Retournez sur la page d'accueil
            </Link>
        </div>
    )
}

export default AlreadyLogPage;