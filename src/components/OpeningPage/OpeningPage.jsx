import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OpeningPage.module.css";

import whiteboard from "../../assets/img/whiteboard.svg";
import plant from "../../assets/img/plant.svg";
import smallTable from "../../assets/img/smallTable.svg";
import washiOrange from "../../assets/img/washiTapeOrange.svg";
import washiBordeaux from "../../assets/img/washiTapeBordeaux.svg";
import pencil from "../../assets/img/pencilBtn.svg";
import bunting from "../../assets/img/bannerMain.svg";
import buntingSmall from "../../assets/img/bannerSmall.png";
import line from "../../assets/img/line.svg";
import nextBtn from "../../assets/img/nextBtn.svg";
import bgNoteThin from "../../assets/img/bgNoteThin.svg";
import mushrooms from "../../assets/img/mushrooms.svg";
import butterfly from "../../assets/img/butterfly.svg";

const OpeningPage = () => {
    const navigate = useNavigate();
    const [showExplanation, setShowExplanation] = useState(false);

    return (
        <div className={styles.page} dir="rtl">
            <img src={washiOrange} alt="" className={`${styles.washi} ${styles.washiLeft}`} />
            <img src={washiBordeaux} alt="" className={`${styles.washi} ${styles.washiRight}`} />

            <button className={styles.aboutBtn}>
                אודות
            </button>

            <div className={styles.boardArea}>
                <div className={styles.boardWrapper}>
                    <img src={whiteboard} alt="" className={styles.whiteboard} />

                    <div className={styles.boardContent}>

                        {!showExplanation && (
                            <>
                                <p className={styles.welcomeText}>ברוכים הבאים ללומדת</p>

                                <div className={styles.buntingWrapper}>
                                    <img src={bunting} alt="" className={styles.buntingImg} />
                                </div>

                                <div className={styles.btnDiv}>
                                    <img src={line} alt="" className={styles.line} />
                                    <button
                                        className={styles.startBtn}
                                        onClick={() => setShowExplanation(true)}
                                        aria-label="התחל"
                                    >
                                        <img src={pencil} alt="" />
                                    </button>
                                    <img src={line} alt="" className={styles.line} />
                                    <p className={styles.startHint}>לחצו על העיפרון כדי להתחיל</p>
                                </div>
                            </>
                        )}

                        {showExplanation && (
                            <>
                                <div className={styles.buntingWrapperSmall}>
                                    <img src={buntingSmall} alt="" className={styles.buntingImg} />
                                </div>

                                <p className={styles.explanationText}>
                                    {`לומדה זו מתעסקת בימי מיון ומסבירה על חשיבותם, מהלכם
                                     והעקרונות המנחים להעברתם בצה”ל. הלומדה מרחיבה על
                                     ההטיות האפשריות שניתן להיתקל בהן בהערכה במהלך יום המיון. 
                                    בנוסף, יש התייחסות לראיון התעסוקתי ומהלכו בזמן יום המיון.`}
                                </p>

                                <img src={butterfly} alt="butterfly drawing" className={styles.butterfly} />
                                <img src={mushrooms} alt="mushrooms drawing" className={styles.mushrooms} />

                                <div className={styles.noteBox}>
                                    <img src={bgNoteThin} alt="bg note" className={styles.bgNoteThin} />
                                    <p className={styles.noteText}>
                                        הלומדה מחולקת לשלושה חלקים, בין כל חלק תוכלו לבצע הפסקה
                                    </p>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </div>

            {showExplanation && (
                <img
                    className={styles.nextBtn}
                    onClick={() => navigate("/home")}
                    src={nextBtn}
                    alt="next button"
                />
            )}

            <img src={plant} alt="" className={styles.plant} />
            <img src={smallTable} alt="" className={styles.table} />
        </div>
    );
};

export default OpeningPage;