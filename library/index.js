 // -------------------------------------------------------------------------Burger---------------------------------------------------------------------------
  
 const windowWidth = window.innerWidth;
 const menuIcon = document.querySelector(".menu_icon");
 const menuBody = document.querySelector(".menu_body");
 const menuLinks = document.querySelectorAll(".menu_link");
 const emailInputLog = document.querySelector('#email-log'); 

 const passwordInputLog = document.querySelector('#password-log'); 
 const loginButton = document.querySelector('.log-in'); 
 const logButton = document.querySelector('.login');
 const closestPopupLog = document.querySelector('.close-popup-log');
 const popupLog = document.querySelector('.popup-login');
 const regLogin = document.querySelector('.reg-login')
 const logButtonCard = document.querySelector('.login-card')
 const buyButtons = document.querySelectorAll(".button.normal");

 const buttons = document.querySelectorAll('.button_input');
 const seasons = document.querySelectorAll('.season');

 const sliderLine = document.querySelector('.slider-line');
 const arrowPrev = document.querySelector('.arrow-Prev');
 const arrowNext = document.querySelector('.arrow-Next');
 const dots = document.querySelectorAll('.dot');

 const regButton = document.querySelector('.register');
 const regButtonCard = document.querySelector('.register-card');
 const popupReg = document.querySelector('.pop-up');
 const closestPopup = document.querySelector('.close-popup');
 const signUpBtn = popupReg.querySelector('.sign-up');
 const firstNameInput = popupReg.querySelector('#first-name');
 const lastNameInput = popupReg.querySelector('#last-name');

 const emailInput = popupReg.querySelector('#email');
 const passwordInput = popupReg.querySelector('#password');
 const book4 = document.querySelector('.book4');
 const book8 = document.querySelector('.book8');
 const loginReg = document.querySelector('.login-reg');
 const libraruCard = document.querySelector('.library_card');
 const libraruCardLogin = document.querySelector('.library_card-login');
 const DLCProfile = document.querySelector('.DLC-profile');
 const fullNameDlC = document.querySelector('.full-name-DLC');
 const cardNumberDLC = document.querySelector('.card-number-DLC');

 let menuIsOpen = false;
 let isTransitioning = false;

 menuIcon.addEventListener("click", function () {
   if (!isTransitioning) {
     isTransitioning = true;
     if (!menuIsOpen) {
       openMenu();
     } else {
       closeMenu();
     }
     setTimeout(function () {
       isTransitioning = false;
     }, 600); 
   }
 });

 function openMenu() {
   menuIsOpen = true;
   menuIcon.classList.add("active");
   menuBody.style.display = "flex";
   menuBody.classList.add("open");
   setTimeout(() => {
     menuBody.style.opacity = "1";
   }, 10);
 }

 function closeMenu() {
   menuIsOpen = false;
   menuIcon.classList.remove("active");
   menuBody.style.opacity = "0";
   setTimeout(() => {
     menuBody.style.display = "none";
     menuBody.classList.remove("open");
   }, 600);
 }

 document.addEventListener("click", function (event) {
   const target = event.target;
   if (!target.closest(".header_menu")) {
     closeMenu();
   }
 });

 menuLinks.forEach((link) => {
   link.addEventListener("click", function (event) {
     event.preventDefault();
     const targetId = this.getAttribute("href");
     const targetElement = document.querySelector(targetId);
     if (targetElement) {
       const topOffset = 50;
       const elementPosition = targetElement.getBoundingClientRect().top;
       const offsetPosition = elementPosition - topOffset;

       window.scrollBy({
         top: offsetPosition,
         behavior: "smooth",
       });

       closeMenu();
     }
   });
 });

// ------------------------------------------------------------Favorites----------------------------------------------------------------------------------

let currentSeasonIndex = 0;
seasons[currentSeasonIndex].classList.add('seas');

buttons.forEach((button, index) => {
 button.addEventListener('change', () => {
   if (index === currentSeasonIndex) return;

   const currentSeason = seasons[currentSeasonIndex];
   const targetSeason = seasons[index];

   currentSeasonIndex = index;

   currentSeason.style.opacity = '0';

   setTimeout(() => {
     currentSeason.classList.remove('seas');
   }, 600); 

   setTimeout(() => {
     targetSeason.style.opacity = '1';
     targetSeason.classList.add('seas');
   }, 600); 
 });
});



//-------------------------------------------------------------------------------------sider------------------------------------------------------------------

 let position = 0;
 let dotindex = 0;

 const nextSlide = () =>{
   if (position < (dots.length - 1) * 465){
     position += 465 
     dotindex += 1
     arrowPrev.classList.remove('pointer-events')
   } else{
     arrowNext.classList.add('pointer-events')
   }
   sliderLine.style.left = -position + 'px'
   thisSlide(dotindex)
 }
 const prevSlide = () =>{
   if (position > 0){
     position -= 465 
     dotindex -= 1
     arrowNext.classList.remove('pointer-events')
   } else{
     arrowPrev.classList.add('pointer-events')
   }
   sliderLine.style.left = -position + 'px'
   thisSlide(dotindex)
 }  
 const thisSlide = (index) => {
   for (let dot of dots){
     dot.classList.remove('activeButton')
   }
   dots[index].classList.add('activeButton')
 }

 arrowNext.addEventListener('click', nextSlide)
 arrowPrev.addEventListener('click', prevSlide)

 if (windowWidth < 1024){
   dots.forEach( (dot, index) => {
     dot.addEventListener('click', () =>{
       position = 465 * index
       sliderLine.style.left = -position + 'px'
       dotindex = index
       thisSlide(dotindex)
     })
   }) 
 } else if (windowWidth >= 1440) {
     dots.forEach( (dot, index) => {
       dot.addEventListener('click', () =>{
         position = 475 * index
         sliderLine.style.left = -position + 'px'
         dotindex = index
         thisSlide(dotindex)
       })
     }) 
 } else if (windowWidth >= 1024) {
   dots.forEach( (dot, index) => {
     dot.addEventListener('click', () =>{
       position = 335 * index
       sliderLine.style.left = -position + 'px'
       dotindex = index
       thisSlide(dotindex)
     })
   }) 
}

//-------------------------------------------------menu-------------------------------------------------------------

const icon = document.querySelector('.icon_profile');
const registerMenu = document.querySelector('.register-menu');
const profile = document.querySelector('.profile-menu')
const userIcon = document.querySelector('.user-icon');
const profileIcon = document.querySelector('.my-profile-icon');
const profileName = document.querySelector('.my-profile-name');
const visits = document.querySelectorAll('.visits-text');
const books = document.querySelectorAll('.books-text');
const cardNumber = document.querySelector('.cn');

icon.addEventListener('click', (event) => {
 event.stopPropagation(); 
 if (!registerMenu.classList.contains('registered')){
   registerMenu.classList.toggle('menu-exit');
 } else {
   profile.classList.toggle('menu-exit-log');
 }
 if (!popupLog.classList.contains('hidden-log')){
   popupLog.classList.toggle('hidden-log');
 }
 if (!popupReg.classList.contains('hidden')){
   popupReg.classList.toggle('hidden');
 }
 closeMenu();
});

userIcon.addEventListener('click', (event) => {
  event.stopPropagation(); 
  profile.classList.toggle('menu-exit-log');
  closeMenu();
 });

document.addEventListener('click', (event) => {
 if (!registerMenu.contains(event.target)) {
   registerMenu.classList.remove('menu-exit');
 }
 if (!profile.contains(event.target)) {
   profile.classList.remove('menu-exit-log');
 }
});
//--------------------------------------------------------popup-reg-------------------------------------------------------------

function isValidEmail(email) {
 const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 return emailPattern.test(email);
}

function generateCardNumber() {
  const randomNumber = Math.floor(Math.random() * 0x1000000000); 
  return randomNumber.toString(16).toUpperCase().slice(-9);
}

let storedUserData = localStorage.getItem('userData');
let userDataArray = storedUserData ? JSON.parse(storedUserData) : [];

if (!Array.isArray(userDataArray)) {
 userDataArray = [];
}

if (userDataArray.length >= 1) {
 updateBookDisplay();
}

regButton.addEventListener('click', () => {
 popupReg.classList.toggle('hidden');
 clearFields();
 registerMenu.classList.toggle('menu-exit');
});

regButtonCard.addEventListener('click', () => {
 window.scrollTo({
   top: 0,
   behavior: 'smooth'
 });
 popupReg.classList.toggle('hidden');
 clearFields();
});

popupReg.addEventListener('click', (event) => {
 if (event.target.classList.contains('pop-up')) {
   popupReg.classList.toggle('hidden');
   clearFields();
 }
});

closestPopup.addEventListener('click', () => {
 popupReg.classList.toggle('hidden');
 clearFields();
});

signUpBtn.addEventListener('click', () => {
 const firstName = firstNameInput.value.trim();
 const lastName = lastNameInput.value.trim();
 const email = emailInput.value.trim();
 const password = passwordInput.value;

 if (!firstName || !lastName || !email || !password || password.length < 8 || !isValidEmail(email)) {
   alert('Пожалуйста, заполните все поля корректно.');
   return;
 }

 const existingUser = userDataArray.find(user => user.email === email);
 if (existingUser) {
   alert('Этот email уже использован для регистрации.');
   return;
 }

 const cardNumber = generateCardNumber();

 const newUser = {
  firstName,
  lastName,
  email,
  password,
  cardNumber,
  visits: 1,
  books: 0,
  subscription: false,
  buyButton: [],
  booksName: []
};

 userDataArray.push(newUser);
 localStorage.setItem('userData', JSON.stringify(userDataArray));

 updateBookDisplay();

 alert('Регистрация успешно завершена!');
 location.reload();
 clearFields();
 localStorage.setItem('isLoggedIn', 'true');
 localStorage.setItem('loggedInEmail', email);
});

function clearFields() {
 firstNameInput.value = '';
 lastNameInput.value = '';
 emailInput.value = '';
 passwordInput.value = '';
}

function updateBookDisplay() {
 book4.classList.remove('own');
 book8.classList.remove('own');
 book4.textContent = 'Buy';
 book8.textContent = 'Buy';
}

//-------------------------------------------------------popup-log----------------------------------------------

function clearFieldsLog() {
 emailInputLog.value = ''; 
 passwordInputLog.value = '';
}

logButton.addEventListener('click', () => {
 popupLog.classList.toggle('hidden-log');
 clearFieldsLog();
 registerMenu.classList.toggle('menu-exit');
});

regLogin.addEventListener('click', () => {
 popupLog.classList.toggle('hidden-log');
 setTimeout(() => {
     popupReg.classList.toggle('hidden');
 }, 200);
})

loginReg.addEventListener('click', () => {
 popupReg.classList.toggle('hidden');
 setTimeout(() => {
     popupLog.classList.toggle('hidden-log');
 }, 200);
})

logButtonCard.addEventListener('click', () => {
 window.scrollTo({
   top: 0,
   behavior: 'smooth'
 });
 popupLog.classList.toggle('hidden-log');
 clearFieldsLog();
});

popupLog.addEventListener('click', (event) => {
 if (event.target.classList.contains('popup-login')) {
   popupLog.classList.toggle('hidden-log');
   clearFieldsLog();
 }
});

let currentUser = null;

loginButton.addEventListener('click', () => {
  const email = emailInputLog.value.trim();
  const password = passwordInputLog.value;

  const storedUserData = localStorage.getItem('userData');
  if (storedUserData) {
    const userDataArray = JSON.parse(storedUserData);
    const user = userDataArray.find(user => user.email === email && user.password === password);

    if (user) {
     alert('Вы успешно авторизованы!');
     user.visits += 1; 
     popupLog.classList.toggle('hidden-log');
     clearFieldsLog();
     buyButtons.forEach((button) => {
       button.classList.add('registered')
     })
     registerMenu.classList.add('none')
     profile.classList.remove('none')
     const fullName = `${user.firstName} ${user.lastName}`;
  
     const firstNameInitial = user.firstName[0];
     const lastNameInitial = user.lastName[0];
     
     userIcon.textContent = `${firstNameInitial}${lastNameInitial}`.toUpperCase();
     profileIcon.textContent = `${firstNameInitial}${lastNameInitial}`.toUpperCase();
     profileName.textContent = fullName;
     cardNumber.textContent = user.cardNumber
     visits.textContent = `${user.visits}`;
     books.textContent = `${user.books}`;
     userIcon.setAttribute('title', fullName);
     userIcon.style.display = 'block';
     userIcon.style.font
     icon.classList.add('none')
     currentUser = user;
     localStorage.setItem('isLoggedIn', 'true');
     localStorage.setItem('loggedInEmail', email);
     const numberProfileElement = document.querySelector('.number-profile');
     localStorage.setItem('userData', JSON.stringify(userDataArray));
     location.reload();
     if (numberProfileElement) {
       numberProfileElement.textContent = `${currentUser.cardNumber}`;
     }
    } else {
      alert('Неверный email или пароль.');
    }
  } else {
    alert('Пользователь не найден. Зарегистрируйтесь сначала.');
  }
});

const logOut = document.querySelector('.Log-out')

logOut.addEventListener('click', () => {
  localStorage.setItem('isLoggedIn', 'false');
  location.reload();
})

closestPopupLog.addEventListener('click', () => {
 popupLog.classList.toggle('hidden-log');
 clearFieldsLog();
});

 buyButtons.forEach(function(button) {
   button.addEventListener("click", function() {
     if (button.textContent.includes("Buy") && !button.classList.contains('registered')) {
       window.scrollTo({
         top: 0,
         behavior: 'smooth'
       });
       popupLog.classList.toggle('hidden-log');
       clearFieldsLog();
     }
   });
 });

 document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  
  if (isLoggedIn === 'true') {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userDataArray = JSON.parse(storedUserData);
      const email = localStorage.getItem('loggedInEmail');
      const currentUser = userDataArray.find(user => user.email === email);

      if (currentUser) {
        libraruCard.classList.add('none');
        libraruCardLogin.classList.remove('none');
        buyButtons.forEach(function(button) {
          button.addEventListener("click", function() {
            if (currentUser && !currentUser.subscription && button.classList.contains('registered')) {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
              popupBc.classList.toggle('hidden-Bc');
            } else if(button.classList.contains('own')){

            } else {
              button.classList.add('own');
              button.textContent = 'Own';

              currentUser.books += 1;

              const buttonId = button.dataset.id;

              if (!currentUser.buyButton.includes(buttonId)) {
                currentUser.buyButton.push(buttonId);
              }

              const bookElement = button.closest('.item');
              const bookSubtitle = bookElement.querySelector('.book_subtitle').textContent;
              const bookNextTitle = bookElement.querySelector('.book_nexttitle').textContent;

              currentUser.booksName.push({ subtitle: bookSubtitle, nextTitle: bookNextTitle });

              const userIndex = userDataArray.findIndex(user => user.email === currentUser.email);
              if (userIndex !== -1) {
                userDataArray[userIndex] = currentUser;
                localStorage.setItem('userData', JSON.stringify(userDataArray));
              }
              const li = document.createElement('li');
              li.textContent = `${bookSubtitle}, ${bookNextTitle}`;
              li.classList.add('li-rentendet');
              document.querySelector('.rented-books nav').appendChild(li);
            }
          });
        });
        currentUser.booksName.forEach(book => {
          const li = document.createElement('li');
          li.textContent = `${book.subtitle}, ${book.nextTitle}`;
          li.classList.add('li-rentendet');
          document.querySelector('.rented-books nav').appendChild(li);
        });
        buyButtons.forEach(function(button) {
          const buttonId = button.dataset.id;
          if (currentUser.buyButton.includes(buttonId)) {
            button.classList.add('own');
            button.textContent = 'Own';
          }
        });
        buyBc.addEventListener('click', () => {
          const BCN = BCNInput.value.trim();
          const mounth = mounthInput.value.trim();
          const years = yearsInput.value.trim();
          const CVC = CVCInput.value.trim();
          const cardholderName = cardholderNameInput.value.trim();
          const postalCode = postalCodeInput.value.trim();
          const CT = CTInput.value.trim();
        
          if (BCN.length !== 16 || mounth.length !== 2 || years.length !== 2 || CVC.length !== 3 || !cardholderName || !postalCode || !CT) {
            alert('Заполните все поля правильно!');
          } else {
            alert('Спасибо за покупку');
            popupBc.classList.toggle('hidden-Bc');
            currentUser.subscription = true;
            const userIndex = userDataArray.findIndex(user => user.email === currentUser.email);
            if (userIndex !== -1) {
              userDataArray[userIndex] = currentUser;
              localStorage.setItem('userData', JSON.stringify(userDataArray));
            }
          }
        });     
        const fullName = `${currentUser.firstName} ${currentUser.lastName}`;
        const firstNameInitial = currentUser.firstName[0];
        const lastNameInitial = currentUser.lastName[0];
        const visitsVBB = currentUser.visits;
        const booksVBB = currentUser.books;
        
        userIcon.textContent = `${firstNameInitial}${lastNameInitial}`.toUpperCase();
        profileIcon.textContent = `${firstNameInitial}${lastNameInitial}`.toUpperCase();
        visits.forEach(visits => {
          visits.textContent = `${visitsVBB}`;
        })
        books.forEach(books => {
          books.textContent = `${booksVBB}`;
        })
        fullNameDlC.textContent = `${fullName}`
        cardNumberDLC.textContent = `${currentUser.cardNumber}`
        cardNumber.textContent = currentUser.cardNumber
        profileName.textContent = fullName;
        userIcon.setAttribute('title', fullName);
        userIcon.style.display = 'block';
        icon.classList.add('none');
        buyButtons.forEach((button) => {
          button.classList.add('registered');
        });
        registerMenu.classList.add('registered');
        registerMenu.classList.add('none');
        profile.classList.remove('none');
    
        const numberProfileElement = document.querySelector('.number-profile');
        if (numberProfileElement) {
          numberProfileElement.textContent = `${currentUser.cardNumber}`;
        }
      }
    }
  }
});

var cardCopyButtons = document.querySelectorAll(".card-copy");
  cardCopyButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var cardNumberElement = this.parentNode.querySelector(".cn");
      var cardNumber = cardNumberElement.textContent.trim();

      var tempElement = document.createElement("textarea");
      tempElement.value = cardNumber;
      document.body.appendChild(tempElement);

      tempElement.select();

      document.execCommand("copy");

      document.body.removeChild(tempElement);

    });
  });

  const closeButton = document.querySelector('.close-button-mp');
  const myProfile = document.querySelector('.popup-my-profile');
  const buttonMyProfile = document.querySelector('.my-profile');

  closeButton.addEventListener('click', () => {
    myProfile.classList.toggle('hidden-profile')
  })

  buttonMyProfile.addEventListener('click', () =>{
    myProfile.classList.toggle('hidden-profile')
    profile.classList.toggle('menu-exit-log');
  })

  myProfile.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup-my-profile')) {
      myProfile.classList.toggle('hidden-profile');
      clearFields();
    }
   });

   DLCProfile.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    myProfile.classList.toggle('hidden-profile')
   })

//----------------------------------------------------popup-bc-------------------------------------------------------------

const closeButtonBc = document.querySelector('.button-bc');
const popupBc = document.querySelector('.popup-libraru-card');
const buyBc = document.querySelector('.buy-bc');
const BCNInput = document.querySelector('#BCN');
const mounthInput = document.querySelector('#mounth');
const yearsInput = document.querySelector('#Years');
const CVCInput = document.querySelector('#CVC');
const cardholderNameInput = document.querySelector('#Cardholder-name');
const postalCodeInput = document.querySelector('#Postal-code');
const CTInput = document.querySelector('#CT');


closeButtonBc.addEventListener('click', () =>{
  popupBc.classList.toggle('hidden-Bc')
})

popupBc.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup-libraru-card')) {
    popupBc.classList.toggle('hidden-Bc');
  }
 });

 //-------------------------------------libraru-card-----------------------------------

 const checkCard = document.querySelector('.button_card');
 const name = document.querySelector('#name');
 const number = document.querySelector('#number');

 checkCard.addEventListener('click', () => {
  const storedUserData = localStorage.getItem('userData');
  const enteredFullName = name.value.trim();
  const enteredNumber = number.value.trim();

  if (storedUserData) {
    const userDataArray = JSON.parse(storedUserData);
    const matchingUser = userDataArray.find(user => (user.firstName + user.lastName) === enteredFullName && user.cardNumber === enteredNumber);

    if (matchingUser) {
      libraruCard.classList.add('none');
      libraruCardLogin.classList.remove('none');
      
      setTimeout(() => {
        libraruCardLogin.classList.add('none');
        libraruCard.classList.remove('none');
        clearDLCFields();
      }, 10000);

      updateDLCFields(matchingUser);
    }
  }
});

function clearDLCFields() {
  name.value = '';
  number.value = '';
}

function updateDLCFields(user) {
  fullNameDlC.textContent = `${user.firstName} ${user.lastName}`;
  cardNumberDLC.textContent = user.cardNumber;
  visits.textContent = user.visits;
  books.textContent = user.books;
  visits.forEach(visits => {
    visits.textContent = `${user.visits}`;
  })
  books.forEach(books => {
    books.textContent = `${user.books}`;
  })
}