function divisionEntera(dividendo, divisor){

  // 13 |_4____
  //
  // 13 - 4 = 9    1
  // 9  - 4 = 5    1
  // 5  - 4 = 1    1
  // 1  - 4 = -3   0

  // do {
  //   let cont
  //   let value = dividendo-divisor
  //   cont++
  // } while (value > 0);

  if ( dividendo < divisor ) {
    return 0
  }

  return 1 + divisionEntera(dividendo - divisor, divisor)

}
