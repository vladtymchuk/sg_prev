const select = document.getElementById('lng')

select.addEventListener('change', navigateToLang);

function navigateToLang () {
    // console.log(window.location)
    window.location.href.includes("https://softgen.com.ua/index.html") || window.location.href === "https://softgen.com.ua"   ?
        window.location.href = 'https://softgen.com.ua/indexEng.html' :
        window.location.href = 'https://softgen.com.ua/index.html'
}
