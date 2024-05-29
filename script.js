//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
            const usernameInput = document.getElementById("username");
            const passwordInput = document.getElementById("password");
            const rememberMeCheckbox = document.getElementById("checkbox");
            const loginForm = document.getElementById("loginForm");
            const existingButton = document.getElementById("existing");

            // Check if there are saved details in local storage
            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");

            if (savedUsername && savedPassword) {
                existingButton.style.display = "block";
            }

            loginForm.addEventListener("submit", function(event) {
                event.preventDefault();

                const username = usernameInput.value;
                const password = passwordInput.value;
                const rememberMe = rememberMeCheckbox.checked;

                if (rememberMe) {
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                } else {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                }

                alert(`Logged in as ${username}`);
            });

            existingButton.addEventListener("click", function() {
                alert(`Logged in as ${savedUsername}`);
            });
        });