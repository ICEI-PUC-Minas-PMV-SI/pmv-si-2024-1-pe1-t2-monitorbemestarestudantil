

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = { username, password }; 
    localStorage.setItem('loggedInUser', JSON.stringify(user));

   
    window.location.href = 'login.html';
});

document.getElementById('entry-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toLocaleTimeString();
    const content = document.getElementById('entry-content').value;
    const entryList = document.getElementById('entries-list');
    
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#'; 
    link.textContent = `${date} ${time}: ${content}`;
    listItem.appendChild(link);
    entryList.appendChild(listItem);

    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!user) {
        window.location.href = 'login.html'; 
        return;
    }

    let userEntries = JSON.parse(localStorage.getItem(user.username)) || [];
    userEntries.push({ date, time, content });
    localStorage.setItem(user.username, JSON.stringify(userEntries));

    document.getElementById('entry-content').value = '';
    loadEntries(); 
});

function loadEntries() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!user) {
        window.location.href = 'login.html'; 
        return;
    }

    let userEntries = JSON.parse(localStorage.getItem(user.username)) || [];
    const entryList = document.getElementById('entries-list');
    entryList.innerHTML = '';

    for (const entry of userEntries) {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.date} ${entry.time}: ${entry.content}`;
        entryList.appendChild(listItem);
    }
}


window.addEventListener('load', loadEntries);




