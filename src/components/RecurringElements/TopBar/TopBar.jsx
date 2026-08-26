import { useNavigate } from "react-router-dom";
import styles from "./TopBar.module.css";

import peer from "../../../assets/img/logos/peer.svg";
import madorTil from "../../../assets/img/logos/till.svg";
import homeBtn from "../../../assets/img/homeBtn.svg";

const TopBar = ({
    mode = "logos",
    partTitle = "",
    progress = 0,
    navItems = [],
    currentStep = 0,
    currentGroupId = null,
    onNavigate
}) => {
    const navigate = useNavigate();

    return (
        <header className={`${styles.topBar} ${mode === "logos" ? styles.logosOnly : styles.fullTopBar}`}>
            <div className={styles.logos}>
                <img src={peer} className={styles.peer} alt="logo" />
                <img src={madorTil} className={styles.madorTil} alt="logo" />
            </div>

            {mode === "full" && (
                <>
                    <div className={styles.progressWrapper}>
                        <div className={styles.progressTrack}>
                            <div className={styles.progressFill} style={{ width: `${progress}%` }}>
                                <span>{progress}%</span>
                            </div>
                        </div>
                    </div>

                    <nav className={styles.navMenu}>
                        {navItems.map((item) => {
                            const isActive = item.groupId
                                ? item.groupId === currentGroupId
                                : item.stepIndex === currentStep;

                            return (
                                <button
                                    key={item.navId}
                                    className={`${styles.navItem} ${isActive ? styles.activeNavItem : ""}`}
                                    onClick={() => onNavigate(item.stepIndex)}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </nav>

                    <div className={styles.partTitle}>
                        {partTitle}
                    </div>

                    <button className={styles.homeBtn} onClick={() => navigate("/home")} aria-label="חזרה לבית">
                        <img src={homeBtn} alt="" />
                    </button>
                </>
            )}
        </header>
    );
};

export default TopBar;