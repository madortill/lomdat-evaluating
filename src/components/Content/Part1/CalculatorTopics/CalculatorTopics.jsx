import { useEffect, useMemo, useState } from "react";
import styles from "./CalculatorTopics.module.css";

import calculatorSvg from "../../../../assets/img/calculator.svg";
import bgNoteThinLight from "../../../../assets/img/bgNoteThinLight.svg";

const topics = [
    {
        title: "דגשים ליום המיון",
        calculatorText: "לחצו על הספרה 1 :)",
        contentTitle: "כמות מועמדים",
        text: "כאן יופיע הטקסט של תת־הנושא הראשון.",
        note: "שימו לב למספר המועמדים ולמבנה היום."
    },
    {
        title: "דגשים ליום המיון - כמות מועמדים",
        calculatorText: "כמות מועמדים",
        contentTitle: "כמות מועמדים",
        text: "ביום מיון חשוב להתאים את כמות המועמדים למספר המעריכים, למשך היום ולסוג המשימות.",
        note: "ככל שכמות המועמדים גדולה יותר, כך חשוב להקפיד על סדר והנחיות אחידות."
    },
    {
        title: "דגשים ליום המיון - אוכלוסיית המתמיינים",
        calculatorText: "אוכלוסיית המתמיינים",
        contentTitle: "אוכלוסיית המתמיינים",
        text: "יש להתייחס למאפייני האוכלוסייה המתמיינת, לרקע שלה ולצרכים שעשויים להשפיע על אופן העברת יום המיון.",
        note: "חשוב לשמור על התאמה בין מאפייני המועמדים לבין אופי המיון."
    },
    {
        title: "דגשים ליום המיון - צוות המיון",
        calculatorText: "צוות המיון",
        contentTitle: "צוות המיון",
        text: "צוות המיון צריך להכיר את מטרת היום, את הקריטריונים להערכה ואת אופן התיעוד הנדרש.",
        note: "צוות מתואם ומוכן מסייע לשמור על מיון מקצועי והוגן."
    }
];

const calculatorButtons = [
    { number: "1", top: "58%", left: "31%" },
    { number: "7", top: "61%", left: "66%" },
    { number: "8", top: "83%", left: "42%" },
    { number: "4", top: "44%", left: "76%" }
];

const CalculatorTopics = ({
    activeIndex = 0,
    groupId = "calculatorTopics",
    groupStepIds = [],
    onNavigateToNavId
}) => {
    const storageKey = `visited_${groupId}`;

    const [visited, setVisited] = useState(() => {
        const saved = sessionStorage.getItem(storageKey);

        if (!saved) {
            return [];
        }

        try {
            return JSON.parse(saved);
        } catch {
            return [];
        }
    });

    useEffect(() => {
        setVisited((prev) => {
            if (prev.includes(activeIndex)) {
                return prev;
            }

            const updated = [...prev, activeIndex];
            sessionStorage.setItem(storageKey, JSON.stringify(updated));
            return updated;
        });
    }, [activeIndex, storageKey]);

    const allVisited = visited.length >= topics.length;

    const nextRequiredIndex = useMemo(() => {
        return topics.findIndex((_, index) => !visited.includes(index));
    }, [visited]);

    const activeTopic = topics[activeIndex] || topics[0];

    const handleCalculatorButtonClick = (index) => {
        const isVisited = visited.includes(index);
        const isNextRequired = index === nextRequiredIndex;
        const isAllowed = allVisited || isVisited || isNextRequired;

        if (!isAllowed) {
            return;
        }

        const targetNavId = groupStepIds[index];

        if (targetNavId && onNavigateToNavId) {
            onNavigateToNavId(targetNavId);
        }
    };

    const getButtonClassName = (index) => {
        const isActive = index === activeIndex;
        const isVisited = visited.includes(index);
        const isNextRequired = index === nextRequiredIndex;
        const isAllowed = allVisited || isVisited || isNextRequired;

        if (isActive) {
            return `${styles.calcButton} ${styles.activeButton}`;
        }

        if (isNextRequired && !allVisited) {
            return `${styles.calcButton} ${styles.nextRequiredButton}`;
        }

        if (isAllowed) {
            return `${styles.calcButton} ${styles.enabledButton}`;
        }

        return `${styles.calcButton} ${styles.lockedButton}`;
    };

    return (
        <section className={styles.page}>
            <h1 className={styles.title}>{activeTopic.title}</h1>

            <div className={styles.instructionTape}>
                <img src={bgNoteThinLight} alt="bg note" className={styles.bgNoteThin} />
                <p className={styles.noteText}>
                    לחצו על הכפתורים הירוקים כדי ללמוד עוד :)
                </p>
            </div>

            <div className={styles.mainArea}>
                <div className={styles.calculatorWrapper}>
                    <img src={calculatorSvg} alt="" className={styles.calculatorImg} />

                    <div className={styles.calculatorScreen}>
                        {activeTopic.calculatorText}
                    </div>

                    <div className={styles.calculatorButtons}>
                        {calculatorButtons.map((button, index) => (
                            <button
                                key={button.number}
                                className={getButtonClassName(index)}
                                style={{
                                    "--btn-top": button.top,
                                    "--btn-left": button.left
                                }}
                                onClick={() => handleCalculatorButtonClick(index)}
                                type="button"
                            >
                                {button.number}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.contentCard}>
                    <h2>{activeTopic.contentTitle}</h2>
                    <p>{activeTopic.text}</p>

                    <div className={styles.note}>
                        {activeTopic.note}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CalculatorTopics;