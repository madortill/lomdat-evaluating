import { useState } from "react";
import styles from "./Question.module.css";

import questionBg from "../../../../assets/img/spiralQuestiongBg.svg";

const Question = ({
    question = "שאלה",
    subtitle = "",
    answers = [],
    checkText = "בדיקה",
    tryAgainText = "לניסיון נוסף",
    // successText = "לתשובתך נכון",
    resetText = "איפוס השאלה",
    multipleCorrect = false,
    smallTitle = false
}) => {
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [checked, setChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const correctAnswerIds = answers
        .filter((answer) => answer.isCorrect)
        .map((answer) => answer.id);

    const handleAnswerClick = (answerId) => {
        if (checked) {
            return;
        }

        if (multipleCorrect) {
            setSelectedAnswers((prev) => {
                if (prev.includes(answerId)) {
                    return prev.filter((id) => id !== answerId);
                }

                return [...prev, answerId];
            });

            return;
        }

        setSelectedAnswers([answerId]);
    };

    const handleCheck = () => {
        if (selectedAnswers.length === 0) {
            return;
        }

        const selectedSorted = [...selectedAnswers].sort();
        const correctSorted = [...correctAnswerIds].sort();

        const result =
            selectedSorted.length === correctSorted.length &&
            selectedSorted.every((id, index) => id === correctSorted[index]);

        setIsCorrect(result);
        setChecked(true);
    };

    const handleTryAgain = () => {
        setSelectedAnswers([]);
        setChecked(false);
        setIsCorrect(false);
    };

    const handleReset = () => {
        setSelectedAnswers([]);
        setChecked(false);
        setIsCorrect(false);
    };

    const getAnswerClassName = (answer) => {
        const isSelected = selectedAnswers.includes(answer.id);

        if (!checked && isSelected) {
            return `${styles.answerBtn} ${styles.selectedAnswer}`;
        }

        if (!checked) {
            return styles.answerBtn;
        }

        if (isCorrect && isSelected) {
            return `${styles.answerBtn} ${styles.correctAnswer}`;
        }

        if (multipleCorrect && isSelected && answer.isCorrect) {
            return `${styles.answerBtn} ${styles.partialAnswer}`;
        }

        if (isSelected && !answer.isCorrect) {
            return `${styles.answerBtn} ${styles.wrongAnswer}`;
        }

        return styles.answerBtn;
    };

    const checkDisabled = selectedAnswers.length === 0 || checked;

    const titleLengthClass =
        smallTitle || question.length > 170
            ? styles.extraLongTitle
            : question.length > 115
                ? styles.longTitle
                : "";

    return (
        <section className={styles.page} dir="rtl">
            <div className={styles.board}>
                <img src={questionBg} alt="" className={styles.boardBg} />

                <div className={styles.content}>
                    <div className={styles.titleBlock}>
                        <h1 className={`${styles.title} ${titleLengthClass}`}>{question}</h1>

                        {subtitle && (
                            <p className={styles.subtitle}>{subtitle}</p>
                        )}
                    </div>

                    <div className={`${styles.answersArea} ${answers.length === 5 ? styles.fiveAnswers : ""}`}>
                        {answers.map((answer) => (
                            <button
                                key={answer.id}
                                type="button"
                                className={getAnswerClassName(answer)}
                                onClick={() => handleAnswerClick(answer.id)}
                            >
                                {answer.text}

                                {checked && selectedAnswers.includes(answer.id) && !answer.isCorrect && (
                                    <span className={styles.errorMark}>×</span>
                                )}
                            </button>
                        ))}
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
                        <button type="button" className={styles.checkBtn} onClick={handleTryAgain}>
                            {tryAgainText}
                        </button>
                    )}

                    {checked && isCorrect && (
                        <button type="button" className={`${styles.checkBtn} ${styles.disabledBtn}`} >
                            {checkText}
                        </button>
                    )}

                    <button type="button" className={styles.resetBtn} onClick={handleReset}>
                        ↻ {resetText}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Question;