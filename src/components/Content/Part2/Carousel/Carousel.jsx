import { useState } from "react";
import styles from "./Carousel.module.css";

const defaultSlides = [
    {
        id: "intro",
        type: "text",
        title: "",
        text: "להיכנס לסוגיות אישיות ולא רלוונטיות להתאמה לתפקיד שאין לנו יכולת לטפל בהם במסגרת הראיון."
    },
    {
        id: "privacy",
        type: "dialogue",
        title: "לחדור לפרטיות",
        quote: "למה אין לך חברה?"
    },
    {
        id: "family",
        type: "dialogue",
        title: "לשאול על דעות פוליטיות",
        quote: "מה תעשה אם יגידו לך לפנות ישובים / להכנס לבית עם ילד ערבי?"
    },
    {
        id: "health",
        type: "text",
        title: "",
        text: "להשפיל או לפגוע בכבודו של מועמד."
    },
    {
        id: "hypothetical",
        type: "text",
        title: "",
        text: "לבצע תרגילים פיזיים."
    },
    {
        id: "judgment",
        type: "dialogue",
        title: "לתת משוב",
        quote: "אתה יודע שזה מאוד לא טוב להתנהג כמו שאתה מספר"
    },
    {
        id: "leading",
        type: "dialogue",
        title: "להביע דעה אישית",
        quote: "אני דווקא לא חושב שהיית צריך לעזוב את הקבוצה"
    },
    {
        id: "summary",
        type: "text",
        title: "",
        text: "לתת תחושה של קבלה / אי קבלה"
    }
];

const Carousel = ({
    title = "ראיון תעסוקתי - אסור בראיון",
    slides = defaultSlides
}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const currentSlide = slides[currentSlideIndex];

    const goToPrevSlide = () => {
        setCurrentSlideIndex((prev) => {
            if (prev === 0) {
                return prev;
            }

            return prev - 1;
        });
    };

    const goToNextSlide = () => {
        setCurrentSlideIndex((prev) => {
            if (prev === slides.length - 1) {
                return prev;
            }

            return prev + 1;
        });
    };

    const goToSlide = (index) => {
        setCurrentSlideIndex(index);
    };

    return (
        <section className={styles.page} dir="rtl">
            <h1 className={styles.title}>{title}</h1>

            <div className={styles.carouselArea}>
                {currentSlideIndex > 0 && (
                    <button
                        type="button"
                        className={`${styles.arrowBtn} ${styles.prevBtn}`}
                        onClick={goToPrevSlide}
                        aria-label="שקופית קודמת"
                    >
                        <span className={styles.arrowIcon}>‹</span>
                    </button>
                )}

                <div className={styles.slideCard}>
                    {currentSlide.type === "text" && (
                        <div className={styles.textSlide}>
                            {currentSlide.title && (
                                <h2 className={styles.slideTitle}>{currentSlide.title}</h2>
                            )}

                            <p>{currentSlide.text}</p>
                        </div>
                    )}

                    {currentSlide.type === "dialogue" && (
                        <div className={styles.dialogueSlide}>
                            {currentSlide.title && (
                                <h2 className={styles.dialogueTitle}>{currentSlide.title}</h2>
                            )}

                            <div className={styles.dialogueIllustration}>
                                <div className={styles.person}>
                                    <div className={styles.head}></div>
                                    <div className={styles.body}></div>
                                </div>

                                <div className={styles.speechBubble}>
                                    <p>{currentSlide.quote}</p>
                                </div>

                                <div className={styles.person}>
                                    <div className={styles.head}></div>
                                    <div className={styles.body}></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {currentSlideIndex < slides.length - 1 && (
                    <button
                        type="button"
                        className={`${styles.arrowBtn} ${styles.nextBtn}`}
                        onClick={goToNextSlide}
                        aria-label="שקופית הבאה"
                    >
                        <span className={styles.arrowIcon}>›</span>
                    </button>
                )}
            </div>

            <div className={styles.dotsWrapper}>
                <p className={styles.counter}>
                    {currentSlideIndex + 1} מתוך {slides.length}
                </p>

                <div className={styles.dots}>
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            type="button"
                            className={`${styles.dot} ${index === currentSlideIndex ? styles.activeDot : ""}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`מעבר לשקופית ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;