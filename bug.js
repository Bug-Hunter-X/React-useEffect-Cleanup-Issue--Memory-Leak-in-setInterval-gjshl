```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here! The cleanup function should reset the interval.
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => {console.log('cleanup');}; // Missing proper cleanup
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```