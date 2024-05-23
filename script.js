

var typeData = new Typed(".role", {
    strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
    ],
    loop:true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

const form = document.querySelector('form')

const button = document.querySelector('#submit-btn')

button.addEventListener( 'click' , function(e) {
    const userName = document.querySelector('#data-name').value;
    const email = document.querySelector('#data-email').value;
    const subject = document.querySelector('#data-subject').value;
    const message = document.querySelector('#data-message').value;
    e.preventDefault(); 
    
    const data = {
        userName,
        email,
        subject,
        message
    }
    console.log(data)
    if(userName === '' || email === '' || subject === '' || message === '') {
        alert("Field is empty")
    }
    else {
        alert("Form Submit Successfully");
    }
})
