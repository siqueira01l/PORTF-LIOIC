const observer= new IntersectionObserver ((entries) => {
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            entry.target.classList.add('visivel');
        }
    });
}, {threshold: 0.1 });

document.querySelectorAll('.fadein').forEach(el => observer.observe(el));

function toggleMenu() {
    const menu = document.getElementById('menu');
    const btn = document.getElementById('hamburguer');
    menu.classList.toggle('aberto');
    btn.classList.toggle('aberto');
}

 function toggleMenu() {
            const menu = document.getElementById('menu');
            const hamburguer = document.getElementById('hamburguer');
            menu.classList.toggle('aberto');
            hamburguer.classList.toggle('aberto');
        }
        function fecharMenu() {
            document.getElementById('menu').classList.remove('aberto');
            document.getElementById('hamburguer').classList.remove('aberto');
        }