const firebaseConfig = {
    apiKey: "AIzaSyBBggmmc7yiLVU01CfCXvXuW7EXNEq9wMA",
    authDomain: "fir-f1de7.firebaseapp.com",
    projectId: "fir-f1de7",
    appId: "1:367720011407:web:85e34ee9fbd545d06702fa"
};

const BRAND_SETTINGS = {
    schoolName: "The Lalit Royal Academy",
    tagline: "ROYAL ADMISSION SYSTEM",
    logoPath: "assets/logo.png"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function setupUI() {
    // Check if UI already exists to prevent duplicates
    if (document.getElementById('nav-toggle')) return;

    const uiHTML = `
        <div id="nav-toggle" class="nav-toggle"><span></span><span></span><span></span></div>
        <div id="sidebar" class="sidebar">
            <h3>${BRAND_SETTINGS.schoolName}</h3>
            <nav class="side-nav">
                <a href="index.html">🏠 Dashboard</a>
                <a href="#">📝 Add Student</a>
                <a href="#">🔍 Search</a>
            </nav>
        </div>
        <div id="overlay" class="overlay"></div>`;
    
    document.body.insertAdjacentHTML('afterbegin', uiHTML);

    const toggle = document.getElementById('nav-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    toggle.onclick = () => {
        toggle.classList.toggle('active');
        sidebar.classList.toggle('open');
        overlay.classList.toggle('show');
    };

    overlay.onclick = () => {
        toggle.classList.remove('active');
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    };

    // Branding load
    if(document.getElementById('formTitle')) document.getElementById('formTitle').innerText = BRAND_SETTINGS.schoolName;
    if(document.getElementById('brandLabel')) document.getElementById('brandLabel').innerText = BRAND_SETTINGS.tagline;
}

// Ye ensure karta hai ki page load hote hi menu ban jaye
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupUI);
} else {
    setupUI();
}
