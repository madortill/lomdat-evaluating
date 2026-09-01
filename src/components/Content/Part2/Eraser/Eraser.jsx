import { useState } from "react";
import styles from "./Eraser.module.css";

import iconEraser from "../../../../assets/img/iconEraser.svg";
import eraserSmiling from "../../../../assets/img/eraserSmiling.svg";

import scribble1 from "../../../../assets/img/scribble1.svg";
import scribble2 from "../../../../assets/img/scribble2.svg";
import scribble3 from "../../../../assets/img/scribble3.svg";
import scribble4 from "../../../../assets/img/scribble4.svg";

const defaultNotes = [
    {
        id: "notes",
        text: "לפני כתיבת ההערכה יש לעיין בריכוז בנתונים (טפסי התצפית), וליצור תמונה מלאה של המועמד מכלל התרגילים.",
        scribble: scribble1,
        variantClass: "variantOne"
    },
    {
        id: "fit",
        text: "יש להתייחס למידת ההתאמה של המועמד לתפקיד ולדרג אותה מבחינת סיכוי בתפקיד.",
        scribble: scribble2,
        variantClass: "variantTwo"
    },
    {
        id: "allInfo",
        text: "יש להקפיד על רישום התוצאות וכל מידע חשוב אחר כמו סיבת הפסקת ההשתתפות בתרגילים.",
        scribble: scribble3,
        variantClass: "variantThree"
    },
    {
        id: "examples",
        text: "חשוב להבין את המדדים לפיהם מעריכים את החייל.",
        scribble: scribble4,
        variantClass: "variantFour"
    },
    {
        id: "objective",
        text: 'יש להימנע מהשפעה של אינטרסים אישיים מול החייל (רצון "לעזור לו" בשיבוץ או לסגור חשבון איתו, צעדים שישפיעו לרעה הן על החייל והן על היכולות שלנו לשבץ אותו במקום שמתאים לו).',
        scribble: scribble3,
        variantClass: "variantFive"
    },
    {
        id: "clear",
        text: "לא להיתפס לאירוע בודד, לרושם הראשון או האחרון שנחרט בזיכרון.",
        scribble: scribble1,
        variantClass: "variantSix"
    },
    {
        id: "summary",
        text: 'תצפית מלאה - לרשום כמה שיותר התנהגויות נצפות ולא רק מסקנות כוללות (למשל: "דוד קם פעמיים ממקומו למרות שניתנה פעמיים הוראה לא לקום", במקום: "קושי בשליצה עצמית וקבלת מרות").',
        scribble: scribble2,
        variantClass: "variantSeven"
    },
    {
        id: "anotherrr",
        text: 'בעת מתן ההערכה יש להיות מודע להטיות אשר משפיעות עלינו כמפקדים (אפקט ההילה, סטריאוטיפים, דמיון למעריך ועוד).',
        scribble: scribble3,
        variantClass: "variantEight"
    }
];

const Eraser = ({
    title = "הערכה מסכמת - הנחיות להערכה מיטבית",
    instruction = "מחקו את הקשקושים כדי לקרוא",
    notes = defaultNotes
}) => {
    const [revealedNotes, setRevealedNotes] = useState([]);
    const [isHoveringScribble, setIsHoveringScribble] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY
        });
    };

    const revealNote = (noteId) => {
        setRevealedNotes((prev) => {
            if (prev.includes(noteId)) {
                return prev;
            }

            return [...prev, noteId];
        });

        setIsHoveringScribble(false);
    };

    return (
        <section className={styles.page} dir="rtl" onMouseMove={handleMouseMove}>
            {isHoveringScribble && (
                <img
                    src={eraserSmiling}
                    alt=""
                    className={styles.eraserCursor}
                    style={{
                        left: `${mousePosition.x}px`,
                        top: `${mousePosition.y}px`
                    }}
                />
            )}

            <h1 className={styles.title}>{title}</h1>

            <div className={styles.instructionRow}>
                <img src={iconEraser} alt="" className={styles.instructionIcon} />
                <p>{instruction}</p>
            </div>

            <div className={styles.notesGrid}>
                {notes.map((note) => {
                    const isRevealed = revealedNotes.includes(note.id);

                    return (
                        <div key={note.id} className={styles.noteSlot}>
                            {!isRevealed && (
                                <button
                                    type="button"
                                    className={styles.scribbleBtn}
                                    onClick={() => revealNote(note.id)}
                                    onMouseEnter={() => setIsHoveringScribble(true)}
                                    onMouseLeave={() => setIsHoveringScribble(false)}
                                >
                                    <img
                                        src={note.scribble}
                                        alt=""
                                        className={`${styles.scribble} ${styles[note.variantClass]}`}
                                    />
                                </button>
                            )}

                            {isRevealed && (
                                <div className={styles.revealedCard}>
                                    <p>{note.text}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Eraser;