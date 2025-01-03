```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      fetch('/api/data')
        .then(res => res.json())
        .then(data => setData(data));
    }
  }, [data]); // Only run on data change, not on count change 

  useEffect(() => {
    // Correct way: Do something with the count value 
    console.log('Count:', count);
  }, [count]);

  return <div>Count: {count}</div>;
}
```