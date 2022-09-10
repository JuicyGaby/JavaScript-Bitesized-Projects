const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
qrImage = wrapper.querySelector(".qr-code img"),
generateBtn = wrapper.querySelector(".form button");

generateBtn.addEventListener("click", function() {
    let qrValue = qrInput.value;
    // returns if the input field is empty
    if (!qrValue) return;
    generateBtn.textContent = "Generating QR Code...";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrImage.addEventListener("load", function() {
        wrapper.classList.add("active");
        generateBtn.textContent = "Generate QR Code";
    })
    
})
qrInput.addEventListener("keyup", function() {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
})
