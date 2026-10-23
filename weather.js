{
    const el = document.getElementById("error-msg");
    el.textContent = msg;
    el.classList.remove("hidden");
    setTimeout(() => el.classList.add("hidden"), 4000);
}
function clearError() {
    const el = document.getElementById("error-msg");
    el.classList.add("hidden");
}