import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
  return (
    <div className='center-container'>
      <div className='card'>
        <div className='carousel-wrapper'>
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
            <div><img src='/tambay.png' alt="Tambay" /></div>
            <div><img src="/religious.png" alt="Religious" /></div>
            <div><img src="/balintong.png" alt="Balintong" /></div>
            <div><img src="/halloween.png" alt="Halloween" /></div>
            <div><img src="/kwismas-cuties.png" alt="Kwismas Cuties" /></div>
            <div><img src="/nav-pool.png" alt="Nav Pool" /></div>
            <div><img src="/heroes.png" alt="Heroes" /></div>
            <div><img src="/barbielou.png" alt="Barbielou" /></div>
            <div><img src="/feud.png" alt="Feud" /></div>
            <div><img src="/btsarmy.png" alt="BTS Army" /></div>
            <div><img src="/virus-variation.png" alt="Virus Variation" /></div>
          </Carousel>
        </div>

        <h3>Sign in to <b>BloxyHangout</b></h3>
        <p>Connect with fellow Bloxburgers!</p>
        <form>
          <input type="text" placeholder='Username' required /><br /><br />
          <input type='password' placeholder='Password' required /><br /><br />
          <button type='submit'>Login</button><br /><br />
        </form>
      </div>
    </div>
  );
}

export default Home; 