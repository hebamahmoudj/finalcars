
(function () {
  // navbar link
  const currentPageUrl: string = window.location.href;
  const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.navbar-nav .nav-link');
  
  navLinks.forEach((link: HTMLAnchorElement) => {
      console.log('Link Href:', link.href);
      console.log('Current Page URL:', currentPageUrl);
      if (link.href === currentPageUrl) {
          link.classList.add('activelink');
      }
  });

  // navbar scroll  animation
 
  $(window).on('scroll', function () {
    const navbar = document.getElementById('navcontainer');

    var scrollY: any = $(this).scrollTop();
    if (scrollY >= 45) {
      $('nav').addClass('fixed-top');
      navbar!.classList.add('w-50');

    } else {
      $('nav').removeClass('fixed-top');
      navbar!.classList.remove('w-50');

      $('header').removeClass('d-none');
    }
  });


  // gallery
  let loadMoreCardsButton: any = document.getElementById('load-more-cards-btn');

  interface Car {
    id: number;
    imageSrc: string;
    title: string;
  }
  interface Car2{
    id: number;
    imageSrc:string[];
    title: string;
  }

  const cardsContainerOne: Car[] = [
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
  const cardsContainerTwo:any= [
    
    {
      "id": 1,
      "imageSrc": "./assets/Picture33.jpg",
      "title": "تصنيع و تركيب وصيانة الابواب المتحركة العادية"
  },
 
  { "id":1,
    "imageSrc":"./assets/Picture35.jpg",
    "title": "تصنيع و تركيب وصيانة الاسوار المعدنية"
  },
  ,
 
  { "id":1,
    "imageSrc":"./assets/Picture34.jpg",
    "title": "تصنيع و تركيب وصيانة الابواب المتحركة الكهربائية"
  },
  {


      "id": 2,
      "imageSrc": "./assets/Picture21.jpg",
      "title": "تصنيع وصيانة الكرفانات الثابته  مختلفة الاشكال والاحجام "
  },
  {


    "id": 2,
    "imageSrc": "./assets/Picture22.jpg",
    "title": "تصنيع وصيانة الكرفانات الثابتة  مختلفة الاشكال والاحجام "
},
{

  "id": 2,
  "imageSrc": "./assets/Picture23.jpg",
  "title": "تصنيع وصيانة الكرفانات المحمولة مختلفة الاشكال والاحجام "
},
  {


      "id": 3,
      "imageSrc": "./assets/Picture24.jpg",
      "title": "تصنيع وصيانة السلالم الثابتة المناسبة لجميع التطبيقات والاستخدامات"
  },
  
  {

      "id": 3,
      "imageSrc": "./assets/Picture25.jpg",
      "title": "تصنيع وصيانة السلالم المحمولة المناسبة لجميع التطبيقات والاستخدامات"
  },
  

    {

    "id": 4,
    "imageSrc":"./assets/Picture30.jpg",
    "title": "تصنيع وتركيب الخزانات بمختلف أنواعها وأحجامها (الافقية والرأسية ) مضغوطة وغير مضغوطة"
},  
{

  "id": 4,
  "imageSrc":"./assets/Picture31.jpg",
  "title": "تصنيع وتركيب الخزانات بمختلف أنواعها وأحجامها (الافقية والرأسية ) مضغوطة وغير مضغوطة"
},
 
  {
      "id": 5,
      "imageSrc": "./assets/Picture29.jpg",
      "title": "تصنيع وتركيب وصيانه يافطات الاعلانات"
  }
,
{

  "id": 5,
  "imageSrc": "./assets/Picture32.jpg",
  "title": "تصنيع وتركيب رامبات لتتحميل علي السيارات والترلات"
}
,
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
      "imageSrc":"./assets/Picture19.jpg",
      "title":"تصنيع وصيانه وتركيب الجمالونات مختلفه الأشكال والأحجام"
  },
  {

    "id": 7,
    "imageSrc":"./assets/Picture20.jpg",
    "title":"تصنيع وصيانه وتركيب الجمالونات مختلفه الأشكال والأحجام"
  }

  ];

  window.addEventListener('load', () => {
    display(cardsContainerOne.concat(cardsContainerTwo), 'cards-container-1');
  });
const container4:any= document.getElementById("cards-container-4")
display(cardsContainerOne.slice(0,8),'cards-container-4')
  // Function to display array based on button active click
  function displayArray(button: any) {
    if (button.classList.contains('active')) {
      const arrayToShow = button.getAttribute('data-active-array');
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
            display(cardsContainerOne.slice(0,8), 'cards-container-4');
            break;
        default:
          break;
      }
    }
  }

  const buttons = document.querySelectorAll('.button-active-selector');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      displayArray(button);
    });
  });

  function display(array: Car[], containerId: string): void {
    // Clear existing cards
    const gallery = document.getElementById(containerId);
    if (gallery) gallery.innerHTML = '';
    // if (gallery2) gallery2.innerHTML = '';
    // Display all cards
    array.forEach(item => {

      const card = `

        <div class="col-xl-3 col-lg-4 col-sm-6">
          <div class="card-body text-center">
            <div class="card-img overflow-hidden d-block">
              <img src="${item.imageSrc}" alt="${item.title}" class="img-fluid">
            </div>
            <div class="card-content">
              <p class="text-muted fs-1x">${item.title}</p>
            </div>
          </div>
        </div>
      `;

      if (gallery) gallery.innerHTML += card;
    });
  

    
  }

//  scroll to top 


document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
      // Show the button when pageYOffset is greater than 100 pixels
      scrollToTopBtn!.style.display = "block";
    } else {
      // Hide the button when pageYOffset is less than or equal to 100 pixels
      scrollToTopBtn!.style.display = "none";
    }
  });

  scrollToTopBtn!.addEventListener("click", function() {
      
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
 

})();



