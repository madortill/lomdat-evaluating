import { useState } from "react";
import styles from "./MultipleSelect.module.css";

import questionBg from "../../../../assets/img/spiralQuestiongBg.svg";

const defaultOptions = [
    {
        id: "understandCriteria",
        text: "חשוב להבין את המדדים לפיהם מעריכים את החייל.",
        isCorrect: true
    },
    {
        id: "closeAccount",
        text: "ההערכה היא ההזדמנות שלנו לסגור חשבון עם המועמד, אם המועמד הרגיז אותי לאורך יום המיון עכשיו זה הזמן לוודא שהוא לא יתקבל בעזרת ההערכה.",
        isCorrect: false
    },
    {
        id: "singleEvents",
        text: "אירועים בודדים שהשאירו עלינו רושם הם הכי חשובים, על פי אירועים אלו יש לכתוב את ההערכה המסכמת.",
        isCorrect: false
    },
    {
        id: "fullObservation",
        text: 'תצפית מלאה - לרשום כמה שיותר התנהגויות נצפות ולא רק מסקנות כוללות (למשל: ״דוד קם פעמיים ממקומו למרות שניתנה פעמיים הוראה לא לקום״, במקום ״קושי בשליטה עצמית וקבלת מרות״).',
        isCorrect: true
    },
    {
        id: "useScale",
        text: "חשוב להבין את סולם ההערכה ולהשתמש בכולו. יש להימנע מ״להיתקע״ בצד אחד של הסולם או באמצע.",
        isCorrect: true
    },
    {
        id: "separateCriteria",
        text: "יש להתייחס לכל מדד בנפרד, ללא קשר בין המדדים על מנת להעריך את החייל הטוב ביותר.",
        isCorrect: true
    },
    {
        id: "similarScores",
        text: "להשתדל שרוב המדדים על המוערך יהיו דומים, לדוגמא 5-6.",
        isCorrect: false
    },
    {
        id: "textMatchesScore",
        text: "לוודא שהמלל מתאים לציון.",
        isCorrect: true
    },
    {
        id: "biasAwareness",
        text: "בעת מתן ההערכה יש להיות מודע להטיות אשר משפיעות עלינו כמפקדים (אפקט ההילה, סטריאוטיפים, דמיון למעריך ועוד).",
        isCorrect: true
    }
];

const MultipleSelect = ({
    title = "עקרונות המיון",
    subtitle = "ציינו את העקרונות הרלוונטיים לתצפית והערכה אפקטיביים (ניתן לבחור יותר מתשובה אחת)",
    options = defaultOptions,
    checkText = "בדיקה",
    tryAgainText = "לניסיון נוסף",
    resetText = "איפוס השאלה"
}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [checked, setChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleOptionClick = (optionId) => {
        if (checked) {
            return;
        }

        setSelectedOptions((prev) => {
            if (prev.includes(optionId)) {
                return prev.filter((id) => id !== optionId);
            }

            return [...prev, optionId];
        });
    };

    const handleCheck = () => {
        if (selectedOptions.length === 0) {
            return;
        }

        const correctIds = options
            .filter((option) => option.isCorrect)
            .map((option) => option.id)
            .sort();

        const selectedSorted = [...selectedOptions].sort();

        const result =
            selectedSorted.length === correctIds.length &&
            selectedSorted.every((id, index) => id === correctIds[index]);

        setIsCorrect(result);
        setChecked(true);
    };

    const handleTryAgain = () => {
        setSelectedOptions([]);
        setChecked(false);
        setIsCorrect(false);
    };

    const handleReset = () => {
        setSelectedOptions([]);
        setChecked(false);
        setIsCorrect(false);
    };

    const getOptionClassName = (option) => {
        const isSelected = selectedOptions.includes(option.id);

        if (!checked && isSelected) {
            return `${styles.optionBtn} ${styles.selectedOption}`;
        }

        if (!checked) {
            return styles.optionBtn;
        }

        if (isSelected && option.isCorrect) {
            return `${styles.optionBtn} ${styles.correctOption}`;
        }

        if (isSelected && !option.isCorrect) {
            return `${styles.optionBtn} ${styles.wrongOption}`;
        }

        if (!isSelected && option.isCorrect) {
            return `${styles.optionBtn} ${styles.missedCorrectOption}`;
        }

        return styles.optionBtn;
    };

    const checkDisabled = checked || selectedOptions.length === 0;

    return (
        <section className={styles.page} dir="rtl">
            <div className={styles.board}>
                <img src={questionBg} alt="" className={styles.boardBg} />

                <div className={styles.content}>
                    <h1 className={styles.title}>{title}</h1>

                    <p className={styles.subtitle}>{subtitle}</p>

                    <div className={styles.optionsList}>
                        {options.map((option) => {
                            const isSelected = selectedOptions.includes(option.id);

                            return (
                                <button
                                    key={option.id}
                                    type="button"
                                    className={getOptionClassName(option)}
                                    onClick={() => handleOptionClick(option.id)}
                                >
                                    <span className={styles.optionText}>{option.text}</span>

                                    <span className={styles.optionMark}>
                                        {!checked && isSelected && "●"}
                                        {!checked && !isSelected && ""}
                                        {checked && isSelected && option.isCorrect && "✓"}
                                        {checked && isSelected && !option.isCorrect && "×"}
                                        {checked && !isSelected && option.isCorrect && "✓"}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <div className={styles.actionsRow}>
                        {!checked && (
                            <button
                                type="button"
                                className={`${styles.checkBtn} ${checkDisabled ? styles.disabledBtn : ""}`}
                                onClick={handleCheck}
                                disabled={checkDisabled}
                            >
                                {checkText}
                            </button>
                        )}

                        {checked && !isCorrect && (
                            <button
                                type="button"
                                className={styles.checkBtn}
                                onClick={handleTryAgain}
                            >
                                {tryAgainText}
                            </button>
                        )}

                        {checked && isCorrect && (
                            <button
                                type="button"
                                className={`${styles.checkBtn} ${styles.disabledBtn}`}
                                disabled
                            >
                                {checkText}
                            </button>
                        )}
                    </div>

                    <button
                        type="button"
                        className={styles.resetBtn}
                        onClick={handleReset}
                    >
                        ↻ {resetText}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MultipleSelect;