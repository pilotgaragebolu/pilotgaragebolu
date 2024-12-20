function copyIBAN() {
    navigator.clipboard.writeText('TR60 0001 0000 5097 7877 7350 01').then(() => {
        Swal.fire({
            title: "Beni sürükle!",
            text: "IBAN başarıyla kopyalandı!",
            icon: "success",
            draggable: true
        });
    });
}
function handleLiClick(element) {
    if (element.dataset.disableClick === "true") {
        // Tıklamayı iptal et
        console.log("Bu öğe tıklanamaz.");
        return;
    }
    // Tıklama olayını tetikle
    const link = element.querySelector("a");
    if (link) {
        link.click();
    }
}