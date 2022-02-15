import './App.css';
import { TestProvider } from './contexts';
import AppContent from './AppContent';

function App() {
  return (
    <TestProvider>
      <AppContent />
    </TestProvider>
  );
}

export default App;
