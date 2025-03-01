const ctx = document.getElementById('bioChart').getContext('2d');

const bioChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Gene A', 'Gene B', 'Gene C', 'Gene D'],
        datasets: [{
            label: 'Expression Level',
            data: [12, 19, 7, 15],
            backgroundColor: ['blue', 'green', 'red', 'purple']
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});
