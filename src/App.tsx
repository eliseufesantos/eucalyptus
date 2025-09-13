import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-800">Eucalyptus</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-800 transition-colors">Início</a>
              <a href="#" className="text-gray-700 hover:text-green-800 transition-colors">Sobre</a>
              <a href="#" className="text-gray-700 hover:text-green-800 transition-colors">Serviços</a>
              <a href="#" className="text-gray-700 hover:text-green-800 transition-colors">Contato</a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-800 hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-800 hover:bg-gray-100 rounded-md">Início</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-800 hover:bg-gray-100 rounded-md">Sobre</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-800 hover:bg-gray-100 rounded-md">Serviços</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-800 hover:bg-gray-100 rounded-md">Contato</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Bem-vindo à</span>{' '}
                    <span className="block text-green-600 xl:inline">Eucalyptus</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Criamos soluções inovadoras e sustentáveis para o seu negócio. 
                    Nossa expertise combina tecnologia de ponta com responsabilidade ambiental.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-colors">
                        Saiba Mais
                      </button>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10 transition-colors">
                        Contato
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="h-56 w-full bg-gradient-to-br from-green-400 to-green-600 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="mx-auto h-24 w-24 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <p className="text-lg font-medium">Imagem do Hero</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Nossos Serviços</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Soluções completas para seu negócio
              </p>
            </div>

            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Desenvolvimento Web</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">
                    Criamos aplicações web modernas e responsivas utilizando as melhores tecnologias do mercado.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Consultoria</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">
                    Oferecemos consultoria especializada para otimizar seus processos e aumentar a eficiência.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900">Eucalyptus</h3>
            <p className="mt-2 text-sm text-gray-600">
              © 2025 Eucalyptus. Todos os direitos reservados.
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Desenvolvido com React, TypeScript e Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
