/* =========================
   ANIMASI FADE SAAT SCROLL
   ========================= */
const sections = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const posisi = section.getBoundingClientRect().top;
        if (posisi < window.innerHeight - 100) {
            section.classList.add('show');
        }
    });
});

/* =========================
   HEADER SCROLL
   ========================= */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/* =========================
   TAB PROFIL
   ========================= */
function openTab(tabId, event) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

/* =========================
   MODAL WISATA
   ========================= */
function openModal(tempat) {
    const data = {
        borobudur: {
            title: "Keraton Ratu Boko",
            img: "ratu.jpg",
            desc: "Candi Ratu Boko adalah situs purbakala berupa kompleks keraton kuno, berfungsi sebagai istana di masa Kerajaan Mataram Kuno (abad ke-8) yang dibangun oleh Dinasti Syailendra (Rakai Panangkaran).",
            jam: "07.00 – 17.00 WIB",
            harga: "Rp 50.000",
            lokasi: "Jl. Ratu Boko No.2, Gatak, Bokoharjo, Kec. Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55572"
        },
        prambanan: {
            title: "Candi Prambanan",
            img: "prambanan.jpg",
            desc: "Candi Prambanan merupakan kompleks candi Hindu terbesar di Indonesia yang dibangun pada abad ke-9 dan dipersembahkan untuk Trimurti.",
            jam: "08.00 – 17.00 WIB",
            lokasi: "Jl. Raya Solo – Yogyakarta No.16, Kranggan, Bokoharjo, Kec. Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55571",
            harga: "Rp 50.000"
        },
        malioboro: {
            title: "Malioboro",
            img: "malioboro.jpg",
            desc: "Malioboro adalah kawasan ikonik Yogyakarta yang menjadi pusat wisata belanja dan budaya.",
            lokasi: "Jl. Malioboro, Sosromenduran, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55271",
            jam: "24 Jam",
            harga: "Gratis"
        },
        keraton: {
            title: "Keraton Yogyakarta",
            img: "keraton.jpg",
            desc: "Keraton Yogyakarta merupakan istana resmi Kesultanan Yogyakarta yang berdiri sejak tahun 1755. Keraton menjadi pusat budaya Jawa dan masih berfungsi sebagai tempat tinggal Sultan.",
            jam: "08.30 – 14.00 WIB",
            lokasi: "Jl. Rotowijayan No.1, Panembahan, Kec. Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55131",
            harga: "Rp 15.000"
        },

        goapindul: {
            title: "Goa Pindul",
            img: "goapindul.png",
            desc: "Goa Pindul adalah wisata alam di Gunungkidul yang terkenal dengan aktivitas cave tubing. Goa ini terbentuk secara alami dan dialiri sungai bawah tanah yang aman untuk wisata keluarga.",
            jam: "07.00 – 16.00 WIB",
            harga: "Rp 40.000",
            lokasi: "Jl. Goa Pindul, Gelaran 2, Bejiharjo, Kec. Karangmojo, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta 55891"
        },

        hutanpinus: {
            title: "Hutan Pinus Mangunan",
            img: "pinus.png",
            desc: "Hutan Pinus Mangunan awalnya merupakan kawasan rehabilitasi hutan. Kini, tempat ini berkembang menjadi destinasi wisata alam dengan udara sejuk dan spot foto yang menarik.",
            jam: "06.00 – 18.00 WIB",
            harga: "Rp 5.000",
            lokasi: "Jl. Raya Jl. Hutan Pinus Nganjir, Mangunan, Kec. Dlingo, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55783"

        },

        heha: {
            title: "HeHa Sky View",
            img: "sky.png",
            desc: "HeHa Sky View adalah destinasi wisata modern yang menawarkan panorama Kota Yogyakarta dari ketinggian. Tempat ini menggabungkan konsep wisata, kuliner, dan spot foto kekinian.",
            jam: "11.00 – 21.00 WIB",
            harga: "Rp 20.000",
            lokasi: "Jl. Dlingo–Patuk No.2, Patuk, Kec. Patuk, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta 55862"

        },

        vredeburg: {
            title: "Museum Benteng Vredeburg",
            img: "museum.jpg",
            desc: "Benteng Vredeburg dibangun oleh Belanda pada abad ke-18 dan kini difungsikan sebagai museum perjuangan nasional. Museum ini menyajikan diorama sejarah perjuangan bangsa Indonesia.",
            jam: "08.00 – 16.00 WIB",
            harga: "Rp 5.000",
            lokasi: "Jl. Jenderal Ahmad Yani No.6, Ngupasan, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55122"

        },

        ske: {
            title: "SKE City Park",
            img: "park.png",
            desc: "SKE City Park merupakan taman wisata keluarga di Sleman yang menyediakan berbagai wahana permainan, ruang terbuka hijau, serta fasilitas rekreasi untuk semua usia.",
            jam: "09.00 – 21.00 WIB",
            harga: "Rp 10.000",
            lokasi: "Jl. Jambon, Kragilan, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284"

        }
        // data lain tetap bisa ditambahkan
    };

    document.getElementById("modal-img").src = data[tempat].img;
    document.getElementById("modal-title").innerText = data[tempat].title;
    document.getElementById("modal-desc").innerText = data[tempat].desc;
    document.getElementById("modal-jam").innerText = data[tempat].jam;
    document.getElementById("modal-harga").innerText = data[tempat].harga;
    document.getElementById("modal-lokasi").innerText = data[tempat].lokasi;

    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

/* =========================
   HERO SLIDER + TEKS SYNC
   ========================= */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const heroSubtitle = document.getElementById("heroSubtitle");

const heroTexts = [
    "Jelajahi keindahan alam, kekayaan budaya, dan sejarah yang megah di jantung peradaban Jawa",
    "Daerah Istimewa Yogyakarta, pusat budaya, pendidikan, dan tradisi Nusantara",
    "Kelapa Gading sebagai flora khas DIY melambangkan kemakmuran, ketahanan, dan kehidupan masyarakat pesisir.",
    "Burung Perkutut menjadi fauna identitas DIY yang melambangkan ketenangan, kesetiaan, dan kebijaksanaan.",
    "Harmoni warisan leluhur, seni, dan kehidupan modern dalam satu kawasan istimewa",
    "Pesona alam dan budaya yang menjadikan Yogyakarta istimewa sepanjang masa",
    "Jelajahi keindahan alam, kekayaan budaya, dan sejarah yang megah di jantung peradaban Jawa",
    "Daerah Istimewa Yogyakarta, pusat budaya, pendidikan, dan tradisi Nusantara",
    "Harmoni warisan leluhur, seni, dan kehidupan modern dalam satu kawasan istimewa",
    "Pesona alam dan budaya yang menjadikan Yogyakarta istimewa sepanjang masa"
];

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');

    if (heroSubtitle) {
        heroSubtitle.style.opacity = 0;

        setTimeout(() => {
            heroSubtitle.textContent = heroTexts[index];
            heroSubtitle.style.opacity = 1;
        }, 500);
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

/* AUTO SLIDE */
setInterval(() => {
    nextSlide();
}, 5000);

/* TAMPILKAN SLIDE PERTAMA SAAT LOAD */
showSlide(0);


