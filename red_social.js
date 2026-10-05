document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".like-btn").forEach(button => {
        button.addEventListener("click", async () => {
            const response = await fetch(button.dataset.url, {
                method: "POST",
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "X-CSRFToken": getCookie("csrftoken")
                }
            });

            if (!response.ok) return;

            const data = await response.json();
            button.querySelector(".like-count").textContent = data.count;

            if (data.liked) {
                button.classList.remove("btn-outline-danger");
                button.classList.add("btn-danger");
            } else {
                button.classList.remove("btn-danger");
                button.classList.add("btn-outline-danger");
            }
        });
    });
});

function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const [key, value] = cookie.trim().split("=");
        if (key === name) return decodeURIComponent(value);
    }
    return null;
}
