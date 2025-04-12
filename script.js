document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const res = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
  
    const data = await res.json();
    if (data.success) {
      document.getElementById('login-container').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';
      showChart(data.stats);
    } else {
      alert('Login failed');
    }
  });
  
  function showChart(stats) {
    const ctx = document.getElementById('pieChart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Dry Plastic', 'Wet Plastic', 'Metal Plastic'],
        datasets: [{
          label: 'Waste Distribution',
          data: [stats.dry, stats.wet, stats.metal],
          backgroundColor: ['#f39c12', '#2ecc71', '#e74c3c']
        }]
      }
    });
  }
  