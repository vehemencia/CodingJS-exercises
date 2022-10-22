function in1To10(n, outsideMode){
  if (!outsideMode && n > 0 && n <= 10 || outsideMode && n <= 1 || outsideMode && n >= 10) {
    return true;
  } else return false;
}