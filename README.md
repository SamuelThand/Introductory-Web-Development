# Laboration 4

## Environment & Tools

Ubuntu 20.04 LTS, Visual Studio Code 1.61.2, Git 2.25.1

## Purpose

### Perspective

The student needs to understand how to create a booking window with a booking table and forms for personal info, how to structure a data structure in a fitting way to store booking information, how to use sessionstorage for persistence, and how to structure javascript to make the booking system function according to specifications.

### Concrete goals

The student needs to make an implementation for a booking page with a booking form containing first name, last name, personal id, class and seat number. There should be 18 seats divided into six rows.

Booked seats shall have the color red, selected seats blue and other seats green. The plane should not be overbooked, and the booked seat should not be selectable.

All booking data is to be stored in an array.

Upon booking, a boarding card is to be printed to a new window with a media query for printing layout.

Booking should reset the entire window, as well as using the reset button.

All JS code must use event listeners defined last in a function, and functions should be defined before use.

## Procedures

### HTML

#### booking.html

Set doctype to html, create a html element with lang "en" for English.

Create a head element with 3 meta tags, charset set to UTF8, and http-equiv attribute set to "X-UA-Compatible", content attribute set to "IE=edge" this is to declare that the page should be rendered using the Edge on internet explorer browsers. This is to ensure backwards compatibility for old browsers.

Use the third meta tag to set the viewport to width=device-width, initial-scale=1.0. This makes the website render better on mobile devices or other small screens, instead of the user having to zoom around and look at the page in a desktop format.

Set a page title.

Create a link element for the CSS stylesheet css/style.css

Create a link element for the favicon icon.

Create a script element and link to js/main.js using a source attribute.

Create a body element for page content.

Create a header element for the header section.

Use an img element with src attribute to the logo, and a describing alt attribute.

Use a paragraph element to write a slogan, with a strong tag to mark emphasis on a word.

Use a nav section element to contain the navigation menu, which contains anchor tags with href attributes pointing to each html page, and write the link text before the closing anchor tag.

Create a main element for the main content, and a section with the class .booking-window, and inside it a form container with the class 'booking-form-grid-container.', and a section container with the class 'booking-table-gridcontainer'.

Inside the form container, create 5 labels for each personal information type, and an input box for each one except class and seat number which will be paragraphs updated from the table. Assign class 'form-field' to these.

Add two buttons, one html reset button and one generic button for booking.

Inside the section booking-table-gridcontainer, add 18 generic div elements for the seat squares in the booking table. Give these the classes booking-table-item and then a class for the current row, and the current column. row-1 col-1, row-1 col-2, row-1 col-3, row-2 col-1, row-2 col-2 etc.

Create a footer element for the footer section, and write two paragraphs with p elements that describe the company. Write a final paragraph with the company name and a copyright special symbol.

### CSS

#### GRID - booking page

For the class .booking-window, declare a rule with properties:
  margin: 0 auto; - To center page
  width: 650px; - To set an appropriate width for the desktop version.
  padding: 5rem 0; - To set some appropriate padding
  display: flex; - To make the two child elements of classes .booking-table-gridcontainer and booking-form-gridcontainer into flex items, which ensures they are displayed

For the class .booking-table-gridcontainer, declare a rule with properties:
 
  background: #6b6b6b; - For styling purposes.
  padding: 1rem 2rem; - For styling purposes.
  display: grid; - To make the child div elements arrange into a CSS Grid.
  width: 40%; - To set the grid container into 40% of the width of the parent .booking-window container.
  grid-template-columns: 1fr 1fr 1fr; - To specify that the grid will have three columns of equal width.
  grid-template-rows: repeat(6, 1fr); - To specify that the grid will have 6 rows of equal height.
  gap: 0.5rem; - For styling purposes.
 
For the class .booking-table-item, declare a rule with properties:
 
  background: rgb(35 100 35 / 44.5%); - for styling purposes
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem; - for styling purposes, to round off the edges of the "seats" giving a more realistic look.

For the class .booking-form-gridcontainer, declare a rule with properties:
 
  background: #615353; - For styling purposes.
  padding: 1rem; - For styling purposes.
  display: grid; - To make the child labels, forms, paragraphs and buttons elements arrange into a CSS Grid.
  grid-template-columns: 1fr 1fr; - To specify that the grid will have two columns of equal width.
  grid-template-rows: repeat(6, 1fr); -  To specify that the grid will have six rows of equal height.
  width: 60%; - To set the grid container into 60% of the width of the parent .booking-window container.
  justify-items: center; - To center elements horizontally
  align-items: center; - To center elements vertically
  gap: 0.5rem; - For styling purposes
 
Declare styling properties to  .booking-form-gridcontainer label, .form-field, #reset-button and #book-button.

For the classes .booking-table-item:hover, #book-button:hover and #reset-button:hover - declare a rule with properties:
 
  cursor: pointer;
  opacity: 0.5;
  - In order to make the table and buttons feel responsive and clickable.
 
#### Booking page interactivity

Declare a rule for class .active with a background color of blue.

Declare a rule for class .booked with a background color of red.

These classes are used to designate active and booked seats and are controlled by JS.

Declare a rule for class .booked:hover with properties
  cursor: zoom-in;
  opacity: 1;
  - in order to disable the clickable feel for the red booked seats.

#### Responsive changes

##### Small devices

Set a width of 360px to .booking-window to fit it to smaller mobile devices, and set flex-direction to column-reverse. This will make the table and form stack vertically instead.

Set a width of 100% to both .booking-table-gridcontainer and .booking-form-gridcontainer to make them take up a full space.

Set a minimum height to .booking-table-gridcontainer of 378px to make it equal the height of the form, and justify content of .booking-form-gridcontainer to center it horizontally.

Change the grid template to a two-column, three row configuration in .image-grid-container using  grid-template-columns: 1fr 1fr; grid-template-rows: 20rem 10rem 10rem; gap: 0;

 Change the span of the enlarged image to grid-column: 1 / 3; grid-row: 1 / 2; to make it more appropriate for mobile.
 
Decrease the font size for the enlarged image paragraph and add some padding.

###### Medium devices

Apply the same selectors from the section above.

### Javascript

#### bookingPage()

Declare constants for all bookingitems, and form fields using document.querySelectorAll on their classes.

Declare constants for all the booking fields using document.queryselector.

Declare a variable bookingFieldsNoSelectedSeat with an object containing all booking fields as key value pairs with empty starting values. Use let since this variable can be reassigned.

Declare a variable bookingArray with an array containing six objects for the table rows, and each row object containing three nested objects for each column, and each column containing a nested object with the seat number stored as a integer key/value pair starting with 1, booked and active stored as a boolean key/value pair with starting value false, and a nested object bookingFields containing the bookingfields as key value pairs with empty starting values.  Use let since this variable can be reassigned.

Define following functions:

##### toggleSeat()

Return the element with active class

##### getTableInfo(element)

###### getRow()

Return the number in the second class in the classlist for the passed element.

###### getArrayObject()

Declare constants for the number in the second and third class for the passed element. This is the element row and column.

Return the object received from indexing into the bookingArray using the row -1 (JS objects are 0 indexed) and column.

##### editGui()

###### clearActive()

Remove the .active class for all booking table elements containing it. use classList.contains/classList.remove.

###### resetFields()

###### resetClassAndSeat()

Change the .textContent of #service-class and #seat-number to an empty string.

###### resetPersonalInfo()

Change all form fields to empty strings using element.value.

##### updateArray()

###### clearActive()

Set boolean value of keys 1, 2, 3 to false for each row in bookingarray.   

###### storeFields()

Test if no seat is toggled using a conditional if with !toggleSeat() to negate the value of the expression. (If toggleSeat IS NOT true). If this is true, store all booking fields values to the appropriate bookingFieldsNoSelectedSeat object keys.

Update session storage using sessionStorage.setItem together with JSON.stringify to convert the object into a string suitable for session storage.

Assign toggleSeat() to a constant, and test if the returned element contains the .booked class. Return null if this is true.

Use getTableInfo to reach the matching bookingArray object for the toggledSeat element, and store all bookingfield values to the bookingArray.bookingFields object.

Update session storage using sessionStorage.setItem together with JSON.stringify to convert the object into a string suitable for session storage.

###### bookingTrue(element)

Use getTableInfo to reach the matching bookingArray object for the passed element, and assign the boolean value true to the elements arrayobject.booked.

###### activeTrue(element)

Use getTableInfo to reach the matching bookingArray object for the passed element, and assign the boolean value true to the elements arrayobject.active.

##### writeFromArray(element)

###### activeOrBooked()

Iterate over each bookingItems item, and use getArrayObject to reach this element's object in bookingArray. If the object.active key has the boolean value true, add the class .active to the element. If the object.booked key has the boolean value true, add the class .booked to the element.

###### toFields()

Use getTableInfo to reach the matching bookingArray object for the passed element, and the row for the passed element.

Assign the values of the bookingArray object.bookingFields to the corresponding field.value, and the bookingArray row.serviceclass value to the serviceClass.textContent and the bookingArray object.num value to seatNumber.textContent

##### tableClick()

Use editGui.clearActive to clear all .active classes, add .active class to the clicked item, write the associated array values for the clicked item to the fields using writeFromArray.toFields(). Use updateArray.clearActive() to remove the active status for all array items, updateArray.activeTrue() to set active to true for the clicked item, and update the array to session storage.

##### resetButton()

Use editGui.clearActive() to clear the .active classes, editGui.resetFields.resetClassAndSeat() to reset class and seat number and  updateArray.clearActive() to to remove the active status for all array items. Update array to session storage.

##### boardingCard()

Use window.open with suitable parameters to open a simple small window for the boarding card. Assign it to constant cardWindow.

Use cardWindow.document.head.innerHTML and assign a formatted string with HTML for the head section. Include a style section with a @media print query.

For the media print query - use the CSS rules:

 html, body {
          height: 100%;
          overflow: hidden;
           - These two rules are to force the print layout to be 1 page only.
        }

        h1 {
          margin-top: 200px;
          - This margin is to center the boarding card on the page.
        }
      }
 
Use cardWindow.document.body.innerHTML and assign a formatted string with the boarding card html. Use the ${field.value} type placeholders to include all the booking form values in the boarding card.

##### bookingButton()

Test if no seat is toggled using a conditional if with !toggleSeat() to negate the value of the expression. (If toggleSeat IS NOT true). If this is true, alert the user that he needs to select a seat in order to book, and return null. Do the same test for the value of the first name, last name and personal id fields. If they are empty, inform the user to fill out the value and return.

Assign toggleSeat() to a constant, and test if the returned element contains the .booked class. Alert the user that the seat is already booked and return null if this is true.

Add the .booked class to the toggled element classlist, and update the elements bookingArray object booked value to true, and update the bookingArray session storage.

Execute boardingCard() function.

Use editGui functions to reset all booking fields.

##### getArrayFromStorage()

If the bookingArray is stored in session storage, return the array using JSON.parse(sessionStorage.getItem('array'));
in order to reconstruct the array into JS data structures from JSON.

Else return the predefined bookingArray.

##### getFieldsFromStorage()

If the bookingFieldsNoSelectedSeat is stored in session storage, return the object using JSON.parse(sessionStorage.getItem('array'));
in order to reconstruct the object into JS data structures from JSON.

Else return the predefined bookingFieldsNoSelectedSeat.

#### bookingPage() continuation

Update bookingArray with getArrayFromStorage, and update  bookingFieldsNoSelectedSeat using getFieldsFromStorage.

Update booking fields variable from bookingFieldsNoSelectedSeat if no seat is toggled

Update booking table using writeFromArray if the array is stored in session storage, and update bookingfields using writeFromArray.

Add click event listeners to all table elements by iterating over them using .forEach(). Run tableClick() on triggering.

Add change event listeners to all bookingfields, execute updateArray.storeFields on triggering.

Add click event listeners to all to reset button and book button using a querySelector, and execute resetButton and bookingButton on triggering.

## Discussion

### Perspective

I think the purpose has been fulfilled. I have learned much from the areas mentioned under perspective, and I believe the implementation fulfills the concrete goals stated under Concrete Goals, as well as the requirements. For the assignment level I think the implementation is suitable. What could be considered is a more efficient structure for the javascript program, and further function definition for reused or similar code. I tried to divide the functionality into distinct areas of responsibility, but this could have been further optimised. Implementations of mapping values iteratively instead of hard coding could also be an improvement.

### Personal reflections

I got to solidify my understanding of basic Javascript during this laboration, as well as practice the structuring of a more intermediate system in terms of function definition. I found the assignment very challenging, and I found myself having to restructure a large portion of the program as a better design idea took shape, which cost a lot of time. I feel a slight lack of knowledge around how to design system architecture on a conceptual level, which would have helped much for this assignment. Writing the requirements down and summarising it did help to create a basic design idea.

Like the previous lab, I very briefly studied the course material to see what subjects were required to study, and chose other more modern authoritative sources to study these subjects.


