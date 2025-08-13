// Spending Pie Chart
const spendingCtx = document.getElementById('spendingChart').getContext('2d');
const spendingChart = new Chart(spendingCtx, {
    type: 'pie',
    data: {
        labels: ['Food', 'Travel', 'Bills', 'Shopping', 'Rent', 'Other'],
        datasets: [{
            data: [5000, 2000, 1500, 3000, 7000, 1000],
            backgroundColor: [
                '#22c1c3', '#4e9af1', '#3a7bd5', '#6a11cb', '#ff6f61', '#f7b42c'
            ],
            borderWidth: 2,
            borderColor: '#fff'
        }]
    },
    options: {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true,
            duration: 1200,
            easing: 'easeOutBounce'
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: { font: { size: 14 } }
            }
        }
    }
});

// Trend Bar Chart
const trendCtx = document.getElementById('trendChart').getContext('2d');
const trendChart = new Chart(trendCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Food',
            data: [4000, 4200, 3800, 5000, 5200, 4800],
            backgroundColor: '#22c1c3',
            borderRadius: 8
        },
        {
            label: 'Travel',
            data: [1800, 2200, 2000, 2500, 2300, 2100],
            backgroundColor: '#3a7bd5',
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        animation: {
            duration: 1200,
            easing: 'easeInOutQuart'
        },
        plugins: {
            legend: { position: 'bottom' }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Alerts
function processData() {
    document.getElementById('alertMessage').innerText =
        "⚠ You are overspending on Food this month by 18% compared to last month.";
}

// Goals
function setGoal() {
    const goal = document.getElementById('goalAmount').value;
    if (goal) {
        document.getElementById('goalStatus').innerText = `🎯 Goal set: ₹${goal}. We'll track your progress!`;
    } else {
        document.getElementById('goalStatus').innerText = "⚠ Please enter a valid goal amount.";
    }
}
