<template>
  <div>
    <div>
        <nav class="navbar">
    <div class="navbar-logo">
        <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg>

    </div>
    <ul class="navbar-links">
      <li v-for="(link, index) in navLinks" :key="index">
        <a :href="link.url">{{ link.name }}</a>
      </li>
    </ul>
    <div class="navbar-icons">
      <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="44px" viewBox="0 0 15 44">
<path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
</svg>
     <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path></svg>

    </div>
  </nav>
    </div>

    
    <div class="all">
      
      <div class="all-one">
        
        <div class="one-img">
        </div>
        <div class="tieude">
            <h2>iPhone 16 Pro</h2>
            <h3>Hello, Apple Intelligence.</h3>
        </div>
        <div class="all-button">
            <div class="button-one">
                <button class="more">Learn more</button>
                <button class="buy">Buy</button>
            </div>
            <div class="apple-text">
                <h3>Apple Intelligence coming this fall</h3>
            </div>
        </div>
    </div>
    <div class="all-one">
        
        <div class="two-img">
        </div>
        <div class="tieude">
            <h2>iPhone 16</h2>
            <h3>Hello, Apple Intelligence.</h3>
        </div>
        <div class="all-button">
            <div class="button-one">
                <button class="more">Learn more</button>
                <button class="buy">Buy</button>
            </div>
            <div class="apple-text">
                <h3>Apple Intelligence coming this fall</h3>
            </div>
        </div>
    </div>

    <div class="all-one">
        
        <div class="three-img">
        </div>
        <div class="tieude">
            <img src="https://www.apple.com/v/home/bt/images/logos/apple-watch-series-10/hero_logo_apple_watch_series_10__dla4dkv1wfue_large.png" alt="">
            <p>Thinstant classic</p>
        </div>
        <div class="all-button">
            <div class="button-three">
                <button class="more">Learn more</button>
                <button class="buy">Buy</button>
            </div>
            <div class="apple-text">
                
            </div>
        </div>
    </div>
    
    </div>
    
    <div class="gird">
        <div class="all-one">
        
        <div class="gird-one">
        </div>
        <div class="tieude-gird">
            <h2>AirPods 4</h2>
            <h3>Iconic.Now supersonic.</h3>
            <h3>Available with Active Noise Cancellation.</h3>
        </div>
        <div class="all-button">
            <div class="button-gird">
                <button class="more">Learn more</button>
                <button class="buy">Buy</button>
            </div>
            <div class="apple-text">
                
            </div>
        </div>
    </div>
    <div class="all-one">
        
        <div class="gird-two">
        </div>
        <div class="tieude-gird">
            <h2>AirPods Pro 2</h2>
            <h3>Hearing Aid and Hearing Test features coming </h3>
            <h3>with a free software update this fall.</h3>
        </div>
        <div class="all-button">
            <div class="button-gird">
                <button class="more">Learn more</button>
                <button class="buy">Buy</button>
            </div>
            <div class="apple-text">
                
            </div>
        </div>
    </div>

    <div class="all-one">
        
        <div class="gird-three">
        </div>
        <div class="mini">
            <h2>Ipad mini</h2>
            <h3>Hello, Apple Intelligence.</h3>
        </div>
        <div class="all-button">
            <div class="button-three">
                <button class="more">Learn more</button>
                <button class="buy">Buy</button>
            </div>
            <div class="apple-text">
                
            </div>

        </div>

    </div>
    <div class="all-one">
        
        <div class="gird-four">
        </div>
        <div class="tieude">
            <img src="https://www.apple.com/v/home/bt/images/logos/apple-watch-ultra-2/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_large.png" alt="">
            <p class="four">New finish.Never quit.</p>
        </div>
        <div class="all-button">
            <div class="button-three">
                <button class="more">Learn more</button>
                <button class="buy">Buy</button>
            </div>
            <div class="apple-text">
                
            </div>

        </div>
    </div>
      <div class="card-one">
        
        <div class="gird-five">
        </div>
        <div class="tieude">
            <img src="https://www.apple.com/v/home/bt/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_large.png" alt="">
            <p style="font-size: 21px;">Get $180-$650 in credit when you <br> trade in iPhone 12 or higher.</p>
        </div>
        <div class="all-button">
            <div class="button-three">
                <button class="more">Learn more</button>
                <button class="buy">Buy</button>
            </div>
            <div class="apple-text">
                
            </div>
        </div>
    </div>
    <div class="card-one">
        
        <div class="gird-six">
        </div>
        <div class="tieude">
            <img src="https://www.apple.com/v/home/bt/images/logos/apple-card/logo__dcojfwkzna2q_large.png" alt="">
            <p style="font-size: 21px;">Get up to 3% Daily Cash back <br> with every purchase</p>
        </div>
        <div class="all-button">
            <div class="button-three">
                <button class="more">Learn more</button>
                <button class="buy">Buy</button>
            </div>
            <div class="apple-text">
                
            </div>
        </div>
    </div>

    
    </div>
      <div class="slideShow">
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="(image, index) in images" :key="index">
        <div class="carousel__item">
          <img :src="image" :alt="'Slide ' + index" class="carousel__image" />
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>

    <div class="footer">
      <ul>
        <li><span>
        1. Apple Intelligence will be available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri <br> and device language set to U.S. English, as part of an iOS 18, iPadOS 18, and macOS Sequoia update this fall. English (Australia, Canada, New Zealand, South Africa, UK) <br> language support available this December. Some features, additional platforms, and support for additional languages, like Chinese, English (India, Singapore), French, German, <br> Italian, Japanese, Korean, Portuguese, Spanish, Vietnamese, and others, will be coming over the course of the next year.
      </span></li>
        <li><span>2. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.</span></li>
        <li><span>3. Hearing Test and Hearing Aid features expected fall 2024. They will be supported on AirPods Pro 2 with the latest firmware paired with a compatible iPhone or iPad with iOS 18 <br> or iPadOS 18 and later, and are intended for people 18 years old or older. The Hearing Aid feature will be intended for people with perceived mild to moderate hearing loss and is <br> pending FDA review.</span></li>
        <li><span>4. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old <br>  to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value <br> awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device <br> purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between <br> in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction <br> for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.</span></li>
        <li><span>
To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the <br>
 latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, <br>
 Salt Lake City Branch.
</span></li>
        <li>
          <span>
            If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
          </span>
        </li>
        <li>
          <span>
            Learn more about how Apple Card applications are evaluated at : <a href="support.apple.com/kb/HT209218.">support.apple.com</a>
          </span>
        </li>
        <li>
          <span>
            A subscription is required for Apple TV+.
          </span>
        </li>
        <li>
          <span>
            A subscription is required for Apple Arcade, Apple Fitness+, and Apple Music.
          </span>
        </li>
        <li>
          <span>
            Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
          </span>
        </li>
      </ul>
    </div>
    <hr>
     <div class="footer-links">
  <div class="footer-column">
    <h4>Shop and Learn</h4>
    <ul>
      <li><a href="#">Store</a></li>
      <li><a href="#">Mac</a></li>
      <li><a href="#">iPad</a></li>
      <li><a href="#">iPhone</a></li>
      <li><a href="#">Watch</a></li>
      <li><a href="#">Vision</a></li>
      <li><a href="#">AirPods</a></li>
      <li><a href="#">TV & Home</a></li>
      <li><a href="#">AirTag</a></li>
      <li><a href="#">Accessories</a></li>
      <li><a href="#">Gift Cards</a></li>
    </ul>
  </div>

  <div class="footer-column">
    <h4>Apple Wallet</h4>
    <ul>
      <li><a href="#">Wallet</a></li>
      <li><a href="#">Apple Card</a></li>
      <li><a href="#">Apple Pay</a></li>
      <li><a href="#">Apple Cash</a></li>
    </ul>

    <h4>Account</h4>
    <ul>
      <li><a href="#">Manage Your Apple Account</a></li>
      <li><a href="#">Apple Store Account</a></li>
      <li><a href="#">iCloud.com</a></li>
    </ul>
    
    <h4>Entertainment</h4>
    <ul>
      <li><a href="#">Apple One</a></li>
      <li><a href="#">Apple TV+</a></li>
      <li><a href="#">Apple Music</a></li>
      <li><a href="#">Apple Arcade</a></li>
      <li><a href="#">Apple Fitness+</a></li>
      <li><a href="#">Apple News+</a></li>
      <li><a href="#">Apple Podcasts</a></li>
      <li><a href="#">Apple Books</a></li>
      <li><a href="#">App Store</a></li>
    </ul>
  </div>

  <div class="footer-column">
    <h4>Apple Store</h4>
    <ul>
      <li><a href="#">Find a Store</a></li>
      <li><a href="#">Genius Bar</a></li>
      <li><a href="#">Today at Apple</a></li>
      <li><a href="#">Group Reservations</a></li>
      <li><a href="#">Apple Camp</a></li>
      <li><a href="#">Apple Store App</a></li>
      <li><a href="#">Certified Refurbished</a></li>
      <li><a href="#">Apple Trade In</a></li>
      <li><a href="#">Financing</a></li>
      <li><a href="#">Carrier Deals at Apple</a></li>
      <li><a href="#">Order Status</a></li>
      <li><a href="#">Shopping Help</a></li>
    </ul>
  </div>

  <div class="footer-column">
    <h4>For Business</h4>
    <ul>
      <li><a href="#">Apple and Business</a></li>
      <li><a href="#">Shop for Business</a></li>
    </ul>

    <h4>For Education</h4>
    <ul>
      <li><a href="#">Apple and Education</a></li>
      <li><a href="#">Shop for K-12</a></li>
      <li><a href="#">Shop for College</a></li>
    </ul>

    <h4>For Healthcare</h4>
    <ul>
      <li><a href="#">Apple in Healthcare</a></li>
      <li><a href="#">Mac in Healthcare</a></li>
      <li><a href="#">Health on Apple Watch</a></li>
      <li><a href="#">Health Records on iPhone and iPad</a></li>
    </ul>

    <h4>For Government</h4>
    <ul>
      <li><a href="#">Shop for Government</a></li>
      <li><a href="#">Shop for Veterans and Military</a></li>
    </ul>
  </div>

  <div class="footer-column">
    <h4>Apple Values</h4>
    <ul>
      <li><a href="#">Accessibility</a></li>
      <li><a href="#">Education</a></li>
      <li><a href="#">Environment</a></li>
      <li><a href="#">Inclusion and Diversity</a></li>
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Racial Equity and Justice</a></li>
      <li><a href="#">Supply Chain</a></li>
    </ul>

    <h4>About Apple</h4>
    <ul>
      <li><a href="#">Newsroom</a></li>
      <li><a href="#">Apple Leadership</a></li>
      <li><a href="#">Career Opportunities</a></li>
      <li><a href="#">Investors</a></li>
      <li><a href="#">Ethics & Compliance</a></li>
      <li><a href="#">Events</a></li>
      <li><a href="#">Contact Apple</a></li>
    </ul>
  </div>
</div>


  <footer>
  <div class="site-footer">
    <span>&copy; 2024 Apple Inc. All rights reserved.</span>
    <nav>
      <a href="#">Privacy Policy</a> |
      <a href="#">Terms of Use</a> |
      <a href="#">Sales and Refunds</a> |
      <a href="#">Legal</a> |
      <a href="#">Site Map</a>
    </nav>
    <span>United States</span>
  </div>
</footer>
  </div>
  
</template>


<script setup>
import { ref, reactive } from 'vue';
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import image1 from '@/assets/images/a.png';
import image2 from '@/assets/images/b.png';
import image3 from '@/assets/images/c.png';
import image4 from '@/assets/images/d.png';
import image5 from '@/assets/images/e.png';
import image6 from '@/assets/images/f.png';
import image7 from '@/assets/images/g.png';
import image8 from '@/assets/images/h.png';
import image9 from '@/assets/images/k.png';
import image10 from '@/assets/images/m.png';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
const navLinks = reactive([
  { name: "Store", url: "/store" },
  { name: "Mac", url: "/mac" },
  { name: "iPad", url: "/ipad" },
  { name: "iPhone", url: "/iphone" },
  { name: "Watch", url: "/watch" },
  { name: "Vision", url: "/vision" },
  { name: "AirPods", url: "/airpods" },
  { name: "TV & Home", url: "/tv-home" },
  { name: "Entertainment", url: "/entertainment" },
  { name: "Accessories", url: "/accessories" },
  { name: "Support", url: "/support" }
]);

</script>


<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.four{
  color: #fff;
}
.all{
  width: 100%;
  height: 2067px;
}
.tieude-gird h2{
  color: #fff;
    font-size: 56px;
    line-height: 1.07143;
    font-weight: 600;
    margin-top: -240px;
}
.tieude-gird h3{
  color: #fff;
}
.mini h2{
  color: #1d1c1c;
   font-size: 56px;
    line-height: 1.07143;
    font-weight: 600;
    margin-top: -640px;
}
.mini h3{
  text-align: center;
  font-size: 34px;
  margin-left: 12px;
  margin-top: 10px;
}

.mini p{
  text-align: center;
  font-size: 25px;
  margin-left: 10px;
}
.card-one{
  width: 100%;
  margin-top: 410px;
}
.tieude h2{
    color: #fff;
    font-size: 56px;
    line-height: 1.07143;
    font-weight: 600;
    margin-top: -640px;
}
.tieude img{
  margin: 0 auto;
  margin-top: -640px;
}
.tieude p{
  text-align: center;
  font-size: 40px;
  margin-left: 10px;
  margin-top: 5px;
}
.tieude h3{
    color: #fff;
}
.button-one  {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 420px;

}
.button-gird{
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
}
.button-three  {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;

}
.apple-text h3{
  color: #86868b;
  font-size: 15px;
  line-height: 1.28577;
  font-weight: 400;
  margin-top: 25px;
}
.more{
    width: 130px;
    height: 45px;
    padding-left: 21px;
    padding-right: 21px;
    padding-top: 11px;
    padding-bottom: 11px;
    border-radius: 40px;
}
.buy{
    width: 85px;
    height: 45px;
    background: rgba(0, 0, 0, 0);
    color: #06c;
    border-style: solid;
    border-color: #06c;
    padding-left: 21px;
    padding-right: 21px;
    padding-top: 11px;
    padding-bottom: 11px;
    border-radius: 40px;
    padding: 2px;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1d1c1c;
  padding: 10px 20px;
  height: 45px;
  width: 100%;
  position: fixed;
  top:0;
  z-index: 9999999999;
}

.navbar-logo img {
  height: 30px;
}

.navbar-links {
  display: flex;
  list-style: none;
  padding: 0;
  gap: 20px;
}
.navbar-links a[data-v-e3c25b24] {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -.01em;
    color: rgb(255 255 255 / 80%);
}

.navbar-links li {
  margin: 0 10px;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-size: 14px;
}

.navbar-icons {
  display: flex;
  align-items: center;
}

.navbar-icons a {
  color: white;
  margin-left: 20px;
  font-size: 18px;
}

svg {
    height: 54px;
    width: 54px;
    fill: #fff;
    display: flex;
    margin-top: 4px;
    
}
.one-img {
    width: 100%;
    height: 692px;   
    background-image: url('https://www.apple.com/v/home/bt/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_largetall.jpg');
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center; 
    margin-top: 45px;
}
.two-img {
    width: 100%;
    height: 692px;   
    background-image: url('https://www.apple.com/v/home/bt/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_large.jpg');
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center; 
    margin-top: 45px;
}
.three-img {
    width: 100%;
    height: 692px;   
    background-image: url('https://www.apple.com/v/home/bt/images/heroes/apple-watch-series-10/hero_apple_watch_series_10_avail_lte__esu66gaw6dci_large.jpg');
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center; 
    margin-top: 45px;
}
.gird{
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 20px;
}
.gird-one {
    width: 100%;
    height: 692px;   
    background-image: url('https://www.apple.com/v/home/bt/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_large.jpg');
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center; 
    margin-top: 45px;
}
.gird-two {
    width: 100%;
    height: 692px;   
    background-image: url('https://www.apple.com/v/home/bt/images/promos/airpods-pro-2/promo_airpods_pro_2_avail__vkitqi3okwie_large.jpg');
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center; 
    margin-top: 45px;
}
.gird-three {
    width: 100%;
    height: 692px;   
    background-image: url('https://www.apple.com/v/home/bt/images/promos/ipad-mini/promo_ipad_mini_announce__dnt5vgkh34uq_large.jpg');
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center; 
    margin-top: 45px;
}
.gird-four {
    width: 100%;
    height: 692px;   
    background-image: url('https://www.apple.com/v/home/bt/images/promos/apple-watch-ultra-2/promo_apple_watch_ultra2_avail__dyawbjw9cowi_large.jpg');
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center; 
    margin-top: 45px;
}
.gird-five {
    width: 100%;
    height: 692px;   
    background-image: url('https://apple.com/v/home/bt/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large.jpg');
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center; 
    margin-top: 45px;
}
.gird-six {
    width: 100%;
    height: 692px;   
    background-image: url('https://www.apple.com/v/home/bt/images/promos/apple-card/promo_apple_card__5cm7draujpey_large.jpg');
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center; 
    margin-top: 45px;
}
.slideShow{
  margin-top: 490px;
}
.carousel__image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.footer span{
  font-size: 12px;
}
.footer li{
  margin-left: 25%;
  color: #b7b7b8;
}
.footer a{
  color: #77777c;
}
.footer{
  margin-top: 20px;
}

.footer-links {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  
  border-top: 1px solid #e0e0e0;
}

.footer-column {
  flex: 1;
  margin: 0 30px;
}

.footer-column h4 {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 15px;
}

.footer-column ul {
  list-style: none;
  padding: 2px;
}

.footer-column ul li {
  margin-bottom: 15px;
}

.footer-column ul li a {
  text-decoration: none;
  color: #6e6e73;
  font-size: 14px;
  line-height: 1.6;
}

.footer-column ul li a:hover {
  color: #0071e3;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer-links {
    flex-direction: column;
    text-align: left;
  }

  .footer-column {
    margin-bottom: 20px;
  }
}

footer {
  background-color: #f9f9f9;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 12px;
  color: #888888;
  border-top: 1px solid #e6e6e6;
}

.site-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.site-footer nav {
  display: inline-block;
}

.site-footer nav a {
  color: #888888;
  text-decoration: none;
  margin: 0 8px;
}

.site-footer nav a:hover {
  text-decoration: underline;
}

.site-footer span {
  display: inline-block;
}


</style>


