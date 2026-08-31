import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { parts } from "./ContentPages";
import PageRenderer from "./PageRender";

import TopBar from "../RecurringElements/TopBar/TopBar";
import ButtonControls from "../RecurringElements/ButtonControls/ButtonControls";

import "./Content.css";

const ContentControl = () => {
    const navigate = useNavigate();

    const [currentPartKey] = useState(() => {
        return sessionStorage.getItem("currentPart") || "part1";
    });

    const currentPart = parts[currentPartKey];
    const pages = currentPart.pages;

    const [step, setStep] = useState(() => {
        const savedStep = sessionStorage.getItem(`currentStep_${currentPartKey}`);

        if (!savedStep) {
            return 0;
        }

        const parsedStep = parseInt(savedStep, 10);

        if (Number.isNaN(parsedStep) || parsedStep < 0 || parsedStep >= pages.length) {
            return 0;
        }

        return parsedStep;
    });

    const currentPage = pages[step];

    useEffect(() => {
        if (currentPage.saveStep === false) {
            return;
        }

        sessionStorage.setItem(`currentStep_${currentPartKey}`, step.toString());
    }, [currentPartKey, step, currentPage]);

    const progress = Math.round(((step + 1) / pages.length) * 100);

    const navItems = pages
        .map((page, index) => ({
            ...page,
            stepIndex: index
        }))
        .filter((page) => page.showInNav !== false);

    const getGroupBounds = (stepIndex) => {
        const groupId = pages[stepIndex]?.groupId;

        if (!groupId) {
            return null;
        }

        const groupIndexes = pages
            .map((page, index) => (page.groupId === groupId ? index : null))
            .filter((index) => index !== null);

        return {
            start: groupIndexes[0],
            end: groupIndexes[groupIndexes.length - 1]
        };
    };

    const handleNext = () => {
        const groupBounds = getGroupBounds(step);

        if (groupBounds) {
            if (groupBounds.end < pages.length - 1) {
                setStep(groupBounds.end + 1);
                return;
            }

            sessionStorage.setItem(`completed_${currentPartKey}`, "true");
            navigate("/home");
            return;
        }

        if (step < pages.length - 1) {
            setStep((prev) => prev + 1);
            return;
        }

        sessionStorage.setItem(`completed_${currentPartKey}`, "true");
        navigate("/home");
    };

    const handleBack = () => {
        const groupBounds = getGroupBounds(step);

        if (groupBounds) {
            if (groupBounds.start > 0) {
                setStep(groupBounds.start - 1);
                return;
            }

            navigate("/home");
            return;
        }

        if (step > 0) {
            setStep((prev) => prev - 1);
            return;
        }

        navigate("/home");
    };

    const handleNavbarNavigate = (targetStep) => {
        setStep(targetStep);
    };

    const handleNavigateToNavId = (targetNavId) => {
        const targetIndex = pages.findIndex((page) => page.navId === targetNavId);

        if (targetIndex !== -1) {
            setStep(targetIndex);
        }
    };

    const groupStepIds = currentPage.groupId
        ? pages
            .filter((page) => page.groupId === currentPage.groupId)
            .map((page) => page.navId)
        : [];

    return (
        <div className="contentContainer" dir="rtl">
            <TopBar
                mode="full"
                partTitle={currentPart.title}
                progress={progress}
                navItems={navItems}
                currentStep={step}
                currentGroupId={currentPage.navGroupId || currentPage.groupId || currentPage.navId}
                onNavigate={handleNavbarNavigate}
            />

            <main className="contentMain">
                <PageRenderer
                    key={currentPage.navId}
                    page={currentPage}
                    groupStepIds={groupStepIds}
                    onNavigateToNavId={handleNavigateToNavId}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            </main>

            {!currentPage.hideControls && (
                <ButtonControls
                    onNext={handleNext}
                    onBack={handleBack}
                    showBack={true}
                    showNext={true}
                />
            )}
        </div>
    );
};

export default ContentControl;