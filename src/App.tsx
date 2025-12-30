import AppRoutes from './routes/routes';
import Footer from './shared/components/Footer/Footer';
import Header from './shared/components/Header/Header';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className='app_main'>
        <div className='container'>
          <AppRoutes />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
