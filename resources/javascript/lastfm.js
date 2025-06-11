const apiKey = "c5792ae7f22e83343103cba97acedc11";
const username = "Coo29";
const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`;

async function fetchNowPlaying() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Last.fm API Response:", data); // Debugging output

        if (!data.recenttracks || !data.recenttracks.track || data.recenttracks.track.length === 0) {
            document.getElementById("now-playing").innerHTML = "<p>No recent tracks found.</p>";
            return;
        }

        const nowPlayingTrack = data.recenttracks.track[0];
        const isNowPlaying = nowPlayingTrack["@attr"] && nowPlayingTrack["@attr"].nowplaying === "true";

        const artist = nowPlayingTrack.artist["#text"] || "Unknown Artist";
        const title = nowPlayingTrack.name || "Unknown Title";
        const albumArt = nowPlayingTrack.image[2]["#text"] || "https://via.placeholder.com/50";

        document.getElementById("now-playing").innerHTML = isNowPlaying ? `

            <p class="bouncy-text">${title} By <strong>${artist}</strong></p>
        ` : `<p>No track currently playing.</p>`;

    } catch (error) {
        console.error("Error fetching Last.fm data:", error);
        document.getElementById("now-playing").innerHTML = "<p>Error loading track.</p>";
    }
}

document.addEventListener("DOMContentLoaded", fetchNowPlaying);

fetchNowPlaying();
setInterval(fetchNowPlaying, 30000);