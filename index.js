document.addEventListener('DOMContentLoaded', function() {
  const inputTarea = document.getElementById('inputTarea');
  const btnAgregar = document.getElementById('btnAgregar');
  const listaTareasPendientes = document.getElementById('listaTareasPendientes');
  const listaTareasCompletadas = document.getElementById('listaTareasCompletadas');

  btnAgregar.addEventListener('click', function() {
      const tareaTexto = inputTarea.value.trim();
      if (tareaTexto !== '') {
          agregarTareaPendiente(tareaTexto);
          inputTarea.value = '';
      }
  });

  listaTareasPendientes.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
          event.target.classList.toggle('completed');
          if (event.target.classList.contains('completed')) {
              listaTareasCompletadas.appendChild(event.target);
          } else {
              listaTareasPendientes.appendChild(event.target);
          }
      }
  });

  function agregarTareaPendiente(texto) {
      const nuevaTarea = document.createElement('li');
      nuevaTarea.textContent = texto;
      listaTareasPendientes.appendChild(nuevaTarea);
  }
});
