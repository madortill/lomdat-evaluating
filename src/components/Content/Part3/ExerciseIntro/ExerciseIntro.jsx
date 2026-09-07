import { useEffect, useRef, useState } from "react";
import styles from "./ExerciseIntro.module.css";

import cursorIcon from "../../../../assets/img/cursorIcon.svg";
import scissors from "../../../../assets/img/scissors.svg";

import target from "../../../../assets/img/target.svg";
import brain from "../../../../assets/img/brain.svg";
import checklist from "../../../../assets/img/checklist.svg";
import clock from "../../../../assets/img/clock2.svg";

const defaultCards = [
    {
        id: "goal",
        title: "המטרה",
        icon: target,
        text: "בחינת התנהגות המועמדים בתוך קבוצה בסיטואציה של דיון, על רצף של ביטוי עצמי מול מתן מקום לאחר. כמו כן, בחינת היכולת להשתלבות בצוות."
    },
    {
        id: "rationale",
        title: "הרציונל",
        icon: brain,
        text: `בחינת היכולות הבין־אישיות של המועמדים — כיצד כל אחד בוחר להביא את דבריו לידי ביטוי, עד כמה מאפשר ונותן מקום לחברי הקבוצה, איזה "תפקיד" לוקח על עצמו כל מועמד (מנהיג, שתקן, וכחן, ותרן וכו').`
    },
    {
        id: "equipment",
        title: "ציוד נדרש",
        icon: checklist,
        text: "כרטיסיות עם רשימת תכונות המדריך/משימות המדריך (לפי מספר המתמיינים ולפי האופציה שנבחרה, בנספחים), דפי טיוטה, עטים."
    },
    {
        id: "duration",
        title: "משך התרגיל",
        icon: clock,
        text: "כ־45 דקות."
    }
];

const ExerciseIntro = ({
    title = "תרגיל 1 - דיון קבוצתי",
    instruction = "לחצו על המספריים למטה כדי לקרוא עוד",
    cards = defaultCards
}) => {
    const [openedCards, setOpenedCards] = useState([]);
    const [scrollReadyCards, setScrollReadyCards] = useState([]);
    const scrollTimeoutsRef = useRef({});

    useEffect(() => {
        return () => {
            Object.values(scrollTimeoutsRef.current).forEach((timeoutId) => {
                clearTimeout(timeoutId);
            });
        };
    }, []);

    const toggleCard = (cardId, shouldScroll) => {
        setOpenedCards((prev) => {
            const isOpened = prev.includes(cardId);

            clearTimeout(scrollTimeoutsRef.current[cardId]);

            if (isOpened) {
                setScrollReadyCards((readyPrev) =>
                    readyPrev.filter((id) => id !== cardId)
                );

                return prev.filter((id) => id !== cardId);
            }

            if (shouldScroll) {
                scrollTimeoutsRef.current[cardId] = setTimeout(() => {
                    setScrollReadyCards((readyPrev) => {
                        if (readyPrev.includes(cardId)) {
                            return readyPrev;
                        }

                        return [...readyPrev, cardId];
                    });
                }, 380);
            }

            return [...prev, cardId];
        });
    };

    const cardsToRender = cards.map((card, index) => ({
        ...(defaultCards[index] || {}),
        ...card
    }));

    return (
        <section className={styles.page} dir="rtl">
            <h1 className={styles.title}>{title}</h1>

            <p className={styles.instruction}>
                {instruction}
                <img src={cursorIcon} alt="" className={styles.cursorIcon} />
            </p>

            <div className={styles.cardsGrid}>
                {cardsToRender.map((card) => {
                    const isOpened = openedCards.includes(card.id);
                    const isScrollable = Boolean(card.scroll);
                    const isScrollReady = scrollReadyCards.includes(card.id);

                    return (
                        <button
                            key={card.id}
                            type="button"
                            className={`${styles.card} ${isOpened ? styles.openedCard : ""
                                } ${isScrollable ? styles.scrollableCard : ""
                                } ${isScrollable && isScrollReady ? styles.scrollReadyCard : ""
                                }`}
                            onClick={() => toggleCard(card.id, isScrollable)}
                            aria-expanded={isOpened}
                        >
                            <div className={styles.cardTop}>
                                <img src={card.icon} alt="" className={styles.cardIcon} />

                                <h2>{card.title}</h2>
                            </div>

                            <div className={styles.cutLine}>
                                <span></span>
                                <img src={scissors} alt="" className={styles.scissors} />
                            </div>

                            <div className={styles.cardReveal}>
                                <p>
                                    <span>{card.text}</span>
                                </p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </section>
    );
};

export default ExerciseIntro;