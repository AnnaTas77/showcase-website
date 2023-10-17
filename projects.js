const projects = [
    {
        title: "Books-Buzz",
        description:
            "Books-Buzz is a responsive web application that provides tools to organize reading preferences, discover new books, and engage with a community of book enthusiasts. Powered by the Google Books API, it offers advanced features including barcode scanning, voice-activated search, and manual search by title, author, or ISBN.",
        image: "./images/books-buzz.png",
        tech: ["Next.js", "Firebase", "Tailwind CSS", "CSS"],
        live: "https://books-buzz-app.netlify.app/",
        github: "https://github.com/AnnaTas77/books-app",
    },
    {
        title: "NC News",
        description:
            "NC News is a full-stack project, drawing inspiration from Reddit's features. With a custom backend News API, it powers a seamless user experience. The frontend acts as the gateway, offering easy access to diverse API endpoints. Users can effortlessly read articles, sort them by topic, date, comment count, and votes count, and actively engage by sharing their thoughts through comments.",
        image: "./images/NcNews.png",
        tech: ["PostgreSQL", "Express.js", "React", "Axios", "CSS"],
        live: "https://nc-news-anna.netlify.app/",
        github: "https://github.com/AnnaTas77/nc-news-frontend-project",
    },
    {
        title: "Reddit Geeks",
        description:
            "Reddit Geeks offers a user-friendly platform to explore and keep track of favourite subreddit topics. Each subreddit topic is neatly contained within its dedicated box, displaying all associated articles. Users have the flexibility to add, edit, or remove selected topics, ensuring a personalized and enjoyable browsing experience.",
        image: "./images/RedditScreenshot7.jpg",
        tech: ["React", "CSS"],
        live: "https://annatas77.github.io/redditgeeks/",
        github: "https://github.com/AnnaTas77/redditgeeks",
    },
    {
        title: "Weather App",
        description:
            "This weather app uses the Fetch API to retrieve current weather data from the Open Weather Map API. It features an Autocomplete function that suggests cities and highlights matching letters in bold. The city data is sourced from the Api Ninjas API, streamlining city selection for a smoother user experience.",
        image: "./images/WeatherApp_merged7A.jpg",
        tech: ["JavaScript", "CSS", "HTML"],
        live: "https://annatas-weather-app.netlify.app/",
        github: "https://github.com/AnnaTas77/weather-app",
    },
    {
        title: "Meteorite Landings Interactive Map",
        description:
            "This project features an interactive map of meteorite landings, sourcing data from NASA's Meteorite Landings API. Users can conveniently sort the table of all known landings by name, year of discovery, and mass in grams by clicking the column headings.",
        image: "./images/meteorites-website-best.png",
        tech: ["React", "Axios", "CSS", "Tailwind CSS", "HTML"],
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
                 <button><a href="${project.live}" target="_blank">Live</a></button>
                 <button><a href="${project.github}" target="_blank">Code</a></button>
                
                
            </div>
        </div>
    `;

    projectContainer.appendChild(projectCard);
});
