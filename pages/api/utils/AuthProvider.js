import { createContext, useEffect, useState } from 'react';

const UserContext = createContext('');

export default function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  useEffect(async () => {
    const res = await fetch('/api/me');
    if (res.ok) {
      const successfulSession = await res.json();
      setSession(successfulSession);
    } else {
      setSession(false);
    }
  }, []);
  return (
    <UserContext.Provider value={session}>{children}</UserContext.Provider>
  );
}

export { UserContext };
