let token = localStorage.getItem('token');

if (token) {
  showTasks();
}

async function register() {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  
  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    const data = await res.json();
    
    if (res.ok) {
      document.getElementById('register-success').textContent = data.message;
      document.getElementById('register-error').textContent = '';
      setTimeout(showLogin, 1500);
    } else {
      document.getElementById('register-error').textContent = data.error;
      document.getElementById('register-success').textContent = '';
    }
  } catch (err) {
    document.getElementById('register-error').textContent = 'Registration failed';
  }
}

async function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    const data = await res.json();
    
    if (res.ok) {
      token = data.token;
      localStorage.setItem('token', token);
      showTasks();
      loadTasks();
    } else {
      document.getElementById('login-error').textContent = data.error;
    }
  } catch (err) {
    document.getElementById('login-error').textContent = 'Login failed';
  }
}

function logout() {
  token = null;
  localStorage.removeItem('token');
  document.getElementById('auth-section').classList.remove('hidden');
  document.getElementById('tasks-section').classList.add('hidden');
  showLogin();
}

function showRegister() {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('register-form').classList.remove('hidden');
}

function showLogin() {
  document.getElementById('register-form').classList.add('hidden');
  document.getElementById('login-form').classList.remove('hidden');
}

function showTasks() {
  document.getElementById('auth-section').classList.add('hidden');
  document.getElementById('tasks-section').classList.remove('hidden');
}

async function createTask() {
  const title = document.getElementById('task-title').value;
  const description = document.getElementById('task-description').value;
  
  try {
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ title, description })
    });
    
    const data = await res.json();
    
    if (res.ok) {
      document.getElementById('task-title').value = '';
      document.getElementById('task-description').value = '';
      document.getElementById('task-error').textContent = '';
      loadTasks();
    } else {
      document.getElementById('task-error').textContent = data.error;
    }
  } catch (err) {
    document.getElementById('task-error').textContent = 'Failed to create task';
  }
}

async function loadTasks() {
  try {
    const res = await fetch('/api/tasks', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    
    const tasks = await res.json();
    
    const list = document.getElementById('tasks-list');
    list.innerHTML = tasks.map(task => `
      <div class="task" id="task-${task.id}">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <div class="task-actions">
          <button class="btn-edit" onclick="editTask('${task.id}', '${task.title}', '${task.description}')">Edit</button>
          <button class="btn-delete" onclick="deleteTask('${task.id}')">Delete</button>
        </div>
      </div>
    `).join('');
  } catch (err) {
    console.error('Failed to load tasks');
  }
}

async function editTask(id, title, desc) {
  const newTitle = prompt('Enter new title:', title);
  const newDesc = prompt('Enter new description:', desc);
  
  if (!newTitle && !newDesc) return;
  
  try {
    const res = await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ 
        title: newTitle || title, 
        description: newDesc || desc 
      })
    });
    
    if (res.ok) {
      loadTasks();
    }
  } catch (err) {
    alert('Failed to update task');
  }
}

async function deleteTask(id) {
  if (!confirm('Delete this task?')) return;
  
  try {
    const res = await fetch(`/api/tasks/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    
    if (res.ok) {
      loadTasks();
    }
  } catch (err) {
    alert('Failed to delete task');
  }
}
