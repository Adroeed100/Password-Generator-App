window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('passwordForm');
    const input = document.getElementById('lengthInput');
    const result = document.getElementById('result');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const length = parseInt(input.value);
        if (!isNaN(length) && length > 0) {
            const password = await window.electronAPI.generatePassword(length);
            result.textContent = `Generated Password: ${password}`;
        } else {
            result.textContent = 'Please enter a valid number!';
        }
    });
});
