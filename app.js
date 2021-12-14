let name = document.querySelector('#floatingInput').value;

function sendEmail(name, email, content) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "bd.fullstack.portfolio@gmail.com",
        Password: "portfoli0_11FANG",
        To: 'b.downing.code@gmail.com',
        From: "bd.fullstack.portfolio@gmail.com",
        Subject: "Sending Email using javascript",
        Body: name,
    })
        .then(function (message) {
            alert(name)
        });
}
