# Campfire Songs Website

A mobile-first, responsive website for hosting lyrics and chords of songs played at campfire gatherings. Perfect for organizing music for multi-day camping trips with themed evenings.

## Features

### 🎵 **Song Organization**
- **4 Themed Evenings**: Thursday through Sunday, each with its own musical theme
- **Kids Section**: Dedicated area for children's songs
- **Complete Song Data**: Full lyrics and guitar chords for each song

### 📱 **Mobile-First Design**
- Responsive layout that works perfectly on all devices
- Touch-friendly interface optimized for mobile use
- Collapsible navigation menu for smaller screens

### 🎸 **Song Features**
- **Interactive Song Cards**: Click to view full lyrics and chords
- **Modal View**: Clean, readable display of song content
- **Chord Formatting**: Properly formatted guitar chords with capo information
- **Artist Information**: Complete song metadata

### �� **Modern UI/UX**
- Clean, minimal design
- Smooth animations and transitions
- Intuitive navigation with smooth scrolling
- Professional typography using Inter font

## Evening Themes

### Thursday Evening
**Theme: Classic Folk & Campfire Favorites**
- Wonderwall (Oasis)
- Hey There Delilah (Plain White T's)
- Hallelujah (Jeff Buckley)

### Friday Evening
**Theme: Country & Americana**
- Wagon Wheel (Old Crow Medicine Show)
- Jolene (Dolly Parton)

### Saturday Evening
**Theme: Rock Classics & Pop Hits**
- Sweet Home Alabama (Lynyrd Skynyrd)
- Hotel California (Eagles)

### Sunday Evening
**Theme: Mellow & Acoustic**
- Landslide (Fleetwood Mac)
- The Sound of Silence (Simon & Garfunkel)

### Kids Section
**Fun and Easy Songs for Children**
- Twinkle Twinkle Little Star
- Old MacDonald Had a Farm
- The Wheels on the Bus

## Technical Details

### Built With
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: No frameworks, pure functionality
- **Font Awesome**: Icons for enhanced UI
- **Google Fonts**: Inter font family

### Key Features
- **Modular Architecture**: Song data split into separate files for easy maintenance
- **Progressive Enhancement**: Works without JavaScript
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Performance**: Optimized for fast loading
- **Cross-browser**: Compatible with all modern browsers

## Getting Started

1. **Clone or Download** the project files
2. **Open `index.html`** in your web browser
3. **Navigate** through the different evening sections
4. **Click on any song card** to view full lyrics and chords

## File Structure

```
Campfire/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # Main JavaScript functionality
├── thursday.js         # Thursday songs data
├── friday.js           # Friday songs data
├── saturday.js         # Saturday songs data
├── sunday.js           # Sunday songs data
├── kids.js             # Kids songs data
└── README.md           # Project documentation
```

## Customization

### Adding New Songs
To add new songs, edit the corresponding day file (e.g., `thursday.js`):

```javascript
const thursdaySongs = [
    {
        title: "Song Title",
        artist: "Artist Name",
        key: "C",
        chords: `Your chord progression here`,
        lyrics: `Your lyrics here`
    },
    // ... existing songs
];
```

### Adding New Days
To add a new day:
1. Create a new file (e.g., `monday.js`) with the song data
2. Add the script tag to `index.html`
3. Add the navigation link and section to `index.html`
4. Update `script.js` to load the new songs

### Modifying Themes
Update the section headers in `index.html` and add corresponding songs to the appropriate JavaScript files.

### Styling Changes
Modify `styles.css` to customize colors, fonts, and layout to match your preferences.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to contribute by:
- Adding more songs to the collection
- Improving the design or functionality
- Fixing bugs or issues
- Adding new features

---

**Made with ❤️ for music lovers and campfire enthusiasts**
