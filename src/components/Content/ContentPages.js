import video1 from "../../assets/video/video1.mp4";
import video2 from "../../assets/video/video2.mp4";
import video3 from "../../assets/video/video3.mp4";

import portraitMichal from "../../assets/img/portraitMichal.svg";
import portraitAdi from "../../assets/img/portraitAdi.svg";
import portraitLior from "../../assets/img/portraitLior.svg";
import portraitLibi from "../../assets/img/portraitLibi.svg";

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
                navGroupId: "part1PracticeA",
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
                navGroupId: "part1PracticeA",
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
                    ]
                }
            },
            {
                type: "openingNote",
                label: "הטיות בהערכה",
                navId: "part1AssessmentBias",
                props: {
                    title: "הטיות בהערכה",
                    paragraphs: [
                        "המוח האנושי מבצע מידי יום עשרות, ואולי מאות, היסקים חברתיים - יצירת מידע חדש על בסיס מידע קיים בעולם החברתי.",
                        "כיוון שהיסקים אלו הינם סובייקטיבים, חשופה פעולת ההיסק להטיות מסוגים שונים שנקראות הטיות בהערכה.",
                        "נעבור על מספר הטיות מסוג זה ועל דרכי ההתמודדות שלנו."
                    ],
                    noteText: "חשוב לזכור! הטיות אלו הינן טבעיות, אך תפקידנו כממיינים להיות מודעים ולנסות להימנע מהן."
                }
            },
            {
                type: "notebooks",
                label: "הטיות בהערכה",
                navId: "part1Notebooks",
                props: {
                    title: "הטיות בהערכה",
                    instruction: "לחצו על הפנקסים כדי ללמוד עוד :)",
                    notebooks: [
                        {
                            id: "primacy",
                            title: "אפקט הראשוניות",
                            popupTitle: "אפקט הראשוניות",
                            bodyText: "תכונות שמופיעות ראשונות משפיעות על האופן בו אנו מפרשים את המידע המופיע לאחר מכן.",
                            noteText: "דרכי התמודדות - לגלות פתיחות, לא להיצמד להתרשמות ראשונית ולא לקבוע דעה לאחר תרגיל בודד."
                        },
                        {
                            id: "stereotypes",
                            title: "סטריאוטיפים",
                            popupTitle: "סטריאוטיפים",
                            bodyText: "אמונות לגבי תכונות המאפיינות קבוצה מסוימת, חיפוש אחר תכונות אלו. דברים שונים עלולים להטות את ההערכה, כגון: שם, תפקיד, מוצא, אזור מגורים, מראה חיצוני.",
                            noteText: "דרכי התמודדות - יש להתרשם רק מתכונות האדם ולא לייחס לו תכונות של קבוצות השתייכות כלשהן."
                        },
                        {
                            id: "halo",
                            title: "אפקט ההילה",
                            popupTitle: "אפקט ההילה",
                            bodyText: "דפוס התנהגות אחד מאפיל על מכלול דפוסי ההתנהגות של המועמד, ומשפיע על הרושם שנוצר. \nכגון: מישהו שנראה טוב ועושה רושם של חכם או טוב לב.",
                            noteText: "דרכי התמודדות - לתת הערכה על כל תכונה בנפרד לפי מתן ציון מסכם. לשים לב לשוני בהערכות בין התכונות השונות."
                        },
                        {
                            id: "leniency",
                            title: "דמיון למעריך",
                            popupTitle: "דמיון למעריך",
                            bodyText: "ככל שהדמיון בין המעריך למועמד גדול יותר, כך גדלה הנטייה להעניק הערכות חיוביות יותר. עשויה להיות השפעה לדמיון באופי, במגורים, בתפקיד, בתחביב, במוצא וכדומה.",
                            noteText: "דרכי התמודדות - להיות מודע לכך שאם מישהו שונה ממני, זה לא אומר שהוא לא יכול לבצע את התפקיד בצורה טובה."
                        },
                        {
                            id: "contrast",
                            title: "בולטות",
                            popupTitle: "בולטות",
                            bodyText: 'אירוע בולט "צובע" את האופן בו אנו תופסים את האדם. \nלדוגמא: מועמד שבדרכו לביצוע מטלה נתקל במשהו, עלול להיתפס כמגושם ולא יסודי למרות שביצועיו יכולים להיות טובים.',
                            noteText: "דרכי התמודדות - לרשום את כל האירועים, קטנים כגדולים ואת ההתנהגויות גם לחיוב וגם לשלילה."
                        },
                        {
                            id: "contrastEffect",
                            title: "אפקט הקונטרסט",
                            popupTitle: "אפקט הקונטרסט",
                            bodyText: "נטייה לקבוע הערכה בהשוואה למועמדים אחרים ולא על פי התאמה לתפקיד.\nהפרטים בקבוצה עשויים להשפיע על הערכת הפרט, מועמד מסוים יכול להיתפס כמצוין בקבוצה חלשה או להיתפס כבינוני / נמוך בקבוצה חזקה.\nהערכת המועמד הקודם עשויה להשפיע על הערכת המועמד הנוכחי, אם מועמד מסוים היה מצוין עלול המועמד הבא להישפט לפי סטנדרטים מחמירים יותר ולהיפך.",
                            noteText: "דרכי התמודדות - להעריך לאור תיאור התפקיד אליו מחפשים, להתייחס כל מועמד בנפרד."
                        },
                        {
                            id: "centerBias",
                            title: "נטייה להחמרה / הקלה / מרכז",
                            popupTitle: "נטיה להחמרה/הקלה/מרכוז",
                            bodyText: 'נטייה לשימוש בחלק מהסקאלה במקום לפזר הערכות באופן נרחב בסולם הציונים.\nנטייה לתת הערכות גבוהות לכלל המועמדים מתוך כוונה להיות נחמד וחיובי.\nנטייה לגלות ביקורתיות רבה, והחמיר ולתת הערכות נמוכות במיוחד לכלל המועמדים.\nנטייה "ללכת על בטוח" ולתת הערכות בינוניות.',
                            noteText: "דרכי התמודדות - תקנון הציונים ברמת המעריך, שימוש בכל הסקאלה, עבודה עם ערכים התנהגותיים, למשל: הצליח במשימה (5), היה צריך עזרה על מנת להשלים את המשימה (3), לא עמד במשימה (1)."
                        },
                        {
                            id: "confirmation",
                            title: "הטיית האישוש",
                            popupTitle: "הטיית האישוש",
                            bodyText: "נטייה לחפש מידע שיאשש את מה שחשבנו קודם, כגון:\n- קיבוע על דעה מסוימת אודות המועמד ומשך אחר חיפש תכונות נוספות שיאשרו אותה.\n- נטייה להתעלם מתכונות אחרות שנוגדות דעה זו ולא להתרשם בצורה מלאה מהמועמד.",
                            noteText: "דרכי התמודדות - הערכתנו עלולה להיות שגויה ולכן יש לחפש גם תכונות שנוגדות את הדעה, על מנת להתרשם בצורה מקיפה מהמועמד.\nהעלאה למודעות, תצפית ורישום, הבניית הערכה, מתן הערכות בסיום, התרשמות כוללת."
                        }
                    ]
                }
            },
            {
                type: "question",
                label: "תרגול הטיות",
                navId: "biasPracticeQuestion1",
                navGroupId: "biasPractice",
                props: {
                    question: "דני מעריך ביום מיונים, במהלך הקליטה שמעון נכנס לכיתה, החליק וכל המשתתפים צחקו. בכל אחד מהתרגילים שמעון מקבל מדני ציון נמוך על פרמטר ערכיות כיוון שדני מתרשם שאינו מייצג דמות פיקודית חזקה מספיק. לאיזה הטייה ייתכן שדני נפל במקרה זה?",
                    answers: [
                        { id: "a1", text: "הטיית האישוש", isCorrect: false },
                        { id: "a2", text: "אפקט הראשוניות", isCorrect: true },
                        { id: "a3", text: "אפקט הקונטרסט", isCorrect: false },
                        { id: "a4", text: "דמיון למעריך", isCorrect: false }
                    ]
                }
            },
            {
                type: "question",
                label: "שאלה 2",
                navId: "biasPracticeQuestion2",
                navGroupId: "biasPractice",
                showInNav: false,
                props: {
                    question: "מאיה מעריכה ביום מיון, במהלך הקליטה מספרת המתמיינת שהיא מקיבוץ בצפון הארץ. מאיה מעריכה אותה בציון גבוה בפרמטר הערכיות מכיוון שהיא מתרשמת שמדובר במתמיינת ערכית. לאיזה הטייה יתכן שמאיה נפלה במקרה זה?",
                    answers: [
                        { id: "a1", text: "סטריאוטיפים", isCorrect: true },
                        { id: "a2", text: "אפקט ההילה", isCorrect: false },
                        { id: "a3", text: "אפקט הקונטרסט", isCorrect: false },
                        { id: "a4", text: "בולטות", isCorrect: false }
                    ]
                }
            },
            {
                type: "question",
                label: "שאלה 3",
                navId: "biasPracticeQuestion3",
                navGroupId: "biasPractice",
                showInNav: false,
                props: {
                    question: "דפי מעריכה ביום מיון, במהלך תרגיל ההיכרות אחת המתמיינות מספרת על עצמה באופן נלהב ואנרגטי. דפי מעריכה את המתמיינת בכל המדדים בצורה גבוהה לכל אורך יום המיון. לאיזה הטייה יתכן שדפי נפלה במקרה זה?",
                    answers: [
                        { id: "a1", text: "בולטות", isCorrect: false },
                        { id: "a2", text: "דמיון למעריך", isCorrect: false },
                        { id: "a3", text: "אפקט ההילה", isCorrect: true },
                        { id: "a4", text: "הטיית האישוש", isCorrect: false }
                    ]
                }
            },
            {
                type: "question",
                label: "שאלה 4",
                navId: "biasPracticeQuestion4",
                navGroupId: "biasPractice",
                showInNav: false,
                props: {
                    question: "אבי מעריך ביום מיון, אחד המתמיינים מספר כי היה בצופים לאורך מספר שנים. אבי שהיה גם בצופים מעריך את המתמיין בצורה חיובית וגבוהה לאורך כל יום המיון. לאיזה הטייה ייתכן שאבי נפל במקרה זה?",
                    answers: [
                        { id: "a1", text: "אפקט הקונטרסט", isCorrect: false },
                        { id: "a2", text: "הטיית האישוש", isCorrect: false },
                        { id: "a3", text: "אפקט הראשוניות", isCorrect: false },
                        { id: "a4", text: "דמיון למעריך", isCorrect: true }
                    ]
                }
            },
            {
                type: "endSubjectPopup",
                label: "סיום יום המיון",
                navId: "part1EndSubjectPopup",
                showInNav: false,
                saveStep: false,
                props: {
                    subtitle: "סיימתם את החלק הראשון של יום המיון",
                    buttonText: "יאללה לפרק הבא ←"
                }
            }
        ]
    },

    part2: {
        title: "עקרונות המיון",
        pages: [
            {
                type: "stapler",
                label: "דגשים כלליים",
                navId: "part2Stapler"
            },
            {
                type: "tabs",
                label: "דגשים למיון הדרכה",
                navId: "part2Tabs"
            },
            {
                type: "question",
                label: "תרגול דגשים",
                navId: "part2GuidanceQuestion1",
                navGroupId: "part2GuidancePractice",
                props: {
                    question: "במה באה לידי ביטוי הסטנדרטיזציה (אחידות) במיון להדרכה?",
                    answers: [
                        {
                            id: "a",
                            text: "תמיד נקיים את ימי המיון באותה כיתה",
                            isCorrect: false
                        },
                        {
                            id: "b",
                            text: "הטיית הראשוניות",
                            isCorrect: false
                        },
                        {
                            id: "c",
                            text: "זימון למעריך",
                            isCorrect: false
                        },
                        {
                            id: "d",
                            text: "הקפדה על אחידות מירבית בהעברת הוראות התרגילים אל המועמדים",
                            isCorrect: true
                        }
                    ]
                }
            },
            {
                type: "question",
                label: "תרגול דגשים",
                navId: "part2GuidanceQuestion2",
                navGroupId: "part2GuidancePractice",
                showInNav: false,
                props: {
                    question: "ציינו את העקרונות הרלוונטיים לתצפית והערכה אפקטיביים",
                    subtitle: "ניתן לבחור יותר מתשובה אחת",
                    multipleCorrect: true,
                    smallTitle: true,
                    answers: [
                        {
                            id: "a",
                            text: "לרשום כמה שיותר התנהגויות נצפות ולא רק מסקנות כוללות. למשל: ״דוד קם פעמיים ממקומו למרות שניתנה הוראה לא לקום״ במקום ״קושי בשליטה עצמית וקבלת מרות״",
                            isCorrect: true
                        },
                        {
                            id: "b",
                            text: "על מנת לקבל הערכה רחבה כמה שניתן יש להיעזר במעריך נוסף ובתצפיות שלו",
                            isCorrect: false
                        },
                        {
                            id: "c",
                            text: "חוות הדעת היא בלתי תלויה, כלומר כל מעריך ממלא לבד ואין להתייעץ או להחליף רשמים אלא לאחר המילוי",
                            isCorrect: true
                        },
                        {
                            id: "d",
                            text: "המעריך ישמור על מקום קבוע ממנו הוא צופה כדי לקבל התרשמות מייצגת ואחידה על כלל המשתתפים",
                            isCorrect: false
                        }
                    ]
                }
            },
            {
                type: "interviewNotes",
                label: "דגשים לראיון",
                navId: "part2InterviewNotes"
            },
            {
                type: "carousel",
                label: "אסור בראיון",
                navId: "part2InterviewForbidden"
            },
            {
                type: "question",
                label: "תרגול ראיון תעסוקתי",
                navId: "part2InterviewPracticeQuestion",
                navGroupId: "part2InterviewPractice",
                props: {
                    question: "ראיון תעסוקתי - אילו דברים אסור לעשות בראיון תעסוקתי?",
                    answers: [
                        {
                            id: "a",
                            text: "לשאול על העבר של המועמד",
                            isCorrect: false
                        },
                        {
                            id: "b",
                            text: "לתת משוב על התפקוד לאורך יום המיון",
                            isCorrect: true
                        },
                        {
                            id: "c",
                            text: "לבקש לקבל דוגמאות ממקרים אמיתיים בעברו של המועמד",
                            isCorrect: false
                        },
                        {
                            id: "d",
                            text: "לשאול את המועמד איך הוא חושב שהוא תפקד ביום המיון",
                            isCorrect: false
                        }
                    ]
                }
            },
            {
                type: "multiDragQuestions",
                label: "תרגול ראיון תעסוקתי",
                navId: "part2InterviewPracticeDrag",
                navGroupId: "part2InterviewPractice",
                showInNav: false,
                props: {
                    title: "ראיון תעסוקתי",
                    instruction: "גררו את ההיגד לסוג השאלה המתאים",
                    largeCategoryItemsMargin: true,
                    items: [
                        {
                            id: "clarificationInfo",
                            label: "מאפשרת לקבל מידע נוסף בתחום מסוים, לוודא שהובנה כוונת המועמד",
                            correctTargetId: "clarificationTarget"
                        },
                        {
                            id: "closedSpecificInfo",
                            label: "כדי להשיג מידע ספציפי",
                            correctTargetId: "closedTarget"
                        },
                        {
                            id: "directNoEscape",
                            label: "כדי למנוע אפשרות של התחמקות או סטייה",
                            correctTargetId: "directTarget"
                        },
                        {
                            id: "closedFocusTopics",
                            label: "כדי להתמקד בנושאים",
                            correctTargetId: "closedTarget"
                        },
                        {
                            id: "openOrganization",
                            label: "מאפשרת לראות כיצד המועמד מתארגן ומה בוחר להדגיש",
                            correctTargetId: "openTarget"
                        },
                        {
                            id: "indirectSensitive",
                            label: "כשהנושא רגיש, מוסתר, בעייתי וכו׳",
                            correctTargetId: "indirectTarget"
                        },
                        {
                            id: "closedVerifyData",
                            label: "כדי לאמת נתונים",
                            correctTargetId: "closedTarget"
                        }
                    ],
                    targets: [
                        {
                            id: "clarificationTarget",
                            title: "שאלת הבהרה",
                            text: "מיועדת להבהיר נקודה מסוימת בדברי המרואיין."
                        },
                        {
                            id: "directTarget",
                            title: "שאלה ישירה",
                            text: "נוגעת ישירות בנושא ומתמקדת בו."
                        },
                        {
                            id: "closedTarget",
                            title: "שאלה סגורה",
                            text: "מובילה לתשובה ספציפית וישירה."
                        },
                        {
                            id: "openTarget",
                            title: "שאלה פתוחה",
                            text: "מאפשרת למרואיין להתבטא בצורה רחבה."
                        },
                        {
                            id: "indirectTarget",
                            title: "שאלה עקיפה",
                            text: "שואלת על הנושא באופן עקיף."
                        }
                    ]
                }
            },
            {
                type: "eraser",
                label: "הערכה מסכמת",
                navId: "part2Eraser",
                props: {
                    title: "הערכה מסכמת - הנחיות להערכה מיטבית",
                    instruction: "מחקו את הקשקושים כדי לקרוא"
                }
            },
            {
                type: "flipCards",
                label: "עקרונות למתן ציון",
                navId: "part2ScorePrinciples",
                props: {
                    title: "הערכה מסכמת - עקרונות למתן ציון",
                    instruction: "לחצו על הכרטיסים למטה כדי לצפות בהם"
                }
            },
            {
                type: "multipleSelect",
                label: "תרגול עקרונות המיון",
                navId: "part2MultipleSelect",
                props: {
                    title: "עקרונות תצפית והערכה",
                    subtitle: "ציינו את העקרונות הרלוונטיים לתצפית והערכה אפקטיביים (ניתן לבחור יותר מתשובה אחת)",
                }
            },
            {
                type: "endSubjectPopup",
                label: "סיום עקרונות המיון",
                navId: "part2EndSubjectPopup",
                showInNav: false,
                saveStep: false,
                props: {
                    title: "כל הכבוד!",
                    subtitle: "סיימתם את החלק השני של יום המיון",
                    buttonText: "יאללה לפרק האחרון ←"
                }
            }
        ]
    },

    part3: {
        title: "תרגילי מצב",
        pages: [
            {
                type: "openingNote",
                label: "פתיחה",
                navId: "part3OpeningNote",
                props: {
                    title: "תרגילי מצב",
                    paragraphs: [
                        "בחלק הבא אתם תתנסו בלהיות מעריכים ביום מיון. תצפו בשלושה תרגילים שהמתמיינים ביצעו ולאחר מכן יהיה עליכם להעריך אותם על פי ביצועיהם בתרגיל."
                    ],
                    noteText: "שימו לב - בצד המסך יופיעו סימניות עם מחוונים המתאימים לכל תרגיל - העיזרו בהן."
                }
            },
            {
                type: "schedule",
                label: "לוח זמנים",
                navId: "part3Schedule",
                props: {
                    title: "לוח זמנים מומלץ ליום המיון"
                }
            },
            {
                type: "exerciseIntro",
                label: "תרגיל 1",
                navGroupId: "part3Exercise1",
                props: {
                    title: "תרגיל 1 - דיון קבוצתי",
                    instruction: "לחצו על המספריים למטה כדי לקרוא עוד"
                }
            },
            {
                type: "exerciseVideoTable",
                label: "תרגיל 1",
                navId: "part3Exercise1VideoTable",
                navGroupId: "part3Exercise1",
                showInNav: false,
                props: {
                    exerciseId: "discussion",
                    title: "תרגיל 1 - דיון קבוצתי",
                    videoSrc: video1,
                    posterSrc: ""
                }
            },
            {
                type: "exerciseQuestion",
                label: "תרגיל 1",
                navId: "part3Exercise1QuestionLior",
                navGroupId: "part3Exercise1",
                showInNav: false,
                props: {
                    title: "העריכו את ליאור על פי מידת התאמתו",
                    instruction: "סמנו את מידת ההתאמה בכל אחד מהמדדים (כש-7 מייצג מידת התאמה גבוהה ו-1 מייצג התאמה נמוכה)",
                    portraitSrc: portraitLior,
                    portraitAlt: "ליאור",
                    portraitPositionX: "0%",
                    portraitPositionY: "19%",
                    portraitScale: 1.45,
                    rows: [
                        {
                            id: "instruction",
                            label: "יכולת הדרכה",
                            correctValues: [1, 2, 3]
                        },
                        {
                            id: "thinking",
                            label: "יכולת חשיבה ותכנון",
                            correctValues: [1, 2, 3]
                        },
                        {
                            id: "leadership",
                            label: "פיקוד ומנהיגות",
                            correctValues: [1, 2, 3]
                        },
                        {
                            id: "values",
                            label: "ערכיות",
                            correctValues: [1, 2, 3]
                        },
                        {
                            id: "interpersonal",
                            label: "יכולות בין־אישיות",
                            correctValues: [4, 5]
                        }
                    ]
                }
            },
            {
                type: "exerciseQuestion",
                label: "תרגיל 1",
                navId: "part3Exercise1QuestionMichal",
                navGroupId: "part3Exercise1",
                showInNav: false,
                props: {
                    title: "העריכו את מיכל על פי מידת התאמתה",
                    instruction: "סמנו את מידת ההתאמה בכל אחד מהמדדים (כש-7 מייצג מידת התאמה גבוהה ו-1 מייצג התאמה נמוכה)",
                    portraitSrc: portraitMichal,
                    portraitAlt: "מיכל",
                    portraitPositionX: "10%",
                    portraitPositionY: "20%",
                    portraitScale: 1.6,
                    rows: [
                        {
                            id: "instruction",
                            label: "יכולת הדרכה",
                            correctValues: [6, 7]
                        },
                        {
                            id: "thinking",
                            label: "יכולת חשיבה ותכנון",
                            correctValues: [6, 7]
                        },
                        {
                            id: "leadership",
                            label: "פיקוד ומנהיגות",
                            correctValues: [6, 7]
                        },
                        {
                            id: "values",
                            label: "ערכיות",
                            correctValues: [4, 5]
                        },
                        {
                            id: "interpersonal",
                            label: "יכולות בין־אישיות",
                            correctValues: [4, 5]
                        }
                    ]
                }
            },
            {
                type: "exerciseQuestion",
                label: "תרגיל 1",
                navId: "part3Exercise1QuestionAdi",
                navGroupId: "part3Exercise1",
                showInNav: false,
                props: {
                    title: "העריכו את עדי על פי מידת התאמתה",
                    instruction: "סמנו את מידת ההתאמה בכל אחד מהמדדים (כש-7 מייצג מידת התאמה גבוהה ו-1 מייצג התאמה נמוכה)",
                    portraitSrc: portraitAdi,
                    portraitAlt: "עדי",
                    portraitPositionX: "5%",
                    portraitPositionY: "20%",
                    portraitScale: 1.5,
                    rows: [
                        {
                            id: "instruction",
                            label: "יכולת הדרכה",
                            correctValues: [1, 2, 3]
                        },
                        {
                            id: "thinking",
                            label: "יכולת חשיבה ותכנון",
                            correctValues: [4, 5]
                        },
                        {
                            id: "leadership",
                            label: "פיקוד ומנהיגות",
                            correctValues: [4, 5]
                        },
                        {
                            id: "values",
                            label: "ערכיות",
                            correctValues: [4, 5]
                        },
                        {
                            id: "interpersonal",
                            label: "יכולות בין־אישיות",
                            correctValues: [1, 2, 3]
                        }
                    ]
                }
            },
            {
                type: "exerciseIntro",
                label: "תרגול 2",
                navId: "part3Exercise2Intro",
                navGroupId: "part3Exercise2",
                props: {
                    title: "תרגול 2 - הצגת נושא / סימולציית הדרכה",
                    instruction: "לחצו על המספריים למטה כדי לקרוא עוד",
                    cards: [
                        {
                            id: "goal",
                            title: "המטרה",
                            text: "התנסות אישית הכוללת קבלת נושא להצגה מתוך אוסף נושאים, הכנה של שיעור קצר להצגה בע״פ והעברה של נושא ספציפי מול הנבחנים האחרים והמעריכים."
                        },
                        {
                            id: "rationale",
                            title: "הרציונל",
                            text: "התרגיל מהווה סימולציה ליכולת ההדרכה של המועמדים, להציג נושא בצורה קוהרנטית ומעניינת ולעמוד מול קהל."
                        },
                        {
                            id: "equipment",
                            title: "ציוד נדרש",
                            text: "טקסטים, דפי טיוטא, עטים."
                        },
                        {
                            id: "duration",
                            title: "משך התרגיל",
                            text: "שבע דקות הכנה ועוד חמש דקות כל מועמד מציג בפני הקבוצה. משכו של כלל התרגיל כשעה."
                        }
                    ]
                }
            },
            {
                type: "exerciseVideoTable",
                label: "תרגיל 2",
                navId: "part3Exercise2VideoTable",
                navGroupId: "part3Exercise2",
                showInNav: false,
                props: {
                    exerciseId: "presentation",
                    title: "תרגיל 2 - הצגת נושא / סימולציית הדרכה",
                    videoSrc: video2,
                    posterSrc: ""
                }
            },
            {
                type: "exerciseQuestion",
                label: "תרגיל 2",
                navId: "part3Exercise2QuestionMichal",
                navGroupId: "part3Exercise2",
                showInNav: false,
                props: {
                    title: "העריכו את מיכל על פי מידת התאמתה",
                    instruction: "סמנו את מידת ההתאמה בכל אחד מהמדדים (כש-7 מייצג מידת התאמה גבוהה ו-1 מייצג התאמה נמוכה)",
                    portraitSrc: portraitMichal,
                    portraitAlt: "מיכל",
                    portraitPositionX: "10%",
                    portraitPositionY: "20%",
                    portraitScale: 1.6,
                    rows: [
                        {
                            id: "instruction",
                            label: "יכולת הדרכה",
                            correctValues: [6, 7]
                        },
                        {
                            id: "thinking",
                            label: "יכולת חשיבה ותכנון",
                            correctValues: [4, 5]
                        },
                        {
                            id: "leadership",
                            label: "פיקוד ומנהיגות",
                            correctValues: [6, 7]
                        },
                        {
                            id: "values",
                            label: "ערכיות",
                            correctValues: [4, 5]
                        },
                        {
                            id: "interpersonal",
                            label: "יכולות בין־אישיות",
                            correctValues: [1, 2, 3]
                        }
                    ]
                }
            },
            {
                type: "exerciseQuestion",
                label: "תרגיל 2",
                navId: "part3Exercise2QuestionAdi",
                navGroupId: "part3Exercise2",
                showInNav: false,
                props: {
                    title: "העריכו את עדי על פי מידת התאמתה",
                    instruction: "סמנו את מידת ההתאמה בכל אחד מהמדדים (כש-7 מייצג מידת התאמה גבוהה ו-1 מייצג התאמה נמוכה)",
                    portraitSrc: portraitAdi,
                    portraitAlt: "עדי",
                    portraitPositionX: "5%",
                    portraitPositionY: "20%",
                    portraitScale: 1.5,
                    rows: [
                        {
                            id: "instruction",
                            label: "יכולת הדרכה",
                            correctValues: [1, 2, 3]
                        },
                        {
                            id: "thinking",
                            label: "יכולת חשיבה ותכנון",
                            correctValues: [4, 5]
                        },
                        {
                            id: "leadership",
                            label: "פיקוד ומנהיגות",
                            correctValues: [1, 2, 3]
                        },
                        {
                            id: "values",
                            label: "ערכיות",
                            correctValues: [4, 5]
                        },
                        {
                            id: "interpersonal",
                            label: "יכולות בין־אישיות",
                            correctValues: [6, 7]
                        }
                    ]
                }
            },
            {
                type: "exerciseIntro",
                label: "תרגול 3",
                navId: "part3Exercise3Intro",
                navGroupId: "part3Exercise3",
                props: {
                    title: "תרגול 3 - ביצוע קבוצתי",
                    instruction: "לחצו על המספריים למטה כדי לקרוא עוד",
                    cards: [
                        {
                            id: "goal",
                            title: "המטרה",
                            scroll: true,
                            text: "בחינת סגנון הביצוע, יכולות החשיבה והתכנון, וההשתלבות בצוות של המועמדים – כיצד כל אחד בוחר להתנהל במשימה, עד כמה מאפשר ונותן מקום לאחרים בקבוצה וכד׳.\n\nמשימה זו נועדה לבחון את יכולת העבודה בצוות, קבלת החלטות תחת אילוצים תקציב וזמן, ותהליכי תכנון והוצאה לפועל."
                        },
                        {
                            id: "rationale",
                            title: "הרציונל",
                            scroll: true,
                            text: "על הקבוצה מוטלת אחריות לתכנן אירוע תוך שמירה על שיח שיתופי והסכמה רחבה.\n\nבשלב התכנון, הקבוצה נדרשת לגבש קונספט, לבחור תכנים ולנהל את התקבציה הנדרש.\n\nבשלב ההכנה, הקבוצה תגיד תוצר וויזואלי המציג את הלו״ז והדרישות התקציביות.\n"
                        },
                        {
                            id: "equipment",
                            title: "ציוד נדרש",
                            text: "טבלת מחירים בנספחים, דפי טיוטה, עטים, טושים, בריסטול גדול להצגה."
                        },
                        {
                            id: "duration",
                            title: "משך התרגיל",
                            text: "כ־45 דקות."
                        }
                    ]
                }
            },
            {
                type: "exerciseVideoTable",
                label: "תרגול 3",
                navId: "part3Exercise3VideoTable",
                navGroupId: "part3Exercise3",
                showInNav: false,
                props: {
                    exerciseId: "groupExecution",
                    title: "תרגול 3 - ביצוע קבוצתי",
                    videoSrc: video3,
                    posterSrc: ""
                }
            },
            {
                type: "exerciseQuestion",
                label: "תרגול 3",
                navId: "part3Exercise3QuestionMichal",
                navGroupId: "part3Exercise3",
                showInNav: false,
                props: {
                    title: "העריכו את מיכל על פי מידת ההתאמה",
                    instruction: "סמנו את מידת ההתאמה בכל אחד מהמדדים (כש-7 מייצג מידת התאמה גבוהה ו-1 מייצג התאמה נמוכה)",
                    portraitSrc: portraitMichal,
                    portraitAlt: "מיכל",
                    portraitAlt: "מיכל",
                    portraitPositionX: "10%",
                    portraitPositionY: "20%",
                    portraitScale: 1.6,
                    rows: [
                        {
                            id: "instruction",
                            label: "יכולת הדרכה",
                            correctValues: [4, 5]
                        },
                        {
                            id: "thinking",
                            label: "יכולת חשיבה ותכנון",
                            correctValues: [6, 7]
                        },
                        {
                            id: "leadership",
                            label: "פיקוד ומנהיגות",
                            correctValues: [4, 5]
                        },
                        {
                            id: "values",
                            label: "ערכיות",
                            correctValues: [6, 7]
                        },
                        {
                            id: "interpersonal",
                            label: "יכולות בין־אישיות",
                            correctValues: [6, 7]
                        }
                    ]
                }
            },
            {
                type: "exerciseQuestion",
                label: "תרגול 3",
                navId: "part3Exercise3QuestionAdi",
                navGroupId: "part3Exercise3",
                showInNav: false,
                props: {
                    title: "העריכו את עדי על פי מידת ההתאמה",
                    instruction: "סמנו את מידת ההתאמה בכל אחד מהמדדים (כש-7 מייצג מידת התאמה גבוהה ו-1 מייצג התאמה נמוכה)",
                    portraitSrc: portraitAdi,
                    portraitAlt: "עדי",
                    portraitPositionX: "5%",
                    portraitPositionY: "20%",
                    portraitScale: 1.5,
                    rows: [
                        {
                            id: "instruction",
                            label: "יכולת הדרכה",
                            correctValues: [4, 5]
                        },
                        {
                            id: "thinking",
                            label: "יכולת חשיבה ותכנון",
                            correctValues: [1, 2, 3]
                        },
                        {
                            id: "leadership",
                            label: "פיקוד ומנהיגות",
                            correctValues: [1, 2, 3]
                        },
                        {
                            id: "values",
                            label: "ערכיות",
                            correctValues: [4, 5]
                        },
                        {
                            id: "interpersonal",
                            label: "יכולות בין־אישיות",
                            correctValues: [1, 2, 3]
                        }
                    ]
                }
            },
            {
                type: "exerciseQuestion",
                label: "תרגול 3",
                navId: "part3Exercise3QuestionLibi",
                navGroupId: "part3Exercise3",
                showInNav: false,
                props: {
                    title: "העריכו את ליבי על פי מידת ההתאמה",
                    instruction: "סמנו את מידת ההתאמה בכל אחד מהמדדים (כש-7 מייצג מידת התאמה גבוהה ו-1 מייצג התאמה נמוכה)",
                    portraitSrc: portraitLibi,
                    portraitAlt: "ליבי",
                    portraitPositionX: "0%",
                    portraitPositionY: "20%",
                    portraitScale: 1.5,
                    rows: [
                        {
                            id: "instruction",
                            label: "יכולת הדרכה",
                            correctValues: [6, 7]
                        },
                        {
                            id: "thinking",
                            label: "יכולת חשיבה ותכנון",
                            correctValues: [6, 7]
                        },
                        {
                            id: "leadership",
                            label: "פיקוד ומנהיגות",
                            correctValues: [4, 5]
                        },
                        {
                            id: "values",
                            label: "ערכיות",
                            correctValues: [4, 5]
                        },
                        {
                            id: "interpersonal",
                            label: "יכולות בין־אישיות",
                            correctValues: [6, 7]
                        }
                    ]
                }
            },
            {
                type: "endSubjectPopup",
                label: "סיום הלומדה",
                navId: "part3EndSubjectPopup",
                showInNav: false,
                saveStep: false,
                hideControls: true,
                props: {
                    title: "כל הכבוד!",
                    subtitle: "סיימתם את החלק האחרון של הלומדה!",
                    buttonText: "לסיום הלומדה ←"
                }
            }
        ]
    }
};