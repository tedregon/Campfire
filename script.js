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
    
    // Set Ultimate Guitar link
    const ultimateGuitarLink = document.getElementById('ultimateGuitarLink');
    if (ultimateGuitarLink) {
        if (song.ultimateGuitarLink) {
            // Use manual link if provided
            ultimateGuitarLink.href = song.ultimateGuitarLink;
            ultimateGuitarLink.style.display = 'block';
            console.log('Setting Ultimate Guitar link to:', song.ultimateGuitarLink);
        } else {
            // Hide link if no manual link provided
            ultimateGuitarLink.style.display = 'none';
            console.log('No Ultimate Guitar link provided for this song');
        }
    } else {
        console.log('Ultimate Guitar link element not found');
    }
    
    songModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    songModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
songModal.addEventListener('click', (e) => {
    // Don't close modal if clicking on the Ultimate Guitar link
    if (e.target.closest('#ultimateGuitarLink')) {
        return;
    }
    
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
    
    // Check if we're on the kids page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'kids.html') {
        // For kids page, only show title
        card.innerHTML = `
            <div class="song-title">${song.title}</div>
        `;
    } else {
        // For other pages, show title and artist
        card.innerHTML = `
            <div class="song-title">${song.title}</div>
            <div class="song-artist">${song.artist}</div>
        `;
    }
    
    card.addEventListener('click', () => openModal(song));
    return card;
}

// Global variable to store kids songs for search functionality
let kidsSongsList = [];

// Load songs for each section
function loadSongs() {
    // Check which page we're on and load appropriate songs
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'songs.html') {
        // All adult songs
        const allSongsContainer = document.getElementById('allSongs');
        if (allSongsContainer) {
            // Sort songs alphabetically by title
            allSongs.sort((a, b) => a.title.localeCompare(b.title));
            
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
            kidsSongsList = [...kidsSongs];
            
            // Sort kids songs alphabetically by title
            kidsSongsList.sort((a, b) => a.title.localeCompare(b.title));
            
            kidsSongsList.forEach(song => {
                kidsContainer.appendChild(createSongCard(song));
            });
            
            // Initialize search functionality for kids page
            initializeKidsSearch();
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

// Kids search functionality
function initializeKidsSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterKidsSongs);
    }
}

function filterKidsSongs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const kidsSongsContainer = document.getElementById('kidsSongs');
    
    if (!kidsSongsContainer) return;
    
    // Clear current songs
    kidsSongsContainer.innerHTML = '';
    
    // Filter songs based on search term
    const filteredSongs = kidsSongsList.filter(song => 
        song.title.toLowerCase().includes(searchTerm) ||
        song.artist.toLowerCase().includes(searchTerm)
    );
    
    // Display filtered songs
    filteredSongs.forEach(song => {
        kidsSongsContainer.appendChild(createSongCard(song));
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadSongs();
    
    // Ensure Ultimate Guitar link works properly
    const ultimateGuitarLink = document.getElementById('ultimateGuitarLink');
    if (ultimateGuitarLink) {
        ultimateGuitarLink.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent modal from closing
            console.log('Ultimate Guitar link clicked, href:', ultimateGuitarLink.href);
        });
    }
});
