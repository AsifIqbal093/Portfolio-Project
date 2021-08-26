google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Research Skills', 'Ratings',],
        ['Info Gathering', 7],
        ['Reconnaissance', 6],
        ['Scanning', 5],
        ['Assessment', 7],
        ['Exploitation', 6],
        ['Analysis and Review', 7],
        ['Utilization', 6],
      ]);

      var options = {
        title: 'Skills rating across different steps of Penetration Testing',
        chartArea: {width: '100%'},
        hAxis: {
          minValue: 0,
          maxValue: 10
        },
        
      };
      options.chartArea = {left: '10%', width: '100%', height: '65%'};
      var chart = new google.visualization.BarChart(document.getElementById('cyber_div'));

      chart.draw(data, options);
    }