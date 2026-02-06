const forecastCtx = document.getElementById("forecastChart");

if (forecastCtx) {
  const labels = ["Q1", "Q2", "Q3", "Q4", "Q1 2025", "Q2 2025"];

  new Chart(forecastCtx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Proyección DSGE",
          data: [3.2, 3.8, 3.1, 2.9, 3.3, 3.5],
          borderColor: "#1c4fd7",
          backgroundColor: "rgba(28, 79, 215, 0.1)",
          borderWidth: 3,
          tension: 0.3,
          fill: true,
        },
        {
          label: "Proyección ML",
          data: [2.8, 3.5, 3.0, 2.6, 3.0, 3.4],
          borderColor: "#00a3a3",
          backgroundColor: "rgba(0, 163, 163, 0.1)",
          borderWidth: 3,
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: "Crecimiento % (trim.)",
          },
        },
      },
    },
  });
}
