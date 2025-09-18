document.addEventListener('DOMContentLoaded', () => {
    // --- IMPORTANT: UPDATE THIS URL ---
    const backendBaseUrl = 'https://globosat-api-project-460362937255.southamerica-east1.run.app/';
    // ---------------------------------

    const form = document.getElementById('grid-form');
    const environmentSelect = document.getElementById('environment');
    const channelCodeInput = document.getElementById('channel-code');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');

    // Set default start date to today
    const today = new Date().toISOString().split('T')[0];
    startDateInput.value = today;

    form.addEventListener('submit', (event) => {
        // Prevent the form from submitting in the default way
        event.preventDefault();

        // Get values from the form
        const env = environmentSelect.value;
        const channel = channelCodeInput.value.trim().toUpperCase();
        const start = startDateInput.value;
        const end = endDateInput.value;

        // Simple validation
        if (!env || !channel || !start || !end) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Construct the final URL with query parameters
        const finalUrl = `${backendBaseUrl}?env=${env}&channel=${channel}&start=${start}&end=${end}`;

        console.log('Redirecting to:', finalUrl);

        // Redirect the browser to the backend URL to trigger the download
        window.location.href = finalUrl;
    });
});