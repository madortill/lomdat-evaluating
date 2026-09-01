import { useState } from "react";
import styles from "./FlipCards.module.css";

import lightbulb from "../../../../assets/img/lightbulb.svg";
import cursorIcon from "../../../../assets/img/cursorIcon.svg";

const cards = [
    {
        id: "principle1",
        title: "עקרון 1",
        text: "לא להשתמש במתן ציונים ביניים! לא כל המועמדים מתאימים לעבור את יום המיון, משמע שלא כולם מתאימים ביחידה שווה."
    },
    {
        id: "principle2",
        title: "עקרון 2",
        text: "יש להיעזר במחוונים לשם התרשמות מיטבית מהביצוע במהלך התרגיל, וכדי להבין מהי ההתנהגות המינימלית לציון בהתאם."
    },
    {
        id: "principle3",
        title: "עקרון 3",
        text: "חשוב להכיר את סולם ההערכה ולהשתמש בו. מומלץ להשתמש בהערות מילוליות ולא רק בציון."
    },
    {
        id: "principle4",
        title: "עקרון 4",
        text: "על מנת להעריך את החייל חשוב להבין מהם המדדים לפיהם מדרגים, ולתת דירוג נפרד לכל מדד, ללא קשר בין המדדים."
    }
];

const FlipCards = ({
    title = "הערכה מסכמת - עקרונות למתן ציון",
    instruction = "לחצו על הכרטיסיות למטה כדי לצפות בהם"
}) => {
    const [flippedCards, setFlippedCards] = useState([]);

    const toggleCard = (cardId) => {
        setFlippedCards((prev) => {
            if (prev.includes(cardId)) {
                return prev.filter((id) => id !== cardId);
            }

            return [...prev, cardId];
        });
    };

    return (
        <section className={styles.page} dir="rtl">
            <h1 className={styles.title}>{title}</h1>

            <p className={styles.instruction}>
                {instruction}
                <img src={cursorIcon} alt="" className={styles.cursorIcon} />
            </p>

            <div className={styles.cardsGrid}>
                {cards.map((card) => {
                    const isFlipped = flippedCards.includes(card.id);

                    return (
                        <button
                            key={card.id}
                            type="button"
                            className={`${styles.flipCard} ${isFlipped ? styles.flipped : ""}`}
                            onClick={() => toggleCard(card.id)}
                            aria-label={card.title}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.cardFace}>
                                    <h2>{card.title}</h2>
                                    <img src={lightbulb} alt="" className={styles.lightbulb} />
                                </div>

                                <div className={styles.cardBack}>
                                    <p>{card.text}</p>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </section>
    );
};

export default FlipCards;