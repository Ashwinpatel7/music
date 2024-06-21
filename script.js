const artistData = {
        edSheeran: {
            name: "Ed Sheeran",
            traits: "You are soulful and sensitive, with a deep appreciation for heartfelt lyrics and melodies.",
            image: "https://via.placeholder.com/150" // Replace with the actual image URL
        },
        taylorSwift: {
            name: "Taylor Swift",
            traits: "You are expressive and romantic, often finding connections to personal experiences through music.",
            image: "https://st.depositphotos.com/70843308/60469/i/450/depositphotos_604697876-stock-photo-taylor-swift-wearing-oscar-renta.jpg" // Replace with the actual image URL
        },
        coldplay: {
            name: "Coldplay",
            traits: "You are introspective and imaginative, enjoying music that explores complex emotions and themes.",
            image: "https://via.placeholder.com/150" // Replace with the actual image URL
        },
        eminem: {
            name: "Eminem",
            traits: "You are bold and outspoken, with a strong sense of individuality and a penchant for lyrical storytelling.",
            image: "https://via.placeholder.com/150" // Replace with the actual image URL
        }
    };
    
    document.addEventListener("DOMContentLoaded", () => {
        const button = document.getElementById('showTraitsButton');
        button.addEventListener('click', showCharacterTraits);
    });
    
    function showCharacterTraits() {
        const select = document.getElementById("artist-select");
        const result = document.getElementById("result");
        const artistKey = select.value;
    
        if (artistKey) {
            const artist = artistData[artistKey];
            result.innerHTML = `
                <img src="${artist.image}" alt="${artist.name}">
                <div class="artist-info">
                    <h2>${artist.name}</h2>
                    <p>${artist.traits}</p>
                </div>
            `;
            result.style.display = "block";
    
            // Triggering animation for artist info
            setTimeout(() => {
                const artistInfo = document.querySelector('.artist-info');
                artistInfo.classList.add('show');
            }, 10);
    
            createSparkles();
        } else {
            result.innerHTML = "<p>Please select an artist.</p>";
            result.style.display = "block";
        }
    }
    
    function createSparkles() {
        const sparkleContainer = document.getElementById('sparkles');
        for (let i = 0; i < 30; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkleContainer.appendChild(sparkle);
    
            sparkle.addEventListener('animationend', () => {
                sparkle.remove();
            });
        }
    }
    