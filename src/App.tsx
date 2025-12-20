import './App.css';
import Footer from './shared/components/Footer/Footer';
import Header from './shared/components/Header/Header';
import AppRoutes from './routes/routes';

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
