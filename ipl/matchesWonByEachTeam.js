function matchesWonByEachTeam(matches) {
    const result = {};  
     for (let match of matches) {
      const season = match.season;
      const winner=match.winner;
      if (result[winner]) {
          if(result[winner][season]){
            result[winner][season]+=1;
          }
          else{result[winner][season]=1;}
      } else {
        result[winner] = {};
        result[winner][season]=1;
      }
    }
   
    
    //console.log(arr);
    return result;
  }

 
  
  
  module.exports = matchesWonByEachTeam;
  