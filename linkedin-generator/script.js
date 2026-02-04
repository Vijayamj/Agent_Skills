document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const output = document.getElementById('post-output');
    
    const inputs = {
        topic: document.getElementById('topic'),
        tone: document.getElementById('tone'),
        points: document.getElementById('key-points'),
        cta: document.getElementById('cta')
    };

    const templates = {
        professional: [
            "I've been thinking a lot about {topic} lately. \n\nIt's clear that the landscape is shifting, and those who adapt will lead. Here are my key takeaways:\n\n{points}\n\n{cta}",
            "Success in {topic} isn't just about hard work—it's about strategy. \n\nReflecting on recent developments, I've realized:\n\n{points}\n\nHow are you approaching this? {cta}"
        ],
        conversational: [
            "Let's talk about {topic}. 🗣️\n\nI used to think it was complicated, but it's actually quite simple when you break it down:\n\n{points}\n\nWould love to hear your thoughts! {cta}",
            "Unpopular opinion: {topic} is actually the best thing happening right now. \n\nWhy? Because:\n\n{points}\n\nDo you agree? {cta}"
        ],
        provocative: [
            "Stop overlooking {topic}. 🛑\n\nMost people are getting this wrong. The truth is:\n\n{points}\n\nAgree or disagree? {cta}",
            "The old way of doing {topic} is dead. 💀\n\nIf you're not doing these 3 things, you're falling behind:\n\n{points}\n\nChange my mind. {cta}"
        ],
        inspirational: [
            "Imagine a world where {topic} is the standard, not the exception. ✨\n\nWe have the power to shape this future. It starts with:\n\n{points}\n\nLet's build together. {cta}",
            "Believe in the power of {topic}. \n\nEvery great journey starts with a single step towards:\n\n{points}\n\nKeep pushing. {cta}"
        ],
        humorous: [
            "Me trying to explain {topic} to my cat: 🐈\n\n1. {first_point}\n2. {second_point}\n3. Confusion.\n\nBut seriously, here's what matters:\n\n{points}\n\nHelp me out here: {cta}"
        ]
    };

    generateBtn.addEventListener('click', () => {
        const topic = inputs.topic.value || "the industry";
        const tone = inputs.tone.value;
        const rawPoints = inputs.points.value.split('\n').filter(p => p.trim() !== '');
        const points = rawPoints.length > 0 
            ? rawPoints.map(p => `• ${p.trim().replace(/^•\s?/, '')}`).join('\n')
            : "• Insight 1\n• Insight 2\n• Insight 3";
        const cta = inputs.cta.value || "Let's discuss below!";

        const toneTemplates = templates[tone];
        let post = toneTemplates[Math.floor(Math.random() * toneTemplates.length)];

        post = post.replace(/{topic}/g, topic)
                  .replace(/{points}/g, points)
                  .replace(/{first_point}/g, rawPoints[0] || "Point 1")
                  .replace(/{second_point}/g, rawPoints[1] || "Point 2")
                  .replace(/{cta}/g, cta);

        // Add some emojis based on tone if not present
        if (tone === 'professional') post += " 📈";
        if (tone === 'inspirational') post += " 🚀";

        output.innerHTML = post;
        
        // Animation
        output.style.opacity = '0';
        setTimeout(() => {
            output.style.transition = 'opacity 0.5s ease-in-out';
            output.style.opacity = '1';
        }, 50);
    });

    copyBtn.addEventListener('click', () => {
        const text = output.innerText;
        if (text.includes("Your architected post")) return;
        
        navigator.clipboard.writeText(text).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = "✅ Copied!";
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        });
    });

    // Theme toggle (Visual only for now)
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        // Simple light mode CSS adjustment could be added here or in style.css
    });
});
