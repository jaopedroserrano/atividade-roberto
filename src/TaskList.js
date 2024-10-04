import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, editTask, toggleTaskCompletion }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleTaskCompletion={toggleTaskCompletion}  // Passando toggleTaskCompletion para TaskItem
        />
      ))}
    </ul>
  );
}

export default TaskList;
