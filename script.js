// Fungsi untuk pindah ke halaman pembayaran
document.querySelectorAll('.add-to-cart').forEach(function(button) {
    button.addEventListener('click', function() {
        window.location.href = "halaman-pembayaran.html"; // Arahkan ke halaman pembayaran
    });
});
