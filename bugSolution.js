```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId); // Correct cleanup
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```