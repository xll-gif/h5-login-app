import React from 'react';
import LoginPage from './components/pages/LoginPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#ffffff' }}>
      <LoginPage />
    </div>
  );
};

export default App;