const EmptyPage = ({ title = "עמוד זמני", text = "כאן יופיע התוכן בהמשך." }) => {
    return (
        <section
            style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "8rem 8vw",
                boxSizing: "border-box",
                fontFamily: "Fredoka, sans-serif",
                color: "#88563B"
            }}
        >
            <h1
                style={{
                    fontSize: "clamp(2rem, 3.5vw, 4rem)",
                    marginBottom: "1rem"
                }}
            >
                {title}
            </h1>

            <p
                style={{
                    fontSize: "clamp(1rem, 1.4vw, 1.5rem)",
                    lineHeight: 1.7,
                    maxWidth: "45rem"
                }}
            >
                {text}
            </p>
        </section>
    );
};

export const parts = {
    part1: {
        title: "יום המיון",
        pages: [
            {
                component: EmptyPage,
                label: "פתיחה",
                navId: "part1Opening",
                props: {
                    title: "פתיחה",
                    text: "עמוד פתיחה זמני לחלק יום המיון."
                }
            },
            {
                component: EmptyPage,
                label: "מהו יום מיון?",
                navId: "part1Text1",
                props: {
                    title: "מהו יום מיון?",
                    text: "כאן יופיע הסבר על יום המיון."
                }
            },
            {
                component: EmptyPage,
                label: "דגשים",
                navId: "part1Info",
                props: {
                    title: "דגשים",
                    text: "כאן יופיעו הדגשים המרכזיים של החלק."
                }
            },
            {
                component: EmptyPage,
                label: "שאלה 1",
                navId: "part1Question1",
                props: {
                    title: "שאלה 1",
                    text: "כאן תופיע בהמשך קומפוננטת שאלה."
                }
            },
            {
                component: EmptyPage,
                label: "שאלה 2",
                navId: "part1Question2",
                props: {
                    title: "שאלה 2",
                    text: "כאן תופיע בהמשך קומפוננטת שאלה נוספת."
                }
            },
            {
                component: EmptyPage,
                label: "סיכום",
                navId: "part1Summary",
                props: {
                    title: "סיכום",
                    text: "עמוד סיכום זמני לחלק יום המיון."
                }
            }
        ]
    },

    part2: {
        title: "עקרונות המיון",
        pages: [
            {
                component: EmptyPage,
                label: "פתיחה",
                navId: "part2Opening",
                props: {
                    title: "עקרונות המיון",
                    text: "עמוד פתיחה זמני לחלק עקרונות המיון."
                }
            },
            {
                component: EmptyPage,
                label: "עמוד נוסף",
                navId: "part2Page2",
                props: {
                    title: "עמוד נוסף",
                    text: "כאן יופיע תוכן נוסף בהמשך."
                }
            }
        ]
    },

    part3: {
        title: "סימולציות",
        pages: [
            {
                component: EmptyPage,
                label: "פתיחה",
                navId: "part3Opening",
                props: {
                    title: "סימולציות",
                    text: "עמוד פתיחה זמני לחלק סימולציות."
                }
            },
            {
                component: EmptyPage,
                label: "תרגול",
                navId: "part3Practice",
                props: {
                    title: "תרגול",
                    text: "כאן תופיע בהמשך קומפוננטת סימולציה או תרגול."
                }
            }
        ]
    }
};