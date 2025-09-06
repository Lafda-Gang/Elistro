<template>
  <div class="homepage">
    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <div class="logo-section">
          <h1 class="logo">Elistro</h1>
        </div>
        
        <nav class="navigation">
          <router-link to="/landing" class="nav-link">Discover</router-link>
          <router-link to="/add-product" class="nav-link">Sell</router-link>
          <a href="#" class="nav-link active">About</a>
          <router-link to="/login" class="nav-link">Log in</router-link>
          <router-link to="/signup" class="cta-button">Start selling</router-link>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Hero Section -->
      <div class="hero-section">
        <h1 class="hero-title">Go from 0 to $1</h1>
        <p class="hero-subtitle">
          Anyone can earn their first dollar online. Just start with what you know, 
          see what sticks, and get paid. It's that easy.
        </p>
        
        <div class="cta-buttons">
          <router-link to="/signup" class="primary-button">Start selling</router-link>
          <router-link to="/login" class="secondary-button">
            <svg class="search-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            Search marketplace ...
          </router-link>
        </div>
        
      </div>
    </main>

    <!-- Features Section -->
    <section class="features-section">
      <div class="features-container">
        <h2 class="features-title">Explore Categories</h2>
        <div class="features-grid">
          <div class="feature-card card-1">
            <div class="feature-icon">📱</div>
            <h3>Electronics</h3>
            <p>Phones, laptops, gadgets</p>
          </div>
          <div class="feature-card card-2">
            <div class="feature-icon">👕</div>
            <h3>Fashion</h3>
            <p>Clothing, shoes, accessories</p>
          </div>
          <div class="feature-card card-3">
            <div class="feature-icon">🏠</div>
            <h3>Home & Garden</h3>
            <p>Furniture, decor, tools</p>
          </div>
          <div class="feature-card card-4">
            <div class="feature-icon">🚗</div>
            <h3>Automotive</h3>
            <p>Cars, parts, accessories</p>
          </div>
          <div class="feature-card card-5">
            <div class="feature-icon">📚</div>
            <h3>Books & Media</h3>
            <p>Books, movies, games</p>
          </div>
          <div class="feature-card card-6">
            <div class="feature-icon">🏃</div>
            <h3>Sports</h3>
            <p>Equipment, gear, fitness</p>
          </div>
          <div class="feature-card card-7">
            <div class="feature-icon">🎨</div>
            <h3>Art & Crafts</h3>
            <p>Handmade, vintage, collectibles</p>
          </div>
          <div class="feature-card card-8">
            <div class="feature-icon">🍳</div>
            <h3>Kitchen</h3>
            <p>Appliances, cookware, utensils</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
// Component logic can be added here
</script>

<style scoped>
.homepage {
  min-height: 100vh;
  background-color: #fafafa;
  position: relative;
  overflow-x: hidden;
}

/* Header Styles */
.header {
  background-color: #000;
  color: white;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
  background: linear-gradient(90deg, 
    #8B5CF6 0%,     /* Purple for E */
    #EC4899 16.66%, /* Pink for l */
    #F97316 33.33%, /* Orange for i */
    #F97316 50%,    /* Orange for s */
    #10B981 66.66%, /* Green for t */
    #10B981 83.33%, /* Green for r */
    #06B6D4 100%    /* Teal for o */
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}


.navigation {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #ccc;
}

.nav-link.active {
  background-color: white;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.cta-button {
  background-color: #ff6b9d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none;
}

.cta-button:hover {
  background-color: #ff5a8a;
}

/* Main Content */
.main-content {
  position: relative;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}


/* Hero Section */
.hero-section {
  position: relative;
  z-index: 10;
  margin-bottom: 4rem;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  margin: 0 0 1.5rem 0;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #333;
  margin: 0 0 3rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.primary-button, .secondary-button {
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.primary-button {
  background-color: #000;
  color: white;
}

.primary-button:hover {
  background-color: #333;
}

.secondary-button {
  background-color: #000;
  color: white;
}

.secondary-button:hover {
  background-color: #333;
}

.search-icon {
  width: 20px;
  height: 20px;
}

/* Features Section */
.features-section {
  padding: 4rem 2rem;
  background-color: #ffffff;
  border-top: 1px solid #e5e7eb;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin: 0 0 3rem 0;
  position: relative;
  z-index: 1;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  padding: 3rem 0;
  max-width: 1000px;
  margin: 0 auto;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.feature-card {
  background: white;
  border-radius: 24px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid transparent;
  cursor: pointer;
  position: relative;
  backdrop-filter: blur(15px);
  opacity: 0.9;
  transform: translateY(0px) scale(1);
  animation: breathe 6s ease-in-out infinite;
  will-change: transform, box-shadow, opacity;
}

.feature-card:hover {
  transform: translateY(-20px) scale(1.03) rotateY(2deg);
  box-shadow: 0 25px 80px rgba(255, 107, 157, 0.2);
  border-color: #ff6b9d;
  opacity: 1;
  z-index: 20;
  background: linear-gradient(135deg, #ffffff 0%, #fef7ff 100%);
  animation: none;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.features-grid:hover .feature-card:not(:hover) {
  opacity: 0.5;
  transform: scale(0.98) translateY(3px);
  filter: blur(0.3px);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

@keyframes breathe {
  0%, 100% { 
    transform: translateY(0px) scale(1);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  }
  25% { 
    transform: translateY(-2px) scale(1.005);
    box-shadow: 0 14px 45px rgba(0, 0, 0, 0.1);
  }
  50% { 
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 16px 50px rgba(0, 0, 0, 0.12);
  }
  75% { 
    transform: translateY(-2px) scale(1.005);
    box-shadow: 0 14px 45px rgba(0, 0, 0, 0.1);
  }
}

/* Enhanced pseudo-random positioning with breathing animation */
.card-1 {
  animation-delay: 0s;
}

.card-2 {
  animation-delay: 0.8s;
}

.card-3 {
  animation-delay: 1.6s;
}

.card-4 {
  animation-delay: 2.4s;
}

.card-5 {
  animation-delay: 3.2s;
}

.card-6 {
  animation-delay: 4s;
}

.card-7 {
  animation-delay: 4.8s;
}

.card-8 {
  animation-delay: 5.6s;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.feature-card p {
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    height: auto;
    padding: 1rem 0;
    gap: 1rem;
  }
  
  .navigation {
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  
  .main-content {
    padding: 2rem 1rem;
  }
  
  .features-section {
    padding: 2rem 1rem;
  }
  
  .features-title {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
    max-width: 800px;
  }
  
  .feature-card {
    padding: 2rem 1.5rem;
  }
  
  .feature-icon {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .primary-button, .secondary-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
  
  .features-title {
    font-size: 1.75rem;
  }
  
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    padding: 1.5rem 0;
    max-width: 600px;
  }
  
  .feature-card {
    padding: 2rem 1.2rem;
  }
  
  .feature-icon {
    font-size: 2rem;
  }
}
</style>

