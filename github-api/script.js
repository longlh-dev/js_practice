function getUserProfile() {
  const usernameInput = document.getElementById("username-input").value;
  const profileContainer = document.getElementById("profile-container");

  fetch(`https://api.github.com/users/${usernameInput}`)
    .then(response => response.json())
    .then(data => {
      const profileInfo = `
        <img src="${data.avatar_url}" alt="Avatar" width="100">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Username:</strong> ${data.login}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><strong>Following:</strong> ${data.following}</p>
        <p><strong>Repositories:</strong> ${data.public_repos}</p>
      `;
      profileContainer.innerHTML = profileInfo;
    })
    .catch(error => console.log(error));
}
