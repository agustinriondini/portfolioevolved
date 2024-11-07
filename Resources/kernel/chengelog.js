document.addEventListener("DOMContentLoaded", function fetchChangelogDataContent() {
    fetch('../../README.md')
        .then(response => response.text())
        .then(data => {
            document.getElementById('fetchchangelog').textContent = data;
        })
        .catch(error => console.error('Error fetching changelog:', error));
});
