import './App.css';
import sidebar from './sidebar';
import review from './reviews';
import rating from './rating';
import visitor from './visitor';
import analysis from './sentiment';

function App() {
  const front = [sidebar(), review(), rating(), rating(), analysis(), visitor()];
  return (
    front
  );
}

export default App;
