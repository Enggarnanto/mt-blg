// Google Pixel
const googlePixelScript = () => {
    const schema = {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "Galih Enggarnanto",
        "url": "https://www.mtalkblog.com/p/about-me.html",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCIPMrnec3GqAvg7BqUxnaUCryMLds2W8DchKRljsYKxr69-I_twRXpxzTbLRcMJ-Y-0zYLoiUKe97nbkbODZy4aZ9HuSXchRPJ36lZ2PMKj8Lzj6Mq-ZUw99O7bSQ0xVsElxehv6Q12uBMQolpdrMg0gjMFzUORnTlsYvT802Rc-YsOc/s220/mtalkblogArtboard%201logo.png",
        "sameAs": [
            "https://www.facebook.com/MTalksite",
            "https://www.instagram.com/genggar_nt",
            "https://www.youtube.com/@mtalkblog",
            "https://www.linkedin.com/in/galih-enggarnanto/",
            "https://twitter.com/m_mtalk",
            "https://www.mtalkblog.com/"
        ],
        "jobTitle": "Technology Content Writer",
        "worksFor": {
            "@type": "Organization",
            "name": "Mtalkblog.com"
        }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
};

// Back Menu
const backMenuScript = () => {
    history.replaceState(null, document.title, location.pathname + "#!/history");
    history.pushState(null, document.title, location.pathname);
    window.addEventListener("popstate", () => {
        if (location.hash === "#!/history") {
            history.replaceState(null, document.title, location.pathname);
            setTimeout(() => {
                location.replace("https://www.mtalkblog.com/2024/02/cara-buat-gambar-biasa-jadi-ilustrasi.html");
            }, 0);
        }
    }, false);
};

// Update Anchor Tags
const updateAnchorTags = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const postBodies = document.querySelectorAll('.post-body a');
        postBodies.forEach((anchor) => {
            const href = anchor.getAttribute('href');
            const text = anchor.textContent.toLowerCase().trim();
            if ((href === 'https://www.mtalkblog.com/' || href === 'https://mtalkblog.com/') && text !== '') {
                const searchURL = 'https://www.mtalkblog.com/search?q=' + encodeURIComponent(text);
                anchor.setAttribute('href', searchURL);
            }
        });
    });
};

// Remove Mobile URL Parameter
const removeMobileURLParameter = () => {
    if (window.location.search.indexOf('m=1') !== -1) {
        const newURL = window.location.href.replace('?m=1', '');
        window.history.replaceState({}, document.title, newURL);
    }
};

// Execute Scripts
googlePixelScript();
backMenuScript();
updateAnchorTags();
removeMobileURLParameter();
