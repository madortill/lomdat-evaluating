import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { parts } from "./ContentPages.jsx";
import TopBar from "../RecurringElements/TopBar/TopBar";
import ButtonControls from "../RecurringElements/ButtonControls/ButtonControls";
import "./Content.css";

const ContentControl = () => {
    const navigate = useNavigate();

    const [currentPartKey] = useState(() => {
        return sessionStorage.getItem("currentPart") || "part1";
    });

    const currentPart = parts[currentPartKey];

    const [step, setStep] = useState(() => {
        const savedStep = sessionStorage.getItem(`currentStep_${currentPartKey}`);
        return savedStep ? parseInt(savedStep, 10) : 0;
    });

    useEffect(() => {
        sessionStorage.setItem(`currentStep_${currentPartKey}`, step.toString());
    }, [currentPartKey, step]);

    const pages = currentPart.pages;
    const currentPage = pages[step];
    const CurrentPage = currentPage.component;

    const progress = Math.round(((step + 1) / pages.length) * 100);

    const handleNext = () => {
        if (step < pages.length - 1) {
            setStep((prev) => prev + 1);
            return;
        }

        sessionStorage.setItem(`completed_${currentPartKey}`, "true");
        navigate("/home");
    };

    const handleBack = () => {
        if (step > 0) {
            setStep((prev) => prev - 1);
            return;
        }

        navigate("/home");
    };

    const handleNavbarNavigate = (targetStep) => {
        setStep(targetStep);
    };

    return (
        <div className="contentContainer" dir="rtl">
            <TopBar
                mode="full"
                partTitle={currentPart.title}
                progress={progress}
                navItems={pages}
                currentStep={step}
                onNavigate={handleNavbarNavigate}
            />

            <main className="contentMain">
                <CurrentPage
                    key={currentPage.navId}
                    {...currentPage.props}
                />
            </main>

            <ButtonControls
                onNext={handleNext}
                onBack={handleBack}
                showBack={true}
                showNext={true}
            />
        </div>
    );
};

export default ContentControl;