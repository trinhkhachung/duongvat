<template>
  <div @scroll="handleScroll" class="all">
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
    <div class="banner">
      <div>
        <p>
          Get $180–$650 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.* Shop iPhone
        </p>
      </div>
      <div class="top-banner">
        <h2 style="font-size: 70px;">iPhone</h2>
        <h2 style="margin-top: 40px;">Designed to be loved.</h2>
      </div>
    </div>
    <div class="video">
      <video
        :style="{ transform: 'scale(' + videoScale + ')' }"
        src="https://www.apple.com/105/media/us/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/medium_2x.mp4#=8.882689"
        autoplay
        loop
        muted
        playsinline
      >
      </video>
    </div>
    <div>
        <h1 class="content-top">Get to know iPhone.</h1>
    </div>
   <div class="product">
     <div class="container">
        <div class="product-image">
            <img src="https://www.apple.com/v/iphone/home/bx/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png" alt="iPhone 16 Pro">
            <div class="color-options">
                <span class="color active" style="background-color: #d4b896;"></span>
                <span class="color" style="background-color: #f5f5f5;"></span>
                <span class="color" style="background-color: #000;"></span>
            </div>
        </div>
        <div class="product-info">
            <p class="new-label">New</p>
            <h2>iPhone 16 Pro</h2>
            <p class="description">The ultimate iPhone.</p>
            <p class="price">From $999 or $41.62/mo. for 24 mo.</p>
            <div class="buttons">
                <button class="learn-more">Learn more</button>
                <button class="buy">Buy</button>
            </div>
        </div>
    </div> <div class="container">
        <div class="product-image">
            <img src="https://www.apple.com/v/iphone/home/bx/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png" alt="iPhone 16 Pro">
            <div class="color-options">
                <span class="color active" style="background-color: #d4b896;"></span>
                <span class="color" style="background-color: #f5f5f5;"></span>
                <span class="color" style="background-color: #000;"></span>
            </div>
        </div>
        <div class="product-info">
            <p class="new-label">New</p>
            <h2>iPhone 16 Pro</h2>
            <p class="description">The ultimate iPhone.</p>
            <p class="price">From $999 or $41.62/mo. for 24 mo.</p>
            <div class="buttons">
                <button class="learn-more">Learn more</button>
                <button class="buy">Buy</button>
            </div>
        </div>
    </div> <div class="container">
        <div class="product-image">
            <img src="https://www.apple.com/v/iphone/home/bx/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png" alt="iPhone 16 Pro">
            <div class="color-options">
                <span class="color active" style="background-color: #d4b896;"></span>
                <span class="color" style="background-color: #f5f5f5;"></span>
                <span class="color" style="background-color: #000;"></span>
            </div>
        </div>
        <div class="product-info">
            <p class="new-label">New</p>
            <h2>iPhone 16 Pro</h2>
            <p class="description">The ultimate iPhone.</p>
            <p class="price">From $999 or $41.62/mo. for 24 mo.</p>
            <div class="buttons">
                <button class="learn-more">Learn more</button>
                <button class="buy">Buy</button>
            </div>
        </div>
    </div> <div class="container">
        <div class="product-image">
            <img src="https://www.apple.com/v/iphone/home/bx/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png" alt="iPhone 16 Pro">
            <div class="color-options">
                <span class="color active" style="background-color: #d4b896;"></span>
                <span class="color" style="background-color: #f5f5f5;"></span>
                <span class="color" style="background-color: #000;"></span>
            </div>
        </div>
        <div class="product-info">
            <p class="new-label">New</p>
            <h2>iPhone 16 Pro</h2>
            <p class="description">The ultimate iPhone.</p>
            <p class="price">From $999 or $41.62/mo. for 24 mo.</p>
            <div class="buttons">
                <button class="learn-more">Learn more</button>
                <button class="buy">Buy</button>
            </div>
        </div>
    </div>
   </div>
   <div class="footer">
    <hr>
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
import { ref, reactive, onMounted } from 'vue';

// Dữ liệu của các link trong menu
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

// Tạo một biến trạng thái để lưu trữ kích thước của video
const videoScale = ref(1);

// Hàm xử lý sự kiện cuộn
function handleScroll() {
  const scrollY = window.scrollY;
  // Tính toán tỷ lệ video dựa trên vị trí cuộn
  videoScale.value = Math.max(0.5, 1 - scrollY / 1500);
}

// Đăng ký sự kiện cuộn khi trang tải xong
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>


<style>
/* styles.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
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
  margin-top: 100px;
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
.product{
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-left: 5%;
}

.container {
    text-align: center;
    max-width: 300px;
}

.product-image {
    position: relative;
}

.product-image img {
    width: 100%;
    border-radius: 20px;
}

.color-options {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
}

.color {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid #ccc;
}

.color.active {
    border: 2px solid #333;
}

.product-info {
    margin-top: 20px;
}

.new-label {
    color: orange;
    font-size: 14px;
    font-weight: bold;
}

h2 {
    font-size: 24px;
    margin: 10px 0;
}

.description {
    color: #888;
    font-size: 16px;
}

.price {
    font-size: 14px;
    color: #333;
    margin: 10px 0;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}


.learn-more {
    width: 130px;
    height: 45px;
    border-radius: 40px;
    background-color: #007aff;
    color: #fff;
}

.buy {
    width: 130px;
    height: 45px;
    border-radius: 40px;
    background-color: #e5e5ea;
    color: #333;
}


.video {
  position: relative;
  overflow: hidden;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

video {
  width: 100%;
  height: auto;
  transition: transform 0.01s ease-in-out; /* Thêm hiệu ứng mượt khi co video */
  border-radius: 15px;
}

.content-top{
    font-size: 45px;
    font-weight: 700;
    margin-left: 100px;
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
.navbar-links a {
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
.banner{
    margin-top:70px;
}
.top-banner{
    display: flex;
    gap: 1100px;
    margin-left: 100px;
}
.banner p{
    text-align: center;
    color: #828284;
}

</style>