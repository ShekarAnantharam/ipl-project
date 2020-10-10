function ExtraRunsConcededIn2016(deliveries,matches) {

  const result = {};
  for (let match of matches){
    if (match.season==2016){
      for(let delivery of deliveries){
        if (delivery.match_id==match.id){
          const bowling_team = delivery.bowling_team;
      if (parseInt(delivery.match_id)>576&&parseInt(delivery.match_id)<=636){
      
      if (result[bowling_team]) {
        
        //result[bowling_team]["extra"] += parseInt(delivery.wide_runs);
      
        result[bowling_team]["extra"] += parseInt(delivery.extra_runs);
        
      } else {
        result[bowling_team] = {};
       result[bowling_team]["extra"]=0;
        
        result[bowling_team]["extra"] += parseInt(delivery.extra_runs);
      
      }
    }
        }
      }
    }
  }
  const result1={};
  for (let team in result){
   //console.log(result[team].extra);
   result1[team]=result[team].extra;
  }   
  
  return result1;
    /*for (let delivery of deliveries) {
      const bowling_team = delivery.bowling_team;
      if (parseInt(delivery.match_id)>576&&parseInt(delivery.match_id)<=636){
      
      if (result[bowling_team]) {
        
        //result[bowling_team]["extra"] += parseInt(delivery.wide_runs);
      
        result[bowling_team]["extra"] += parseInt(delivery.extra_runs);
        
      } else {
        result[bowling_team] = {};
       result[bowling_team]["extra"]=0;
        
        result[bowling_team]["extra"] += parseInt(delivery.extra_runs);
      
      }
    }
    }//console.log(result); 
    const result1={};
    for (let team in result){
     //console.log(result[team].extra);
     result1[team]=result[team].extra;
    }   
    console.log(result1);
    return result1;*/
    
  }
  
  module.exports = ExtraRunsConcededIn2016;