import { useState } from "react";
import styles from "./Clock.module.css";

import clockImg from "../../../../assets/img/clock.svg";
import bgFormBtn from "../../../../assets/img/bgFormBtn.svg";
import smallArrow from "../../../../assets/img/smallArrow.svg";
import cursorIcon from "../../../../assets/img/cursorIcon.svg";
import formStageOne from "../../../../assets/img/formStageOne.png";
import formStageTwo1 from "../../../../assets/img/formStageTwo1.png";
import formStageTwo2 from "../../../../assets/img/formStageTwo2.png";
import formStageTwo3 from "../../../../assets/img/formStageTwo3.png";
import formStageThree1 from "../../../../assets/img/formStageThree1.png";
import formStageThree2 from "../../../../assets/img/formStageThree2.png";

const steps = [
    {
        title: "קליטה",
        description: "זיהוי, החתמה על הצהרת המועמד.",
        shortLabel: "שלב 1",
        formButtonText: "טופס הצהרה",
        hasForm: true,
        formTitle: "טופס הצהרה",
        formImages: [formStageOne]
    },
    {
        title: "שאלון ביוגרפי",
        description: "שאלון ביוגרפי סגור למילוי טרום ביצוע הראיון האישי וכתנאי לו.",
        shortLabel: "שלב 2",
        formButtonText: "טופס זיהוי",
        hasForm: true,
        formTitle: "טופס זיהוי",
        formImages: [formStageTwo1, formStageTwo2, formStageTwo3]
    },
    {
        title: "תרגילי מצב",
        description: "הצגת הנושא, דיון, ביצוע.",
        shortLabel: "שלב 3",
        formButtonText: "",
        hasForm: false,
        formTitle: "",
        formImages: []
    },
    {
        title: "ראיון אישי חצי מובנה",
        description: "2 שאלות מכל קטגוריה כחובה (מתוך טופס ראיון), סימולציה פיקודית.",
        shortLabel: "שלב 4",
        formButtonText: "טופס ראיון תעסוקתי",
        hasForm: true,
        formTitle: "טופס ראיון תעסוקתי",
        formImages: [formStageTwo1, formStageTwo2]
    }
];

const Clock = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [visitedSteps, setVisitedSteps] = useState([0]);
    const [popupStep, setPopupStep] = useState(null);
    const [isFormExpanded, setIsFormExpanded] = useState(false);

    const activeStepData = steps[activeStep];

    const saveVisitedStep = (index) => {
        setVisitedSteps((prev) => {
            if (prev.includes(index)) {
                return prev;
            }

            return [...prev, index];
        });
    };

    const handleStepClick = (index) => {
        setActiveStep(index);
        saveVisitedStep(index);
    };

    const openFormPopup = (stepIndex) => {
        setPopupStep(stepIndex);
        setIsFormExpanded(false);
    };

    const closeFormPopup = () => {
        setPopupStep(null);
        setIsFormExpanded(false);
    };

    const toggleFormSize = () => {
        setIsFormExpanded((prev) => !prev);
    };

    const getStepButtonClassName = (index) => {
        const isActive = index === activeStep;
        const isVisited = visitedSteps.includes(index);

        if (isActive) {
            return `${styles.stepBtn} ${styles.activeStep}`;
        }

        if (isVisited) {
            return `${styles.stepBtn} ${styles.openedStep}`;
        }

        return `${styles.stepBtn} ${styles.openedStep}`;
    };

    const popupData = popupStep !== null ? steps[popupStep] : null;
    const popupImages = popupData?.formImages || [];

    return (
        <section className={styles.page} dir="rtl">
            <h1 className={styles.title}>סדר היום</h1>

            <p className={styles.description}>
                המועמדים מוזמנים ליום מיון בן כ־6 שעות, בזמן זה הם עוברים 4 שלבים
            </p>

            <p className={styles.instruction}>
                לחצו על הכפתורים למטה כדי לצפות בהם
                <img src={cursorIcon} alt="" className={styles.cursorIcon} />
            </p>

            <div className={styles.clockArea}>
                <button
                    type="button"
                    className={`${getStepButtonClassName(0)} ${styles.stepOne}`}
                    onClick={() => handleStepClick(0)}
                >
                    {steps[0].shortLabel}
                </button>

                <button
                    type="button"
                    className={`${getStepButtonClassName(1)} ${styles.stepTwo}`}
                    onClick={() => handleStepClick(1)}
                >
                    {steps[1].shortLabel}
                </button>

                <button
                    type="button"
                    className={`${getStepButtonClassName(2)} ${styles.stepThree}`}
                    onClick={() => handleStepClick(2)}
                >
                    {steps[2].shortLabel}
                </button>

                <button
                    type="button"
                    className={`${getStepButtonClassName(3)} ${styles.stepFour}`}
                    onClick={() => handleStepClick(3)}
                >
                    {steps[3].shortLabel}
                </button>

                <div className={styles.clock}>
                    <img src={clockImg} alt="" className={styles.clockImg} />

                    <div className={styles.clockContent}>
                        <h2>{activeStepData.title}</h2>
                        <p>{activeStepData.description}</p>

                        {activeStepData.hasForm && (
                            <button
                                type="button"
                                className={styles.formBtn}
                                onClick={() => openFormPopup(activeStep)}
                            >
                                <img src={bgFormBtn} alt="" className={styles.formBtnBg} />
                                <span>{activeStepData.formButtonText}</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.timeline}>
                {steps.map((step, index) => (
                    <div key={step.title} className={styles.timelineItem}>
                        <span>{step.title}</span>

                        {index < steps.length - 1 && (
                            <img src={smallArrow} alt="" className={styles.timelineArrow} />
                        )}
                    </div>
                ))}
            </div>

            {popupData && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popup}>
                        <button
                            type="button"
                            className={styles.closeBtn}
                            onClick={closeFormPopup}
                        >
                            ×
                        </button>

                        <h2>{popupData.formTitle}</h2>

                        <p className={styles.popupHint}>
                            {isFormExpanded
                                ? "לחצו על הטופס כדי להקטין"
                                : "לחצו על הטופס כדי להגדיל"}
                        </p>

                        <div
                            className={`${styles.formsScroller} ${isFormExpanded ? styles.formsScrollerExpanded : ""
                                }`}
                        >
                            {popupImages.map((imageSrc, index) => (
                                <button
                                    key={`${popupData.formTitle}-${index}`}
                                    type="button"
                                    className={styles.formImageBtn}
                                    onClick={toggleFormSize}
                                    aria-label="הגדלת או הקטנת הטופס"
                                >
                                    {popupImages.length > 1 && (
                                        <span className={styles.formPageLabel}>
                                            עמוד {index + 1}
                                        </span>
                                    )}

                                    <img
                                        src={imageSrc}
                                        alt={`${popupData.formTitle} עמוד ${index + 1}`}
                                        className={styles.formImage}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Clock;