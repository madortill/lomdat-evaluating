import styles from "./OpeningNote.module.css";

import noteBg from "../../../../assets/img/bgSlicedRectangle.svg";
import innerNoteBg from "../../../../assets/img/bgNoteMarker.svg";
import tape from "../../../../assets/img/sellotape.svg";

const OpeningNote = ({
    title = "הטיות בהערכה",
    paragraphs = [
        "המוח האנושי מבצע מדי יום עשרות, ואולי מאות, היסקים חברתיים – יצירת מידע חדש על בסיס מידע קיים בעולם החברתי.",
        "כיוון שהיסקים אלו הינם סובייקטיביים, חשוב שנדע לזהות הטיות מסוגים שונים שנקראות הטיות בהערכה.",
        "נעבור על מספר הטיות מסוג זה ועל דרכי ההתמודדות שלנו."
    ],
    noteText = "חשוב לזכור! הטיות אלו יכולות להופיע גם בתהליך המיון, ולכן חשוב להיות מודעים להן ולדעת להתמודד עמן.",
    variant = "full"
}) => {
    return (
        <section className={`${styles.page} ${variant === "compact" ? styles.compactPage : ""}`} dir="rtl">
            {variant === "full" && <h1 className={styles.title}>{title}</h1>}

            <div className={`${styles.noteWrapper} ${variant === "compact" ? styles.compactNoteWrapper : ""}`}>
                <img src={noteBg} alt="" className={styles.noteBg} />

                <img src={tape} alt="" className={`${styles.tape} ${styles.tapeTop}`} />
                <img src={tape} alt="" className={`${styles.tape} ${styles.tapeBottom}`} />

                <div className={styles.noteContent}>
                    {variant === "compact" && <h2 className={styles.compactTitle}>{title}</h2>}

                    <div className={styles.mainText}>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <div className={styles.innerNote}>
                        <img src={innerNoteBg} alt="" className={styles.innerNoteBg} />

                        <div className={styles.innerNoteTextArea}>
                            <p>{noteText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpeningNote;