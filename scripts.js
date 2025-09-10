const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        
        // Mobile links
        const signUpLinkMobile = document.getElementById('signUpLinkMobile');
        const signInLinkMobile = document.getElementById('signInLinkMobile');

        // Event listener for desktop overlay buttons
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
        
        // Event listeners for mobile text links
        signUpLinkMobile.addEventListener('click', () => {
             container.classList.add("right-panel-active");
        });
        
        signInLinkMobile.addEventListener('click', () => {
             container.classList.remove("right-panel-active");
        });
