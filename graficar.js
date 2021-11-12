var nombres = JSON.parse(localStorage.getItem("X"));
var repetidos = JSON.parse(localStorage.getItem("FI"));
var porcentajes = JSON.parse(localStorage.getItem("FR"));

graficar();
function graficar() {
    var ctx = document.getElementById('canva_bar').getContext('2d');
    var myChartBar = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: nombres,
        datasets: [{
            label: 'frecuencia absoluta',
            data: repetidos,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(10, 200, 100, 0.5)',
                'rgba(255, 243, 1 , 0.5)',
                'rgba(1, 32, 255, 0.5)',
                'rgba(75, 0, 192, 0.5)',
                'rgba(10, 200, 1, 0.5)',
                'rgba(199, 24, 24, 0.5)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('canva_circle').getContext('2d');
var myChartcircle = new Chart(ctx, {
type: 'pie',
data: {
    labels: nombres,
    datasets: [{
        label: 'frecuencia porcentual',
        data: porcentajes,
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(10, 200, 100, 0.5)',
            'rgba(255, 243, 1 , 0.5)',
            'rgba(1, 32, 255, 0.5)',
            'rgba(75, 0, 192, 0.5)',
            'rgba(10, 200, 1, 0.5)',
            'rgba(199, 24, 24, 0.5)'
        ],
        borderColor: [
            'rgba(25, 162, 235, 1)',
            'rgba(25, 162, 235, 1)',
            'rgba(25, 162, 235, 1)',
            'rgba(25, 162, 235, 1)',
            'rgba(25, 162, 235, 1)',
            'rgba(25, 162, 235, 1)',
            'rgba(25, 162, 235, 1)',
            'rgba(25, 162, 235, 1)',
            'rgba(25, 162, 235, 1)',
            'rgba(25, 162, 235, 1)',
        ],
        borderWidth: 1
    }]
},
options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
});
}
