async function findLegalPages() {
    const links = [...document.querySelectorAll("a")];

    const keywords = [
        "privacy",
        "terms",
        "tos",
        "policy",
        "legal",
        "agreement",
        "cookies"
    ];

    const results = [];

    links.forEach(link => {
        const text = (link.innerText || "").toLowerCase();
        const href = (link.href || "").toLowerCase();

        if (keywords.some(keyword =>
            text.includes(keyword) || href.includes(keyword)
        )) {
            results.push({
                text: link.innerText,
                href: link.href
            });
        }
    });

    return results;
}
