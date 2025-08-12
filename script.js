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

// Load songs for each section
function loadSongs() {
    // Check which page we're on and load appropriate songs
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'thursday.html') {
        // Thursday songs
        const thursdayContainer = document.getElementById('thursdaySongs');
        if (thursdayContainer) {
            thursdaySongs.forEach(song => {
                thursdayContainer.appendChild(createSongCard(song));
            });
        }
    } else if (currentPage === 'friday.html') {
        // Friday songs
        const fridayContainer = document.getElementById('fridaySongs');
        if (fridayContainer) {
            fridaySongs.forEach(song => {
                fridayContainer.appendChild(createSongCard(song));
            });
        }
    } else if (currentPage === 'saturday.html') {
        // Saturday songs
        const saturdayContainer = document.getElementById('saturdaySongs');
        if (saturdayContainer) {
            saturdaySongs.forEach(song => {
                saturdayContainer.appendChild(createSongCard(song));
            });
        }
    } else if (currentPage === 'sunday.html') {
        // Sunday songs
        const sundayContainer = document.getElementById('sundaySongs');
        if (sundayContainer) {
            sundaySongs.forEach(song => {
                sundayContainer.appendChild(createSongCard(song));
            });
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

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadSongs();
});
