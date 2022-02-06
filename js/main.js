/**
 * Page function for contact.html
 */
function contactPage() {
  /**
   * Checks if a substring occurs in the current user agent string.
   *
   * The tested substrings are commonly found in the user agent strings
   * for popular browsers.
   *
   * This is not 100% accurate, user agent strings can be modified,
   * and many browsers are not included.
   *
   * @returns The name of the browser associated with the substring.
   *
   */
  function determineBrowser() {
    // Extracts user agent string for determining browser
    const usrAgnt = navigator.userAgent;

    if ((usrAgnt.indexOf('SamsungBrowser') !== -1)) {
      return 'SamsungBrowser';
    } if ((usrAgnt.indexOf('Vivaldi') !== -1)) {
      return 'Vivaldi';
    } if ((usrAgnt.indexOf('Opera') !== -1) || (usrAgnt.indexOf('OPR') !== -1)) {
      return 'Opera';
    } if ((usrAgnt.indexOf('Edg') !== -1)) {
      return 'Edge';
    } if ((usrAgnt.indexOf('Chrome') !== -1)) {
      return 'Chrome';
    } if ((usrAgnt.indexOf('Firefox') !== -1)) {
      return 'Firefox';
    } if ((usrAgnt.indexOf('Safari') !== -1)) {
      return 'Safari';
    } if ((usrAgnt.indexOf('MSIE') !== -1)) {
      return 'Internet Explorer - LOL';
    }
    return 'Unknown';
  }
  const browserName = determineBrowser();
  // Appends the name of the browser before the end of the text in elements with class .user-browser
  document.querySelector('.user-browser').insertAdjacentHTML('beforeend', browserName);
}

/**
 * Page function for employees.html
 */
function employeesPage() {
  /**
  * Handles the displaying of an enlarged image in the image gallery,
  * and writing the associated caption text.
  *
  * Determines class of clicked element, and chooses image and text accordingly.
  *
  */
  function enlargeImage() {
    const clickedImageUniqueClass = event.target.className.split(' ')[1];
    const employeeEnlarged = document.querySelector('.employee-enlarged');
    switch (clickedImageUniqueClass) {
      case 'employee-1':
        employeeEnlarged.style.background = 'center url(./img/employee1_full.jpg)';
        employeeEnlarged.style.backgroundSize = 'cover';
        employeeEnlarged.firstChild.innerText = 'Hasse Tigersåg grundade luftbombarna 1987 - Sedan dess har han drivit firman med järnhand, vilket lett till goda resultat.';
        break;

      case 'employee-2':
        employeeEnlarged.style.background = 'center url(./img/employee2_full.jpg)';
        employeeEnlarged.style.backgroundSize = 'cover';
        employeeEnlarged.firstChild.innerText = 'Ronny Connyson är en enmans brandstyrka, livräddare, flygledare och axlar allt ansvar för allting. Ett tungt men givande uppdrag!';
        break;

      case 'employee-3':
        employeeEnlarged.style.background = 'center url(./img/employee3_full.jpg)';
        employeeEnlarged.style.backgroundSize = 'cover';
        employeeEnlarged.firstChild.innerText = 'Mikoyan Gurevitjerov - ryskt flygar-ess från Kazan. Har ett hett temprament, men är oslagbar i luftstrid. Heltidsanställd som pilot.';
        break;

      case 'employee-4':
        employeeEnlarged.style.background = 'center url(./img/employee4_full.jpg)';
        employeeEnlarged.style.backgroundSize = 'cover';
        employeeEnlarged.firstChild.innerText = 'Ansgar Näver - argsint lokalvårdare som aldrig backar från en fight. Gillar att spela fiol och binda flugor.';
        break;

      default:
        break;
    }
  }

  // Adds an event listener to all elements with .employee class.
  // Executes enlargeImage() if any of these elements are clicked.
  const employeeImages = document.querySelectorAll('.employee');
  employeeImages.forEach((element) => {
    element.addEventListener('click', enlargeImage);
  });
}

/**
 * Page function for ourfleet.html
 */
function ourfleetPage() {
  /**
  * Handles the displaying of an enlarged image in the image gallery,
  * and writing the associated caption text.
  *
  * Determines class of clicked element, and chooses image and text accordingly.
  *
  */
  function enlargeImage() {
    const clickedImageUniqueClass = event.target.className.split(' ')[1];
    const planeEnlarged = document.querySelector('.plane-enlarged');

    switch (clickedImageUniqueClass) {
      case 'plane-1':
        planeEnlarged.style.background = '80% url(./img/plane1_full.jpg)';
        planeEnlarged.style.backgroundSize = 'cover';
        planeEnlarged.firstChild.innerText = 'Tupolev TU-160 är ett tungt sovjetiskt bombflygplan från 80-talet. Kan flyga i hastigheter uppåt Mach 3, perfekt för dig som lätt blir rastlös under långa flygningar. ';
        break;

      case 'plane-2':
        planeEnlarged.style.background = 'center url(./img/plane2_full.jpg)';
        planeEnlarged.style.backgroundSize = 'cover';
        planeEnlarged.firstChild.innerText = 'Junkers Ju 87, även känt som "Stuka", är en störtbombare från andra världskriget. Ger ifrån sig ett skrämmande tjut vid dykning, passar bra för att skrämma bort eventuella strandbesökare innan du landar för solsemestern.';
        break;

      case 'plane-3':
        planeEnlarged.style.background = '30% url(./img/plane3_full.jpg)';
        planeEnlarged.style.backgroundSize = 'cover';
        planeEnlarged.firstChild.innerText = 'Antonov An-225 är världens största flygplan. Vissa gillar att resa lätt, men detta kan vara ett alternativ om du brukar ha mycket packning.';
        break;

      case 'plane-4':
        planeEnlarged.style.background = '70% url(./img/plane4_full.jpg)';
        planeEnlarged.style.backgroundSize = 'cover';
        planeEnlarged.firstChild.innerText = 'Saabs flygande tunna - en svensk klassiker! Känner du dig nostalgisk/patriotisk är detta ett självklart val.';
        break;

      default:
        break;
    }
  }

  // Adds an event listener to all elements with .plane class.
  // Executes enlargeImage() if any of these elements are clicked.
  const planeImages = document.querySelectorAll('.plane');
  planeImages.forEach((element) => {
    element.addEventListener('click', enlargeImage);
  });
}

/**
 * Page function for booking.html
 *
 * An object is defined for storing the values entered in the form fields,
 * an array with nested objects is defined for the booking data.
 *
 * These datastructures are updated, stored and loaded from sessionstorage, and written from.
 *
 * Defines functions for page functionality, checks if bookingArray has been
 * stored in session storage, if true - makes function call to update booking table GUI.
 *
 * Then checks if a seat has been toggled, if true - makes function calls to update booking fields.
 *
 * Finally adds event listeners for table clicks, form field changes and buttons.
 */
function bookingPage() {
  const bookingItems = document.querySelectorAll('.booking-table-item');
  const formFields = document.querySelectorAll('.form-field');
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const personalId = document.querySelector('#personal-id');
  const serviceClass = document.querySelector('#service-class');
  const seatNumber = document.querySelector('#seat-number');

  let bookingFieldsNoSelectedSeat = {
    firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
  };

  let bookingArray = [
    {
      serviceclass: 'Business',
      1: {
        num: 1,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
      2: {
        num: 2,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
      3: {
        num: 3,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
    },
    {
      serviceclass: 'Business',
      1: {
        num: 4,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
      2: {
        num: 5,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
      3: {
        num: 6,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
    },
    {
      serviceclass: 'Economy',
      1: {
        num: 7,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
      2: {
        num: 8,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
      3: {
        num: 9,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
    },
    {
      serviceclass: 'Economy',
      1: {
        num: 10,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
      2: {
        num: 11,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
      3: {
        num: 12,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
    },
    {
      serviceclass: 'Economy',
      1: {
        num: 13,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
      2: {
        num: 14,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
      3: {
        num: 15,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
    },
    {
      serviceclass: 'Economy',
      1: {
        num: 16,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
      2: {
        num: 17,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
      3: {
        num: 18,
        booked: false,
        active: false,
        bookingFields: {
          firstname: '', lastname: '', idNo: '', class: '', seatNo: '',
        },
      },
    },
  ];

  /**
  * Handles the selecting of the clicked table element in the booking table.
  *
  * @returns toggled table element
  */
  function toggleSeat() {
    return document.querySelector('.active');
  }

  /**
  * Handles defining of table information.
  *
  * @param {element} element Element to extract information from.
  *
  */
  function getTableInfo(element) {
    /**
    * Defines the row number for the passed element.
    *
    * @returns Row number of element extracted from CSS classes
    */
    function getRow() {
      return element.classList[1].split('-')[1];
    }
    /**
    * Defines the correlated array object in bookingArray for the passed element.
    *
    * @returns Object containing booking info for the passed element
    */
    function getArrayObject() {
      const elementRow = element.classList[1].split('-')[1];
      const elementCol = element.classList[2].split('-')[1];
      return bookingArray[elementRow - 1][elementCol];
    }
    getTableInfo.getRow = getRow;
    getTableInfo.getArrayObject = getArrayObject;
  }

  /**
  * Handles clearing the GUI of data.
  */
  function editGui() {
    /**
    * Clears all active booking table elements.
    */
    function clearActive() {
      bookingItems.forEach((element) => {
        if (element.classList.contains('active')) {
          element.classList.remove('active');
        }
      });
    }
    /**
    * Resets booking fields.
    */
    function resetFields() {
      /**
      * Resets class and seat field.
      */
      function resetClassAndSeat() {
        document.querySelector('#service-class').textContent = '';
        document.querySelector('#seat-number').textContent = '';
      }
      /**
      * Personal info fields.
      */
      function resetPersonalInfo() {
        formFields.forEach((formField) => {
          const field = formField;
          field.value = '';
        });
      }
      resetFields.resetClassAndSeat = resetClassAndSeat;
      resetFields.resetPersonalInfo = resetPersonalInfo;
    }
    editGui.clearActive = clearActive;
    editGui.resetFields = resetFields;
  }

  /**
  * Updates bookingArray fields and bookingFieldsNoSelectedSeat items.
  */
  function updateArray() {
    /**
    * Sets active boolean value to false for all seats in bookingArray.
    */
    function clearActive() {
      bookingArray.forEach((arrayIndex) => {
        const arrayRow = arrayIndex;
        arrayRow['1'].active = false;
        arrayRow['2'].active = false;
        arrayRow['3'].active = false;
      });
    }
    /**
    * If no seat is toggled, store booking fields in bookingFieldsNoSelectedSeat
    * and update to session storage.
    *
    * If a seat is toggled, and has class .booked, do nothing and return null.
    *
    * If a seat is toggled and is not booked, store booking fields in bookingArray
    * and updates to session storage.
    */
    function storeFields() {
      if (!toggleSeat()) {
        bookingFieldsNoSelectedSeat.firstname = firstName.value;
        bookingFieldsNoSelectedSeat.lastname = lastName.value;
        bookingFieldsNoSelectedSeat.idNo = personalId.value;
        bookingFieldsNoSelectedSeat.class = serviceClass.textContent;
        bookingFieldsNoSelectedSeat.seatNo = seatNumber.textContent;
        sessionStorage.setItem('bookingFields', JSON.stringify(bookingFieldsNoSelectedSeat));
        return;
      }

      const toggledSeat = toggleSeat();
      if (toggledSeat.classList.contains('booked')) {
        return;
      }

      getTableInfo(toggledSeat);
      const toggledSeatArrayObject = getTableInfo.getArrayObject(toggledSeat);
      toggledSeatArrayObject.bookingFields.firstname = firstName.value;
      toggledSeatArrayObject.bookingFields.lastname = lastName.value;
      toggledSeatArrayObject.bookingFields.idNo = personalId.value;
      toggledSeatArrayObject.bookingFields.class = serviceClass.textContent;
      toggledSeatArrayObject.bookingFields.seatNo = seatNumber.textContent;
      sessionStorage.setItem('array', JSON.stringify(bookingArray));
    }
    /**
    * Sets booked boolean value to true for the passed element in bookingArray.
    *
    * @param {element} element Element which related array entry is to be changed.
    */
    function bookingTrue(element) {
      getTableInfo(element);
      const elementArrayObject = getTableInfo.getArrayObject(element);
      elementArrayObject.booked = true;
    }
    /**
    * Sets active boolean value to true for the passed element in bookingArray.
    *
    * @param {element} element Element which related array entry is to be changed.
    */
    function activeTrue(element) {
      getTableInfo(element);
      const elementArrayObject = getTableInfo.getArrayObject(element);
      elementArrayObject.active = true;
    }
    updateArray.storeFields = storeFields;
    updateArray.clearActive = clearActive;
    updateArray.bookingTrue = bookingTrue;
    updateArray.activeTrue = activeTrue;
  }

  /**
  * Writes values in bookingArray to fields in GUI.
  *
  * @param {element} element Element which array entry is to be written from.
  */
  function writeFromArray(element) {
    /**
    * Writes active and booked status to all bookingtable seats by assigning classes.
    */
    function activeOrBooked() {
      bookingItems.forEach((item) => {
        getTableInfo(item);
        const currentArrayObject = getTableInfo.getArrayObject(item);
        if (currentArrayObject.active) {
          item.classList.add('active');
        }
        if (currentArrayObject.booked) {
          item.classList.add('booked');
        }
      });
    }
    /**
    * Writes stored bookingfield data from bookingArray to GUI for the passed element.
    */
    function toFields() {
      getTableInfo(element);
      const elementArrayObject = getTableInfo.getArrayObject(element);
      const elementRow = getTableInfo.getRow(element);

      firstName.value = elementArrayObject.bookingFields.firstname;
      lastName.value = elementArrayObject.bookingFields.lastname;
      personalId.value = elementArrayObject.bookingFields.idNo;
      serviceClass.textContent = bookingArray[elementRow - 1].serviceclass;
      seatNumber.textContent = elementArrayObject.num;
    }
    writeFromArray.activeOrBooked = activeOrBooked;
    writeFromArray.toFields = toFields;
  }

  /**
  * Handles functionality for clicking booking table elements.
  *
  * If element is booked, do nothing and return null.
  *
  * Else, clear any active element, add active class to clicked item,
  * write bookingArray data to GUI for clicked element, clear any active element in bookingArray,
  * set active value to true for clicked item in bookingArray, and updates bookingArray to
  * session storage.
  */
  function tableClick() {
    if (event.target.classList.contains('booked')) {
      return;
    }
    const clickedItem = event.target;
    editGui();
    updateArray();
    writeFromArray(clickedItem);
    getTableInfo(clickedItem);

    editGui.clearActive();
    clickedItem.classList.add('active');
    writeFromArray.toFields(clickedItem);
    updateArray.clearActive();
    updateArray.activeTrue(clickedItem);
    sessionStorage.setItem('array', JSON.stringify(bookingArray));
  }

  /**
  * Adds functionality to HTML reset button.
  *
  * Clear any active element, reset class and seat,
  * set active value to false for clicked item in bookingArray,
  * and update bookingArray to session storage.
  */
  function resetButton() {
    editGui();
    editGui.resetFields();
    updateArray();

    editGui.clearActive();
    editGui.resetFields.resetClassAndSeat();
    updateArray.clearActive();
    sessionStorage.setItem('array', JSON.stringify(bookingArray));
  }

  /**
  * Handles printing of boarding card to a new window.
  *
  * Opens a plain window with appropriate size and dynamically writes a html page
  * with a head section including a media print query, and a html body section
  * with the booking details.
  */
  function boardingCard() {
    const cardWindow = window.open('', 'Boardingcard', `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    // width=600,height=700,left=200,top=200`);

    cardWindow.document.head.innerHTML = `
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Boardingcard - ${firstName.value} ${lastName.value}</title>
    <style>
      @media print {
        
        /* Page margin and pagination for print */
        
        html, body {
          height: 100%;
          overflow: hidden;
        }

        h1 {
          margin-top: 200px;
        }
      }
      
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }
    
      html {
        font-size: 16px;
        font-family: sans-serif;
        background: #e0e0e0;
      }
      
      body {
        margin: 0 auto;
        min-height: 100vh;
        width: 100%;
        background: #8d8d8d;
      }

      h1,
      h2,
      p {
        text-align: center;
        padding: 1rem;
      }
    </style>
    `;

    cardWindow.document.body.innerHTML = `
    <h1>Boardingcard - Luftbombarna</h1>
    <h2>First name</h2>
      <p>${firstName.value}</p>
    <h2>Last name</h2>
      <p>${lastName.value}</p>
    <h2>Personal ID</h2>
      <p>${personalId.value}</p>
    <h2>Class</h2>
      <p>${serviceClass.textContent}</p>
    <h2>Seat number</h2>
      <p>${seatNumber.textContent}</p>
    `;
  }

  /**
  * Handles functionality of the booking button.
  *
  * If no seat is toggled, warns that no seat is selected and return null.
  *
  * If a seat is toggled and booked, warns that the seat is already booked and return null.
  *
  * If a seat is toggled and not booked, adds CSS class booked to toggled seat, sets booked value
  * to true for clicked item in bookingArray, and and updates bookingArray to session storage.
  *
  * Executes boardingcard function, and resets all GUI fields.
  *
  */
  function bookingButton() {
    if (!toggleSeat()) {
      alert('Please select a seat to book.');
      return;
    } if (firstName.value === '') {
      alert('Please enter your first name.');
      return;
    } if (lastName.value === '') {
      alert('Please enter your last name.');
      return;
    } if (personalId.value === '') {
      alert('Please enter your personal id.');
      return;
    }

    const toggledSeat = toggleSeat();
    if (toggledSeat.classList.contains('booked')) {
      alert('This seat is already booked, please select another seat.');
      return;
    }
    getTableInfo(toggledSeat);
    updateArray(toggledSeat);
    editGui();

    toggledSeat.classList.add('booked');
    updateArray.bookingTrue(toggledSeat);
    sessionStorage.setItem('array', JSON.stringify(bookingArray));

    boardingCard();

    editGui.resetFields();
    editGui.resetFields.resetPersonalInfo();
    editGui.resetFields.resetClassAndSeat();
  }

  /**
  * Handles functionality of loading bookingArray from session storage.
  *
  * If bookingArray has been stored in session storage:
  * @returns bookingArray from sessionstorage.
  *
  * If bookingArray has not been stored in session storage:
  * @returns bookingArray as defined in bookingpage() function.
  */
  function getArrayFromStorage() {
    if (sessionStorage.getItem('array')) {
      return JSON.parse(sessionStorage.getItem('array'));
      // console.log(bookingArray);
    }
    return bookingArray;
  }

  /**
  * Handles functionality of loading bookingFieldsNoSelectedSeat from session storage.
  *
  * If bookingFieldsNoSelectedSeat has been stored in session storage:
  * @returns bookingFieldsNoSelectedSeat from sessionstorage.
  *
  * If bookingFieldsNoSelectedSeat has not been stored in session storage:
  * @returns bookingFieldsNoSelectedSeat as defined in bookingpage() function.
  */
  function getFieldsFromStorage() {
    if (sessionStorage.getItem('bookingFields')) {
      return JSON.parse(sessionStorage.getItem('bookingFields'));
    }
    return bookingFieldsNoSelectedSeat;
  }

  bookingArray = getArrayFromStorage();
  bookingFieldsNoSelectedSeat = getFieldsFromStorage();

  if (!toggleSeat()) {
    firstName.value = bookingFieldsNoSelectedSeat.firstname;
    lastName.value = bookingFieldsNoSelectedSeat.lastname;
    personalId.value = bookingFieldsNoSelectedSeat.idNo;
    serviceClass.textContent = bookingFieldsNoSelectedSeat.class;
    seatNumber.textContent = bookingFieldsNoSelectedSeat.seatNo;
  }

  if (sessionStorage.getItem('array')) {
    writeFromArray();
    writeFromArray.activeOrBooked();

    if (toggleSeat()) {
      const toggledSeat = toggleSeat();
      writeFromArray(toggledSeat);
      writeFromArray.toFields(toggledSeat);
    }
  }

  // Event listeners
  bookingItems.forEach((element) => {
    element.addEventListener('click', tableClick);
  });

  formFields.forEach((element) => {
    element.addEventListener('change', () => {
      updateArray();
      updateArray.storeFields();
    });
  });

  document.querySelector('#reset-button').addEventListener('click', resetButton);
  document.querySelector('#book-button').addEventListener('click', bookingButton);
}

/**
 * Page detection function
 *
 * Determines the loaded page, and executes the correct page function.
 *
 */
function pageDetect() {
  const path = window.location.pathname;
  if (path.endsWith('contact.html')) {
    contactPage();
  } if (path.endsWith('employees.html')) {
    employeesPage();
  } if (path.endsWith('ourfleet.html')) {
    ourfleetPage();
  } if (path.endsWith('booking.html')) {
    bookingPage();
  }
}

// Adds an event listener for all pages.
// Executes pageDetect() when the page and all resources are loaded.
window.addEventListener('load', pageDetect);
