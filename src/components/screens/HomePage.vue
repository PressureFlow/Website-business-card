<template>
  
  <div class="page">
    
    <main class="global">
      
      <div class="detail">
        
        <h1>Привет, меня зовут <span>Илья</span></h1>
        <p>
          Это мой сайт-портфолио, тут ты можешь увидеть все детали обо мне и об
          моих работах накопленных во время прохождения курсов в московском университете
          "Синергия"
        </p>
        <button class="btn" @click="$router.push('/blog')">click</button>
        
      </div>
    </main>
    <div id="3d" class="cube"></div>

    
    
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>FAQ</h4>
                    <ul>
                        <li><a href="#">Billing</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Affiliate Program</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Network</a></li>
                        <li><a href="#">Order status</a></li>
                        <li><a href="#">Payments</a></li>
                        <li><a href="#">3D Security</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Employment</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Social Media</h4>
                    <div class="socials">
                        <a href="#"><i class='bx bxl-instagram'></i></a>
                        <a href="#"><i class='bx bxl-facebook-square' ></i></a>
                        <a href="#"><i class='bx bxl-twitter' ></i></a>
                        <a href="#"><i class='bx bxl-linkedin-square' ></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
  </div>

  
</template>



<script>


export default {
  name: "HomePage"
};
</script>

<style>
*{
    margin: 0;
    padding: 0;
    font-family: 'Poppin',sans-serif;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    
}

body {
    background-color: #ffffff;
    position: relative;
   
}

canvas {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;

}


.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 100%;
  
  
}
.navbar-links {
  width: 50%;
}

.navbar-link {
  text-decoration: none;
  /* color: #f09819; */
  font-size: 20px;
  font-weight: bold;
  color: #1d1d24;
}
.navbar-link:hover {
  /* color: #ff5858; */
  color: #f09819;
  transition: 0.3s ease;
}

.btn {
  padding: 10px 30px;
  text-transform: uppercase;
  border-radius: 2em;
  display: inline-block;
  font-size: 17px;
  font-weight: 500;
  background-color: #f09819;
  border: 2px solid #f09819;
  color: white;
  transition: all 0.4s ease;
}
.btn:hover {
  background: transparent;
  color: #f09819;
}

.detail p,
h1 {
  font-family: "Montserrat", sans-serif;
}

.page {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 130vh;
}

.detail { 
  top: 35%;
  left: 8%;
  text-align: left;
  position: absolute;
  
  
}

.detail h1 {
  color: #1d1d24;
  font-size: 70px;
  font-weight: 700;
  line-height: 70px;
}
.detail h1 span {
  color: #f09819;
}

.detail p {
  color: #1d1d24;
  font-size: 24px;
  width: 500px;
  margin-top: 50px;
  margin-bottom: 30px;
}

.container {
    max-width: 1170px;
    margin: auto;  
}
.row {
    display: flex;
    flex-wrap: none;
}
.footer {
    bottom: 0;
    width: 100%;
    background-color: #15181b;
    padding: 70px 0px;
    margin-top: auto;
}


.footer-col {
    width: 25%;
    padding: 0 15px;
}
.footer-col h4 {
    font-size: 18px;
    color: white;
    margin-bottom: 30px;
    font-weight: 700;
    position: relative;
    cursor: pointer;
}

.footer-col h4::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #e96c1e;
    height: 5px;
    width: 130px;
    border-radius: 1em;
}

.footer-col a {
    color: white;
    transition: 0.3s ease;
    opacity: 0.8;
}

.footer-col a:hover:not(.socials a) {
    padding-left: 10px;
    opacity: 1;
}

.footer-col .socials {
    display: inline-block;
    font-size: 24px;
}
.footer-col .socials a {
    margin-left: 3px;
}
.footer-col .socials i:hover{
    transition: 0.3s ease;
    transform: scale(1.2)translate(-5px);
}

.footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
}
@media(max-width: 767px) {
    .footer-col{
        width: 50%;
        margin-bottom: 30px;
    }
}
@media(max-width: 574px) {
    .footer-col{
        width: 100%;
    }
}

</style>
