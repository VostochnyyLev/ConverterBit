// function renderBit()
const renderBit = () => {
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
};

// function negativeNumber(value)
const negativeNumber = (value) => {
  if (value <= 0) {
    document.getElementById("dollar").innerHTML =
      "Введите значение 0 или больше нуля";
    document.getElementById("gryvna").innerHTML =
      "Введите значение 0 или больше нуля";
  }
};

const m = (a, b) => a * b;

const renderUsd = (value) =>
  (document.getElementById("dollar").innerHTML = value);

const renderUa = (value) =>
  (document.getElementById("gryvna").innerHTML = value);
