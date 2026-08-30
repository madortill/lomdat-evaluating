import { useState } from "react";
import styles from "./Pencils.module.css";

import pencil from "../../../../assets/img/pencil.svg";

const defaultTopics = [
    {
        id: "thinking",
        title: "יכולת חשיבה ותכנון",
        text: "יכולות ניתוח, הבחנה בין עיקר לתפל, שיקול דעת"
    },
    {
        id: "interpersonal",
        title: "יכולות בין-אישיות",
        text: "השתלבות בצוות, יכולת השפעה, הקשבה, אמפתיה, עמידה בלחץ"
    },
    {
        id: "values",
        title: "ערכיות",
        text: "מוטיבציה, דוגמה אישית, דמות"
    },
    {
        id: "instruction",
        title: "יכולות הדרכה",
        text: "עמידה מול קהל, כושר ביטוי, גמישות מחשבתית/יצירתיות"
    },
    {
        id: "leadership",
        title: "פיקוד ומנהיגות",
        text: "ביטחון עצמי, אסרטיביות, יכולת הנעה, יוזמה"
    }
];

const Pencils = ({
    title = "מדדי הערכה - פרמטרים על פיהם נעריך את המתמיין",
    topics = defaultTopics
}) => {
    const [opened, setOpened] = useState([]);
    const [seen, setSeen] = useState([]);

    const toggleTopic = (index) => {
        setOpened((prev) => {
            if (prev.includes(index)) {
                return prev.filter((item) => item !== index);
            }

            return [...prev, index];
        });

        setSeen((prev) => {
            if (prev.includes(index)) {
                return prev;
            }

            return [...prev, index];
        });
    };

    return (
        <section className={styles.page} dir="rtl">
            <h1 className={styles.title}>{title}</h1>

            <div className={styles.notebook}>
                <div className={styles.rows}>
                    {topics.map((topic, index) => {
                        const isOpen = opened.includes(index);
                        const isSeen = seen.includes(index);

                        return (
                            <div key={topic.id} className={styles.rowShell}>
                                <button
                                    type="button"
                                    className={`${styles.row} ${isOpen ? styles.rowOpen : ""}`}
                                    onClick={() => toggleTopic(index)}
                                >
                                    {isSeen && <span className={styles.check}>✓</span>}

                                    <div className={styles.rowText}>
                                        <p
                                            className={`${styles.topicTitle} ${isOpen ? styles.hiddenTitle : ""
                                                }`}
                                        >
                                            {topic.title}
                                        </p>

                                        <div className={styles.writingContent}>
                                            <span
                                                className={`${styles.squiggleLine} ${styles.squiggleRight} ${isOpen ? styles.squiggleOpen : ""
                                                    }`}
                                            ></span>

                                            <p
                                                className={`${styles.topicDescription} ${isOpen ? styles.descriptionOpen : styles.descriptionClosed
                                                    }`}
                                            >
                                                {topic.text}
                                            </p>

                                            <span
                                                className={`${styles.squiggleLine} ${styles.squiggleLeft} ${isOpen ? styles.squiggleOpen : ""
                                                    }`}
                                            ></span>
                                        </div>
                                    </div>
                                </button>

                                <img
                                    src={pencil}
                                    alt=""
                                    className={`${styles.pencil} ${isOpen ? styles.pencilLeft : styles.pencilRight
                                        }`}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pencils;