import React from "react";
import "../styles.css";
import qs from "../images/logo/qs.jpg";
import times1 from "../images/logo/times1.jpg";
import sicr from "../images/logo/sicr.jpg";
import green1 from "../images/logo/green1.jpg";
function Ranking(){
    return (
        <section className="container py-4">
        <div className="text-center py-4">
            <h1>Our Ranking</h1>
            <h6>Daffodil International University (DIU) is recognized in independent government assessments as one of
                top graded universities in Bangladesh.</h6>
        </div>
        <div className="container row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
                <div className="card h-100 w-90">
                    <img src={qs} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">QS World University Rankings</h5>
                        <p className="card-text">DIU has been ranked 3rd among all private Universities of Bangladesh in QS
                            Asia Rankings-2022</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 w-90">
                    <img src={times1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Times Higher Education Impact</h5>
                        <p className="card-text">DIU has achieved (301-400) in world's leading Times Higher Education Impact
                            Rankings 2021</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 w-90">
                    <img src={sicr} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">SCIMAGO Institutions Ranking</h5>
                        <p className="card-text">DIU Included in the SCIMAGO Institutions Ranking 2020 - A Global Journal
                            Ranking Institute.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 w-90">
                    <img src={green1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">UI Greenmetric Ranking</h5>
                        <p className="card-text">DIU Ranks top in Bangladesh for the third consecutive year & now 150 no.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );

}
export default Ranking;