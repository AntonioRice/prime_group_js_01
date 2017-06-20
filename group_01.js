var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

//calculateBonusRate returns the raw bonus rate without any if/ands/or buts
function calculateBonusRate(dataArray){
  var rating = dataArray[3];

  if (rating <= 2){
    return bonus = 0.0;
     console.log(bonus);
  }else if(rating == 3){
    return bonus = .04;
     console.log(bonus);
  }else if(rating == 4){
    return bonus = .06;
     console.log(bonus);
  }else if(rating == 5){
    return bonus = .10;
     console.log(bonus);
  }
}; //end of calculateBonusRate function
//calculateBonusRate(robert);
//tenureAdjustedRate returns the actual rate based off of years with company up to .13

function tenureAdjustedRate(dataArray){
  if (dataArray[1].length == 4){
    if (calculateBonusRate(dataArray) + .05 > .13){
     return .13;
      }else {
      return calculateBonusRate(dataArray) + .05;
        }
  }else{
     return calculateBonusRate(dataArray);

  };
}//end of whole tenure function
//tenureAdjustedRate(scout);

//calculateTotalBonus returns base + adjusted bonus
function calculateTotalBonus(dataArray){

  var income = dataArray[2];
  var extraCheck = income * tenureAdjustedRate(dataArray);
  var hugeCheck = +income + +extraCheck;
  console.log(hugeCheck);
} //end of calculateTotalBonus function

  calculateTotalBonus(scout)
