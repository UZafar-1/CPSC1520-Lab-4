(function () {
    let newUsersList = document.querySelector('.new-users-list');
    const form = document.querySelector('.new-user-form'); // Ensure you select the form

    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Create variables for each input element
        const usernameElement = event.target.elements.username;
        const cityElement = event.target.elements.city;
        const provinceElement = event.target.elements.province;

        // Create variables for each input element value
        const username = usernameElement.value.trim(); // Trim whitespace
        const city = cityElement.value.trim(); // Trim whitespace
        const province = provinceElement.value.trim(); // Trim whitespace

        // Initialize form validity flag
        let isFormValid = true;

        // Validating username (no whitespace and not empty)
        if (!hasWhiteSpace(username) && isValueNotEmpty(username)) {
            usernameElement.classList.remove('is-invalid');
        } else {
            isFormValid = false;
            usernameElement.classList.add('is-invalid');
        }

        // Validating the city (should not be empty)
        if (isValueNotEmpty(city)) {
            cityElement.classList.remove('is-invalid');
        } else {
            isFormValid = false;
            cityElement.classList.add('is-invalid');
        }

        // Validating the province (should not be empty)
        if (isValueNotEmpty(province)) {
            provinceElement.classList.remove('is-invalid');
        } else {
            isFormValid = false;
            provinceElement.classList.add('is-invalid');
        }

        // If the form is valid, add the user and reset the form
        if (isFormValid) {
            addUser(username, city, province);
            form.reset(); // Reset the form values after successful addition
        }
    });

    // Check if the value is not empty
    function isValueNotEmpty(value) {
        return value !== '';
    }

    // Check if the value has whitespace
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    // Add user to the page
    function addUser(username, city, province) {
        let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
        </li>`;
        newUsersList.innerHTML += newUser; // Append new user to the list
    }
})();
