function check() {
  // alert ('It is working!')

  let birthYear = document.getElementById('input').value
  let currentYear = new Date().getFullYear()
  let displayArea = document.getElementById('display')

  let eligibility = currentYear - Number(birthYear)

  if (birthYear == '') {
    displayArea.innerHTML = `<p>Input should not be empty!</p>`
  }

  if (isNaN(Number(birthYear))) {
    displayArea.innerHTML = `<p>Input numbers!</p>`
    return
  }

  if (birthYear.length != 4){
    displayArea.innerHTML = `<p>Birth year can not be lesser than 4 digits!</p>`
    return
  }

  if (birthYear > currentYear) {
    displayArea.innerHTML = `<p>Your birth year should not be greater than the current year!</p>`
  }

  if (eligibility >= 18) {
    displayArea.innerHTML = `<p>You are eligible to vote!</p>`
  } else {
    displayArea.innerHTML = `<p>You are not eligible to vote. Come back in ${eligibility} years time!</p>`
  }
}