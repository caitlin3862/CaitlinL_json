const usersCont = document.getElementById('users');
const postsCont = document.getElementById('posts');

const users = ['Iri_mina', 'raidahhh', 'catelee'];
const pfps = ['cat.jpeg', 'raida.jpeg', 'cate.jpeg'];
const ids = [1, 2, 3];

ids.forEach((userId, idx) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      const userCard = `
        <div class="user-card">
          <img src="${pfps[idx]}" alt="${users[idx]}'s pfp">
          <h3>${users[idx]}</h3>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>City:</strong> ${user.address.city}</p>
        </div>
      `;
      usersCont.innerHTML += userCard;
    });

  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(posts => {
      posts.forEach(post => {
        const postCard = `
          <div class="post-card">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <p><strong>Uploaded by:</strong> ${users[idx]}</p>
          </div>
        `;
        postsCont.innerHTML += postCard;
      });
    });
});
