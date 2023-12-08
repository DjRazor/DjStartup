// (async () => {
//     const userName = localStorage.getItem('loginUsername');
//     if (userName) {
//       document.querySelector('#playerName').textContent = userName;
//       setDisplay('loginControls', 'none');
//       setDisplay('playControls', 'block');
//     } else {
//       setDisplay('loginControls', 'block');
//       setDisplay('playControls', 'none');
//     }
//   })();

async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }
  
  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }
  
  async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#loginUsername')?.value;
    const password = document.querySelector('#loginPassword')?.value;
    localStorage.setItem('loginUsername', userName);
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    // .then(response => response.json())
    // .then(data => {
    //     resultDiv.innerText = data.message;
    // })
    // .catch(error => {
    //     resultDiv.innerText = 'Error occurred while sending data.';
    //     console.error('Error:', error);
    // });
  
    if (response.ok) {
      localStorage.setItem('loginUsername', userName);
      window.location.href = 'profile.html';
    } else {
      const body = await response.json();
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  }

  function prof() {
    window.location.href = 'profile.html';
  }

  function logout() {
    localStorage.removeItem('loginUsername');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  }
  
  async function getUser(email) {
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
  }
  
  function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
      playControlEl.style.display = display;
    }
  }
  