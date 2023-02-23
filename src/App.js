import './App.css';
import redshoe from './img/running_shoes_PNG5823.png'
import vk from './img/vk.png'
import fb from './img/facebook.png'
import ig from './img/insta.png'

function App() {
  return (
    <div>
      <header>
        <div class="container">
            <div class="header-content">
                <div class="left">
                    <a href="" class="header-link">Mens</a>
                    <a href="" class="header-link">Womens</a>
                    <a href="" class="header-link">Children</a>
                </div>
                <div class="right">
                    <a href="" class="header-link">Pay</a>
                    <a href="" class="header-link">Delivery</a>
                </div>
            </div>
        </div>
    </header>
    <section class="card">
        <div class="container">
            <div class="card-content">
                <div class="left">
                    <h2>Winter Sale</h2>
                    <h1>Sales up to 90%</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam similique praesentium deleniti iure id dolores omnis assumenda mollitia ipsam tenetur deserunt error cupiditate veritatis asperiores natus, tempora non earum cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quaerat repudiandae quo, aliquid nisi, cupiditate corporis, accusamus reiciendis voluptas hic soluta non aperiam accusantium temporibus saepe doloremque assumenda totam eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    <button>Look at models</button>
                </div>
                <div class="right">
                    <h2>9 900 ₽</h2>
                    <h1>1 900 ₽</h1>
                    <img src={redshoe} alt="red-shoe" />
                </div>
            </div>
        </div>
    </section>
    <section class="delivery">
        <div class="container">
            <div class="delivery-content">
                <h1>Free Delivery <span> at 3000 ₽</span></h1>
                <p>Make an order and recieve a gift</p>
            </div>
        </div>
    </section>
    <section class="coupon">
        <div class="container">
            <div class="coupon-content">
                <h1>Recieve coupons and gifts</h1>
                <input type="text" placeholder="Your E-mail" />
                <button>Sign Up</button>
            </div>
            
        </div>
    </section>
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="container-1">
                    <h2>Main Links</h2>
                    <h3>About the company</h3>
                    <h3>Catalog</h3>
                    <h3>Delivery</h3>
                    <h3>How to pay</h3>
                </div>
                <div class="container-2">
                    <h2>Category</h2>
                    <h3>Men apparel</h3>
                    <h3>Women apparel</h3>
                    <h3>Children apparel</h3>
                    <h3>For animals</h3>
                </div>
                <div class="container-3">
                    <h2>Useful links</h2>
                    <h3>Size table</h3>
                    <h3>Model blogs</h3>
                    <h3>Our mission</h3>
                </div>
                <div class="container-4">
                    
                    <h2>Social Media</h2>
                    <div class="pic1">
                        
                        <h3><img src={vk} alt="" /> VK.com</h3>
                    </div>
                    <div class="pic2">
                        
                        <h3><img src={fb} alt="" /> Facebook</h3>
                    </div>
                    <div class="pic3">                       
                        
                        <h3><img src={ig} alt="" /> Instagram</h3>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <section class="bottom">
        <p>Copyright © 2020. All right protected</p>
        <p>Privacy Policy</p>
    </section>
    </div>
  );
}

export default App;
