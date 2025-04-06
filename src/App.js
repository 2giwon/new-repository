import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-white shadow w-full">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">애터미 헬스케어</h1>
        </div>
      </header>
      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              {/* Figma 디자인에 맞춰 컴포넌트 추가 */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
