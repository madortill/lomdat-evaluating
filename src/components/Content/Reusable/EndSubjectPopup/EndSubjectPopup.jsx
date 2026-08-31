import styles from "./EndSubjectPopup.module.css";

import endPopupBgRectangle from "../../../../assets/img/endPopupBgRectangle.svg";
import confetti from "../../../../assets/img/confetti.svg";
import endPopupBgBtn from "../../../../assets/img/endPopupBgBtn.svg";

const EndSubjectPopup = ({
    title = "כל הכבוד!",
    subtitle = "סיימתם את החלק הראשון של יום המיון",
    buttonText = "יאללה לפרק הבא ←",
    onNext
}) => {
    return (
        <section className={styles.page} dir="rtl">
            <div className={styles.popup}>
                <img src={endPopupBgRectangle} alt="" className={styles.popupBg} />

                <div className={styles.content}>
                    <h1 className={styles.title}>{title}</h1>

                    <p className={styles.subtitle}>{subtitle}</p>

                    <img src={confetti} alt="" className={styles.confetti} />

                    <button type="button" className={styles.nextBtn} onClick={onNext}>
                        <img src={endPopupBgBtn} alt="" className={styles.nextBtnBg} />
                        <span>{buttonText}</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EndSubjectPopup;