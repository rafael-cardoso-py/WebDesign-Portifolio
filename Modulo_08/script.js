document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  function addPlayer() {
    const playerText = taskInput.value.trim();

    if (playerText === '') {
      alert('Por favor, digite o nome do jogador!');
      return;
    }

    const li = document.createElement('li');
    li.textContent = playerText;

    // Clique alterna entre Titular e Banco de Reservas
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Botão para remover jogador da lista
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();
  }

  addTaskBtn.addEventListener('click', addPlayer);

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addPlayer();
    }
  });
});