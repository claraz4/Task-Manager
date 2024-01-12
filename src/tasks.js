// urgencies: 1 --> very urgent | 2 --> urgent | 3 --> not urgent
const tasks = [
    {
        name: "Continue research",
        dueDate: new Date(2024, 0, 13),
        urgency: 1,
        category: 1,
        description: "Research project - X"
    },
    {
        name: "Emails cleanup",
        dueDate: new Date(2024, 0, 3),
        urgency: 2,
        category: 6,
        description: "Check and clean your emails"
    },
    {
        name: "Workout",
        dueDate: new Date(2024, 0, 12),
        urgency: 1,
        category: 9,
        description: "Workout upper body before noon"
    },
    {
        name: "Piano",
        dueDate: new Date(2024, 0, 12),
        urgency: 2,
        category: 10,
        description: "Practice the concerto and Beethoven"
    },
    {
        name: "Express.js",
        dueDate: new Date(2024, 0, 12),
        urgency: 2,
        category: 13,
        description: "Continue the Express.js course"
    },
    {
        name: "Report",
        dueDate: new Date(2024, 0, 12),
        urgency: 1,
        category: 7,
        description: "Send report to Y"
    },
];

export default tasks;