function convert() {
  const amountBit = document.getElementById("bitcoin").value;
  const dollarBit = bitCoin(amountBit);
  const text = `${dollarBit}`;
  document.getElementById("dollar").innerHTML = text;
}
