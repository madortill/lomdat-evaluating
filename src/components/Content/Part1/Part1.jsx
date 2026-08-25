import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Part1.module.css";
import "../Content.css";

import homeBtn from "../../../assets/img/homeBtn.svg";
import nextBtn from "../../../assets/img/nextBtn.svg";

import peer from "../../../assets/img/logos/peer.svg";
import madorTil from "../../../assets/img/logos/till.svg";

const OpeningPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.page} dir="rtl">

            <div className="logos">
                <img src={peer} className="peer" alt="logo" />
                <img src={madorTil} className="madorTil" alt="logo" />
            </div>

                <img src={homeBtn} alt={"home button"} className={styles.homeBtn} onClick={() => navigate("/home")} />

            <img className="nextBtn" src={nextBtn} alt="next button" />

        </div>
    );
};

export default OpeningPage;