import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OpeningPage.module.css";
import ButtonControls from "../RecurringElements/ButtonControls/ButtonControls";

import whiteboard from "../../assets/img/whiteboard.svg";
import plant from "../../assets/img/plant.svg";
import smallTable from "../../assets/img/smallTable.svg";
import washiOrange from "../../assets/img/washiTapeOrange.svg";
import washiBordeaux from "../../assets/img/washiTapeBordeaux.svg";
import pencil from "../../assets/img/pencilBtn.svg";
import bunting from "../../assets/img/bannerMain.svg";
import buntingSmall from "../../assets/img/bannerSmall.png";
import line from "../../assets/img/line.svg";
import bgNoteThin from "../../assets/img/bgNoteThin.svg";
import mushrooms from "../../assets/img/mushrooms.svg";
import butterfly from "../../assets/img/butterfly.svg";

import peer from "../../assets/img/logos/peer.svg";
import madorTil from "../../assets/img/logos/till.svg";

const aboutSections = [
    {
        title: "מפתחת ראשית:",
        names: ["רב״ט צאלה בלמקר"]
    },
    {
        title: "גרפיקה:",
        names: ["רב״ט צאלה בלמקר",
                "רב״ט דינה ליבשיץ"
        ]
    },
    {
        title: "מומחית תוכן:",
        names: [
            "סג״ן לוטם סימיאן",
        ]
    },
    {
        title: "רמ״ד טי״ל:",
        names: ["סמ״ר קטיה מדבדב"]
    },
    {
        title: "גרסה:",
        names: ["ספטמבר 2026"]
    }
];

const aboutFooterText = `הלומדה פותחה לזכרה של 
רינת הודיה (ריני) זגדון ז”ל, 
שנפלה בפסטיבל הנובה ברעים. 
הגופן באדיבות פרויקט ההנצחה ״אות חיים״.`;

const OpeningPage = () => {
    const navigate = useNavigate();
    const [showExplanation, setShowExplanation] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    const handleAboutClick = (event) => {
        event.stopPropagation();
        setShowAbout((prev) => !prev);
    };

    const closeAbout = () => {
        setShowAbout(false);
    };

    return (
        <div className={styles.page} dir="rtl">
            <img src={washiOrange} alt="" className={`${styles.washi} ${styles.washiLeft}`} />
            <img src={washiBordeaux} alt="" className={`${styles.washi} ${styles.washiRight}`} />

            <div className="logos">
                <img src={peer} className="peer" alt="logo" />
                <img src={madorTil} className="madorTil" alt="logo" />
            </div>

            <button
                type="button"
                className={`${styles.aboutBtn} ${showAbout ? styles.aboutBtnOpen : ""}`}
                onClick={handleAboutClick}
            >
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
                                        type="button"
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
                <ButtonControls
                    onNext={() => navigate("/home")}
                    showNext={true}
                    showBack={false}
                />
            )}

            {showAbout && (
                <div className={styles.aboutOverlay} onClick={closeAbout}>
                    <aside
                        className={styles.aboutPanel}
                        onClick={(event) => event.stopPropagation()}
                        aria-label="אודות הלומדה"
                    >

                        <div className={styles.aboutContent}>
                            {aboutSections.map((section) => (
                                <section key={section.title} className={styles.aboutSection}>
                                    <h2>{section.title}</h2>

                                    {section.names.map((name) => (
                                        <p key={name}>{name}</p>
                                    ))}
                                </section>
                            ))}

                            <p className={styles.aboutFooterText}>
                                {aboutFooterText}
                            </p>
                        </div>
                    </aside>
                </div>
            )}

            <img src={plant} alt="plant" className={styles.plant} />
            <img src={smallTable} alt="table" className={styles.table} />
        </div>
    );
};

export default OpeningPage;