function monkeyTrouble(aSmile, bSmile){
  if (!aSmile && bSmile || !bSmile && aSmile) {
    return false;
  } else {
    return true;
  }
}
