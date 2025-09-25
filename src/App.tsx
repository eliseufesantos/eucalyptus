import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-6">
        <h1 className="text-2xl font-bold text-gray-900">Meu Projeto</h1>
      </header>
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bem-vindo
          </h2>
          <p className="text-lg text-gray-600">
            Esta é a estrutura básica para o seu novo projeto.
          </p>
        </div>
      </main>
      
      <footer className="mt-auto p-6 text-center text-gray-600">
        <p>&copy; 2024 Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;