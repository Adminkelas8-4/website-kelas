document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('welcome-modal');
    const closeBtn = document.querySelector('.close-button');

    // Tampilkan modal saat halaman dimuat
    modal.style.display = 'block';

    // Sembunyikan modal saat tombol close diklik
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Sembunyikan modal saat user mengklik di luar area modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
