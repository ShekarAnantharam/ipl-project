function TopEconomicalBowlers2015(deliveries,matches) {
    const result = {};
    for (let match of matches) {
      const season = match.season;
      if(season==2015){
          for(let delivery of deliveries){
              if(delivery.match_id==match.id){
                if(result[delivery.bowler]){
                  
                  result[delivery.bowler]["total_runs"]+=parseInt(delivery.total_runs);
                  if(delivery.ball<=6){
                  result[delivery.bowler]["balls"]+=1;}
                }  else{
                  result[delivery.bowler]={};
                  result[delivery.bowler]["balls"]=0;
                  result[delivery.bowler]["total_runs"]=0;
                  result[delivery.bowler]["balls"]+=1;
                  result[delivery.bowler]["total_runs"]+=parseInt(delivery.total_runs);

                }
              }
          }
      }
    }
    const bowlerEconomy={};let arr=[];
    for (let bowler in result){
      let economy=0,overs=0;
      overs=(result[bowler].balls)/6;
      economy=(result[bowler].total_runs)/overs;
      economy=Number(economy.toFixed(2));
      bowlerEconomy[bowler]=economy;
      arr.push(economy);
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
    }
    //console.log(bowlerEconomy);
    return result;
  }
  
  module.exports = TopEconomicalBowlers2015;
  