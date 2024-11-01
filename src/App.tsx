import './App.css';
import KeyboardMapping from './components/KeyboardMapping';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Windows 鍵盤 ⌨️ Mac 對照表</h1>
        <KeyboardMapping />
      </div>
    </div>
  );
}

export default App;