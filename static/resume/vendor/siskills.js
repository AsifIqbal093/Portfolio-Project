google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Languages', 'Rating'],
        ['Python', 6],
        ['Web Dev', 8],
        ['Javascript', 6],
        ['SQL', 6]
      ]);

      var options = {
        title: 'Skills rating across different Programming Languages',
        chartArea: {width: '100%'},
        hAxis: {
          minValue: 0,
          maxValue: 10
        },
        
      };
      options.chartArea = {left: '10%', width: '100%', height: '65%'};
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }