import { useMemo, useState } from "react";
import styles from "./Clock.module.css";

import clockImg from "../../../../assets/img/clock.svg";
import bgFormBtn from "../../../../assets/img/bgFormBtn.svg";
import smallArrow from "../../../../assets/img/smallArrow.svg";
import cursorIcon from "../../../../assets/img/cursorIcon.svg";

const steps = [
    {
        title: "קליטה",
        description: "זיהוי, החתמה על הצהרת המועמד.",
        shortLabel: "שלב 1",
        formButtonText: "טופס הצהרה",
        hasForm: true,
        formTitle: "טופס הצהרה",
        formText: "כאן תופיע תמונת טופס ההצהרה."
    },
    {
        title: "שאלון ביוגרפי",
        description: "שאלון ביוגרפי סגור למילויטרום ביצוע הראיון האישי וכתנאי לו.",
        shortLabel: "שלב 2",
        formButtonText: "טופס זיהוי",
        hasForm: true,
        formTitle: "טופס זיהוי",
        formText: "כאן תופיע תמונת טופס הזיהוי."
    },
    {
        title: "תרגילי מצב",
        description: "הצגת הנושא, דיון, ביצוע.",
        shortLabel: "שלב 3",
        formButtonText: "",
        hasForm: false,
        formTitle: "",
        formText: ""
    },
    {
        title: "ראיון אישי חצי מובנה",
        description: "2 שאלות מכל קטגוריה כחובה (מתוך טופס ראיון), סימולציה פיקודית.",
        shortLabel: "שלב 4",
        formButtonText: "טופס ראיון תעסוקתי",
        hasForm: true,
        formTitle: "טופס ראיון תעסוקתי",
        formText: "כאן תופיע תמונת טופס הראיון התעסוקתי."
    }
];

const Clock = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [visitedSteps, setVisitedSteps] = useState([]);

    const nextRequiredIndex = useMemo(() => {
        const nextIndex = steps.findIndex((_, index) => !visitedSteps.includes(index));
        return nextIndex === -1 ? steps.length - 1 : nextIndex;
    }, [visitedSteps]);

    const allVisited = visitedSteps.length >= steps.length;
    const [popupStep, setPopupStep] = useState(null);

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
        const isVisited = visitedSteps.includes(index);
        const isNextRequired = index === nextRequiredIndex;
        const isAllowed = allVisited || isVisited || isNextRequired;

        if (!isAllowed) {
            return;
        }

        setActiveStep(index);
        saveVisitedStep(index);
    };

    const getStepButtonClassName = (index) => {
        const isActive = visitedSteps.includes(index) && index === activeStep;
        const isVisited = visitedSteps.includes(index);
        const isNextRequired = index === nextRequiredIndex;
        const isAllowed = allVisited || isVisited || isNextRequired;

        if (isActive) {
            return `${styles.stepBtn} ${styles.activeStep}`;
        }

        if (isNextRequired && !allVisited) {
            return `${styles.stepBtn} ${styles.nextStep}`;
        }

        if (isAllowed) {
            return `${styles.stepBtn} ${styles.openedStep}`;
        }

        return `${styles.stepBtn} ${styles.lockedStep}`;
    };

    const visibleSteps = steps.filter((_, index) => visitedSteps.includes(index));

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

                        {activeStepData.hasForm && visitedSteps.includes(activeStep) && (
                            <button
                                type="button"
                                className={styles.formBtn}
                                onClick={() => setPopupStep(activeStep)}
                            >
                                <img src={bgFormBtn} alt="" className={styles.formBtnBg} />
                                <span>{activeStepData.formButtonText}</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {visibleSteps.length > 0 && (
                <div className={styles.timeline}>
                    {visibleSteps.map((step, index) => (
                        <div key={step.title} className={styles.timelineItem}>
                            <span>{step.title}</span>

                            {index < visibleSteps.length - 1 && (
                                <img src={smallArrow} alt="" className={styles.timelineArrow} />
                            )}
                        </div>
                    ))}
                </div>
            )}

            {popupStep !== null && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popup}>
                        <button
                            type="button"
                            className={styles.closeBtn}
                            onClick={() => setPopupStep(null)}
                        >
                            ×
                        </button>

                        <h2>{steps[popupStep].formTitle}</h2>

                        <div className={styles.formPlaceholder}>
                            {steps[popupStep].formText}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Clock;