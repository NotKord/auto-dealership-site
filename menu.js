window.onload = function() {
    // For front-facing pages
    fetch('http://elvis.rowan.edu/~hymank68/webdev/project/menu.html')
    .then(response => response.text())
    .then(data => {
        const menuContainer = document.getElementById('menu-container');
        if (menuContainer) {
            menuContainer.innerHTML = data;
        }
    });

    fetch('http://elvis.rowan.edu/~hymank68/webdev/project/bottom.html')
    .then(response => response.text())
    .then(data => {
        const bottomContainer = document.getElementById('bottom-container');
        if (bottomContainer) {
            bottomContainer.innerHTML = data;
        }
    });

    // For backend pages
    fetch('http://elvis.rowan.edu/~hymank68/webdev/project/backendmenu.html')
    .then(response => response.text())
    .then(data => {
        const backendMenuContainer = document.getElementById('backend-menu-container');
        if (backendMenuContainer) {
            backendMenuContainer.innerHTML = data;
        }
    });

    fetch('http://elvis.rowan.edu/~hymank68/webdev/project/backendbottom.html')
    .then(response => response.text())
    .then(data => {
        const backendBottomContainer = document.getElementById('backend-bottom-container');
        if (backendBottomContainer) {
            backendBottomContainer.innerHTML = data;
        }
    });
};