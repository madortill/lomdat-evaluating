import { useState } from "react";
import styles from "./Notebooks.module.css";

import bgNoteThin from "../../../../assets/img/bgNoteThin.svg";
import closedNotebook from "../../../../assets/img/closedNotebook.svg";
import openNotebookBg from "../../../../assets/img/openNotebook.svg";
import markerBrown from "../../../../assets/img/markerBrown.svg";
import bgOrangeBtn from "../../../../assets/img/bgOrangeBtn.svg";

const defaultNotebooks = [
    {
        id: "primacy",
        title: "אפקט הראשוניות",
        popupTitle: "אפקט הראשוניות",
        bodyText: "תכונות שמופיעות ראשונות משפיעות על האופן בו אנו מפרשים את המידע המופיע לאחר מכן.",
        noteText: "ברצי נה שמצודדת – עלולה להיתפס לא לחיוב, ולהכתיב לרעה את התרשמות הראשונית ולא לקרוא זאת לאחר מכן."
    },
    {
        id: "stereotypes",
        title: "סטריאוטיפים",
        popupTitle: "סטריאוטיפים",
        bodyText: "נטייה לייחס לאדם תכונות מסוימות על בסיס השתייכות לקבוצה, גם כאשר אין לכך בסיס אישי מספק.",
        noteText: "חשוב לבדוק את המועמד לפי ההתנהגות בפועל ולא לפי הנחות מוקדמות."
    },
    {
        id: "halo",
        title: "אפקט ההילה",
        popupTitle: "אפקט ההילה",
        bodyText: "תכונה בולטת אחת של המועמד משפיעה על האופן בו אנו מעריכים תכונות נוספות שלו.",
        noteText: "אין להשליך מתכונה אחת על כלל ההתאמה של המועמד."
    },
    {
        id: "leniency",
        title: "דמיון למעריך",
        popupTitle: "דמיון למעריך",
        bodyText: "נטייה להעריך באופן חיובי יותר מועמדים שמזכירים לנו את עצמנו או דומים לנו.",
        noteText: "יש להיצמד למדדי ההערכה ולא לתחושת חיבור אישית."
    },
    {
        id: "contrast",
        title: "בולטות",
        popupTitle: "בולטות",
        bodyText: "נטייה לתת משקל גבוה מדי להתנהגות או מאפיין בולט במיוחד, גם אם אינו מייצג את התמונה המלאה.",
        noteText: "חשוב לבדוק האם ההתנהגות הבולטת באמת משקפת יכולת יציבה."
    },
    {
        id: "contrastEffect",
        title: "אפקט הקונטרסט",
        popupTitle: "אפקט הקונטרסט",
        bodyText: "הערכה של מועמד מושפעת מהשוואה למועמדים שנבדקו לפניו, במקום להיבחן לפי הקריטריונים עצמם.",
        noteText: "יש להעריך כל מועמד בפני עצמו לפי המדדים שנקבעו מראש."
    },
    {
        id: "centerBias",
        title: "נטיה להחמרה/הקלה/מרכז",
        popupTitle: "נטיה להחמרה/הקלה/מרכז",
        bodyText: "נטייה של מעריך לתת ציונים גבוהים מדי, נמוכים מדי, או להימנע מציוני קצה.",
        noteText: "חשוב להשתמש בטווח הציונים המלא בהתאם לביצוע בפועל."
    },
    {
        id: "confirmation",
        title: "הטיית האישוש",
        popupTitle: "הטיית האישוש",
        bodyText: "נטייה לחפש מידע שמחזק התרשמות קיימת ולהתעלם ממידע שסותר אותה.",
        noteText: "יש לחפש גם ראיות שמאתגרות את הרושם הראשוני."
    }
];

const STORAGE_KEY = "seen_notebooks";

const Notebooks = ({
    title = "הטיות בהערכה",
    instruction = "לחצו על הפנקסים כדי ללמוד עוד :)",
    notebooks = defaultNotebooks,
    buttonText = "הבנתי!"
}) => {
    const [activeNotebook, setActiveNotebook] = useState(null);

    const [seenNotebooks, setSeenNotebooks] = useState(() => {
        const saved = sessionStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return [];
        }

        try {
            return JSON.parse(saved);
        } catch {
            return [];
        }
    });

    const openNotebook = (notebook) => {
        setActiveNotebook(notebook);

        setSeenNotebooks((prev) => {
            if (prev.includes(notebook.id)) {
                return prev;
            }

            const updated = [...prev, notebook.id];
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            return updated;
        });
    };

    const closePopup = () => {
        setActiveNotebook(null);
    };

    return (
        <section className={styles.page} dir="rtl">
            <h1 className={styles.title}>{title}</h1>

            <div className={styles.noteBox}>
                <img src={bgNoteThin} alt="" className={styles.bgNoteThin} />
                <p className={styles.noteText}>{instruction}</p>
            </div>

            <div className={styles.notebooksGrid}>
                {notebooks.map((notebook) => {
                    const isSeen = seenNotebooks.includes(notebook.id);

                    return (
                        <button
                            key={notebook.id}
                            type="button"
                            className={styles.notebookBtn}
                            onClick={() => openNotebook(notebook)}
                        >
                            <img src={closedNotebook} alt="" className={styles.closedNotebook} />

                            {isSeen && <span className={styles.seenCheck}>✓</span>}

                            <span className={styles.notebookTitle}>{notebook.title}</span>
                        </button>
                    );
                })}
            </div>

            {activeNotebook && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popup}>
                        <img src={openNotebookBg} alt="" className={styles.openNotebookBg} />

                        <div className={styles.popupContent}>
                            <h2>{activeNotebook.popupTitle}</h2>

                            <p className={styles.bodyText}>{activeNotebook.bodyText}</p>

                            <div className={styles.markerNote}>
                                <p>{activeNotebook.noteText}</p>
                                <img src={markerBrown} alt="" className={styles.marker} />
                            </div>

                            <button type="button" className={styles.understoodBtn} onClick={closePopup}>
                                <img src={bgOrangeBtn} alt="" className={styles.understoodBtnBg} />
                                <span>{buttonText}</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Notebooks;