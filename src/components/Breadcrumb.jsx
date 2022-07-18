import React from "react";
import { Link } from "react-router-dom";
import breadcrumbLogo from "../images/logo/wepik-2022316-174417.png";
import "../styles.css";
function Breadcrumb(props){
   
    return (
        <section className="jumbotron jumbotron-fluid">
        <img className="bg-image" src={breadcrumbLogo} alt=""/>
        <div className="overlay">
            <div className="p-4 container-fluid d-flex justify-content-center">
                <div>
                    <h1 className="text-white mx-auto">{(props.name).toUpperCase()}</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                       
                            <li className="breadcrumb-item lead"><Link to="/" className="text-white">Home</Link></li>
                            <li className="breadcrumb-item lead">
                            <Link to="#" className="text-white">{props.name}</Link></li>
                            <li className="breadcrumb-item lead text-white">Details</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    );
}
export default Breadcrumb;