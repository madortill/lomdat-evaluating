import { useState } from "react";
import styles from "./InterviewNotes.module.css";

import OpeningNote from "../../Reusable/OpeningNote/OpeningNote";

import closedNotebook from "../../../../assets/img/closedNotebook.svg";
import openNotebookBg from "../../../../assets/img/openNotebook.svg";
import bgOrangeBtn from "../../../../assets/img/bgOrangeBtn.svg";

const STORAGE_KEY = "seen_interview_notes";

const notes = [
    {
        id: "preparation",
        title: "הכנה",
        popupTitle: "הכנה",
        content: [
            {
                type: "bullet",
                text: "ההכנה מתבצעת לפני הראיון."
            },
            {
                type: "bullet",
                text: "במידה ומראיינים אוכלוסייה בעלת מאפיינים ייחודיים (עולים חדשים, בני מיעוטים, בני ישיבות) יש לוודא שהמעריכים מכירים את מאפייני האוכלוסייה לפני הראיון."
            },
            {
                type: "bullet",
                text: "פרטיות - בחירת מקום המאפשר ביצוע ראיון ללא הפרעות."
            },
            {
                type: "bullet",
                text: "מעבר מעמיק על שאלון אישי, סימון סוגיות לבירור. חלוקת עבודה בין המראיינים."
            }
        ]
    },
    {
        id: "opening",
        title: "פתיחה",
        popupTitle: "פתיחה",
        content: [
            {
                type: "paragraph",
                text: "תחילה יש לבצע הצגה עצמית של המראיינים."
            },
            {
                type: "paragraph",
                text: "תיאום ציפיות עם המועמד - הגענו לסוף המיון ולשלב הסופי שלו - הראיון."
            },
            {
                type: "paragraph",
                text: "הגדרת מטרת הראיון - להכיר אותך באופן אישי, לאפשר לך לומר מה חשוב לך ולתת לנו להתרשם בנוגע להתאמתך."
            }
        ]
    },
    {
        id: "content",
        title: "תוכן",
        popupTitle: "תוכן",
        content: [
            {
                type: "headline",
                text: "שימוש בשאלות פתוחות בנושאים הרלוונטיים להתאמה לתפקיד, למשל:"
            },
            {
                type: "questions",
                questions: [
                    "ספר לי על מקרה בו עזרת לחבר",
                    "תן לי דוגמה למצב בו עמדת על שלך",
                    "מתי היה לך קשה/ויתרת על משהו?",
                    "האם אתה נוטה להיעלב/לכעוס כש...?",
                    "למה אתה רוצה להיות ביחידה?",
                    "מה יהיה לך קשה בתפקיד?"
                ]
            },
            {
                type: "headline",
                text: "איך לנסח שאלות נכון:"
            },
            {
                type: "compare",
                wrong: '"האם אתה תלמיד טוב?"',
                right: '"ספר לי איזה תלמיד היית."',
                note: "דבר זה תורם להוספת מידע חיוני מהנשאל. יש להבין מה כל שאלה מוסיפה להתרשמות ומה מטרתה."
            },
            {
                type: "compare",
                wrong: '"מה תעשה אם...?"',
                right: '"ספר לי על מקרה בו..."',
                note: "לא לשאול שאלות שהתשובה נמצאת בגוף השאלה, לא לשאול מספר שאלות ברצף ולא לשאול שאלות היפותטיות."
            },
            {
                type: "paragraph",
                text: "לברר עד הסוף נורות אדומות, מעברים בין מסגרות, בעיות בבית הספר, בעיות בבית, משברים, דברים לא שגרתיים ברקע המשפחתי."
            }
        ]
    },
    {
        id: "ending",
        title: "סיום",
        popupTitle: "סיום",
        content: [
            {
                type: "paragraph",
                text: "חשוב להודות למועמד, לשאול האם רוצה להוסיף או לשאול משהו ולאחל לו בהצלחה."
            },
            {
                type: "paragraph",
                text: "שימו לב שזו ההזדמנות האחרונה של המועמד להביע את עצמו."
            }
        ]
    },
    {
        id: "evaluation",
        title: "כתיבת חוו״ד",
        popupTitle: "כתיבת חוו״ד",
        content: [
            {
                type: "bullet",
                text: "חשוב ששני המראיינים ימלאו חוו״ד בנפרד על המועמד מיד אחרי הראיון, לפני תחילת הראיון הבא."
            },
            {
                type: "bullet",
                text: "יש לרשום התרשמות מילולית בנוגע לכל מועמד ולתת לו הערכה מספרית."
            },
            {
                type: "bullet",
                text: "בנוסף לכל מדד, יש לרשום התרשמות סופית ולהעריך את מידת ההתאמה של המועמד ליחידה על בסיס הראיון."
            },
            {
                type: "bullet",
                text: "שימו לב - יש לתת הערכה נפרדת לראיון. כלומר, יש לדרג את הראיון בנפרד מכלל התרגילים שהיו במהלך היום."
            }
        ]
    }
];

const InterviewNotes = () => {
    const [activeNote, setActiveNote] = useState(null);

    const [seenNotes, setSeenNotes] = useState(() => {
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

    const openNote = (note) => {
        setActiveNote(note);

        setSeenNotes((prev) => {
            if (prev.includes(note.id)) {
                return prev;
            }

            const updated = [...prev, note.id];
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            return updated;
        });
    };

    const closePopup = () => {
        setActiveNote(null);
    };

    const renderContentItem = (item, index) => {
        if (item.type === "paragraph") {
            return (
                <p key={index} className={styles.paragraph}>
                    {item.text}
                </p>
            );
        }

        if (item.type === "bullet") {
            return (
                <p key={index} className={styles.bullet}>
                    {item.text}
                </p>
            );
        }

        if (item.type === "headline") {
            return (
                <h3 key={index} className={styles.contentHeadline}>
                    {item.text}
                </h3>
            );
        }

        if (item.type === "questions") {
            return (
                <div key={index} className={styles.questionsGrid}>
                    {item.questions.map((question, questionIndex) => (
                        <p key={questionIndex} className={styles.questionExample}>
                            {question}
                        </p>
                    ))}
                </div>
            );
        }

        if (item.type === "compare") {
            return (
                <div key={index} className={styles.compareBox}>
                    <div className={styles.compareRow}>
                        <p className={styles.wrongExample}>✕ {item.wrong}</p>
                        <p className={styles.rightExample}>✓ {item.right}</p>
                    </div>

                    <p className={styles.compareNote}>{item.note}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <section className={styles.page} dir="rtl">
            <h1 className={styles.title}>ראיון תעסוקתי - דגשים לראיון</h1>

            <div className={styles.openingNoteWrapper}>
                <OpeningNote
                    variant="thin"
                    showTitle={false}
                    title="ראיון תעסוקתי - דגשים לראיון"
                    paragraphs={[
                        "בניית מאגר שאלות על כל תחום - המדדים המקובלים לבדיקה בראיונות הינם:",
                        "מוטיבציה, השתלבות חברתית, הסתגלות למסגרת, בשלות ורמה אישית."
                    ]}
                    noteText="מומלץ להשתמש בטופס הבניית ראיון המצורף. יש להקפיד על אתיקה ויחס מכבד."
                />
            </div>

            <div className={styles.notesGrid}>
                {notes.map((note) => {
                    const isSeen = seenNotes.includes(note.id);

                    return (
                        <button
                            key={note.id}
                            type="button"
                            className={styles.noteBtn}
                            onClick={() => openNote(note)}
                        >
                            <img src={closedNotebook} alt="" className={styles.closedNotebook} />

                            {isSeen && <span className={styles.seenCheck}>✓</span>}

                            <span className={styles.notebookTitle}>{note.title}</span>
                        </button>
                    );
                })}
            </div>

            <p className={styles.bottomHint}>יש להקפיד על מבנה של ראיון!</p>

            {activeNote && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popup}>
                        <img src={openNotebookBg} alt="" className={styles.popupBg} />

                        <div className={styles.popupContent}>
                            <h2>{activeNote.popupTitle}</h2>

                            <div className={styles.popupBody}>
                                <div className={styles.popupBodyInner}>
                                    {activeNote.content.map((item, index) => renderContentItem(item, index))}
                                </div>
                            </div>

                            <button type="button" className={styles.understoodBtn} onClick={closePopup}>
                                <img src={bgOrangeBtn} alt="" className={styles.understoodBtnBg} />
                                <span>הבנתי!</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default InterviewNotes;