(function () {
    let newUsersList = document.querySelector('.new-users-list');

    // READ THE PDF BEFORE STARTING
    // Step 1-5 is read the pdf.


    // Add your code here


    // the isValueNotEmpty function: 
    // returns true if value not empty
    // returns false if the value is empty
    function isValueNotEmpty(value) {
        if (value !== '') {
            return true;
        }
        return false;
    }

    // the hasWhiteSpace function
    // returns true if s has whitespace
    // returns false if s does not have whitespace
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    // adds user to the page.
    function addUser(username, city, province) {
        let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
        newUsersList.innerHTML = newUsersList.innerHTML + newUser;
    }
})();