import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader, { Circles } from "react-loader-spinner";

const Leagues = () => {
    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://api-football-standings.azharimm.site/leagues")
            .then((res) => setData(res.data.data))
            .catch((err) => console.log(err))
            .then(() => setLoading(false));
    }, []);

    console.log(datas);
    return (
        <div className="">
            <div className="lig-container">
                {loading ? (
                    <div className="d-flex justify-content-center p-5">
                        <Circles
                            justify-content="center"
                            color="#00BFFF"
                            height={120}
                            width={120}
                        />
                    </div>
                ) : (
                    <div className="row mx-3 py-3">
                        {datas.map((data) => (
                            <div
                                key={data.slug}
                                id="leagueCards"
                                className="col-3 d-flex justify-content-center p-0 py-3 text-center"
                            >
                                <div className="">
                                    <img
                                        id={data.slug}
                                        src={data.logos.light}
                                        alt=""
                                        style={{ height: "80px" }}
                                    />
                                    <h5 className="">{data.name}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Leagues;
