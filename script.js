// NAVBAR

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        navLinks.forEach((link) => {
            link.classList.remove("active");
        });

        link.classList.add("active");
    });
});

// HAMBURGER MENU

function toggleMenu() {
    const menu = document.querySelector(".menu");
    const openMenu = document.getElementById("open-menu");
    const closeMenu = document.getElementById("close-menu");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
        openMenu.style.display = "flex";
        closeMenu.style.display = "none";
    } else {
        menu.style.display = "flex";
        openMenu.style.display = "none";
        closeMenu.style.display = "flex";
    }
}

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        const menu = document.querySelector(".menu");
        const openMenu = document.getElementById("open-menu");
        const closeMenu = document.getElementById("close-menu");

        menu.style.display = "none";
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
    });
});

// PROJECTS SECTION

const projects = [
    {
        title: "Pokemon Battles",
        description:
            "Pokemon Battles is an immersive browser game that lets you choose your Pokemon, strategize your attacks, and engage in thrilling battles against randomly selected opponents. With pure simplicity and fun in mind, it offers an easy way to dive into the world of Pokemon. This game is built using JavaScript, CSS, and HTML, and it's powered by the PokeAPI for an authentic Pokemon experience.",
        image: "./images/pokemon-battles.png",
        live: "https://poke-battles.netlify.app/",
        github: "https://github.com/AnnaTas77/pokemon-battles",
    },
    {
        title: "Books-Buzz",
        description:
            "Books-Buzz is a responsive web application that provides tools to organize reading preferences, discover new books, and engage with a community of book enthusiasts. Powered by the Google Books API, it offers advanced features including barcode scanning, voice-activated search, and manual search by title, author, or ISBN.",
        image: "./images/books-buzz.png",
        live: "https://books-buzz-app.netlify.app/",
        github: "https://github.com/AnnaTas77/books-app",
    },
    {
        title: "NC News",
        description:
            "NC News is a full-stack project, drawing inspiration from Reddit's features. With a custom backend News API, it powers a seamless user experience. The frontend acts as the gateway, offering easy access to diverse API endpoints. Users can effortlessly read articles, sort them by topic, date, comment count, and votes count, and actively engage by sharing their thoughts through comments.",
        image: "./images/NcNews.png",
        live: "https://nc-news-anna.netlify.app/",
        github: "https://github.com/AnnaTas77/nc-news-frontend-project",
    },
    {
        title: "Reddit Geeks",
        description:
            "Reddit Geeks offers a user-friendly platform to explore and keep track of favourite subreddit topics. Each subreddit topic is neatly contained within its dedicated box, displaying all associated articles. Users have the flexibility to add, edit, or remove selected topics, ensuring a personalized and enjoyable browsing experience.",
        image: "./images/RedditScreenshot7.jpg",
        live: "https://annatas77.github.io/redditgeeks/",
        github: "https://github.com/AnnaTas77/redditgeeks",
    },
    {
        title: "Weather App",
        description:
            "This weather app uses the Fetch API to retrieve current weather data from the Open Weather Map API. It features an Autocomplete function that suggests cities and highlights matching letters in bold. The city data is sourced from the Api Ninjas API, streamlining city selection for a smoother user experience.",
        image: "./images/WeatherApp_merged7A.jpg",
        live: "https://annatas-weather-app.netlify.app/",
        github: "https://github.com/AnnaTas77/weather-app",
    },
    {
        title: "Meteorite Landings Interactive Map",
        description:
            "This project features an interactive map of meteorite landings, sourcing data from NASA's Meteorite Landings API. Users can conveniently sort the table of all known landings by name, year of discovery, and mass in grams by clicking the column headings.",
        image: "./images/meteorites-website-best.png",
        live: "https://meteorite-landings-interactive-map.netlify.app/",
        github: "https://github.com/AnnaTas77/meteorite-landings-map",
    },
];

const projectContainer = document.getElementById("project-container");

projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="Screenshot of ${project.title} project">
        </div>
        <div class="project-details">
            <p class="project-title">${project.title}</p>
            <p class="project-description">${project.description}</p>
            <div class="project-links">
                 <a href="${project.live}" target="_blank">Live</a>
                 <a href="${project.github}" target="_blank">Code</a>
            </div>
        </div>
    `;

    projectContainer.appendChild(projectCard);
});
