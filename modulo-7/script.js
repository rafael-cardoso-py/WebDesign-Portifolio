// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
  // Seleção dos elementos do HTML
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  // Função para adicionar uma nova tarefa
  function addTask() {
    const taskText = taskInput.value.trim();

    // Validação: não adiciona se o campo estiver vazio
    if (taskText === '') {
      alert('Por favor, digite uma tarefa!');
      return;
    }

    // Cria os elementos HTML para a nova tarefa
    const li = document.createElement('li');
    li.textContent = taskText;

    // Adiciona evento de clique para marcar/desmarcar como concluída
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Cria o botão de remover a tarefa
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.style.cursor = 'pointer';

    // Evento para deletar a tarefa ao clicar no botão
    deleteBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // Evita que o evento de clicar no <li> seja disparado
      taskList.removeChild(li);
    });

    // Junta os elementos e adiciona à lista no HTML
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Limpa o campo de texto e volta o foco para ele
    taskInput.value = '';
    taskInput.focus();
  }

  // Evento ao clicar no botão "Adicionar"
  addTaskBtn.addEventListener('click', addTask);

  // Evento ao pressionar a tecla "Enter" no campo de texto
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});