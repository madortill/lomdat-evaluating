import styles from "./ButtonControls.module.css";

import nextBtn from "../../../assets/img/nextBtn.svg";
import backBtn from "../../../assets/img/backBtn.svg";

const ButtonControls = ({
    onNext,
    onBack,
    showNext = true,
    showBack = true,
}) => {
    return (
        <>
            {showBack && (
                <img
                    src={backBtn}
                    alt="חזור"
                    className={styles.backBtn}
                />
            )}

            {showNext && (
                <img
                    src={nextBtn}
                    alt="הבא"
                    className={styles.nextBtn}
                />
            )}
        </>
    );
};

export default ButtonControls;