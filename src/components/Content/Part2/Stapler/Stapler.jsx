import { useState } from "react";
import styles from "./Stapler.module.css";

import rolledPaper from "../../../../assets/img/rolledPaper.svg";
import openPaper from "../../../../assets/img/openPaper.svg";
import staplerCursor from "../../../../assets/img/staplerCursor.svg";
import iconIncoming from "../../../../assets/img/iconIncognito.svg";
import iconPaper from "../../../../assets/img/iconPaper.svg";

const papers = [
    {
        id: "secrecy",
        title: "סודיות כלי המיון",
        type: "text",
        content: [
            {
                icon: iconIncoming,
                text: (
                    <>
                        סגל המתמיינים <strong>ימנע מהעברת מידע</strong> על מערכות המיון, הערכות או ציונים של המתמיינים לכל גורם מחוץ לצה״ל או לכל גורם אחר שאינו מורשה לכך (למעט אם קיימת חובה על פי דין).
                    </>
                )
            },
            {
                icon: iconPaper,
                text: (
                    <>
                        לפני כל מיון המעריכים יחתמו על הצהרה בה הם מתחייבים <strong>לשמור על סודיות</strong> ביחס לתהליך המיון וכלי המיון אשר בשימוש, כמו גם ביחס למידע הנוגע למועמדים והערכתם.
                    </>
                )
            }
        ]
    },
    {
        id: "standardization",
        title: "סטנדרטיזציה",
        type: "cards",
        intro: "מיונים יבוצעו בתנאים אחידים:",
        cards: [
            "תנאים סביבתיים בהם מועבר התרגול, סולם ציונים ומידת המעורבות.",
            "אופן הערכה ומרכיביה מצד המעריכים.",
            "תוכן ומשך התרגול, היחס והדרישות.",
            "אחידות בהעברת ההוראות התרגילים למועמדים - הקראת ההנחיות מתוך המיון."
        ],
        footer: "ובכך ניתן הזדמנות שווה למועמדים"
    },
    {
        id: "ethics",
        title: "אתיקה",
        type: "text",
        content: [
            {
                text: (
                    <>
                        <strong>שמירה על עקרונות אתיים מרכזיים:</strong>
                    </>
                )
            },
            {
                text: (
                    <>
                        <strong>כבוד האדם</strong> - שמירה על כבוד המשתתפים באשר הם.
                    </>
                )
            },
            {
                text: (
                    <>
                        <strong>צנעת הפרט</strong> - שמירה על המידה וההתנסויות שעוברים המתמיינים לאורך יום המיון. התחייבות ששום דבר שקרה ביום המיון לא יוצא החוצה שלא לצורך.
                    </>
                )
            },
            {
                text: (
                    <>
                        <strong>גילוי נאות</strong> - אין למיין מתמודד שיש לך היכרות מוקדמת איתו.
                    </>
                )
            }
        ]
    }
];

const Stapler = () => {
    const [openPaperIds, setOpenPaperIds] = useState([]);
    const [isHoveringClosedPaper, setIsHoveringClosedPaper] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handlePaperClick = (paperId) => {
        const isAlreadyOpen = openPaperIds.includes(paperId);

        setOpenPaperIds((prev) => {
            if (prev.includes(paperId)) {
                return prev.filter((id) => id !== paperId);
            }

            return [...prev, paperId];
        });

        setIsHoveringClosedPaper(isAlreadyOpen);
    };

    const handleMouseMove = (event) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY
        });
    };

    return (
        <section className={styles.page} dir="rtl" onMouseMove={handleMouseMove}>
            {isHoveringClosedPaper && (
                <img
                    src={staplerCursor}
                    alt=""
                    className={styles.staplerCursor}
                    style={{
                        left: `${mousePosition.x}px`,
                        top: `${mousePosition.y}px`
                    }}
                />
            )}

            <h1 className={styles.title}>דגשים כלליים לקיום מיון</h1>

            <div className={styles.papersGrid}>
                {papers.map((paper) => {
                    const isOpen = openPaperIds.includes(paper.id);

                    return (
                        <button
                            key={paper.id}
                            type="button"
                            className={`${styles.paperBtn} ${isOpen ? styles.openPaperBtn : ""}`}
                            onClick={() => handlePaperClick(paper.id)}
                            onMouseEnter={() => {
                                if (!isOpen) {
                                    setIsHoveringClosedPaper(true);
                                }
                            }}
                            onMouseLeave={() => {
                                setIsHoveringClosedPaper(false);
                            }}
                            aria-expanded={isOpen}
                        >
                            <img
                                src={isOpen ? openPaper : rolledPaper}
                                alt=""
                                className={isOpen ? styles.openPaperImg : styles.rolledPaperImg}
                            />

                            {!isOpen && (
                                <span className={styles.closedTitle}>
                                    {paper.title}
                                </span>
                            )}

                            {isOpen && (
                                <>
                                    <h2 className={styles.openTitle}>{paper.title}</h2>

                                    <div className={styles.openContent}>
                                        {paper.type === "text" && (
                                            <div className={styles.textContent}>
                                                {paper.content.map((item, index) => (
                                                    <div key={index} className={`${styles.textRow} ${!item.icon ? styles.noIconTextRow : ""}`}>
                                                        {item.icon && (
                                                            <img src={item.icon} alt="" className={styles.rowIcon} />
                                                        )}

                                                        <p>{item.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {paper.type === "cards" && (
                                            <div className={styles.cardsContent}>
                                                <p className={styles.cardsIntro}>{paper.intro}</p>

                                                <div className={styles.cardsGrid}>
                                                    {paper.cards.map((card, index) => (
                                                        <div key={index} className={styles.infoCard}>
                                                            {card}
                                                        </div>
                                                    ))}
                                                </div>

                                                <p className={styles.cardsFooter}>{paper.footer}</p>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </button>
                    );
                })}
            </div>
        </section>
    );
};

export default Stapler;