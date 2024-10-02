const users = JSON.parse(localStorage.getItem('users')) || [];

        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'flex';
            if (modalId === 'usersModal') showUsers();
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        function register(event) {
            event.preventDefault();

            const username = document.getElementById('registerUsername').value.trim();
            const password = document.getElementById('registerPassword').value.trim();
            const role = document.getElementById('registerRole').checked ? 'admin' : 'user';
            const error = document.getElementById('registerError');

            if (users.some(user => user.username === username)) {
                error.textContent = 'Имя пользователя уже занято.';
                error.className = 'error';
                return;
            }

            users.push({ username, password, role });
            localStorage.setItem('users', JSON.stringify(users));
            error.textContent = 'Регистрация прошла успешно!';
            error.className = 'success';
        }

        function login() {
            const username = document.getElementById('loginUsername').value.trim();
            const password = document.getElementById('loginPassword').value.trim();
            const error = document.getElementById('loginError');

            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                error.textContent = 'Вход выполнен успешно!';
                error.className = 'success';
                if (user.role === 'admin') {
                    document.getElementById('adminButton').style.display = 'inline-block';
                } else {
                    document.getElementById('adminButton').style.display = 'none';
                    alert('Доступно только для администраторов.');
                }
                closeModal('loginModal');
            } else {
                error.textContent = 'Неверное имя пользователя или пароль.';
                error.className = 'error';
            }
        }

        function showUsers() {
            const userList = document.getElementById('userList');
            userList.innerHTML = '';
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.username} (${user.role})`;
                userList.appendChild(li);
            });
        }