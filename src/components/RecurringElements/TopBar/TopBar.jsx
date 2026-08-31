import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TopBar.module.css";

import peer from "../../../assets/img/logos/peer.svg";
import madorTil from "../../../assets/img/logos/till.svg";
import homeBtn from "../../../assets/img/homeBtn.svg";
import navbarClosed from "../../../assets/img/navbarClosed.svg";

const TopBar = ({
    mode = "logos",
    partTitle = "",
    progress = 0,
    navItems = [],
    currentGroupId = null,
    onNavigate
}) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleTitleClick = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleNavigate = (stepIndex) => {
        onNavigate(stepIndex);
        setIsMenuOpen(false);
    };

    return (
        <header className={`${styles.topBar} ${mode === "logos" ? styles.logosOnly : styles.fullTopBar}`}>
            {mode === "logos" && (
                <div className={styles.logos}>
                    <img src={peer} className={styles.peer} alt="logo" />
                    <img src={madorTil} className={styles.madorTil} alt="logo" />
                </div>
            )}

            {mode === "full" && (
                <>
                    <button className={styles.homeBtn} onClick={() => navigate("/home")} aria-label="חזרה לבית">
                        <img src={homeBtn} alt="" />
                    </button>

                    <div className={styles.navWrapper}>
                        <button
                            type="button"
                            className={`${styles.partTitle} ${isMenuOpen ? styles.openPartTitle : ""}`}
                            onClick={handleTitleClick}
                            aria-expanded={isMenuOpen}
                        >
                            <img src={navbarClosed} alt="" className={styles.partTitleBg} />
                            <span className={styles.partTitleText}>{partTitle}</span>
                        </button>

                        {isMenuOpen && (
                            <nav className={styles.navMenu}>
                                {navItems.map((item) => {
                                    const itemGroupId = item.navGroupId || item.groupId || item.navId;
                                    const isActive = currentGroupId === itemGroupId;

                                    return (
                                        <button
                                            key={item.navId}
                                            type="button"
                                            className={`${styles.navItem} ${isActive ? styles.activeNavItem : ""}`}
                                            onClick={() => handleNavigate(item.stepIndex)}
                                        >
                                            {item.label}
                                        </button>
                                    );
                                })}
                            </nav>
                        )}
                    </div>

                    <div className={styles.progressWrapper}>
                        <div className={styles.progressTrack}>
                            <div className={styles.progressFill} style={{ width: `${progress}%` }}>
                                <span>{progress}%</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.logos}>
                        <img src={peer} className={styles.peer} alt="logo" />
                        <img src={madorTil} className={styles.madorTil} alt="logo" />
                    </div>
                </>
            )}
        </header>
    );
};

export default TopBar;