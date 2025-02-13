const games = [
    { name: "Minecraft", url: "https://www.minecraft.net/" },
    { name: "Roblox", url: "https://www.roblox.com/" },
    { name: "Fortnite", url: "https://www.epicgames.com/fortnite/" },
    { name: "Among Us", url: "https://www.innersloth.com/games/among-us/" },
    { name: "Valorant", url: "https://playvalorant.com/" },
    { name: "Apex Legends", url: "https://www.ea.com/games/apex-legends" },
    { name: "GTA V", url: "https://www.rockstargames.com/V/" },
    { name: "Call of Duty", url: "https://www.callofduty.com/" }
];

// Function to load games into the list
function loadGames() {
    const gameList = document.getElementById('gameList');
    gameList.innerHTML = ""; // Clear previous entries

    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');

        const gameLink = document.createElement('a');
        gameLink.href = game.url;
        gameLink.textContent = game.name;
        gameLink.target = "_blank"; // Opens in a new tab

        gameItem.appendChild(gameLink);
        gameList.appendChild(gameItem);
    });
}

// Function to filter games based on search input
function filterGames() {
    let input = document.getElementById('searchBox').value.toLowerCase();
    document.querySelectorAll('.game-item').forEach(game => {
        game.style.display = game.innerText.toLowerCase().includes(input) ? "block" : "none";
    });
}

// Load games when the page loads
document.addEventListener("DOMContentLoaded", loadGames);
