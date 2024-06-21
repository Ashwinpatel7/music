const artistData = {
        edSheeran: {
            name: "Ed Sheeran",
            traits: "You are soulful and sensitive.",
            image: "https://via.placeholder.com/150" // Replace with the actual image URL
        },
        taylorSwift: {
            name: "Taylor Swift",
            traits: "Your reflection sings a Taylor Swift tune—timeless, enchanting, and filled with grace and beauty.😎",
            image: "https://media.istockphoto.com/id/1310496508/photo/rectangular-large-vintage-mirror.jpg?s=612x612&w=0&k=20&c=0HUKzHP_NQsCHhiYOYOOhfDnzwiVaCXYZ8v-ZGfmcVs=" // Replace with the actual image URL
        },
        coldplay: {
            name: "Coldplay",
            traits: "You are introspective and imaginative.",
            image: "https://via.placeholder.com/150" // Replace with the actual image URL
        },
        eminem: {
            name: "Eminem",
            traits: "You are bold and outspoken.",
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
    
