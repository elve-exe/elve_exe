<script>
	import { page } from '$app/stores'; 
	import '../Styles/global.css';
  
	let showDropdown = false;
	let currentPath = '';
  
	$: {
	  const unsubscribe = page.subscribe(($page) => {
		currentPath = $page.url.pathname;
	  });
	}
  
	function toggleDropdown() {
	  showDropdown = !showDropdown;
	}
  </script>
  
  <header style="position:fixed; z-index: 1;">
		<section class="header">
			<nav>
			<div class="nav-links">
				<ul>
				<li><a href="/">Home</a></li>
				<li class="dropdown">
					<a href="/work" class="dropbtn">My Work</a>
		
					<!-- Dropdown content that shows on hover -->
					<ul class="dropdown-content">
					<li><a href="/work#DigitalArt">Digital Art</a></li>
					<li><a href="/work#game-development">Game Development</a></li>
					<li><a href="/work#3D">3D Modelling</a></li>
					</ul>
				</li>
				<li><a href="/about">About Me</a></li>
				<li><a href="/contact">Contact</a></li>
				</ul>
			</div>
			</nav>
		</section>
  </header>
  
  <main>
		<div class="background">
			<div class="overlay">
				<slot></slot>
				
				{#if currentPath !== '/contact'}
					<footer>
						<div id="theEnd">
							<div class="endPage">
							<h2>My contacts :3</h2>
							<div class="social-icons">
								<h2>
								<a href="https://www.instagram.com/elve_exe/?hl=en" target="_blank">
									<i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
								</a>
								</h2>
								<h2>
								<a href="https://www.linkedin.com/in/elvina-bulbenkovaitė-3a8642210/" target="_blank">
									<i class="fa-brands fa-linkedin" style="color: #ffffff;"></i>
								</a>
								</h2>
								<h2>
								<a href="mailto:elve.exe@gmail.com" target="_blank">
									<i class="fa-solid fa-earth-europe" style="color: #ffffff;"></i>
								</a>
								</h2>
							</div>
							</div>
						</div>
					</footer>
				{/if}
			</div>
		</div>
  </main>
  
  <style>
	.dropdown-content {
	  display: none;
	  position: absolute;
	  background-color: rgba(51, 51, 51, 0.6); 
	  min-width: 160px;
	  z-index: 1;
	  border-radius: 5px; 
		padding: 8px 12px;
	}
  
	.dropdown-content a {
	  padding: 7px 7px;
	  display: block;
	  text-align: center;
	  font-size: 0.9em; 
	}
  
	.dropdown:hover .dropdown-content {
	  display: block;
	}


  </style>
  