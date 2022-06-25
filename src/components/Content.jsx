import React, { useState } from "react";
import "../App.css";
import Leagues from "./Leagues";
import Fikstur from "./Fikstur";

const Content = () => {
    const [active, setActive] = useState(true);

    return (
        <div className="">
            <div
                id="buttonsContainer"
                className="d-flex justify-content-center"
            >
                <div className="" onClick={() => setActive(true)}>
                    <h2
                        className="btn mx-5 my-3 fs-4"
                        style={{ color: active ? "springgreen" : null }}
                    >
                        Leagues
                    </h2>
                </div>
                <div className="" onClick={() => setActive(false)}>
                    <h2
                        className="btn mx-5 my-3 fs-4"
                        style={{ color: !active ? "springgreen" : null }}
                    >
                        Teams
                    </h2>
                </div>
            </div>

            <div id="lig-fiks">{active ? <Leagues /> : <Fikstur />}</div>
        </div>
    );
};

export default Content;
