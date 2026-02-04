const generateBtn = document.getElementById('generate-btn');
const lottoNumbers = document.querySelectorAll('.lotto-number');
const historyList = document.getElementById('history-list');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Theme switching
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Check for saved theme or OS preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    body.classList.add('dark-mode');
}

generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    lottoNumbers.forEach((element, index) => {
        element.textContent = sortedNumbers[index];
    });

    const historyItem = document.createElement('li');
    historyItem.textContent = sortedNumbers.join(', ');
    historyList.prepend(historyItem);
});