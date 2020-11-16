import {
  handleDeleteTodo,
  handleUpdateTodo,
} from '../pages/api/utils/crudFunctions';

export default function Todo({ todo }) {
  return (
    <div className='flex items-end'>
      <div className='bg-gray-200 flex items-center shadow-sm rounded-lg my-4 py-2 px-4 flex-1 mr-4'>
        <input
          type='checkbox'
          name='completed'
          id='completed'
          checked={todo.fields.completed || false}
          onChange={() => handleUpdateTodo(todo)}
          className='mr-2 form-checkbox h-4 w-4'
        />
        <p
          className={`flex-1 text-xl ${
            todo.fields.completed && 'line-through'
          }`}
        >
          {todo.fields.description}
        </p>
        <button
          type='button'
          className='bg-red-500 hover:bg-red-600 text-white py-2 px-2 rounded mr-2'
          onClick={() => handleDeleteTodo(todo)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='fill-current w-4 h-4'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
