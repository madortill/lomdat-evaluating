import CalculatorTopics from "./Part1/CalculatorTopics/CalculatorTopics";
import Clock from "./Part1/Clock/Clock";
import Ruler from "./Part1/Ruler/Ruler";
import DragQuestion from "./Questions/DragQuestion/DragQuestion";
import Question from "./Questions/Question/Question";
import Pencils from "./Part1/Pencils/Pencils";
import MultiDragQuestions from "./Questions/MultiDragQuestions/MultiDragQuestions";
import OpeningNote from "./Reusable/OpeningNote/OpeningNote";
import Notebooks from "./Part1/Notebooks/Notebooks";
import EndSubjectPopup from "./Reusable/EndSubjectPopup/EndSubjectPopup";

const pageTypes = {
    calculatorTopics: CalculatorTopics,
    clock: Clock,
    ruler: Ruler,
    dragQuestion: DragQuestion,
    question: Question,
    pencils: Pencils,
    multiDragQuestions: MultiDragQuestions,
    openingNote: OpeningNote,
    notebooks: Notebooks,
    endSubjectPopup: EndSubjectPopup
};

const customPages = {};

const PageRenderer = ({
    page,
    groupStepIds = [],
    onNavigateToNavId,
    onNext,
    onBack
}) => {
    if (page.type === "custom") {
        const CustomPage = customPages[page.pageKey];

        if (!CustomPage) {
            return (
                <div className="missingPage">
                    <h1>העמוד עדיין לא נוצר</h1>
                    <p>{page.pageKey}</p>
                </div>
            );
        }

        return (
            <CustomPage
                {...page.props}
                groupId={page.groupId}
                groupStepIds={groupStepIds}
                onNavigateToNavId={onNavigateToNavId}
                onNext={onNext}
                onBack={onBack}
            />
        );
    }

    const PageComponent = pageTypes[page.type];

    if (!PageComponent) {
        return (
            <div className="missingPage">
                <h1>סוג העמוד עדיין לא מחובר</h1>
                <p>{page.type}</p>
            </div>
        );
    }

    return (
        <PageComponent
            {...page.props}
            groupId={page.groupId}
            navGroupId={page.navGroupId}
            groupStepIds={groupStepIds}
            onNavigateToNavId={onNavigateToNavId}
            onNext={onNext}
            onBack={onBack}
        />
    );
};

export default PageRenderer;