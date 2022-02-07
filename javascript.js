function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementsByTagName('link')[1];

    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == 'css/main.css') {
        theme.setAttribute('href', 'css/style2.css');
    } else {
        theme.setAttribute('href', 'css/main.css');
    }
}