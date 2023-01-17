import './App.css';
import { ThemeProvider } from './components/global-styles-provider'

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <MainPage/>
      </ThemeProvider>
    </div>
  );
}

export default App;
