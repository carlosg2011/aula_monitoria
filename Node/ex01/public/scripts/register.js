const nome = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome.value,
            email: email.value,
            senha: password.value
        })
    })

    const data = await response.json()
    if(response.ok) {
        alert(data.message)
    } else {
        alert(data.error)
    }
})