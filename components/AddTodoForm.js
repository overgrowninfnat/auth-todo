import { useState } from 'react';
import { handleCreateTodo } from '../pages/api/utils/crudFunctions';

export default function AddTodoForm() {
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateTodo(description);
    setDescription('');
  };
  return (
    <form
      className='bg-white shadow-md rounded px-6 pt-6 pb-8 mt-4 mb-4'
      onSubmit={handleSubmit}
    >
      <div>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='description'
        >
          Todo Description
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6'
          placeholder='ex. Clean the house...'
          type='text'
          id='description'
          name='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type='submit'
          className='w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}
