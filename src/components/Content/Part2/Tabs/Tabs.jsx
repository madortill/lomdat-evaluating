import { useState } from "react";
import styles from "./Tabs.module.css";

const tabsData = [
    {
        id: "groupOrganization",
        label: "ארגון הקבוצה",
        title: "ארגון הקבוצה",
        layout: "organization",
        items: [
            {
                icon: "⌂",
                text: "יש לבצע את סידור החדר בצורה שתאפשר תנועה נוחה בחלל לכל אחד מהמתמיינים במיון."
            },
            {
                icon: "▣",
                text: "יש להציב מדבקה או תג עם שם לכל אחד מהמתמודדים."
            },
            {
                icon: "✎",
                text: "יש להכיר חברים הניגשים עם ציוד וכלי כתיבה שיסייעו לנו לכתוב הערכות לכל המדריכים."
            }
        ]
    },
    {
        id: "atmosphere",
        label: "אווירה ביום המיון",
        title: "אווירה ביום המיון",
        layout: "atmosphere",
        intro: "על המעריך ליצור לחץ אפקטיבי במהלך היום. על מנת ליצור זאת יש:",
        items: [
            "להקפיד על סדר ומנהיגות, לשמור על קשר עקבי עם המועמדים.",
            "להימנע ממתן משוב כלשהו למועמדים במהלך היום.",
            "לבצע מעקב מתמיד על התנהגות של המועמד.",
            "לשמור על רמת אנרגיה גבוהה והשתתפות המועמדים בתהליך."
        ]
    },
    {
        id: "observation",
        label: "תצפית",
        title: "תצפית",
        layout: "observation",
        sections: [
            {
                title: "מה נדרש מהמעריך?",
                text: "במהלך התצפית יש לשים לב להתנהגויות חוזרות, לאופן שבו המועמד פועל בתוך הקבוצה ולדרך שבה הוא מתמודד עם המשימה."
            },
            {
                title: "על מה חשוב להקפיד?",
                text: "יש לתעד התנהגות נצפית בלבד, להימנע מפרשנות מוקדמת ולבסס את ההערכה על דוגמאות ברורות מתוך המיון."
            },
            {
                title: "דגש חשוב",
                text: "ככל שהתיעוד יהיה מדויק יותר, כך ההערכה תהיה מקצועית, הוגנת וברורה יותר בהמשך התהליך."
            }
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
                                    <span className={styles.organizationIcon}>{item.icon}</span>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab.layout === "atmosphere" && (
                        <div className={styles.atmosphereLayout}>
                            <p className={styles.introText}>{activeTab.intro}</p>

                            <div className={styles.atmosphereCircles}>
                                {activeTab.items.map((item, index) => (
                                    <div key={index} className={styles.atmosphereCircle}>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab.layout === "observation" && (
                        <div className={styles.observationLayout}>
                            {activeTab.sections.map((section, index) => (
                                <div key={index} className={styles.observationCard}>
                                    <h2>{section.title}</h2>
                                    <p>{section.text}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Tabs;