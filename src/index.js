import m from './lib/formula';
import renderUsd from './lib/renderUsd';
import renderUa from './lib/renderUa';
import negativeNumber from './lib/negativeNumber';

window.renderBit = () => {
  const bitCoin = document.getElementById('bitcoin').value;
  const rateUsd = 48185;
  const rateUa = 1300995;
  renderUsd(m(bitCoin, rateUsd));
  renderUa(m(bitCoin, rateUa));
  negativeNumber(bitCoin);
};
