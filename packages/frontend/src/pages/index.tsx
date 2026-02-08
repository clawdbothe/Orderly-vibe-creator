/**
 * Index Page - Home page
 */

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Orderly AI Architect
          </h1>
          <p className="text-xl text-gray-600">
            Generate complex DEX applications with natural language
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">
            Describe your DEX
          </h2>

          <textarea
            className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="e.g., Create a trading page with an orderbook, chart, and order form..."
          />

          <button className="mt-6 w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
            Generate DEX
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Declarative DSL</h3>
            <p className="text-gray-600">
              No more code generation. AI generates structured DSL.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">1-Second Preview</h3>
            <p className="text-gray-600">
              Sandpack + Vite preview launches in milliseconds.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Safe & Verified</h3>
            <p className="text-gray-600">
              All actions are pre-defined and tested.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
