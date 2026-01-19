const express = require('express');
const app = express();
// const port = 3000;


app.get("/names", (req, res) => {
    res.json({
        "role": "Web Developer",
        "interview_type": "strengths_and_weaknesses",
        "duration_seconds": 40,
        "strengths": [
            {
                "title": "Problem Solving & Implementation",
                "description": "Experienced in PHP and Laravel-based web systems and CMS development. Able to analyze unclear specifications by reading existing code, identifying impact areas, and implementing stable solutions through API development and feature modifications."
            },
            {
                "title": "Quality-Oriented Development",
                "description": "Focuses on stable releases by performing unit testing and local verification, ensuring minimal impact on existing functionality."
            },
            {
                "title": "Team Communication",
                "description": "Has experience coordinating with overseas teams, contributing both technically and through clear communication in Japanese and English."
            }
        ],
        "weakness": {
            "title": "Overly Careful at Times",
            "description": "Tends to be overly cautious due to a strong focus on quality.",
            "improvement": "Improves speed by breaking tasks into smaller units and sharing progress early for review and feedback."
        },
        "summary_statement": "A web developer who contributes as an immediate asset through solid backend skills, strong problem-solving ability, and effective team communication, while continuously improving technical expertise."
    }
    );
    // res.send("List of Names");

})


// app.listen(3000, () => console.log("Server is running"));
app.listen(3000, () => {
    console.clear();
    console.log("Server is running");
})
