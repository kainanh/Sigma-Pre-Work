let dateOfBirth = prompt("Enter your date of birth in the format YYYY-MM-DD: ");

function calculateAge() {
  let dob = Date.parse(new Date(dateOfBirth));
  let currentDate = Date.parse(new Date());

  if (currentDate > dob) {
    console.log(Math.floor((currentDate - dob) / 31536000000));
  } else {
    console.log(Math.floor((dob - currentDate) / 31536000000));
  }
}
calculateAge();
