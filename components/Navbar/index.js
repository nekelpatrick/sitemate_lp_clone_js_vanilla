import "./index.css";

export const Navbar = () => {
  return `
  <nav class="navbar">
  <div class="container">
     <div class="navbar-wrapper">
     <ul class="navbar-links">
     <img src="../../assets/img/sitemate1.svg" alt="" class="logo"/>
        <li>
          <a href="" class="bt">Products</a>
        </li>
        <li>
          <a href="" class="bt">By system</a>
        </li>
        <li>
          <a href="" class="bt">By use case</a>
        </li>
        <li>
          <a href="" class="bt">Resources</a>
        </li>
        </ul>
        
        <ul class="navbar-links">
        
        <li>
          <a href="" class="bt">Login</a>
        </li>
        <li>
        <a href="" class="bt bt-demo">Watch demo</a>
        </li>
        <li>
        <a href="" class="bt bt-try">Try it for free</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    
    `;
};
