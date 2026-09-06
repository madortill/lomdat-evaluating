import { useNavigate } from "react-router-dom";
import styles from "./EndPage.module.css";

import whiteboard from "../../assets/img/whiteboard.svg";
import plant from "../../assets/img/plant.svg";
import smallTable from "../../assets/img/smallTable.svg";
import washiOrange from "../../assets/img/washiTapeOrange.svg";
import washiBordeaux from "../../assets/img/washiTapeBordeaux.svg";
import bunting from "../../assets/img/bannerMain.svg";
import endPopupBgBtn from "../../assets/img/endPopupBgBtn.svg";

import peer from "../../assets/img/logos/peer.svg";
import madorTil from "../../assets/img/logos/till.svg";

const EndPage = () => {
    const navigate = useNavigate();

    const handleRestart = () => {
        sessionStorage.clear();
        navigate("/");
    };

    const handleBackToLearn = () => {
        navigate("/home");
    };

    return (
        <div className={styles.page} dir="rtl">
            <img
                src={washiOrange}
                alt=""
                className={`${styles.washi} ${styles.washiLeft}`}
            />

            <img
                src={washiBordeaux}
                alt=""
                className={`${styles.washi} ${styles.washiRight}`}
            />

            <div className="logos">
                <img src={peer} className="peer" alt="logo" />
                <img src={madorTil} className="madorTil" alt="logo" />
            </div>

            <div className={styles.boardArea}>
                <div className={styles.boardWrapper}>
                    <img src={whiteboard} alt="" className={styles.whiteboard} />

                    <div className={styles.boardContent}>
                        <p className={styles.endText}>סיימתם את לומדת</p>

                        <div className={styles.buntingWrapper}>
                            <img src={bunting} alt="" className={styles.buntingImg} />
                        </div>

                        <div className={styles.buttonsArea}>
                            <button
                                type="button"
                                className={styles.endBtn}
                                onClick={handleBackToLearn}
                            >
                                <img src={endPopupBgBtn} alt="" className={styles.endBtnBg} />
                                <span className={styles.endBtnText}>→ לחזור ללמוד</span>
                            </button>

                            <button
                                type="button"
                                className={styles.endBtn}
                                onClick={handleRestart}
                            >
                                <img src={endPopupBgBtn} alt="" className={styles.endBtnBg} />
                                <span>להתחיל מחדש ←</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <img src={plant} alt="plant" className={styles.plant} />
            <img src={smallTable} alt="table" className={styles.table} />
        </div>
    );
};

export default EndPage;