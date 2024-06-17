function showSection(sectionId) {
            // Ocultar todas as seções
            document.querySelectorAll('.search-section').forEach(function(section) {
                section.style.display = 'none';
            });
            // Mostrar a seção selecionada
            document.getElementById(sectionId).style.display = 'block';
        }

        // Mostrar a seção de busca geral inicialmente
        document.addEventListener('DOMContentLoaded', function() {
            showSection('search-general');
        });

function cadastrar() {
    titulo = prompt("Título da publicação:");
    return(titulo);
}


function openLoginDialog(userType) {
    document.getElementById('userType').value = userType;
    document.getElementById('loginDialog').style.display = 'block';
}

function closeLoginDialog() {
    document.getElementById('loginDialog').style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();
    const userType = document.getElementById('userType').value;
    const matricula = document.getElementById('matricula').value;
    const senha = document.getElementById('senha').value;

    // Lógica de autenticação (simulada)
    if (userType === 'colaborador') {
        // Redirecionar para a página de colaborador
        window.location.href = 'mvp_adm.html';
    } else {
        // Lógica para aluno (apenas um alerta neste exemplo)
        alert('Login de aluno bem-sucedido');
        closeLoginDialog();
    }
}

    window.onclick = function(event) {
        const modal = document.getElementById('loginDialog');
        if (event.target == modal) {
            closeLoginDialog();
        }
    }