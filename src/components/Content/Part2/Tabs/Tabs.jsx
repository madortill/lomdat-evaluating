import { useState } from "react";
import styles from "./Tabs.module.css";

import iconHouse from "../../../../assets/img/iconHouse.svg";
import iconName from "../../../../assets/img/iconName.svg";
import iconWriting from "../../../../assets/img/iconWriting.svg";

const tabsData = [
    {
        id: "groupOrganization",
        label: "ארגון הקבוצה",
        title: "ארגון הקבוצה",
        layout: "organization",
        items: [
            {
                icon: iconHouse,
                text: "יש לבצע את סידור החדר בצורה שתאפשר מעבר נוח אחרי כל אחד מהנבחנים במיון."
            },
            {
                icon: iconName,
                text: "יש להצמיד מדבקה או תג עם שם לכל אחד מהמתמיינים."
            },
            {
                icon: iconWriting,
                text: "יש להניח במקום נגיש דפי טיוטה וכלי כתיבה שיספיקו לכל המתמיינים לכל התרגילים."
            }
        ]
    },
    {
        id: "atmosphere",
        label: "אווירה ביום המיון",
        title: "אווירה ביום המיון",
        layout: "cards",
        intro: "על המעריך ליצור לחץ אפקטיבי במהלך היום, על מנת ליצור זאת יש:",
        items: [
            "להקפיד על סדר ומשמעת, לשמור על קשר ענייני עם המועמדים.",
            "להימנע ממתן כל משוב שהוא למועמדים, מילולי או שפת גוף, במהלך היום.",
            "לבצע מעקב מתמיד על התנהגותו של המועמד.",
            "לשמור על רמת האנרגיה בקבוצה: השתתפות אקטיבית, נוכחות, עשייה וכדומה."
        ]
    },
    {
        id: "observation",
        label: "תצפית",
        title: "תצפית",
        layout: "text",
        intro: "תצפית והערכה - קווים מנחים:",
        items: [
            "שני מעריכים מעבירים את תרגילי המצב ורושמים דפי תצפית במהלך כל התרגילים.",
            "יש להסתובב ולא לשבת במקום כדי לקבל התרשמות מייצגת על כלל המשתתפים.",
            "לרשום כמה שיותר התנהגויות נצפות ולא רק מסקנות כוללות. למשל: ״דוד קם פעמיים ממקומו למרות שניתנה הוראה לא לקום״ במקום ״קושי בשליטה עצמית וקבלת מרות״.",
            "יש לקחת מספר טפסי תצפית ולעבור לדף נוסף במידת הצורך. לא לחסוך בכתיבה - המטרה של המשבצות היא לאפשר כתיבה על כל ה־10 בדף אחד.",
            "חוות הדעת היא בלתי תלויה, כלומר כל מעריך ממלא לבד ואין להתייעץ או להחליף רשמים אלא לאחר המילוי.",
            "יש לכתוב את המידע הרלוונטי בזמן אמת, אחרת מידע חשוב ורלוונטי יכול ללכת לאיבוד."
        ]
    }
];

const Tabs = () => {
    const [activeTabId, setActiveTabId] = useState(tabsData[0].id);

    const activeTab = tabsData.find((tab) => tab.id === activeTabId);

    return (
        <section className={styles.page} dir="rtl">
            <h1 className={styles.title}>דגשים למיון הדרכה</h1>

            <div className={styles.tabsWrapper}>
                <div className={styles.tabsHeader}>
                    {tabsData.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            className={`${styles.tabBtn} ${activeTabId === tab.id ? styles.activeTabBtn : ""}`}
                            onClick={() => setActiveTabId(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className={styles.contentPanel}>
                    {activeTab.layout === "organization" && (
                        <div className={styles.organizationLayout}>
                            {activeTab.items.map((item, index) => (
                                <div key={index} className={styles.organizationCircle}>
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className={styles.organizationIconImg}
                                    />

                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab.layout === "cards" && (
                        <div className={styles.cardsLayout}>
                            <p className={styles.introText}>{activeTab.intro}</p>

                            <div className={styles.infoCardsGrid}>
                                {activeTab.items.map((item, index) => (
                                    <div key={index} className={styles.infoCard}>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab.layout === "text" && (
                        <div className={styles.textLayout}>
                            <p className={styles.introText}>{activeTab.intro}</p>

                            <ul className={styles.bulletsList}>
                                {activeTab.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Tabs;