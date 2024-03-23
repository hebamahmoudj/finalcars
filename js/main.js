(function () {
    // navbar link
    var currentPageUrl = window.location.href;
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function (link) {
        console.log('Link Href:', link.href);
        console.log('Current Page URL:', currentPageUrl);
        if (link.href === currentPageUrl) {
            link.classList.add('activelink');
        }
    });
    // navbar scroll  animation
    $(window).on('scroll', function () {
        var navbar = document.getElementById('navcontainer');
        var scrollY = $(this).scrollTop();
        if (scrollY >= 45) {
            $('nav').addClass('fixed-top');
            navbar.classList.add('w-50');
        }
        else {
            $('nav').removeClass('fixed-top');
            navbar.classList.remove('w-50');
            $('header').removeClass('d-none');
        }
    });
    // gallery
    var loadMoreCardsButton = document.getElementById('load-more-cards-btn');
    var cardsContainerOne = [
        {
            id: 1,
            imageSrc: "./assets/Picture1.png",
            title: "سيارة مجهزة ونش مرور",
        },
        {
            id: 2,
            imageSrc: "./assets/Picture2.jpg",
            title: "سيارة مجهزة اطفاء",
        },
        {
            id: 3,
            imageSrc: "./assets/Picture3.jpg",
            title: "سيارة مجهزة لسحب الرواسب ",
        },
        {
            id: 4,
            imageSrc: "./assets/Picture4.jpg",
            title: "سيارة مجهزة لانقاذ السيارات",
        },
        {
            id: 5,
            imageSrc: "./assets/Picture5.jpg",
            title: "سيارة مجهزة لجمع وكبس القمامة",
        },
        {
            id: 6,
            imageSrc: "./assets/Picture6.jpg",
            title: "سيارة مجهزة لكنس الشوارع",
        },
        {
            id: 7,
            imageSrc: "./assets/Picture7.png",
            title: "سيارة مجهزة انقاذ بونش.",
        },
        {
            id: 8,
            imageSrc: "./assets/Picture8.jpg",
            title: "سيارة مجهزة بونش تلسكوبى",
        },
        {
            id: 9,
            imageSrc: "./assets/Picture9.jpg",
            title: "سيارة مجهزة نافورى",
        },
        {
            id: 10,
            imageSrc: "./assets/Picture10.jpg",
            title: "سيارة مجهزة بصندوق وونش ",
        },
        {
            id: 11,
            imageSrc: "./assets/Picture11.png",
            title: "سيارة مجهزة بحزان لنقل السوائل",
        },
        {
            id: 12,
            imageSrc: "./assets/Picture12.jpg",
            title: "سيارة مجهزة بسلة",
        },
        {
            id: 13,
            imageSrc: "./assets/Picture13.jpg",
            title: "سيارة مجهزة اسعاف",
        },
        {
            id: 14,
            imageSrc: "./assets/Picture14.jpg",
            title: "سيارة مجهزة قلاب ",
        },
        {
            id: 15,
            imageSrc: "./assets/Picture15.jpg",
            title: "سيارة مجهزة بصندوق",
        },
        {
            id: 16,
            imageSrc: "./assets/Picture16.jpg",
            title: "مقطورة قلاب",
        },
        {
            id: 17,
            imageSrc: "./assets/Picture17.jpg",
            title: "كلايشة مرور",
        },
        {
            id: 18,
            imageSrc: "./assets/Picture18.jpg",
            title: "حاجز مرور",
        },
    ];
    var cardsContainerTwo = [
        {
            "id": 1,
            "imageSrc": "./assets/Picture33.jpg",
            "title": "تصنيع و تركيب وصيانة الابواب المتحركة العادية والكهربائية والاسوار المعدنية"
        },
        { "id": 1,
            "imageSrc": "./assets/Picture35.jpg",
            "title": "تصنيع و تركيب وصيانة الابواب المتحركة العادية والكهربائية والاسوار المعدنية"
        },
        ,
        { "id": 1,
            "imageSrc": "../assets/Picture34.jpg",
            "title": "تصنيع و تركيب وصيانة الابواب المتحركة العادية والكهربائية والاسوار المعدنية"
        },
        {
            "id": 2,
            "imageSrc": "./assets/Picture21.jpg",
            "title": "تصنيع وصيانة الكرفانات الثابتة والمحمولة مختلفة الاشكال والاحجام "
        },
        {
            "id": 2,
            "imageSrc": "./assets/Picture22.jpg",
            "title": "تصنيع وصيانة الكرفانات الثابتة والمحمولة مختلفة الاشكال والاحجام "
        },
        {
            "id": 2,
            "imageSrc": "./assets/Picture23.jpg",
            "title": "تصنيع وصيانة الكرفانات الثابتة والمحمولة مختلفة الاشكال والاحجام "
        },
        {
            "id": 3,
            "imageSrc": "./assets/Picture24.jpg",
            "title": "تصنيع وصيانة السلالم الثابتة والمحمولة المناسبة لجميع التطبيقات والاستخدامات"
        },
        {
            "id": 3,
            "imageSrc": "./assets/Picture25.jpg",
            "title": "تصنيع وصيانة السلالم الثابتة والمحمولة المناسبة لجميع التطبيقات والاستخدامات"
        },
        {
            "id": 3,
            "imageSrc": "./assets/Picture26.jpg",
            "title": "تصنيع وصيانة السلالم الثابتة والمحمولة المناسبة لجميع التطبيقات والاستخدامات"
        },
        {
            "id": 4,
            "imageSrc": "./assets/Picture30.jpg",
            "title": "تصنيع وتركيب الخزانات بمختلف أنواعها وأحجامها (الافقية والرأسية ) مضغوطة وغير مضغوطة"
        },
        {
            "id": 4,
            "imageSrc": "./assets/Picture31.jpg",
            "title": "تصنيع وتركيب الخزانات بمختلف أنواعها وأحجامها (الافقية والرأسية ) مضغوطة وغير مضغوطة"
        },
        {
            "id": 5,
            "imageSrc": "./assets/Picture29.jpg",
            "title": "تصنيع وتركيب وصيانه يافطات الاعلانات ورامبات لتتحميل علي السيارات والترلات"
        },
        {
            "id": 5,
            "imageSrc": "./assets/Picture32.jpg",
            "title": "تصنيع وتركيب وصيانه يافطات الاعلانات ورامبات لتتحميل علي السيارات والترلات"
        },
        {
            "id": 6,
            "imageSrc": "./assets/Picture27.jpg",
            "title": "تصنيع وتركيب محطات انتظار السيارات والركاب "
        },
        {
            "id": 6,
            "imageSrc": "./assets/Picture28.jpg",
            "title": "تصنيع وتركيب محطات انتظار السيارات والركاب "
        },
        {
            "id": 7,
            "imageSrc": "./assets/Picture19.jpg",
            "title": "تصنيع وصيانة وتركيب الجمالونات مختلفة الاشكال والاحجام وصيانتها"
        },
        {
            "id": 7,
            "imageSrc": "./assets/Picture20.jpg",
            "title": "تصنيع وصيانة وتركيب الجمالونات مختلفة الاشكال والاحجام وصيانتها"
        }
    ];
    window.addEventListener('load', function () {
        display(cardsContainerOne.concat(cardsContainerTwo), 'cards-container-1');
    });
    var container4 = document.getElementById("cards-container-4");
    display(cardsContainerOne.slice(0, 8), 'cards-container-4');
    // Function to display array based on button active click
    function displayArray(button) {
        if (button.classList.contains('active')) {
            var arrayToShow = button.getAttribute('data-active-array');
            switch (arrayToShow) {
                case 'all':
                    display(cardsContainerOne.concat(cardsContainerTwo), 'cards-container-1');
                    break;
                case 'array1':
                    display(cardsContainerOne, 'cards-container-2');
                    break;
                case 'array2':
                    display(cardsContainerTwo, 'cards-container-3');
                    break;
                case 'array3':
                    display(cardsContainerOne.slice(0, 8), 'cards-container-4');
                    break;
                default:
                    break;
            }
        }
    }
    var buttons = document.querySelectorAll('.button-active-selector');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            displayArray(button);
        });
    });
    function display(array, containerId) {
        // Clear existing cards
        var gallery = document.getElementById(containerId);
        if (gallery)
            gallery.innerHTML = '';
        // if (gallery2) gallery2.innerHTML = '';
        // Display all cards
        array.forEach(function (item) {
            var card = "\n\n        <div class=\"col-xl-3 col-lg-4 col-sm-6\">\n          <div class=\"card-body text-center\">\n            <div class=\"card-img overflow-hidden d-block\">\n              <img src=\"".concat(item.imageSrc, "\" alt=\"").concat(item.title, "\" class=\"img-fluid\">\n            </div>\n            <div class=\"card-content\">\n              <p class=\"text-muted fs-1x\">").concat(item.title, "</p>\n            </div>\n          </div>\n        </div>\n      ");
            if (gallery)
                gallery.innerHTML += card;
        });
    }
})();
