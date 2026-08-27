import { useState } from "react";
import styles from "./DragQuestion.module.css";

import dragQuestionBg from "../../../../assets/img/spiralQuestiongBg.svg";

const defaultItems = [
    { id: "bio", text: "שאלון ביוגרפי" },
    { id: "reception", text: "קליטה" },
    { id: "interview", text: "ראיון אישי" },
    { id: "simulation", text: "תרגילי מצב" }
];

const defaultCorrectOrder = ["reception", "bio", "simulation", "interview"];

const DragQuestion = ({
    question = "מהו סדר יום תקין של יום מיונים לפיקוד והדרכה?",
    instruction = "גררו את ההיגדים למקומות בסדר הנכון מימין לשמאל",
    items = defaultItems,
    correctOrder = defaultCorrectOrder,
    checkText = "בדיקה",
    tryAgainText = "לניסיון נוסף",
    // successText = "לתשובתך נכון",
    resetText = "איפוס השאלה"
}) => {
    const [slots, setSlots] = useState(() => Array(correctOrder.length).fill(null));
    const [draggedItemId, setDraggedItemId] = useState(null);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [checked, setChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const placedIds = slots.filter(Boolean);
    const availableItems = items.filter((item) => !placedIds.includes(item.id));

    const placeItemInSlot = (itemId, slotIndex) => {
        if (!itemId || checked) {
            return;
        }

        setSlots((prevSlots) => {
            const cleanedSlots = prevSlots.map((slot) => (slot === itemId ? null : slot));
            cleanedSlots[slotIndex] = itemId;
            return cleanedSlots;
        });

        setSelectedItemId(null);
    };

    const removeFromSlot = (slotIndex) => {
        if (checked) {
            return;
        }

        setSlots((prevSlots) => {
            const updatedSlots = [...prevSlots];
            updatedSlots[slotIndex] = null;
            return updatedSlots;
        });
    };

    const handleDragStart = (itemId) => {
        if (checked) {
            return;
        }

        setDraggedItemId(itemId);
    };

    const handleDrop = (slotIndex) => {
        placeItemInSlot(draggedItemId, slotIndex);
        setDraggedItemId(null);
    };

    const handleSlotClick = (slotIndex) => {
        if (slots[slotIndex]) {
            removeFromSlot(slotIndex);
            return;
        }

        if (selectedItemId) {
            placeItemInSlot(selectedItemId, slotIndex);
        }
    };

    const handleCheck = () => {
        const complete = slots.every(Boolean);

        if (!complete) {
            return;
        }

        const result = slots.every((slotId, index) => slotId === correctOrder[index]);
        setIsCorrect(result);
        setChecked(true);
    };

    const handleTryAgain = () => {
        setChecked(false);
        setIsCorrect(false);
    };

    const handleReset = () => {
        setSlots(Array(correctOrder.length).fill(null));
        setSelectedItemId(null);
        setDraggedItemId(null);
        setChecked(false);
        setIsCorrect(false);
    };

    const getItemById = (id) => {
        return items.find((item) => item.id === id);
    };

    const getSlotClassName = (slotId, index) => {
        if (!checked || !slotId) {
            return styles.dropSlot;
        }

        if (slotId === correctOrder[index]) {
            return `${styles.dropSlot} ${styles.correctSlot}`;
        }

        return `${styles.dropSlot} ${styles.wrongSlot}`;
    };

    const checkDisabled = checked || slots.some((slot) => !slot);

    return (
        <section className={styles.page} dir="rtl">
            <div className={styles.board}>
                <img src={dragQuestionBg} alt="" className={styles.boardBg} />

                <div className={styles.content}>
                    <h1 className={styles.title}>{question}</h1>

                    <p className={styles.instruction}>{instruction}</p>

                    <div className={styles.dropArea}>
                        {slots.map((slotId, index) => {
                            const item = getItemById(slotId);

                            return (
                                <button
                                    key={index}
                                    type="button"
                                    className={getSlotClassName(slotId, index)}
                                    onDragOver={(event) => event.preventDefault()}
                                    onDrop={() => handleDrop(index)}
                                    onClick={() => handleSlotClick(index)}
                                >
                                    {item && <span>{item.text}</span>}

                                    {checked && slotId && slotId !== correctOrder[index] && (
                                        <span className={styles.errorMark}>×</span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    <div className={styles.itemsArea}>
                        {availableItems.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                draggable={!checked}
                                className={`${styles.dragItem} ${
                                    selectedItemId === item.id ? styles.selectedItem : ""
                                }`}
                                onDragStart={() => handleDragStart(item.id)}
                                onClick={() => !checked && setSelectedItemId(item.id)}
                            >
                                {item.text}
                            </button>
                        ))}
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
                        <button type="button" className={`${styles.checkBtn} ${styles.disabledBtn}`} onClick={handleReset}>
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

export default DragQuestion;