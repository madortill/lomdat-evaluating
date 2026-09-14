import { useState } from "react";
import styles from "./FlipCards.module.css";

import lightbulb from "../../../../assets/img/lightbulb.svg";
import cursorIcon from "../../../../assets/img/cursorIcon.svg";

const cards = [
    {
        id: "principle1",
        title: "עקרון 1",
        text: "לא לחשוש ממתן ציונים נמוכים! - לא כל המועמדים מוכרחים לעבור את יום המיון, משום שלא כולם מתאימים במידה שווה."
    },
    {
        id: "principle2",
        title: "עקרון 2",
        text: "יש להיעזר במחוונים לשם התרשמות מרמת הביצועים הנדרשת בכל תרגיל ותרגיל כדי להבין מהי ההתנהגות האופטימלית."
    },
    {
        id: "principle3",
        title: "עקרון 3",
        text: 'חשוב להבין את סולם ההערכה ולהשתמש בכולו. יש להימנע מ"להיתקע" בצד אחד של הסולם או באמצע.'
    },
    {
        id: "principle4",
        title: "עקרון 4",
        text: "יש להתייחס לכל מדד בנפרד, ללא קשר בין המדדים, על מנת להעריך את החייל הטוב יותר."
    },
    {
        id: "principle5",
        title: "עקרון 5",
        text: "יש להתייחס לכל מדד בנפרד, ללא קשר בין המדדים, על מנת להעריך את החייל הטוב יותר."
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