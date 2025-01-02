// Function to toggle between dark and light mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('input[type="text"]').classList.toggle('dark-mode');

    // Save the theme state to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Check localStorage for theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('input[type="text"]').classList.add('dark-mode');
    }
});

// Dummy package data (you can replace this with real data from a server)
const packages = [
    { name: "&#x1F4E6; Sqlmap", description: "sqlmap is an open source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws and taking over of database (pre-installed in termuxsecurity)", link: "sqlmap.html" },
    { name: "&#x1F4E6; Nikto", description: "Nikto 2.5 is an Open Source (GPL) web server scanner which performs comprehensive tests against web servers for multiple items (pre-installed in termuxsecurity)", link: "nikto.html" },
    { name: "&#x1F4E6; Redhawk", description: "All in one tool for Information Gathering, Vulnerability Scanning and Crawling. A must have tool for all penetration testers PHP (pre-installed in termuxsecurity)", link: "redhawk.html" },
    { name: "&#x1F4E6; Dir-aka", description: "Dir-aka Vulnerability Scanner is a Python-based security tool designed for cybersecurity professionals and system administrators. It helps analyze and secure web servers by identifying sensitive files, directories, and potential misconfigurations (pre-installed in termuxsecurity)", link: "diraka.html" },
    { name: "&#x1F4E6; TPass", description: "A GUI Password strength checker written in C and PHP by Aka Usman Alibaba (pre-installed in termuxsecurity)", link: "tpass.html" },
    { name: "&#x1F4E6; Commix", description: "Commix is a free and open-source tool available on GitHub. This tool is a powerful tool used for exploiting command injection vulnerabilities in websites and web applications (pre-installed in termuxsecurity)", link: "commix.html" },
    { name: "&#x1F4E6; Maskphish", description: "MaskPhish - A tool to mask phishing URLs under normal-looking URL (pre-installed in termuxsecurity)", link: "maskphish.html" },
    { name: "&#x1F4E6; Mailfinder", description: "OSINT tool for finding email by first and last name - mishakorzik/MailFinder. (pre-installed in termuxsecurity)", link: "mailfinder.html" },
    { name: "&#x1F4E6; Zip-devil", description: "zipdevils is a Php-based security tool designed to crack zip files using bruit force attack. It helps recover a forgoten password (pre-install in termuxsecirity)", link: "zipdevil.html" },
    { name: "&#x1F4E6; Nmap Gui", description: "Nmap Gui wrapper is used to discover hosts and services on a computer network by sending packets and analyzing the responses (pre-install in termuxsecirity)", link: "nmap.html" }
    

];

// Function to search for packages
function searchPkg() {
    const query = document.getElementById('pkg-search').value.toLowerCase();
    const resultsContainer = document.getElementById('pkg-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (query.trim() === '') {
        // Clear results if the input is empty
        resultsContainer.innerHTML = '';
        return;
    }

    const results = packages.filter(pkg => pkg.name.toLowerCase().includes(query));

    if (results.length > 0) {
        results.forEach(pkg => {
            const pkgElement = document.createElement('div');
            pkgElement.classList.add('pkg-item');
            pkgElement.innerHTML = `
                <h1><a href="${pkg.link}">${pkg.name}</a></h1>
                <p>${pkg.description}</p>
            `;
            resultsContainer.appendChild(pkgElement);
        });
    } else {
        resultsContainer.innerHTML = 'No packege Found with this name you can submit it to be included<a href="submit.html">Submit</a>';
        
    }
}

// Add event listener to clear results when input is cleared
document.getElementById('pkg-search').addEventListener('input', searchPkg);