const ratingCon = document.querySelector('.buttons-section');
const ratingBtns = document.querySelectorAll('.button');
const submitBtn = document.querySelector('.submit-section');
const result = document.querySelector('.brand-rating');
const secondWrp = document.querySelector('.second-container');
let ratingValue;

ratingCon.addEventListener('click', e => {
  ratingBtns.forEach(btn => {
    btn.classList.remove('active')
  })
  e.target.classList.add('active');
  ratingValue = e.target.innerHTML;
})

submitBtn.addEventListener('click', () => {
  if (ratingValue > 0 || ratingValue <= 5) {
    secondWrp.style.bottom = '0%';

    result.textContent = `You selected ${ratingValue} out of 5`
  }
  else {
    return false
  }
})