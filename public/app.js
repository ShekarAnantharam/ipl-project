function fetchAndVisualizeData() {
    fetch("./data.json")
      .then(r => r.json())
      .then(visualizeData);
      fetch("./data2.json")
      .then(r => r.json())
      .then(visualizeData2);
      fetch("./data3.json")
      .then(r => r.json())
      .then(visualizeData3);
      fetch("./data4.json")
      .then(r => r.json())
      .then(visualizeData4);
      
  }
  
  fetchAndVisualizeData();

  function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
    return;
  }
  
  function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
    const seriesData = [];
    for (let year in matchesPlayedPerYear) {
      seriesData.push([year, matchesPlayedPerYear[year]]);
     
      
    }
  console.log(seriesData,"thisone2")
    Highcharts.chart("matches-played-per-year", {
      chart: {
        type: "column"
      },
      title: {
        text: "Matches Played Per Year"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category",labels: {
          rotation: -45}
      },
      yAxis: {
        min: 0,
        title: {
          text: "Matches"
        }
      },
      series: [
        {
          name: "Years",
          data: seriesData
        }
      ]
    });
  }
  function visualizeData2(data) {
     
    visualizeMatchesWonByEachTeam(data.matchesWonByEachTeam);
    return;
  }
  
  function visualizeMatchesWonByEachTeam(matchesWonByEachTeam) {
    let arr=[];
    for(let team in matchesWonByEachTeam){
      let x=[];const y={};
     for(let total in matchesWonByEachTeam[team]){
        x.push(matchesWonByEachTeam[team][total]);

      } y.name=team;
      y["data"]=x;
      arr.push(y);
    }
    const seriesData = arr ;
  
    Highcharts.chart('matches-won-by-each-team', {
      chart: {
          type: 'column'
      },
      title: {
          text: '2.Number of matches won by each team over all the years'
      },
      subtitle: {
          text: 'Source: ipl.com'
      },
      xAxis: {
          categories: [
              '2008',
              '2009',
              '2010',
              '2011',
              '2012',
              '2013',
              '2014',
              '2015',
              '2016',
              '2017',
              '2018',
              '2019'
          ],
          
      },
      yAxis: {
          min: 0,
          title: {
              text: ' Matches won'
          }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
      
     
      series:seriesData
  });
    
     
    
  }
  function visualizeData3(data) {
    visualizeExtrarunsConcededIn2016(data.ExtraRunsConcededIn2016);
    return;
  }
  
  function visualizeExtrarunsConcededIn2016(ExtraRunsConcededIn2016) {
    const seriesData = [];
    for (let team in ExtraRunsConcededIn2016) {
      seriesData.push([team, ExtraRunsConcededIn2016[team]]);
     
      
    }console.log(seriesData,"thisone")
  
    Highcharts.chart("Extra-runs-conceded-in-2016", {
      chart: {
        type: "column"
      },
      title: {
        text: "3.Extra runs conceded in 2016"
      },
      subtitle: {
        text:
          'Source: ipl.com'
      },
      xAxis: {
        type: "category",
        labels: {
          rotation: -45}
      },
      yAxis: {
        min: 0,
        title: {
          text: "Extra runs"
        }
      },
      
    
      series: [
        {
          name: "Teams",
          data: seriesData
        }
        
      ]
    });
  }

  function visualizeData4(data) {
    visualizeTopEconomicalBowlers2015(data.TopEconomicalBowlers2015);
    return;
  }
  function visualizeTopEconomicalBowlers2015(TopEconomicalBowlers2015) {
    const bowlerEconomy={};let arr=[];
    const result=TopEconomicalBowlers2015;
    for (let bowler in result){
      let economy=0,overs=0;
      overs=(result[bowler].balls)/6;
      economy=(result[bowler].total_runs)/overs;
      economy=economy.toFixed(2);
      bowlerEconomy[bowler]=economy;
      arr.push(Number(economy));
    }
    function sort(arr) {
      let b = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[i]<arr[j]) {
            b = arr[i];
            arr[i] = arr[j];
            arr[j] = b;
          }
        }
      }
      return arr;
    }let sortedArray=sort(arr);
    const seriesData = [];;const finalObj={};
    for (let i=0;i<10;i++){
      for(bowler in bowlerEconomy){
        if(bowlerEconomy[bowler]==sortedArray[i]){
          seriesData.push([bowler,sortedArray[i]]);
        }
      }

    }
    
    
  
    Highcharts.chart("Top-Economical-Bowlers-in-2015", {
      chart: {
        type: "column"
      },
      title: {
        text: "4.Top Economical Bowlers in 2015"
      },
      subtitle: {
        text:
          'Source: ipl.com'
      },
      xAxis: {
        type: "category",
        labels: {
          rotation: -45}
      },
      yAxis: {
        min: 0,
        title: {
          text: "Economy"
        }
      },
      
    
      series: [
        {
          name: "Economy",
          data: seriesData
        }
        
      ]
    });
  }



  