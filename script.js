// DOM elements
const songModal = document.getElementById('songModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalArtist = document.getElementById('modalArtist');
const modalChords = document.getElementById('modalChords');

// Modal functionality
function openModal(song) {
    modalTitle.textContent = song.title;
    modalArtist.textContent = song.artist;
    modalChords.textContent = song.chords;
    songModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    songModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
songModal.addEventListener('click', (e) => {
    if (e.target === songModal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && songModal.classList.contains('active')) {
        closeModal();
    }
});

// Create song card
function createSongCard(song) {
    const card = document.createElement('div');
    card.className = 'song-card';
    card.innerHTML = `
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
        <div class="song-preview">${song.lyrics.split('\n')[0]}...</div>
    `;
    card.addEventListener('click', () => openModal(song));
    return card;
}

// Global variable to store all songs for search functionality
let allSongs = [];

// Load songs for each section
function loadSongs() {
    // Check which page we're on and load appropriate songs
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'songs.html') {
        // All adult songs
        const allSongsContainer = document.getElementById('allSongs');
        if (allSongsContainer) {
            // Combine all adult songs from different days
            allSongs = [
                ...thursdaySongs,
                ...fridaySongs,
                ...saturdaySongs,
                ...sundaySongs
            ];
            
            allSongs.forEach(song => {
                allSongsContainer.appendChild(createSongCard(song));
            });
            
            // Initialize search functionality
            initializeSearch();
        }
    } else if (currentPage === 'kids.html') {
        // Kids songs
        const kidsContainer = document.getElementById('kidsSongs');
        if (kidsContainer) {
            kidsSongs.forEach(song => {
                kidsContainer.appendChild(createSongCard(song));
            });
        }
    }
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterSongs);
    }
}

function filterSongs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const allSongsContainer = document.getElementById('allSongs');
    
    if (!allSongsContainer) return;
    
    // Clear current songs
    allSongsContainer.innerHTML = '';
    
    // Filter songs based on search term
    const filteredSongs = allSongs.filter(song => 
        song.title.toLowerCase().includes(searchTerm) ||
        song.artist.toLowerCase().includes(searchTerm)
    );
    
    // Display filtered songs
    filteredSongs.forEach(song => {
        allSongsContainer.appendChild(createSongCard(song));
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadSongs();
});
