function validateMicrochip(input) {
    input.value = input.value.replace(/\D/g, ''); // Allow only numbers
}

function submitMicrochip() {
    let input = document.getElementById("microchip-input").value;

    if (input.length !== 15) {
        alert("Please enter exactly 15 digits.");
        return;
    }

    alert("Microchip number submitted: " + input);
}


document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
        const faq = button.parentElement;
        faq.classList.toggle("active");
    });
});
