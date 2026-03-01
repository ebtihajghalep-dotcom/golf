

document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function() {
        let name = this.getAttribute('data-name');
        let title = this.getAttribute('data-title');
        let img = this.getAttribute('data-img');

        document.getElementById('name').textContent = name;
        document.getElementById('title').textContent = title.replace(/\\n/g, "\n");
        document.getElementById('image-section').style.backgroundImage = `url(${img})`;

        document.querySelectorAll('.icon').forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        document.getElementById('content-box').style.display = "flex";
        document.getElementById('services-box').style.display = "none";
        document.getElementById('products-box').style.display = "none";
    });
});

document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function() {
        let name = this.getAttribute('data-name');
        if (name === "Services") {
            document.getElementById('services-box').style.display = "flex";
            document.getElementById('content-box').style.display = "none";
            document.getElementById('products-box').style.display = "none";
        } else if (name === "Products") {
            document.getElementById('products-box').style.display = "flex";
            document.getElementById('content-box').style.display = "none";
            document.getElementById('services-box').style.display = "none";
        }
    });
});


