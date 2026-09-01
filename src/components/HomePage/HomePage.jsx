import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

import tableBg from "../../assets/img/fullTable.svg";
import greenBook from "../../assets/img/greenBook.svg";
import pinkBook from "../../assets/img/pinkBook.svg";
import blueBook from "../../assets/img/blueBook.svg";
import bannerTop from "../../assets/img/bannerTopMissing.png";

import peer from "../../assets/img/logos/peer.svg";
import whiteTill from "../../assets/img/logos/whiteTill.svg";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.page} dir="rtl">

            <div className="logos">
                <img src={peer} className="peer" alt="logo" />
                <img src={whiteTill} alt="white till logo" className="madorTil" />
            </div>

            <img src={tableBg} alt="table background" className={styles.tableBg} />

            <img src={bannerTop} alt="banner top" className={styles.bannerTop} />

            <div className={styles.booksDiv}>
                <div className={`${styles.greenBookDiv} ${styles.bookDiv}`} onClick={() => {sessionStorage.setItem("currentPart", "part1"); navigate("/content");}}>
                    <img src={greenBook} alt="green Book" className={styles.greenBook} />
                    <p>יום המיון</p>
                </div>

                <div className={`${styles.pinkBookDiv} ${styles.bookDiv}`} onClick={() => {sessionStorage.setItem("currentPart", "part2"); navigate("/content");}}>
                    <img src={pinkBook} alt="pink Book" className={styles.pinkBook} />
                    <p>עקרונות המיון</p>
                </div>

                <div className={`${styles.blueBookDiv} ${styles.bookDiv}`} onClick={() => {sessionStorage.setItem("currentPart", "part3"); navigate("/content");}}>
                    <img src={blueBook} alt="blue Book" className={styles.blueBook} />
                    <p>סימולציות</p>
                </div>
            </div>

        </div>
    );
};

export default HomePage;