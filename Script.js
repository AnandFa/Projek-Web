document.addEventListener('DOMContentLoaded', function() {

    // Slider Otomatis
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);

    // Scroll ke galeri
    window.scrollToGallery = function() {
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    };

    // Modal
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            modalImage.src = this.getAttribute('data-image');
            modalTitle.textContent = this.getAttribute('data-title');
            modalDesc.textContent = this.getAttribute('data-desc');
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

});