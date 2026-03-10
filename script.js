document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-info").addEventListener("click", () => {
        document.getElementById("info").scrollIntoView({ behavior: "smooth" })
    })
})