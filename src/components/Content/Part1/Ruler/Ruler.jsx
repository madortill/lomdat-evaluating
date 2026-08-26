import styles from "./Ruler.module.css";

import ruler from "../../../../assets/img/ruler.svg";
import rulerCircle from "../../../../assets/img/rulerCircle.svg";
import swirlyRuler from "../../../../assets/img/swirlyRuler.svg";
import textBoxRuler from "../../../../assets/img/textBoxRuler.svg";
import textBubbleRuler from "../../../../assets/img/textBubbleRuler.svg";

const Ruler = () => {
    return (
        <section className={styles.page} dir="rtl">
            <h1 className={styles.title}>ציון סופי</h1>

            <div className={styles.description}>
                <p>
                    תוצר יום המיון הינו ציון סופי, המורכב משקלול הישגיו של המועמד
                    להדרכה בכל אחד משלבי המיון.
                </p>
                <p>
                    לכל מועמד יחושב ציון התאמה סופי לתפקיד המפקד המדריך.
                </p>
                <p>
                    תפקיד המפקד המדריך בקורס ההכשרה משלב בין אחריות הדרכתית (העברת החומר הלימודי) לאחריות פיקודית.
                </p>
            </div>

            <div className={styles.rulerArea}>
                <div className={`${styles.circleBox} ${styles.leftCircle}`}>
                    <img src={rulerCircle} alt="" className={styles.circleImg} />
                    <p>התרשמות<br />גבוהה מאוד</p>
                </div>

                <div className={`${styles.circleBox} ${styles.rightCircle}`}>
                    <img src={rulerCircle} alt="" className={styles.circleImg} />
                    <p>התרשמות<br />נמוכה מאוד</p>
                </div>

                <div className={styles.bubbleBox}>
                    <img src={textBubbleRuler} alt="" className={styles.textBubbleImg} />
                    <p>
                        ניתן להגיש בקשה<br />
                        לערך ציון רק אם<br />
                        הוא מעל 3.1
                    </p>
                </div>

                <div className={styles.textBox}>
                    <img src={textBoxRuler} alt="" className={styles.textBoxImg} />
                    <p>
                        ציון גבוה הינו 4 ומעלה. עם זאת, יש לזכור כי המיון<br />
                        הינו כלי תומך החלטה והשאיפה הינה להוציא את<br />
                        המתאימים ביותר להדרכה.
                    </p>
                </div>

                <img src={swirlyRuler} alt="" className={styles.swirlyRuler} />

                <div className={styles.rulerWrapper}>
                    <img src={ruler} alt="ruler" className={styles.rulerImg} />
                </div>

                <p className={styles.bottomNote}>
                    הציון הסופי במיון נע בסקאלה שבין 1 ל־7
                </p>
            </div>
        </section>
    );
};

export default Ruler;