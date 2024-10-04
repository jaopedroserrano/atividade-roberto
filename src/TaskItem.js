import React, { useState } from 'react';

function TaskItem({ task, deleteTask, editTask, toggleTaskCompletion }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing) {
      // Salva as alterações de edição
      editTask(task.id, newTitle, newDescription);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="task-item" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Título da tarefa"
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Descrição da tarefa"
          />
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </>
      )}

      <div className="task-actions">
        <button onClick={handleEdit}>
          {isEditing ? 'Salvar' : 'Editar'}
        </button>
        <button onClick={() => deleteTask(task.id)}>Excluir</button>
        <button onClick={() => toggleTaskCompletion(task.id)}>
          {task.completed ? 'Desmarcar' : 'Concluir'}
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
