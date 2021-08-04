function register(e) {

    e.preventDefault();

    let formdata = {
        name: document.getElementById("inp1").value,
        email: document.getElementById("inp2").value,
        password: document.getElementById("inp3").value,
        username: document.getElementById("inp4").value,
        mobile: document.getElementById("inp5").value,
        description: document.getElementById("inp6").value,
    };

    let body = JSON.stringify(formdata);

    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
        method: 'POST',
        body: body,
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

}

function login(e) {
    e.preventDefault();

    let formdata = {
        password: document.getElementById("inp8").value,
        username: document.getElementById("inp7").value,
    };

    let body = JSON.stringify(formdata);

    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
        method: "POST",
        body: body,

        // additional information
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res);
            if (res.error == false) {
                alert('Login Successful')
                document.getElementById('btn').addEventListener('click', function () {
                    window.location.href = 'homepage.html'
                })
            }
        })
        .catch((err) => {
            console.log(err);
        });
}