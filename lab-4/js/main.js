(function () {
    let newUsersList = document.querySelector('.new-users-list');
    let newUserForm = document.querySelector('#yourFormId'); // replace 'yourFormId' with the id of your form

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

    newUserForm.addEventListener('submit', function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Create variables for each input element
        let usernameElement = event.target.elements.username;
        let cityElement = event.target.elements.city;
        let provinceElement = event.target.elements.province;

        // Create variables for each input element value
        let username = usernameElement.value;
        let city = cityElement.value;
        let province = provinceElement.value;

        // Validate the form values
        let isFormValid = true;

        // Validate username
        if (!isValueNotEmpty(username) || hasWhiteSpace(username)) {
            isFormValid = false;
            usernameElement.classList.add('is-invalid');
            document.getElementById('usernameError').textContent = 'Username is invalid.';
        } else {
            usernameElement.classList.remove('is-invalid');
            document.getElementById('usernameError').textContent = '';
        }

        // Validate city
        if (!isValueNotEmpty(city)) {
            isFormValid = false;
            cityElement.classList.add('is-invalid');
            document.getElementById('cityError').textContent = 'City is invalid.';
        } else {
            cityElement.classList.remove('is-invalid');
            document.getElementById('cityError').textContent = '';
        }

        // Validate province
        if (!isValueNotEmpty(province)) {
            isFormValid = false;
            provinceElement.classList.add('is-invalid');
            document.getElementById('provinceError').textContent = 'Province is invalid.';
        } else {
            provinceElement.classList.remove('is-invalid');
            document.getElementById('provinceError').textContent = '';
        }

        // Only call the addUser function if the form is valid
        if (isFormValid) {
            addUser(username, city, province);

            // Clear the form inputs
            usernameElement.value = '';
            cityElement.value = '';
            provinceElement.value = '';
        }

        // Log the values to the console
        console.log('usernameElement:', usernameElement, 'username:', username, city, province);
    });
})();