(async function () {

    async function getPageText(url) {
        try {
            const response = await fetch(url);
            const html = await response.text();

            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            return doc.body.innerText;
        } catch (err) {
            console.error("Failed to fetch:", url);
            return "";
        }
    }

    const legalPages = await findLegalPages();

    const results = [];

    for (const page of legalPages) {
        const text = await getPageText(page.href);

        const findings = scanText(text);

        results.push({
            page: page.href,
            findings
        });
    }

    chrome.storage.local.set({
        scanResults: results
    });

})();
