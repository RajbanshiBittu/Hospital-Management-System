// const regBtn = document.getElementById("regBtn");
// regBtn.addEventListener("click",function(){
//     alert("You are successfully registered")
// });


  document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fName = document.getElementById('firstName').value;
    const mName = document.getElementById('middleName').value;
    const SName = document.getElementById('secondName').value;
    const address = document.getElementById('address').value;
    const AadharNo = document.getElementById('aadharNo').value;
    const age = document.getElementById('age').value;
    const guardianName = document.getElementById('guardianName').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const password = document.getElementById('password').value;

    axios.post('/users', {
      name: name,
      email: email,
      password: password
    })
    .then(function(response) {
      alert('User created successfully!');
    })
    .catch(function(error) {
      console.error('There was an error!', error);
    });
  });
