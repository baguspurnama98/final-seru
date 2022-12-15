import { Link } from 'react-router-dom';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

export default function LandingPage() {
  return (
    <>
      <Header />
      <h1 className='text-3xl font-bold underline'>ini landing milik Febi</h1>
      <Link to='/login'>
        <button>Login</button>
      </Link>
      <Footer />
    </>
  );
}
