function renderBit() {
  const bitCoin = document.getElementById("bitcoin").value;
  const rateUsd = 48185;
  // let usd = bitCoin * rateUsd;
  // let usd = m(bitCoin, rateUsd);
  const rateUa = 1300995;
  // let ua = bitCoin * rateUa;
  // let ua = m(bitCoin, rateUa);
  renderUsd(m(bitCoin, rateUsd));
  renderUa(m(bitCoin, rateUa));
  negativeNumber(bitCoin);
}

function negativeNumber(value) {
  if (value < 0) {
    document.getElementById("dollar").innerHTML =
      "Введите значение 0 или больше нуля";
    document.getElementById("gryvna").innerHTML =
      "Введите значение 0 или больше нуля";
  }
}

function m(a, b) {
  return a * b;
}

function renderUsd(value) {
  document.getElementById("dollar").innerHTML = value;
}

function renderUa(value) {
  document.getElementById("gryvna").innerHTML = value;
}
