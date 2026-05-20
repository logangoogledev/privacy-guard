const riskRules = [
    {
        title: "Forced Arbitration",
        severity: "high",
        patterns: [
            /binding arbitration/i,
            /waive.*jury trial/i
        ]
    },

    {
        title: "Data Sharing",
        severity: "high",
        patterns: [
            /sell your personal data/i,
            /share your information with third parties/i
        ]
    },

    {
        title: "AI Training Usage",
        severity: "medium",
        patterns: [
            /train.*ai/i,
            /machine learning/i,
            /artificial intelligence/i
        ]
    },

    {
        title: "Broad Data Collection",
        severity: "medium",
        patterns: [
            /collect.*location/i,
            /collect.*contacts/i,
            /microphone/i
        ]
    }
];

function scanText(text) {
    const findings = [];

    riskRules.forEach(rule => {
        rule.patterns.forEach(pattern => {
            if (pattern.test(text)) {
                findings.push({
                    title: rule.title,
                    severity: rule.severity
                });
            }
        });
    });

    return findings;
}
