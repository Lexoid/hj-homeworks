const contactList = document.querySelector('.contacts-list');
const email = document.getElementById('card-email');
const phone = document.getElementById('card-phone');
const importContacts = JSON.parse(loadContacts());

contactList.innerHTML = '';

for (let contact of importContacts) {
  let element = document.createElement('li');
  let strong = document.createElement('strong');
  strong.innerHTML = contact.name;
  element.dataset.email = contact.email;
  element.dataset.phone = contact.phone;
  contactList.appendChild(element);
  element.appendChild(strong);  
}