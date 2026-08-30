export const parts = {
    part1: {
        title: "יום המיון",
        pages: [
            {
                type: "calculatorTopics",
                label: "דגשים ליום המיון",
                navId: "part1Calculator1",
                groupId: "part1Calculator",
                props: {
                    activeIndex: 0
                }
            },
            {
                type: "calculatorTopics",
                label: "דגשים ליום המיון",
                navId: "part1Calculator2",
                groupId: "part1Calculator",
                showInNav: false,
                props: {
                    activeIndex: 1
                }
            },
            {
                type: "calculatorTopics",
                label: "דגשים ליום המיון",
                navId: "part1Calculator3",
                groupId: "part1Calculator",
                showInNav: false,
                props: {
                    activeIndex: 2
                }
            },
            {
                type: "calculatorTopics",
                label: "דגשים ליום המיון",
                navId: "part1Calculator4",
                groupId: "part1Calculator",
                showInNav: false,
                props: {
                    activeIndex: 3
                }
            },
            {
                type: "clock",
                label: "סדר היום",
                navId: "part1Clock"
            },
            {
                type: "ruler",
                label: "ציון סופי",
                navId: "part1Ruler"
            },
            {
                type: "dragQuestion",
                label: "תרגול חלק א",
                navId: "part1DragQuestion1",
                props: {
                    question: "מהו סדר יום תקין של יום מיונים לפיקוד והדרכה?",
                    instruction: "גררו את החלקים למקומות בסדר הנכון ולאחר מכן לחצו בדיקה",
                    items: [
                        { id: "bio", text: "שאלון ביוגרפי" },
                        { id: "reception", text: "קליטה" },
                        { id: "interview", text: "ראיון אישי" },
                        { id: "simulation", text: "תרגילי מצב" }
                    ],
                    correctOrder: ["reception", "bio", "simulation", "interview"]
                }
            },
            {
                type: "question",
                label: "תרגול חלק א",
                navId: "part1Question2",
                showInNav: false,
                props: {
                    question: "דני קיבל ציון 3.5 ביום המיון, האם הוא יכול להיות מפקד בבה״ד?",
                    answers: [
                        {
                            id: "a",
                            text: "כן, ציון המיון הינו תומך החלטה ולכן אין לו משמעות",
                            isCorrect: false
                        },
                        {
                            id: "b",
                            text: "כן, ציון עובר הינו מעל 3",
                            isCorrect: false
                        },
                        {
                            id: "c",
                            text: "לא, בשום אופן הציון לא עובר",
                            isCorrect: false
                        },
                        {
                            id: "d",
                            text: "כן, במקרה של ציון שאינו עובר ניתן לקבל את המועמד לפיקוד רק לאחר דיון בוועדת ערעורים בראשות המפקד",
                            isCorrect: true
                        }
                    ]
                }
            },
            {
                type: "pencils",
                label: "מדדי הערכה",
                navId: "part1Pencils"
            },
            {
                type: "multiDragQuestions",
                label: "שאלה",
                navId: "part1MultiDragQuestion1",
                props: {
                    question: "מדדי הערכה",
                    instruction: "גררו את ההיגדים למדד המתאים",
                    categories: [
                        { id: "interpersonal", title: "יכולות בין־אישיות" },
                        { id: "instruction", title: "יכולות הדרכה" },
                        { id: "values", title: "ערכיות" },
                        { id: "thinking", title: "יכולת חשיבה ותכנון" },
                        { id: "leadership", title: "פיקוד ומנהיגות" }
                    ],
                    items: [
                        {
                            id: "planning",
                            text: "יכולת תכנון",
                            correctCategoryId: "thinking"
                        },
                        {
                            id: "selfConfidence",
                            text: "ביטחון עצמי",
                            correctCategoryId: "leadership"
                        },
                        {
                            id: "initiative",
                            text: "יוזמה",
                            correctCategoryId: "leadership"
                        }
                    ]
                }
            }
        ]
    },

    part2: {
        title: "עקרונות המיון",
        pages: [
            {
                type: "text",
                label: "פתיחה",
                navId: "part2Opening",
                props: {
                    title: "עקרונות המיון",
                    text: "בחלק זה נלמד על עקרונות מרכזיים שמסייעים לבצע מיון מקצועי, אחיד והוגן."
                }
            }
        ]
    },

    part3: {
        title: "סימולציות",
        pages: [
            {
                type: "text",
                label: "פתיחה",
                navId: "part3Opening",
                props: {
                    title: "סימולציות",
                    text: "בחלק זה נתנסה בסיטואציות המדמות החלטות והערכות מתוך יום המיון."
                }
            }
        ]
    }
};