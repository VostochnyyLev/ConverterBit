function render() {
  const bitCoin = document.getElementById("bitcoin").value;

  const rateUa = 1300995;
  const rateUsd = 48185;
  let convertedUa = bitCoin * rateUa;
  let convertedUsd = bitCoin * rateUsd;
  console.log(bitCoin);
  console.log(convertedUsd);
  console.log(convertedUa);

  document.getElementById("dollar").innerHTML = convertedUsd;
  document.getElementById("gryvna").innerHTML = convertedUa;
}
