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
    resetText = "איפוס השאלה"
}) => {
    const [slots, setSlots] = useState(() => Array(correctOrder.length).fill(null));
    const [draggedItem, setDraggedItem] = useState(null);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [checked, setChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const placedIds = slots.filter(Boolean);
    const availableItems = items.filter((item) => !placedIds.includes(item.id));

    const getItemById = (id) => {
        return items.find((item) => item.id === id);
    };

    const placeItemInSlot = (itemId, targetSlotIndex, sourceSlotIndex = null) => {
        if (!itemId || checked) {
            return;
        }

        setSlots((prevSlots) => {
            const updatedSlots = [...prevSlots];
            const targetItemId = updatedSlots[targetSlotIndex];

            if (sourceSlotIndex !== null) {
                updatedSlots[sourceSlotIndex] = targetItemId || null;
                updatedSlots[targetSlotIndex] = itemId;
                return updatedSlots;
            }

            const cleanedSlots = updatedSlots.map((slot) => {
                if (slot === itemId) {
                    return null;
                }

                return slot;
            });

            cleanedSlots[targetSlotIndex] = itemId;
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

    const handleAvailableDragStart = (event, itemId) => {
        if (checked) {
            return;
        }

        event.dataTransfer.setData("text/plain", itemId);

        setDraggedItem({
            itemId,
            sourceSlotIndex: null
        });
    };

    const handleSlotDragStart = (event, itemId, sourceSlotIndex) => {
        if (checked || !itemId) {
            return;
        }

        event.dataTransfer.setData("text/plain", itemId);

        setDraggedItem({
            itemId,
            sourceSlotIndex
        });
    };

    const handleDragEnd = () => {
        setDraggedItem(null);
    };

    const handleDropOnSlot = (targetSlotIndex) => {
        if (!draggedItem) {
            return;
        }

        placeItemInSlot(
            draggedItem.itemId,
            targetSlotIndex,
            draggedItem.sourceSlotIndex
        );

        setDraggedItem(null);
    };

    const handleDropBackToItems = () => {
        if (!draggedItem || draggedItem.sourceSlotIndex === null || checked) {
            setDraggedItem(null);
            return;
        }

        removeFromSlot(draggedItem.sourceSlotIndex);
        setDraggedItem(null);
    };

    const handleSlotClick = (slotIndex) => {
        if (checked) {
            return;
        }

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
        setDraggedItem(null);
        setSelectedItemId(null);
    };

    const handleTryAgain = () => {
        setChecked(false);
        setIsCorrect(false);
    };

    const handleReset = () => {
        setSlots(Array(correctOrder.length).fill(null));
        setSelectedItemId(null);
        setDraggedItem(null);
        setChecked(false);
        setIsCorrect(false);
    };

    const getSlotClassName = (slotId, index) => {
        const baseClassName = `${styles.dropSlot} ${slotId ? styles.filledSlot : ""}`;

        if (!checked || !slotId) {
            return baseClassName;
        }

        if (slotId === correctOrder[index]) {
            return `${baseClassName} ${styles.correctSlot}`;
        }

        return `${baseClassName} ${styles.wrongSlot}`;
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
                                    draggable={Boolean(slotId) && !checked}
                                    className={getSlotClassName(slotId, index)}
                                    onDragStart={(event) =>
                                        handleSlotDragStart(event, slotId, index)
                                    }
                                    onDragEnd={handleDragEnd}
                                    onDragOver={(event) => event.preventDefault()}
                                    onDrop={() => handleDropOnSlot(index)}
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

                    <div
                        className={styles.itemsArea}
                        onDragOver={(event) => event.preventDefault()}
                        onDrop={handleDropBackToItems}
                    >
                        {availableItems.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                draggable={!checked}
                                className={`${styles.dragItem} ${selectedItemId === item.id ? styles.selectedItem : ""
                                    }`}
                                onDragStart={(event) =>
                                    handleAvailableDragStart(event, item.id)
                                }
                                onDragEnd={handleDragEnd}
                                onClick={() => !checked && setSelectedItemId(item.id)}
                            >
                                {item.text}
                            </button>
                        ))}
                    </div>

                    {!checked && (
                        <button
                            type="button"
                            className={`${styles.checkBtn} ${checkDisabled ? styles.disabledBtn : ""
                                }`}
                            onClick={handleCheck}
                            disabled={checkDisabled}
                        >
                            {checkText}
                        </button>
                    )}

                    {checked && !isCorrect && (
                        <button
                            type="button"
                            className={styles.checkBtn}
                            onClick={handleTryAgain}
                        >
                            {tryAgainText}
                        </button>
                    )}

                    {checked && isCorrect && (
                        <button
                            type="button"
                            className={`${styles.checkBtn} ${styles.disabledBtn}`}
                            onClick={handleReset}
                        >
                            {checkText}
                        </button>
                    )}

                    <button
                        type="button"
                        className={styles.resetBtn}
                        onClick={handleReset}
                    >
                        ↻ {resetText}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DragQuestion;