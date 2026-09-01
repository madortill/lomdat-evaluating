import { useMemo, useState } from "react";
import styles from "./MultiDragQuestions.module.css";

import questionBg from "../../../../assets/img/spiralQuestiongBg.svg";

const defaultCategories = [
    {
        id: "interpersonal",
        title: "יכולות בין־אישיות"
    },
    {
        id: "instruction",
        title: "יכולות הדרכה"
    },
    {
        id: "values",
        title: "ערכיות"
    },
    {
        id: "thinking",
        title: "יכולת חשיבה ותכנון"
    },
    {
        id: "leadership",
        title: "פיקוד ומנהיגות"
    }
];

const defaultItems = [
    {
        id: "1",
        text: "יכולת ניתוח",
        correctCategoryId: "thinking"
    },
    {
        id: "2",
        text: "ביטחון עצמי",
        correctCategoryId: "leadership"
    },
    {
        id: "3",
        text: "יוזמה",
        correctCategoryId: "leadership"
    },
    {
        id: "4",
        text: "כושר ביטוי",
        correctCategoryId: "instruction"
    },
    {
        id: "5",
        text: "מוטיבציה",
        correctCategoryId: "values"
    },
    {
        id: "6",
        text: "הקשבה",
        correctCategoryId: "interpersonal"
    },
    {
        id: "7",
        text: "דוגמה אישית",
        correctCategoryId: "values"
    },
    {
        id: "8",
        text: "יכולת הנעה",
        correctCategoryId: "leadership"
    },
    {
        id: "9",
        text: "עמידה בלחץ",
        correctCategoryId: "interpersonal"
    },
    {
        id: "10",
        text: "הבחנה בין עיקר לטפל",
        correctCategoryId: "thinking"
    },
    {
        id: "11",
        text: "עמידה מול קהל",
        correctCategoryId: "instruction"
    },
    {
        id: "12",
        text: "יכולת השפעה",
        correctCategoryId: "interpersonal"
    },
    {
        id: "13",
        text: "דמות",
        correctCategoryId: "values"
    },
    {
        id: "14",
        text: "אסרטיביות",
        correctCategoryId: "leadership"
    },
    {
        id: "15",
        text: "השתלבות בצוות",
        correctCategoryId: "interpersonal"
    },
    {
        id: "16",
        text: "שיקול דעת",
        correctCategoryId: "thinking"
    },
    {
        id: "17",
        text: "גמישות מחשבתית / יצירתיות",
        correctCategoryId: "instruction"
    }
];

const createEmptyAnswers = (categories) => {
    return categories.reduce((acc, category) => {
        acc[category.id] = [];
        return acc;
    }, {});
};

const normalizeCategories = ({ categories, targets }) => {
    const sourceCategories = categories || targets || defaultCategories;

    return sourceCategories.map((category) => ({
        id: category.id,
        title: category.title || category.label || "",
        description: category.description || category.text || ""
    }));
};

const normalizeItems = (items) => {
    const sourceItems = items || defaultItems;

    return sourceItems.map((item) => ({
        id: item.id,
        text: item.text || item.label || "",
        description: item.description || "",
        correctCategoryId: item.correctCategoryId || item.correctTargetId
    }));
};

const MultiDragQuestions = ({
    question,
    title,
    instruction = "גררו את ההיגדים למדד המתאים",
    categories,
    targets,
    items,
    largeCategoryItemsMargin = false,
    checkText = "בדיקה",
    tryAgainText = "לניסיון נוסף",
    resetText = "איפוס השאלה"
}) => {
    const resolvedQuestion = question || title || "מדדי הערכה";

    const normalizedCategories = useMemo(() => {
        return normalizeCategories({ categories, targets });
    }, [categories, targets]);

    const normalizedItems = useMemo(() => {
        return normalizeItems(items);
    }, [items]);

    const [answers, setAnswers] = useState(() => createEmptyAnswers(normalizedCategories));
    const [draggedItemId, setDraggedItemId] = useState(null);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [checked, setChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const placedIds = Object.values(answers).flat();
    const currentItem = normalizedItems.find((item) => !placedIds.includes(item.id));
    const isComplete = placedIds.length === normalizedItems.length;

    const getItemById = (itemId) => {
        return normalizedItems.find((item) => item.id === itemId);
    };

    const removeItemFromAllCategories = (currentAnswers, itemId) => {
        const updatedAnswers = {};

        Object.keys(currentAnswers).forEach((categoryId) => {
            updatedAnswers[categoryId] = currentAnswers[categoryId].filter((id) => id !== itemId);
        });

        return updatedAnswers;
    };

    const placeItemInCategory = (itemId, categoryId) => {
        if (!itemId || checked) {
            return;
        }

        setAnswers((prevAnswers) => {
            const cleanedAnswers = removeItemFromAllCategories(prevAnswers, itemId);

            return {
                ...cleanedAnswers,
                [categoryId]: [...cleanedAnswers[categoryId], itemId]
            };
        });

        setSelectedItemId(null);
        setDraggedItemId(null);
    };

    const removeItemFromCategory = (itemId, categoryId) => {
        if (checked) {
            return;
        }

        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [categoryId]: prevAnswers[categoryId].filter((id) => id !== itemId)
        }));

        setSelectedItemId(null);
        setDraggedItemId(null);
    };

    const handleDragStart = (itemId) => {
        if (checked) {
            return;
        }

        setDraggedItemId(itemId);
    };

    const handleDrop = (categoryId) => {
        placeItemInCategory(draggedItemId, categoryId);
    };

    const handleCategoryClick = (categoryId) => {
        if (selectedItemId) {
            placeItemInCategory(selectedItemId, categoryId);
        }
    };

    const handleItemClick = (itemId) => {
        if (checked) {
            return;
        }

        setSelectedItemId((prev) => (prev === itemId ? null : itemId));
    };

    const handleCheck = () => {
        if (!isComplete) {
            return;
        }

        const result = normalizedItems.every((item) => {
            return answers[item.correctCategoryId]?.includes(item.id);
        });

        setIsCorrect(result);
        setChecked(true);
    };

    const handleTryAgain = () => {
        setChecked(false);
        setIsCorrect(false);
    };

    const handleReset = () => {
        setAnswers(createEmptyAnswers(normalizedCategories));
        setDraggedItemId(null);
        setSelectedItemId(null);
        setChecked(false);
        setIsCorrect(false);
    };

    const getPlacedItemClassName = (item, categoryId) => {
        if (!checked) {
            return styles.placedItem;
        }

        if (item.correctCategoryId === categoryId) {
            return `${styles.placedItem} ${styles.correctItem}`;
        }

        return `${styles.placedItem} ${styles.wrongItem}`;
    };

    const checkDisabled = checked || !isComplete;

    return (
        <section className={styles.page} dir="rtl">
            <div className={styles.board}>
                <img src={questionBg} alt="" className={styles.boardBg} />

                <div className={styles.content}>
                    <h1 className={styles.title}>{resolvedQuestion}</h1>

                    <p className={styles.instruction}>{instruction}</p>

                    <div className={styles.categoriesArea}>
                        {normalizedCategories.map((category) => (
                            <button
                                key={category.id}
                                type="button"
                                className={styles.categoryCard}
                                onDragOver={(event) => event.preventDefault()}
                                onDrop={() => handleDrop(category.id)}
                                onClick={() => handleCategoryClick(category.id)}
                            >
                                <h2 className={styles.categoryTitle}>{category.title}</h2>

                                {category.description && (
                                    <p className={styles.categoryDescription}>
                                        {category.description}
                                    </p>
                                )}

                                <div
                                    className={`${styles.categoryItems} ${largeCategoryItemsMargin ? styles.largeCategoryItemsMargin : ""
                                        }`}
                                >
                                    {answers[category.id].map((itemId) => {
                                        const item = getItemById(itemId);

                                        if (!item) {
                                            return null;
                                        }

                                        return (
                                            <span
                                                key={item.id}
                                                className={getPlacedItemClassName(item, category.id)}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    removeItemFromCategory(item.id, category.id);
                                                }}
                                            >
                                                {item.text}

                                                {checked && item.correctCategoryId !== category.id && (
                                                    <span className={styles.errorMark}>×</span>
                                                )}
                                            </span>
                                        );
                                    })}
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className={styles.itemsArea}>
                        {currentItem && !checked && (
                            <button
                                key={currentItem.id}
                                type="button"
                                draggable
                                className={`${styles.dragItem} ${selectedItemId === currentItem.id ? styles.selectedItem : ""}`}
                                onDragStart={() => handleDragStart(currentItem.id)}
                                onClick={() => handleItemClick(currentItem.id)}
                            >
                                {currentItem.text}
                            </button>
                        )}

                        {!currentItem && !checked && (
                            <p className={styles.doneText}>כל ההיגדים שובצו, לחצו בדיקה</p>
                        )}
                    </div>

                    {!checked && (
                        <button
                            type="button"
                            className={`${styles.checkBtn} ${checkDisabled ? styles.disabledBtn : ""}`}
                            onClick={handleCheck}
                            disabled={checkDisabled}
                        >
                            {checkText}
                        </button>
                    )}

                    {checked && !isCorrect && (
                        <button type="button" className={styles.checkBtn} onClick={handleTryAgain}>
                            {tryAgainText}
                        </button>
                    )}

                    {checked && isCorrect && (
                        <button
                            type="button"
                            className={`${styles.checkBtn} ${styles.disabledBtn}`}
                            disabled
                        >
                            {checkText}
                        </button>
                    )}

                    <button type="button" className={styles.resetBtn} onClick={handleReset}>
                        ↻ {resetText}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MultiDragQuestions;