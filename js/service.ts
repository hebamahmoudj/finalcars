// (function () {
//   // navbar
//  // gallery
//   interface Car {
//     id: number;
//     imageSrc: string;
//     title: string;
//   }

//   let cardsContainer:Car[]=[]
//   // products gallery
//   const cardsContainerOne: Car[] = [
//     {
//       id: 1,
//       imageSrc: "../assets/Picture1.png",
//       title: "سيارة مجهزة ونش مرور",
//     },
//     {
//       id: 2,
//       imageSrc: "../assets/Picture2.jpg",
//       title: "سيارة مجهزة اطفاء",
//     },
//     {
//       id: 3,
//       imageSrc: "../assets/Picture3.jpg",
//       title: "سيارة مجهزة لسحب الرواسب ",
//     },
//     {
//       id: 4,
//       imageSrc: "../assets/Picture4.jpg",
//       title: "سيارة مجهزة لانقاذ السيارات",
//     },
//     {
//       id: 5,
//       imageSrc: "../assets/Picture5.jpg",
//       title: "سيارة مجهزة لجمع وكبس القمامة",
//     },
//     {
//       id: 6,
//       imageSrc: "../assets/Picture6.jpg",
//       title: "سيارة مجهزة لكنس الشوارع",
//     },
//     {
//       id: 7,
//       imageSrc: "../assets/Picture7.png",
//       title: "سيارة مجهزة انقاذ بونش.",
//     },
//     {
//       id: 8,
//       imageSrc: "../assets/Picture8.jpg",
//       title: "سيارة مجهزة بونش تلسكوبى",
//     },
//     {
//       id: 9,
//       imageSrc: "../assets/Picture9.jpg",
//       title: "سيارة مجهزة نافورى",
//     },
//     {
//       id: 10,
//       imageSrc: "../assets/Picture10.jpg",
//       title: "سيارة مجهزة بصندوق وونش ",
//     },
//     {
//       id: 11,
//       imageSrc: "../assets/Picture11.png",
//       title: "سيارة مجهزة بحزان لنقل السوائل",
//     },
//     {
//       id: 12,
//       imageSrc: "../assets/Picture12.jpg",
//       title: "سيارة مجهزة بسلة",
//     },
//     {
//       id: 13,
//       imageSrc: "../assets/Picture13.jpg",
//       title: "سيارة مجهزة اسعاف",
//     },
//     {
//       id: 14,
//       imageSrc: "../assets/Picture14.jpg",
//       title: "سيارة مجهزة قلاب ",
//     },
//     {
//       id: 15,
//       imageSrc: "../assets/Picture15.jpg",
//       title: "سيارة مجهزة بصندوق",
//     },
//     {
//       id: 16,
//       imageSrc: "../assets/Picture16.jpg",
//       title: "مقطورة قلاب",
//     },
//     {
//       id: 17,
//       imageSrc: "../assets/Picture17.jpg",
//       title: "كلايشة مرور",
//     },
//     {
//       id: 18,
//       imageSrc: "../assets/Picture18.jpg",
//       title: "حاجز مرور",
//     },
//   ];
//   const cardsContainerTwo: Car[] = [
//     {
//       id: 1,
//       imageSrc: "../assets/Picture1.png",
//       title: "سيارة مجهزة ونش مرور",
//     },
//     {
//       id: 2,
//       imageSrc: "../assets/Picture2.jpg",
//       title: "سيارة مجهزة اطفاء",
//     },
//     {
//       id: 3,
//       imageSrc: "../assets/Picture3.jpg",
//       title: "سيارة مجهزة لسحب الرواسب ",
//     },
//     {
//       id: 4,
//       imageSrc: "../assets/Picture4.jpg",
//       title: "سيارة مجهزة لانقاذ السيارات",
//     },
//     {
//       id: 5,
//       imageSrc: "../assets/Picture5.jpg",
//       title: "سيارة مجهزة لجمع وكبس القمامة",
//     },
//     {
//       id: 6,
//       imageSrc: "../assets/Picture6.jpg",
//       title: "سيارة مجهزة لكنس الشوارع",
//     },
//     {
//       id: 7,
//       imageSrc: "../assets/Picture7.png",
//       title: "سيارة مجهزة انقاذ بونش.",
//     },
//     {
//       id: 8,
//       imageSrc: "../assets/Picture8.jpg",
//       title: "سيارة مجهزة بونش تلسكوبى",
//     },
//     {
//       id: 9,
//       imageSrc: "../assets/Picture9.jpg",
//       title: "سيارة مجهزة نافورى",
//     },
//     {
//       id: 10,
//       imageSrc: "../assets/Picture10.jpg",
//       title: "سيارة مجهزة بصندوق وونش ",
//     },
//     {
//       id: 11,
//       imageSrc: "../assets/Picture11.png",
//       title: "سيارة مجهزة بحزان لنقل السوائل",
//     },
//     {
//       id: 12,
//       imageSrc: "../assets/Picture12.jpg",
//       title: "سيارة مجهزة بسلة",
//     },
//     {
//       id: 13,
//       imageSrc: "../assets/Picture13.jpg",
//       title: "سيارة مجهزة اسعاف",
//     },
//     {
//       id: 14,
//       imageSrc: "../assets/Picture14.jpg",
//       title: "سيارة مجهزة قلاب ",
//     },
//     {
//       id: 15,
//       imageSrc: "../assets/Picture15.jpg",
//       title: "سيارة مجهزة بصندوق",
//     },
//     {
//       id: 16,
//       imageSrc: "../assets/Picture16.jpg",
//       title: "مقطورة قلاب",
//     },
//     {
//       id: 17,
//       imageSrc: "../assets/Picture17.jpg",
//       title: "كلايشة مرور",
//     },
//     {
//       id: 18,
//       imageSrc: "../assets/Picture18.jpg",
//       title: "حاجز مرور",
//     },
//   ];


//   // Function to display array based on button active click
//   function displayArray(button:any) {
//     if (button.classList.contains('active')) {
//       const arrayToShow = button.getAttribute('data-active-array');
//       switch (arrayToShow) {
//         case 'all':
//           // display(array1);
//           break;
//         case 'array1':
//           display(cardsContainerOne);
//           break;
//         case 'array2':
//           // display(array2);
//           break;
//         default:
//           // Handle default case
//           break;
//       }
//     }
//   }

//   // Get all buttons you want to monitor
//   const buttons = document.querySelectorAll('.button-active-selector');

//   // Add click event listener to each button
//   buttons.forEach(button => {
//     button.addEventListener('click', () => {
//       // Call function to display array when button is clicked
//       displayArray(button);
//     });
//   });

//   // display  
//   const gallery: HTMLElement | null = document.getElementById('cards-container');
//   const loadMoreCardsButton: HTMLElement | null = document.getElementById('load-more-cards-btn');

//   function display(card:any): void {
//     cardsContainer = card;
//     const startIndex: number = gallery ? gallery.childElementCount : 0;
//     const endIndex: number = Math.min(startIndex + 4, cardsContainer.length);
//     let cards: string = ``;
//     for (let i: number = startIndex; i < endIndex; i++) {
//       cards +=
//         `
//     <div class="col-md-3 ">
//             <div class="card-body text-center">
//               <div class="card-img overflow-hidden d-block">
//                 <img src="${cardsContainer[i].imageSrc}" alt="" class="img-fluid">
//               </div>
//               <div class="card-content ">
//                 <p>${cardsContainer[i].title}</p>
//               </div>
//             </div>
//           </div>
//     `;
//     }
//     if (gallery) {
//       gallery.innerHTML += cards;
//     }

//     if (endIndex >= cardsContainer.length && loadMoreCardsButton) {
//       loadMoreCardsButton.textContent = "Show Less";
//     }
//   }

//   display();

// if (loadMoreCardsButton) {
//   loadMoreCardsButton.addEventListener("click", function (): void {
//     if (loadMoreCardsButton.textContent === "Show Less") {
//       if (gallery) {
//         gallery.innerHTML = "";
//         gallery.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//       display();
//       loadMoreCardsButton.textContent = "Load More";
//     } else {
//       display();
//     }
//   });
// }

// })();
