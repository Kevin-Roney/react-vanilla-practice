import './App.css';
import Button from './components/Button';

function App() {
  const list = ['dog', 'cat', 'bird', 'fish'];
  return (
    <div className='App'>
      {list.map((item, i) => (
        <Button key={i} text={item} />
      ))}
    </div>
  );
}

export default App;
