async function loadWords() {
    const response = await fetch('words.json');
    const data = await response.json();
    return data.words;
}

async function typeWriter(words, element, speed) {
    let i = 0;
    const typewriterElement = document.getElementById(element);

    async function type() {
        if (i < words.length) {
            const word = words[i];
            for (let j = 0; j < word.length; j++) {
                typewriterElement.innerHTML += word.charAt(j);
                await new Promise(resolve => setTimeout(resolve, speed));
            }
            i++;
            typewriterElement.innerHTML += ' '; // Add space between words
            setTimeout(type, speed);
        }
    }
    type();
}

async function startTypewriter() {
    const words = await loadWords();
    typeWriter(words, "typewriter", 100);
}

startTypewriter();