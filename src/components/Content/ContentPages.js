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
                type: "text",
                label: "מהו יום מיון?",
                navId: "part1Text1",
                props: {
                    title: "מהו יום מיון?",
                    text: "יום המיון נועד לאפשר הערכה מסודרת ואחידה של מועמדים, בהתאם לתפקיד שאליו הם מתמיינים."
                }
            },
            {
                type: "custom",
                pageKey: "part1Info",
                label: "דגשים",
                navId: "part1Info"
            },
            {
                type: "question",
                label: "שאלה 1",
                navId: "part1Question1",
                props: {
                    question: "מהי אחת המטרות המרכזיות של יום המיון?",
                    answers: [
                        { text: "לאפשר הערכה אחידה של המועמדים", isCorrect: true },
                        { text: "לקצר את תהליך הקבלה בלי לבדוק התאמה", isCorrect: false },
                        { text: "לאפשר למועמדים לבחור כל תפקיד שירצו", isCorrect: false },
                        { text: "לוותר על תיעוד מסודר", isCorrect: false }
                    ]
                }
            },
            {
                type: "question",
                label: "שאלה 2",
                navId: "part1Question2",
                props: {
                    question: "מה חשוב לשמור לאורך יום המיון?",
                    answers: [
                        { text: "יחס אחיד, מקצועי והוגן", isCorrect: true },
                        { text: "שאלות שונות לגמרי לכל מועמד", isCorrect: false },
                        { text: "החלטה לפי תחושת בטן בלבד", isCorrect: false },
                        { text: "חוסר סדר כדי לבדוק לחץ", isCorrect: false }
                    ]
                }
            },
            {
                type: "custom",
                pageKey: "part1Summary",
                label: "סיכום",
                navId: "part1Summary"
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