"use client"
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);
  

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
