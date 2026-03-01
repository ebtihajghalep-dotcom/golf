'use strict';

/* preload 
 * loding will be end after document is loaded*/

const preloader = document.querySelector("[data-preload]")

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

/* add event listener on multiple elements*/

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}


/*Navbar*/

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const closeBtn = document.querySelector("[data-navbar-toggler]");


const toggleNavbar = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);
closeBtn.addEventListener("click", toggleNavbar);

/* Header*/

const Header = document.querySelector("[data-header]");
let lastScrollPos = 0;
const hideHeader = function () {
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom) {
        Header.classList.add("hide");
    } else {
        Header.classList.remove("hide");
    }
    lastScrollPos = window.scrollY;
}
window.addEventListener("scroll", function () {
    if (this.window.scrollY >= 50 ) {
        Header.classList.add("active");
        hideHeader();
    } else {
        Header.classList.remove("active");
    }
});

/* Hero Slider */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItem = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSlideNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItem[0];

const updateSliderPos = function () {
    lastActiveSliderItem.classList.remove("active");
    heroSliderItem[currentSlidePos].classList.add("active");
    lastActiveSliderItem = heroSliderItem[currentSlidePos];
};

const slideNext = function () {
    if (currentSlidePos >= heroSliderItem.length - 1) {
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }
    updateSliderPos();
};

heroSlideNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
    if (currentSlidePos <= 0) {
        currentSlidePos = heroSliderItem.length - 1;
    } else {
        currentSlidePos--;
    }
    updateSliderPos();
};

heroSliderPrevBtn.addEventListener("click", slidePrev);

/* Auto Slider */

let autoSlideInterval;

const autoSlide = function () {
    autoSlideInterval = setInterval(function () {
        slideNext();
    }, 7000);
};

// إضافة الأحداث باستخدام حلقة
[heroSlideNextBtn, heroSliderPrevBtn].forEach((btn) => {
    btn.addEventListener("mouseover", function () {
        clearInterval(autoSlideInterval);
    });
    btn.addEventListener("mouseout", autoSlide);
});

window.addEventListener("load", autoSlide);



function toggleHighlight(element) {
    element.classList.toggle("highlighted"); // Adds or removes the "highlighted" class on click
}


/* effect of images in  section About US */

  const imageContainer = document.getElementById("imageContainer");
  const imageScroll = document.getElementById("imageScroll");

  let lastMoveAmount = 0;  // لتخزين آخر حركة للصور

  // حدث لتحريك الصور عند تمرير الماوس داخل حاوية الصور
  const moveImages = (event) => {
    const rect = imageContainer.getBoundingClientRect();
    const mouseY = (event.clientY || event.touches[0].clientY) - rect.top;  // دعم اللمس باستخدام touches
    const percentage = mouseY / rect.height;
    const moveAmount = (imageScroll.scrollHeight - rect.height) * percentage* 0.5;  // حساب المسافة بناءً على موضع الماوس أو اللمس

    // عكس اتجاه الحركة: إذا تحرك الماوس أو اللمس للأسفل، تتحرك الصور للأسفل
    imageScroll.style.transform = `translateY(${-moveAmount}px)`;
    lastMoveAmount = moveAmount;  // تحديث آخر حركة للصور
  };

  // عند مغادرة الماوس أو اللمس، لا تعود الصور إلى مكانها الأصلي
  const leaveImageContainer = () => {
    imageScroll.style.transform = `translateY(${-lastMoveAmount}px)`;  // الحفاظ على آخر حركة تم الوصول إليها
  };

  // إضافة حدث الماوس
  imageContainer.addEventListener("mousemove", moveImages);
  imageContainer.addEventListener("mouseleave", leaveImageContainer);

  // إضافة أحداث اللمس
  imageContainer.addEventListener("touchmove", moveImages);
  imageContainer.addEventListener("touchend", leaveImageContainer);





  const translations = {
    en: {
        title: "Welcome to Hole In One Resort",
        home: "Home",
        packages: "Packages",
        about: "About Us",
        vip: "VIP Book",
        comments: "Comments",
        Exciting:"Exciting & Unforgettable!",
        Enjoy: "Enjoy playing golf on a legendary course! ",
        Discover: "Discover an unforgettable experience among stunning nature",
        View: "View More",
        amazing:"amazing & delicious",
        unique:"Enjoy a unique dining experience",
        dining:"Enjoy an unforgettable dining experience.",
        delightful:"delightful experience",
        Luxury:"Luxury and luxury with a natural touch!",
        stay:"Enjoy a unique stay at our luxurious resort.",
        show:"Show Packages",
        company:"Company",
        services:"Services",
        products:"Products",
        about_label: "Our Story",
        about_title: "Discover our unique experiences that suit every taste!",
        inquiries:"For inquiries",


        specifically:"Specifically for your convenience",
        custom:"Custom Packages",
        specialty:"Our specialty packages offer a personalized experience to suit all specialties! Whether you are looking for a family vacation, a romantic getaway, or a corporate event, we have everything you need. Enjoy luxuriousaccommodation,pleasant details, and distinctive services tailored to you. Discover exclusive offers and book now for an unforgettable experience !!",
        Recreation:"Recreation Package",
        Re_Vi:"View Package",
        Triple:"Triple Package",
        Quintet:"Quintet Package",
        comments_title: "Your opinion matters to us",
        comments_add: "Add a Comment",
        comments:"comments",
        send: "Send",
        FAQ:"FAQ",
        ab_fu:"About Holl in One",
        footer_about: "Hole In One Resort is your ideal destination for golf enthusiasts, as our luxurious courses, comfortable accommodation, and outstanding services provide you with an exceptional and unparalleled experience.",
        rights: "All rights reserved © Hole In One 2025",
        contact:"Contact us",


    },
    ar: {
        title: "مرحبًا بكم في منتجع هول إن ون",
        home: "الرئيسية",
        packages: "الباقات",
        about: "من نحن",
        vip: "الحجز VIP",
        comments: "التعليقات",
        Exciting:"مثيرة ولا تنسى",
        Enjoy: "استمتع بلعب الجولف على ملعب أسطوري!",
        Discover: "اكتشف تجربة لا تُنسى وسط الطبيعة الخلابة",
        view: "عرض المزيد",
        amazing:"مذهلة ولذيذة",
        unique:"استمتع بتجربة طعام فريدة من نوعها",
        dining:"استمتع بتجربة طعام لا تُنسى.",
        delightful:"تجربة مبهجة",
        Luxury:"فخامة ورفاهية بلمسة طبيعية!",
        stay:"استمتع بإقامة فريدة في منتجعنا الفاخر",
        show:"عرض الحزم",
        company:"الشركة",
        services:"الخدمات",
        products:"المنتجات",
        about_label: "قصتنا",
        about_title: "اكتشف تجاربنا الفريدة التي تناسب جميع الأذواق!",
        inquiries:"للاستفسارات",
        specifically: "تحديدًا لراحتك",
        custom: "الباقات المخصصة",
        specialty: "باقاتنا المتخصصة تقدم تجربة شخصية تناسب جميع التخصصات! سواء كنت تبحث عن عطلة عائلية، أو رحلة رومانسية، أو حدث مؤسسي، لدينا كل ما تحتاجه. استمتع بالإقامة الفاخرة، والتفاصيل الممتعة، والخدمات المتميزة المصممة خصيصًا لك. اكتشف العروض الحصرية واحجز الآن لتجربة لا تُنسى!",
        Recreation: "باقة الترفيه",
        Re_Vi: "عرض الباقة",
        Triple: "باقة ثلاثية",
        Quintet: "باقة خماسية",
        comments_title: "رأيك يهمنا",
        comments_add: "أضف تعليقًا",
        comment: "تعليقات",
        send: "إرسال",
        FAQ: "الأسئلة المتكررة",
        ab_fu: "حول هول إن ون",
        footer_about: "هول إن ون ريزورت هو وجهتك المثالية لعشاق الجولف، حيث تقدم لك ملاعبنا الفاخرة، والإقامة المريحة، والخدمات الممتازة تجربة استثنائية لا مثيل لها.",
        rights: "جميع الحقوق محفوظة © هول إن ون 2025",
        contact: "اتصل بنا", 
        home: "الرئيسية",
        packages: "الباقات",
        about: "من نحن",
        vip: "الحجز VIP",
        comments: "التعليقات",

    },
    pt: {
        title: "Bem-vindo ao Hole In One Resort",
        home: "Início",
        packages: "Pacotes",
        about: "Sobre Nós",
        vip: "Reserva VIP",
        comments: "Comentários",
        Exciting:"Emocionante e inesquecível",
        Enjoy: "Divirta-se a jogar golfe num campo lendário!",
        Discover: "Descubra uma experiência inesquecível no meio de uma natureza deslumbrante",
        view: "Ver Mais",
        amazing:"incrível e delicioso",
        unique:"Desfrute de uma experiência gastronómica única",
        dining:"Desfrute de uma experiência gastronómica inesquecível.",
        delightful:"experiência deliciosa",
        Luxury:"Luxo e luxo com um toque natural!",
        stay:"Desfrute de uma estadia única no nosso luxuoso resort.",
        show:"Mostrar pacotes",
        company:"Empresa",
        services:"Serviços",
        products:"Produtos",
        about_label: "Nossa História",
        about_title: "Descubra nossas experiências únicas para todos os gostos!",
        inquiries:"Para consultas",
        specifically: "Especificamente para o seu conforto",
        custom: "Pacotes personalizados",
        specialty: "Nossos pacotes especializados oferecem uma experiência personalizada para atender todas as especialidades! Seja para férias em família, uma escapadela romântica ou um evento corporativo, temos tudo o que você precisa. Desfrute de acomodações luxuosas, detalhes agradáveis e serviços distintos sob medida para você. Descubra ofertas exclusivas e faça sua reserva agora para uma experiência inesquecível!",
        Recreation: "Pacote de Recreação",
        Re_Vi: "Ver pacote",
        Triple: "Pacote Triplo",
        Quintet: "Pacote Quinteto",
        comments_title: "A sua opinião é importante para nós",
        comments_add: "Adicionar um comentário",
        comments: "comentários",
        send: "Enviar",
        FAQ: "FAQ",
        ab_fu: "Sobre Hole In One",
        footer_about: "Hole In One Resort é o seu destino ideal para os entusiastas de golfe, com nossos campos luxuosos, acomodações confortáveis e serviços excepcionais, proporcionando uma experiência única e incomparável.",
        rights: "Todos os direitos reservados © Hole In One 2025",
        contact: "Contate-nos",
        home: "Início",
        packages: "Pacotes",
        about: "Sobre Nós",
        vip: "Reserva VIP",
        comments: "Comentários",

    }
};

function setLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang);
    const translation = translations[lang];
    for (const key in translation) {
        if (document.getElementById(key)) {
            document.getElementById(key).textContent = translation[key];
        }
    }
}

document.getElementById("languageSwitcher").addEventListener("change", function() {
    setLanguage(this.value);
});

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    document.getElementById("languageSwitcher").value = savedLanguage;
    setLanguage(savedLanguage);
});
