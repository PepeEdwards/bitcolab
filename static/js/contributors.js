// Fetch GitHub profile information for contributors
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.contributor-card');
  
  cards.forEach((card, index) => {
    const username = card.dataset.github;
    if (!username) return;
    
    fetch('https://api.github.com/users/' + username)
      .then(response => {
        if (!response.ok) throw new Error('GitHub API error');
        return response.json();
      })
      .then(data => {
        const img = card.querySelector('img');
        const nameSpan = card.querySelector('.contributor-name');
        const link = card.querySelector('a');
        
        if (img && data.avatar_url) {
          img.src = data.avatar_url;
          img.alt = data.name || username;
        }
        
        if (nameSpan) {
          nameSpan.textContent = '@' + (data.login || username);
        }
        
        if (link && data.html_url) {
          link.href = data.html_url;
        }
      })
      .catch(err => {
        console.error('Error fetching GitHub profile for ' + username + ':', err);
      });
  });
});
