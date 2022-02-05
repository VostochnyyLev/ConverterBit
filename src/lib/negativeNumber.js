export default function negativeNumber(value) {
  if (value <= 0) {
    document.getElementById('dollar').innerHTML = 'Введите значение 0 или больше нуля';
    document.getElementById('gryvna').innerHTML = 'Введите значение 0 или больше нуля';
  }
}
