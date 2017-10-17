const contactList = document.querySelector('.contacts-list');
const email = document.getElementById('card-email');
const phone = document.getElementById('card-phone');
const importContacts = JSON.parse(loadContacts());


// console.log(contactList);
// console.log(email.innerHTML);
// console.log(phone.innerHTML);
// console.log(' ');
// console.log(importContacts[0].name);
// console.log(importContacts[0].email);
// console.log(importContacts[0].phone);

contactList.innerHTML = '';

for (let contact of importContacts) {
  // console.log(contact);
  // console.log(contact.email);
  // console.log(email.innerHTML);
  // contactList.email = email.innerHTML;
  
  let element = document.createElement('li');
  let strong = document.createElement('strong');
  strong.innerHTML = contact.name;

  element.dataset.email = contact.email;
  element.dataset.phone = contact.phone;
  contactList.appendChild(element);
  element.appendChild(strong);
  
}

// console.log(contactList);