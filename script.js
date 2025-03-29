const profiles = [
    {
        id: 1,
        name: "Melena Marshall",
        position: "CEO / FOUNDER",
        image: "../images/profile.jpg",
        bio: "With over 15 years of experience in business development and leadership, Melena has helped transform dozens of startups into successful enterprises. Her strategic vision and innovative approach have earned her recognition as one of the top business minds in the industry.",
        bio2: "Before founding our company, Melena held executive positions at several Fortune 500 companies, where she spearheaded initiatives that drove growth and profitability. She holds an MBA from Harvard Business School and is a frequent speaker at international business conferences.",
        stats: [
            { value: "15+", label: "Years Experience" },
            { value: "200+", label: "Clients Helped" },
            { value: "98%", label: "Success Rate" }
        ],
        social: ["facebook", "twitter", "linkedin", "instagram"]
    },
    {
        id: 2,
        name: "Peter Thomas",
        position: "INVESTMENT EXPERT",
        image: "../images/profile2.jpg",
        bio: "Peter brings a wealth of knowledge in investment strategies and financial planning. With a background in economics and finance from Princeton University, he has helped clients navigate complex financial markets for over a decade.",
        bio2: "Specializing in portfolio management and risk assessment, Peter has a proven track record of delivering above-market returns for his clients. His analytical approach and deep understanding of global markets make him an invaluable asset to our team.",
        stats: [
            { value: "12+", label: "Years Experience" },
            { value: "$1.2B", label: "Assets Managed" },
            { value: "24%", label: "Avg. ROI" }
        ],
        social: ["twitter", "linkedin", "medium"]
    },
    {
        id: 3,
        name: "Richard Smith",
        position: "CLIENT MANAGER",
        image: "../images/profile3.jpg",
        bio: "Richard is our client relations specialist with a passion for building long-term relationships. His background in psychology and communication allows him to understand client needs at a deep level and provide tailored solutions.",
        bio2: "With a career spanning customer service, sales, and account management, Richard has developed a unique approach to client satisfaction that focuses on transparency, trust, and measurable results. He's known for his ability to turn challenging situations into opportunities for growth.",
        stats: [
            { value: "10+", label: "Years Experience" },
            { value: "99%", label: "Client Retention" },
            { value: "4.9/5", label: "Client Rating" }
        ],
        social: ["facebook", "instagram", "youtube"]
    },
    {
        id: 4,
        name: "Froster Collings",
        position: "STOCK EXPERT",
        image: "../images/profile4.jpg",
        bio: "Froster is our resident stock market guru with a decade of experience analyzing market trends and identifying high-potential investments. His unconventional approach to market analysis has consistently outperformed traditional models.",
        bio2: "A former hedge fund manager, Froster now focuses on educating individual investors and helping them make informed decisions. His weekly market insights newsletter has over 50,000 subscribers and is widely regarded as one of the most accurate predictors of market movements.",
        stats: [
            { value: "8+", label: "Years Experience" },
            { value: "87%", label: "Accuracy Rate" },
            { value: "50K+", label: "Followers" }
        ],
        social: ["twitter", "youtube", "discord"]
    }
];

// Show profile function
function showProfile(profileNumber) {
    const profile = profiles.find(p => p.id === profileNumber);
    if (!profile) return;
    
    let profileHTML = `
        <div class="profile-content">
            <div class="profile-img">
                <img src="${profile.image}" alt="${profile.name}">
            </div>
            <div class="profile-info">
                <h2>${profile.name}</h2>
                <p class="profile-position">${profile.position}</p>
                <p class="profile-bio">${profile.bio}</p>
                <p class="profile-bio">${profile.bio2}</p>
                
                <div class="profile-stats">
    `;
    
    profile.stats.forEach(stat => {
        profileHTML += `
            <div class="stat-item">
                <h3>${stat.value}</h3>
                <p>${stat.label}</p>
            </div>
        `;
    });
    
    profileHTML += `
                </div>
                <div class="social-links">
    `;
    
    profile.social.forEach(social => {
        profileHTML += `
            <a href="#"><i class="fab fa-${social}"></i></a>
        `;
    });
    
    profileHTML += `
                </div>
            </div>
        </div>
    `;
    
    // Insert into modal
    document.getElementById('profileContent').innerHTML = profileHTML;
    
    // Show modal
    document.getElementById('profileModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset form and hide success message
    document.getElementById('contactForm').reset();
    document.getElementById('contactForm').style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';
}

// Close modal
function closeModal() {
    document.getElementById('profileModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close when clicking outside modal
document.getElementById('profileModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Hide form and show success message
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    
    // Scroll to success message
    document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });
});