import { Suspense } from 'react';
import './App.css';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import AppRoutes from './routes/routes';

function App() {
  return (
    <>
      <Header />
      <main className='app_main'>
        <div className='container'>
          <Suspense>
            <AppRoutes />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
