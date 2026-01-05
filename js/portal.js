const leftContent = document.getElementById("left-dynamic-content");
const originalContent = leftContent.innerHTML;

// =====================
// TOGGLES GENERALES
// =====================
document.querySelectorAll(".toggle").forEach(toggle => {
    toggle.addEventListener("click", e => {
        e.preventDefault();

        const target = document.getElementById(toggle.dataset.target);

        document.querySelectorAll(".submenu").forEach(menu => {
            if (menu !== target) {
                menu.classList.remove("open");
            }
        });

        const isOpen = target.classList.toggle("open");

        if (!isOpen) {
            leftContent.innerHTML = originalContent;
        }
    });
});

// =====================
// DATA GENERAL
// =====================
const data = {
    integrantes: {
        aballay: { img: "assets/img/aballay.jpg", text: "Texto provisorio Aballay." },
        gero: { img: "assets/img/gero.jpg", text: "Texto provisorio Gero Campos." },
        mhug: { img: "assets/img/mhug.jpg", text: "Texto provisorio Mhug." },
        "r-agustin": { img: "assets/img/r-agustin.jpg", text: "Texto provisorio R Agustín Quiroga." },
        amira: { img: "assets/img/amira.jpg", text: "Texto provisorio Amira Yurie." },
        gaston: { img: "assets/img/gaston.jpg", text: "Texto provisorio Gastón." }
    },
    chyphers: {
        c1: { img: "assets/img/chypher1.jpg", text: "Chypher 1 – texto provisorio." },
        c2: { img: "assets/img/chypher2.jpg", text: "Chypher 2 – texto provisorio." }
        // hasta c12 después
    },
    juicios: {
        j1: { img: "assets/img/juicio1.jpg", text: "Juicio 12·03·2022 – texto provisorio." },
        j2: { img: "assets/img/juicio2.jpg", text: "Juicio 08·06·2022 – texto provisorio." }
        // resto después
    }
};

// =====================
// CLICK SUBITEMS
// =====================
document.querySelectorAll(".submenu-item").forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault();

        const section = item.dataset.section;
        const id = item.dataset.id;

        if (!data[section] || !data[section][id]) return;

        leftContent.innerHTML = `
            <div class="left-image">
                <img src="${data[section][id].img}">
            </div>
            <p class="epigrafe">${data[section][id].text}</p>
        `;
    });
});
