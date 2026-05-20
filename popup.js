const resultsDiv = document.getElementById("results");
const statusDiv = document.getElementById("status");

chrome.storage.local.get(["scanResults"], (data) => {

    const results = data.scanResults || [];

    statusDiv.innerText = `Found ${results.length} legal pages`;

    results.forEach(result => {

        const card = document.createElement("div");
        card.className = "policy-card";

        const title = document.createElement("h3");
        title.innerText = result.page;

        card.appendChild(title);

        if (result.findings.length === 0) {

            const safe = document.createElement("p");
            safe.innerText = "No major risks found.";

            card.appendChild(safe);

        } else {

            result.findings.forEach(finding => {

                const item = document.createElement("p");

                item.className = finding.severity;

                item.innerText =
                    `${finding.title} (${finding.severity})`;

                card.appendChild(item);

            });
        }

        resultsDiv.appendChild(card);

    });

});
