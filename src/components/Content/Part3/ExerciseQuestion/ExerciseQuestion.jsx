import { useState } from "react";
import styles from "./ExerciseQuestion.module.css";

import questionBg from "../../../../assets/img/spiralQuestiongBg.svg";

const defaultRows = [
    {
        id: "instruction",
        label: "יכולת הדרכה",
        correctValues: [6, 7]
    },
    {
        id: "thinking",
        label: "יכולת חשיבה ותכנון",
        correctValues: [6, 7]
    },
    {
        id: "leadership",
        label: "פיקוד ומנהיגות",
        correctValues: [6, 7]
    },
    {
        id: "values",
        label: "ערכיות",
        correctValues: [4, 5]
    },
    {
        id: "interpersonal",
        label: "יכולות בין־אישיות",
        correctValues: [4, 5]
    }
];

const scaleLabels = [
    {
        value: 1,
        label: "התאמה\nנמוכה מאוד"
    },
    {
        value: 2,
        label: "התאמה\nנמוכה"
    },
    {
        value: 3,
        label: "התאמה\nמתחת לבינונית"
    },
    {
        value: 4,
        label: "התאמה\nבינונית"
    },
    {
        value: 5,
        label: "התאמה\nמעל לבינונית"
    },
    {
        value: 6,
        label: "התאמה\nגבוהה"
    },
    {
        value: 7,
        label: "התאמה\nגבוהה מאוד"
    }
];

const ExerciseQuestion = ({
    title = "העריכו את מיכל על פי מידת ההתאמה",
    instruction = "סמנו את מידת ההתאמה בכל אחד מהמדדים (כש-7 מייצג מידת התאמה גבוהה ו-1 מייצג התאמה נמוכה)",
    rows = defaultRows,
    checkText = "בדיקה",
    tryAgainText = "לניסיון נוסף",
    resetText = "איפוס השאלה",
    portraitSrc = null,
    portraitAlt = "",
    portraitPositionX = "50%",
    portraitPositionY = "45%",
    portraitScale = 1
}) => {
    const [selectedValues, setSelectedValues] = useState({});
    const [checked, setChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const toggleValue = (rowId, value) => {
        if (checked) {
            return;
        }

        setSelectedValues((prev) => {
            const currentValues = prev[rowId] || [];

            if (currentValues.includes(value)) {
                return {
                    ...prev,
                    [rowId]: currentValues.filter((item) => item !== value)
                };
            }

            return {
                ...prev,
                [rowId]: [...currentValues, value]
            };
        });
    };

    const handleCheck = () => {
        const hasAnySelection = rows.some((row) => {
            return selectedValues[row.id]?.length > 0;
        });

        if (!hasAnySelection) {
            return;
        }

        const result = rows.every((row) => {
            const selected = [...(selectedValues[row.id] || [])].sort();
            const correct = [...row.correctValues].sort();

            return (
                selected.length === correct.length &&
                selected.every((value, index) => value === correct[index])
            );
        });

        setIsCorrect(result);
        setChecked(true);
    };

    const handleTryAgain = () => {
        setSelectedValues({});
        setChecked(false);
        setIsCorrect(false);
    };

    const handleReset = () => {
        setSelectedValues({});
        setChecked(false);
        setIsCorrect(false);
    };

    const getValueClassName = (row, value) => {
        const selected = selectedValues[row.id] || [];
        const isSelected = selected.includes(value);
        const isCorrectValue = row.correctValues.includes(value);

        if (!checked && isSelected) {
            return `${styles.valueBtn} ${styles.selectedValue}`;
        }

        if (!checked) {
            return styles.valueBtn;
        }

        if (isSelected && isCorrectValue) {
            return `${styles.valueBtn} ${styles.correctValue}`;
        }

        if (isSelected && !isCorrectValue) {
            return `${styles.valueBtn} ${styles.wrongValue}`;
        }

        if (!isSelected && isCorrectValue) {
            return `${styles.valueBtn} ${styles.revealedCorrectValue}`;
        }

        return styles.valueBtn;
    };

    const getValueContent = (row, value) => {
        const selected = selectedValues[row.id] || [];
        const isSelected = selected.includes(value);
        const isCorrectValue = row.correctValues.includes(value);

        if (checked && isSelected && isCorrectValue) {
            return "✓";
        }

        if (checked && isSelected && !isCorrectValue) {
            return "×";
        }

        if (checked && !isSelected && isCorrectValue) {
            return "✓";
        }

        return value;
    };

    const checkDisabled =
        checked ||
        !rows.some((row) => selectedValues[row.id]?.length > 0);

    return (
        <section className={styles.page} dir="rtl">
            <div className={styles.board}>
                <img src={questionBg} alt="" className={styles.boardBg} />

                <div className={styles.content}>
                    <div className={styles.titleRow}>
                        <h1 className={styles.title}>{title}</h1>

                        {portraitSrc && (
                            <div className={styles.portraitStar}>
                                <img
                                    src={portraitSrc}
                                    alt={portraitAlt}
                                    className={styles.portraitImg}
                                    style={{
                                        "--portrait-x": portraitPositionX,
                                        "--portrait-y": portraitPositionY,
                                        "--portrait-scale": portraitScale
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    <p className={styles.instruction}>{instruction}</p>

                    <div className={styles.questionArea}>
                        <div className={styles.rows}>
                            {rows.map((row) => (
                                <div key={row.id} className={styles.metricRow}>
                                    <div className={styles.metricLabel}>
                                        {row.label}
                                    </div>

                                    <div className={styles.valuesTrack}>
                                        {scaleLabels.map((item) => (
                                            <button
                                                key={item.value}
                                                type="button"
                                                className={getValueClassName(row, item.value)}
                                                onClick={() => toggleValue(row.id, item.value)}
                                                aria-label={`${row.label} - ${item.value}`}
                                            >
                                                {getValueContent(row, item.value)}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

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

export default ExerciseQuestion;