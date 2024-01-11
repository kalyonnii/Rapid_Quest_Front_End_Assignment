

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [20, 25, 30, 35, 40, 60, 65],
      datasets: [
        {
          label: "Employer :K 73,500",
          data: [50, 40, 20, 60, 82, 190, 120],
          backgroundColor: [
            'rgba(0, 61, 128, 0.8)', // BluE
          ],
          barThickness: 20,
          borderWidth: 0.1,
        },
        {
          label: "Employee: K 52,500",
          data: [70, 57, 80, 100, 100, 230,151],
          borderWidth: 0.1,
          backgroundColor: [
            'rgba(0, 123, 255, 0.8)', // BluE
          ],
          barThickness: 20,
        },
        {
          label: "Total Interest: K 244,313",
          data: [85, 69, 120, 135, 160, 290,240],
          borderWidth: 0.1,
          backgroundColor: [
            
            'rgba(54, 162, 235, 0.8)', // BluE
          ],
          barThickness: 20,
        },
      ],
    },
    
    options: {
      plugins: {
        legend: {
          labels: {
            
            color: 'black', // Set the color for legend items
          },
        },
      },
      
      scales: {
        x: {
          stacked: true, // To stack labels on top of each other
          categoryPercentage:0.1, // Adjust the spacing between bars (0.6 means 60% width)
          barPercentage: 0.1,
          grid: {
            display: false, // Remove gridlines for x-axis
          },
          ticks: {
            maxRotation: 0, // Set rotation to 0 to ensure labels are vertical
            autoSkip: false, // To display all labels
          },
        },
        y: {
          min: 0, // Set minimum value for y-axis
          max: 300, // Set maximum value for y-axis
          
          ticks: {
            stepSize: 100,
            callback: function (value) {
              return value === 0 ? '0$' : value + '$';
            },
          },
        },
      },
    },
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const data1 = {
    labels: ["Blue"],
    datasets: [
      {
        label: "Dataset 1",
        data: [78],
        backgroundColor: ["lightblue"],
      },
    ],
  };

  const data2 = {
    labels: ["A"],
    datasets: [
      {
        label: "Dataset 2",
        data: [95],
        backgroundColor: ["lightblue"],
      },
    ],
  };

  const data3 = {
    labels: ["One"],
    datasets: [
      {
        label: "Dataset 3",
        data: [59],
        backgroundColor: ["lightblue"],
      },
    ],
  };


  
  new Chart(document.getElementById("chart1"), {
    type: "doughnut",
    data: data1,
    options: {
      aspectRatio: 1,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  new Chart(document.getElementById("chart2"), {
    type: "doughnut",
    data: data2,
    options: {
      aspectRatio: 1,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  new Chart(document.getElementById("chart3"), {
    type: "doughnut",
    data: data3,
    options: {
      aspectRatio: 1,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
});


