import React from "react";
import "../App.css";

const Footer = () => {
    return (
        <div className="footer d-flex justify-content-between">
            <p className="text-center m-auto fs-5 h-100">
                2022 Football Web Application by kampus365 || All rights
                reserved
            </p>

            <a id="idGoTop" className="p-3 bg-warning h-100" href="#navbar">
                Go to top
            </a>
        </div>
    );
};

export default Footer;
