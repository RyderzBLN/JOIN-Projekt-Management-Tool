/**
 * Given the index, initials, color, full name, and email of a contact, returns an
 * HTML string representing a single contact item in the contact list.
 *
 * @param {number} index - The index of the contact in the array of contacts.
 * @param {string} initials - The initials of the contact.
 * @param {string} color - The color of the contact's avatar.
 * @param {string} fullName - The full name of the contact.
 * @param {string} email - The email of the contact.
 * @returns {string} An HTML string representing the contact item.
 */

function getContactTemplate(index, initials, color, fullName, email) {
  return /*html*/ `
        <li onclick="toggleContactView(${index})" id="contact-item-${index}" class="contact-item" data-sorted-index="${index}">
            <span class="inter-extralight contact-initials" style="background-color: ${color}">${initials}</span>
            <div class="contact-info">
                <p class="inter-extralight contact-name">${fullName}</p>
                <p class="inter-extralight contact-email">${email}</p>
            </div>
        </li>
    `;
}

/**
 * Given the letter and an array of contact elements, returns an HTML string
 * representing a contact list section.
 *
 * @param {string} letter - The letter of the contact list section.
 * @param {string[]} contactElements - An array of HTML strings representing the
 *   contact elements.
 * @returns {string} An HTML string representing the contact list section.
 */
function getContactSectionTemplate(letter, contactElements) {
  return /*html*/ `
        <li class="contact-letter">
          <h3 class="inter-extralight">${letter}</h3>
        </li>
        <li class="contact-horizontal-seperator"></li>
        ${contactElements.join("")}
      `;
}
