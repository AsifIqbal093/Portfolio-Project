google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Analytical Skills', 'Ratings',],
        ['Data Gathering', 8],
        ['Data Wrangling', 7],
        ['Data Exploration', 7],
        ['Data Visualization', 6],
        ['Machine Learning Tasks', 6],
      ]);

      var options = {
        title: 'Skills rating across different steps of data analytics',
        chartArea: {width: '100%'},
        hAxis: {
          minValue: 0,
          maxValue: 10
        },
        
      };

      options.chartArea = {left: '10%', width: '100%', height: '65%'};
      var chart = new google.visualization.BarChart(document.getElementById('analytics_div'));

      chart.draw(data, options);
    }