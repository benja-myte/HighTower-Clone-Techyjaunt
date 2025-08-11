

function openMenu() {
    document.getElementById('show-menu').style.display = 'none';
    document.getElementById('hide-menu').style.display = 'block';
    document.getElementById('nav-menu').style.left = '0';
}

function closeMenu() {
    document.getElementById('show-menu').style.display = 'block';
    document.getElementById('hide-menu').style.display = 'none';
    document.getElementById('nav-menu').style.left = '100%';
}