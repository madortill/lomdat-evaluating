import { useState } from "react";
import styles from "./Schedule.module.css";

const scheduleItems = [
    {
        id: "gathering",
        time: "08:00-08:30",
        text: "התכנסות, רישום וחלוקה לכיתות מיון. תוך כדי - חלוקת שאלונים ביוגרפיים למילוי עצמי."
    },
    {
        id: "questionnaires",
        time: "08:30-09:00",
        text: "המשך מילוי שאלונים ביוגרפיים בכיתות המיון."
    },
    {
        id: "opening",
        time: "09:00-09:30",
        text: "תרגיל פתיחה/היכרות."
    },
    {
        id: "discussion",
        time: "09:30-10:30",
        text: "תרגיל דיון קבוצתי."
    },
    {
        id: "presentation",
        time: "10:30-11:15",
        text: "תרגיל הצגת נושא/סימולציית הדרכה."
    },
    {
        id: "groupTask",
        time: "11:15-12:15",
        text: "תרגיל ביצוע קבוצתי."
    },
    {
        id: "lunch",
        time: "12:15-13:00",
        text: "הפסקת צהריים."
    },
    {
        id: "interviews",
        time: "13:00-16:00",
        text: "ראיונות אישיים."
    }
];

const Schedule = ({
    title = "לוח זמנים מומלץ ליום המיון",
    items = scheduleItems
}) => {
    const [checkedItems, setCheckedItems] = useState([]);

    const toggleItem = (itemId) => {
        setCheckedItems((prev) => {
            if (prev.includes(itemId)) {
                return prev.filter((id) => id !== itemId);
            }

            return [...prev, itemId];
        });
    };

    return (
        <section className={styles.page} dir="rtl">
            <h1 className={styles.title}>{title}</h1>

            <div className={styles.scheduleBox}>
                <div className={styles.scheduleList}>
                    {items.map((item) => {
                        const isChecked = checkedItems.includes(item.id);

                        return (
                            <button
                                key={item.id}
                                type="button"
                                className={`${styles.scheduleItem} ${isChecked ? styles.checkedItem : ""}`}
                                onClick={() => toggleItem(item.id)}
                            >
                                <span className={styles.checkbox}>
                                    {isChecked && <span className={styles.checkmark}>✓</span>}
                                </span>

                                <span className={styles.itemText}>
                                    <strong>{item.time}</strong>
                                    {" - "}
                                    {item.text}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Schedule;