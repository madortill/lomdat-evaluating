import { useMemo, useState } from "react";
import styles from "./CalculatorTopics.module.css";

import calculatorSvg from "../../../../assets/img/calculator.svg";
import bgNoteThinLight from "../../../../assets/img/bgNoteThinLight.svg";
import orangePeople from "../../../../assets/img/orangePeople.svg";
import orangeBG1 from "../../../../assets/img/orangeBG1.svg";
import orangeBG2 from "../../../../assets/img/orangeBG2.svg";
import orangeFlowchart from "../../../../assets/img/orangeFlowchart.svg";
import bgNoteMarkerOrange from "../../../../assets/img/bgNoteMarkerOrange.svg";

const topics = [
    {
        title: "דגשים ליום המיון - כמות המועמדים",
        calculatorText: "כמות מועמדים",
        contentType: "amount",
        highlight: "המיון יבוצע בקבוצות בנות 6-10 מועמדים.",
        paragraphs: [
            "יום וקבוצת מיון ייפתחו בהינתן מינימום של 6 מועמדים.",
            "כמו כן, לא יאושרו קבוצות מיון בנות יותר מ־10 מועמדים. במקרה כזה תיפתח קבוצה נוספת."
        ]
    },
    {
        title: "דגשים ליום המיון - אוכלוסיית המתמיינים",
        calculatorText: "אוכלוסיית המתמיינים",
        contentType: "population",
        intro: "אוכלוסיית המתמיינים הם כלל המועמדים להדרכה בבה״ד – חיילים במהלך ההכשרה או השירות.",
        cards: [
            {
                id: "attendance",
                textParts: [
                    "יש לוודא מראש כי כל המתמיינים יהיו נוכחים ",
                    { text: "לאורך כל יום המיון", underline: true },
                    " ללא שחרורים לתורנויות, לחר״פ וכו׳."
                ]
            },
            {
                id: "separation",
                textParts: [
                    "יש להקפיד למיין חיילים בהכשרה וחיילים מתוך השירות ",
                    { text: "בקבוצות מיון נפרדות.", underline: true }
                ]
            }
        ]
    },
    {
        title: "דגשים ליום המיון - צוות המיון",
        calculatorText: "צוות המיון",
        contentType: "team",
        intro: "בכל קבוצה יעריכו לפחות שני מעריכים מהתפקידים הבאים:",
        bullets: [
            "נציג גף ההדרכה בבה״ד (גפ״ה / צפ״ה)",
            "נציג שממלא את התפקיד (לדוגמה מ״כ במיון למ״כים)",
            "קצין או נגד בתפקיד פיקודי בכיר"
        ],
        note: "בעל תפקיד שלא עבר הכשרת ממיינים לא ימיין!"
    },
    {
        title: "דגשים ליום המיון - איתור וזימון המועמדים",
        calculatorText: "איתור וזימון המועמדים",
        contentType: "flowchart"
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
    const openedStorageKey = `opened_${groupId}`;

    const [visited, setVisited] = useState(() => {
        const saved = sessionStorage.getItem(storageKey);
        if (!saved) return [];
        try { return JSON.parse(saved); } catch { return []; }
    });

    const [hasCalculatorOpened, setHasCalculatorOpened] = useState(() => {
        return sessionStorage.getItem(openedStorageKey) === "true";
    });

    const allVisited = visited.length >= topics.length;
    const activeTopic = topics[activeIndex] || topics[0];

    const nextRequiredIndex = useMemo(() => {
        const nextIndex = topics.findIndex((_, index) => !visited.includes(index));
        return nextIndex === -1 ? topics.length - 1 : nextIndex;
    }, [visited]);

    const saveVisited = (index) => {
        if (!hasCalculatorOpened) {
            setHasCalculatorOpened(true);
            sessionStorage.setItem(openedStorageKey, "true");
        }
        const updated = visited.includes(index) ? visited : [...visited, index];
        setVisited(updated);
        sessionStorage.setItem(storageKey, JSON.stringify(updated));
        return updated;
    };

    const handleCalculatorButtonClick = (index) => {
        const isVisited = visited.includes(index);
        const isNextRequired = index === nextRequiredIndex;
        const isAllowed = allVisited || isVisited || isNextRequired;
        if (!isAllowed) return;
        saveVisited(index);
        const targetNavId = groupStepIds[index];
        const currentNavId = groupStepIds[activeIndex];
        if (targetNavId && targetNavId !== currentNavId && onNavigateToNavId) {
            onNavigateToNavId(targetNavId);
        }
    };

    const getButtonClassName = (index) => {
        const isActive = hasCalculatorOpened && index === activeIndex;
        const isVisited = visited.includes(index);
        const isNextRequired = index === nextRequiredIndex;
        const isAllowed = allVisited || isVisited || isNextRequired;
        if (isActive) return `${styles.calcButton} ${styles.activeButton}`;
        if (isNextRequired && !allVisited) return `${styles.calcButton} ${styles.nextRequiredButton}`;
        if (isAllowed) return `${styles.calcButton} ${styles.enabledButton}`;
        return `${styles.calcButton} ${styles.lockedButton}`;
    };

    const renderTextParts = (parts) =>
        parts.map((part, index) =>
            typeof part === "string"
                ? <span key={index}>{part}</span>
                : <span key={index} className={styles.underlinedText}>{part.text}</span>
        );

    const renderContent = () => {
        if (activeTopic.contentType === "amount") {
            return (
                <div className={styles.amountContent}>
                    <div className={styles.highlightNote}>
                        <img src={orangeBG1} alt="" className={styles.orangeBG1} />
                        <p>{activeTopic.highlight}</p>
                    </div>
                    <div className={styles.amountParagraphs}>
                        {activeTopic.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                    <img src={orangePeople} alt="" className={styles.peopleScale} />
                </div>
            );
        }
        if (activeTopic.contentType === "population") {
            return (
                <div className={styles.populationContent}>
                    <p className={styles.populationIntro}>{activeTopic.intro}</p>
                    <div className={styles.populationCards}>
                        {activeTopic.cards.map((card) => (
                            <div key={card.id} className={styles.populationCard}>
                                <img src={orangeBG2} alt="" className={styles.orangeBG2} />
                                <p>{renderTextParts(card.textParts)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        if (activeTopic.contentType === "team") {
            return (
                <div className={styles.teamContent}>
                    <p className={styles.teamIntro}>{activeTopic.intro}</p>
                    <ul className={styles.teamList}>
                        {activeTopic.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                        ))}
                    </ul>
                    <div className={styles.teamNote}>
                        <img src={bgNoteMarkerOrange} alt="" className={styles.teamNoteBg} />
                        <p>{activeTopic.note}</p>
                    </div>
                </div>
            );
        }
        if (activeTopic.contentType === "flowchart") {
            return (
                <div className={styles.flowchartContent}>
                    <img src={orangeFlowchart} alt="" className={styles.flowchartImg} />
                </div>
            );
        }
        return null;
    };

    const animationStorageKey = `contentAnimationPlayed_${groupId}`;

    const [shouldAnimateContent, setShouldAnimateContent] = useState(() => {
        return sessionStorage.getItem(animationStorageKey) !== "true";
    });

    const handleContentAnimationEnd = () => {
        setShouldAnimateContent(false);
        sessionStorage.setItem(animationStorageKey, "true");
    };

    return (
        <section className={styles.page} dir="rtl">
            <h1 className={styles.title}>
                {hasCalculatorOpened ? activeTopic.title : "דגשים ליום המיון"}
            </h1>

            <div className={`${styles.instructionTape} ${hasCalculatorOpened ? styles.instructionTapeHidden : ""}`}>
                <img src={bgNoteThinLight} alt="" className={styles.bgNoteThin} />
                <p className={styles.noteText}>לחצו על הכפתורים הירוקים כדי ללמוד עוד :)</p>
            </div>

            <div className={`${styles.mainArea} ${hasCalculatorOpened ? styles.mainAreaOpen : styles.mainAreaClosed}`}>
                <div className={styles.calculatorWrapper}>
                    <img src={calculatorSvg} alt="" className={styles.calculatorImg} />
                    <div className={styles.calculatorScreen}>
                        {hasCalculatorOpened ? activeTopic.calculatorText : "לחצו על הספרה 1 :)"}
                    </div>
                    <div className={styles.calculatorButtons}>
                        {calculatorButtons.map((button, index) => (
                            <button
                                key={button.number}
                                type="button"
                                className={getButtonClassName(index)}
                                style={{ "--btn-top": button.top, "--btn-left": button.left }}
                                onClick={() => handleCalculatorButtonClick(index)}
                            >
                                {button.number}
                            </button>
                        ))}
                    </div>
                </div>

                {hasCalculatorOpened && (
                    <div
                        className={`${styles.contentStage} ${shouldAnimateContent ? styles.contentStageAnimated : ""
                            }`}
                        onAnimationEnd={handleContentAnimationEnd}
                    >
                        <div className={`${styles.contentCard} ${styles[`${activeTopic.contentType}Card`]}`}>
                            {renderContent()}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CalculatorTopics;