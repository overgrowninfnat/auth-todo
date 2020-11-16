import { useContext } from 'react';
import useSWR from 'swr';
import fetcher from './api/utils/fetcher';
import { UserContext } from './api/utils/AuthProvider';

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';
import AddTodoForm from '../components/AddTodoForm';

export default function Home() {
  const session = useContext(UserContext);
  const { data } = useSWR('/api/getTodos', fetcher);
  return (
    <div>
      <Head>
        <title>Auth Todo App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main>
        {data?.error && (
          <div>You need to login to see and create your todossss.....</div>
        )}
        {session && <AddTodoForm />}
        {!data && typeof data !== 'undefined' && <div>Loading...</div>}
        {data && !data.error && (
          <ul>
            {data.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
