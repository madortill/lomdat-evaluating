import { useEffect } from "react";
import styles from "./ButtonControls.module.css";

import nextBtn from "../../../assets/img/nextBtn.svg";
import backBtn from "../../../assets/img/backBtn.svg";

const ButtonControls = ({
    onNext,
    onBack,
    showNext = true,
    showBack = true,
}) => {
    useEffect(() => {
        const handleKeyboardNavigation = (event) => {
            const activeElement = document.activeElement;

            const isTyping =
                activeElement?.tagName === "INPUT" ||
                activeElement?.tagName === "TEXTAREA" ||
                activeElement?.isContentEditable;

            if (isTyping) {
                return;
            }

            const nextKeys = ["Space", "ArrowLeft", "ArrowDown"];
            const backKeys = ["ArrowRight", "ArrowUp"];

            if (
                nextKeys.includes(event.code) &&
                showNext &&
                typeof onNext === "function"
            ) {
                event.preventDefault();
                onNext();
                return;
            }

            if (
                backKeys.includes(event.code) &&
                showBack &&
                typeof onBack === "function"
            ) {
                event.preventDefault();
                onBack();
            }
        };

        window.addEventListener("keydown", handleKeyboardNavigation);

        return () => {
            window.removeEventListener("keydown", handleKeyboardNavigation);
        };
    }, [onNext, onBack, showNext, showBack]);

    return (
        <>
            {showBack && (
                <img
                    src={backBtn}
                    alt="חזור"
                    className={styles.backBtn}
                    onClick={onBack}
                />
            )}

            {showNext && (
                <img
                    src={nextBtn}
                    alt="הבא"
                    className={styles.nextBtn}
                    onClick={onNext}
                />
            )}
        </>
    );
};

export default ButtonControls;