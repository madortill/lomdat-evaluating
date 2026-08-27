import { useState } from "react";
import styles from "./Pencils.module.css";

import pencil from "../../../../assets/img/pencil.svg";

const defaultTopics = [
    {
        id: "thinking",
        title: "יכולת חשיבה ותכנון",
        text: "יכולת לנתח מצבים, להבין משימה, לתכנן דרך פעולה ולבחור פתרון מתאים."
    },
    {
        id: "interpersonal",
        title: "יכולות בין אישיות",
        text: "יכולת ליצור קשר, לשתף פעולה, להקשיב לאחרים ולהתנהל בצורה מותאמת מול אנשים."
    },
    {
        id: "values",
        title: "ערכיות",
        text: "מידת האחריות, המחויבות, האמינות וההתנהלות הערכית של המועמד."
    },
    {
        id: "instruction",
        title: "יכולות הדרכה",
        text: "יכולת להסביר, להוביל למידה, להעביר מסר ברור ולהתאים את ההדרכה לקהל היעד."
    },
    {
        id: "leadership",
        title: "פיקוד ומנהיגות",
        text: "יכולת להוביל אחרים, לקבל החלטות, לקחת אחריות ולשמש דוגמה אישית."
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
                            <button
                                key={topic.id}
                                type="button"
                                className={`${styles.row} ${isOpen ? styles.rowOpen : ""}`}
                                onClick={() => toggleTopic(index)}
                            >
                                {isSeen && <span className={styles.check}>✓</span>}

                                <div className={styles.rowText}>
                                    <p className={`${styles.topicTitle} ${isOpen ? styles.hiddenText : ""}`}>
                                        {topic.title}
                                    </p>

                                    <p className={`${styles.topicDescription} ${isOpen ? styles.visibleDescription : ""}`}>
                                        {topic.text}
                                    </p>
                                </div>

                                <img
                                    src={pencil}
                                    alt=""
                                    className={`${styles.pencil} ${isOpen ? styles.pencilLeft : styles.pencilRight}`}
                                />

                                {isOpen && <span className={styles.writingLine}></span>}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pencils;