const todosCont = document.getElementById('todos');
const ids = [1, 2, 3];  

ids.forEach((userId) => {
  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then(response => response.json())
    .then(todos => {
      todos.forEach(todo => {
        const todoCard = `
          <div class="todo-card">
            <h3>${todo.title}</h3>
            <p><strong>Completion:</strong> ${todo.completed ? 'Completed' : 'Not completed'}</p>
          </div>
        `;
        todosCont.innerHTML += todoCard;
      });
    });
});
