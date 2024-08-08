import React from 'react'

function Header() {
    function showSidebar(){
        const contain = document.querySelector('.sidebar')
        contain.style.display = 'flex'
    }
    function hideSidebar(){
        const contain = document.querySelector('.sidebar')
        contain.style.display = 'none'
    }   
  return (
    <div>
       <header>
       <nav>
           <ul class="sidebar">
           <li onclick={()=>hideSidebar()}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
           <li><a href="#">Home</a></li>
           <li><a href="./About.js">About</a></li>
           <li><a href="#">Services</a></li>
           <li><a href="#">Contact Us</a></li>
        </ul>
        <ul>
            <li ><a href="#">Carz</a></li>
            <li class="hideonmobile"><a href="#">Home</a></li>
            <li class="hideonmobile "><a  href="#">About</a></li>
            <li class="hideonmobile "><a  href="#">Services</a></li>
            <li class="hideonmobile"><a  href="#">Contact Us</a></li>  
            <li class="menu_button" onclick={()=>showSidebar()}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>  
            </ul>
        </nav>
        </header>
    </div>
  )
}

export default Header
