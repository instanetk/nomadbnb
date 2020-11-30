import NavBar from './components/common/NavBar';
import Search from './components/common/Search';
import Card from './components/common/ListCard';
import './App.css';

function App() {
  return (
    <div id="app" className="min-h-screen bg-gray-200 antialiased">
      <NavBar />
      <Search />

      <main class="px-4 py-6">
        <h3 className="text-gray-900 text-xl">Los Angeles</h3>
        <p className="text-gray-600">Live like the stars in these luxurious California estates.</p>
        <Card property="Modern home in city center" cost="1400" beds="3" baths="2" reviews="34" plus="true" />
        <Card property="Luxurious getaway" cost="900" beds="2" baths="2" reviews="42" plus="false" />
      </main>
    </div>
  );
}

export default App;
