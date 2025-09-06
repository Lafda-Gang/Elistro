<template>
  <div class="signup-page">
    <div class="signup-container">
      <h1 class="page-title">Sign up page</h1>
      
      <div class="form-card">
        <!-- Avatar Placeholder -->
        <div class="avatar-placeholder">
          <div class="avatar-circle">
            <svg class="avatar-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>

        <!-- Signup Form -->
        <form @submit.prevent="handleSignup" class="signup-form">
          <div class="form-group">
            <label for="displayName">Display Name:</label>
            <input 
              type="text" 
              id="displayName" 
              v-model="formData.displayName"
              placeholder="Enter your display name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              v-model="formData.password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirm Password:</label>
            <input 
              type="password" 
              id="confirmPassword" 
              v-model="formData.confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" class="signup-button" :disabled="isLoading">
            <span v-if="!isLoading">Sign up</span>
            <span v-else>Creating account...</span>
          </button>
        </form>

        <!-- Error Message -->
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <!-- Success Message -->
        <div v-if="successMessage" class="success-message">
          {{ successMessage }}
        </div>

        <!-- Login Link -->
        <div class="login-link">
          Already have an account? 
          <router-link to="/login" class="link">Login here</router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// Form data
const formData = reactive({
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

// Component state
const isLoading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

// Validation functions
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePassword = (password: string) => {
  return password.length >= 6
}

// Signup handler
const handleSignup = async () => {
  isLoading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    // Basic validation
    if (!formData.displayName || !formData.email || !formData.password || !formData.confirmPassword) {
      throw new Error('Please fill in all fields')
    }

    if (!validateEmail(formData.email)) {
      throw new Error('Please enter a valid email address')
    }

    if (!validatePassword(formData.password)) {
      throw new Error('Password must be at least 6 characters long')
    }

    if (formData.password !== formData.confirmPassword) {
      throw new Error('Passwords do not match')
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // For demo purposes, simulate successful signup
    console.log('Signup successful:', formData)
    // In a real app, you would:
    // 1. Check if email is unique
    // 2. Hash the password with bcrypt
    // 3. Save user to database
    // 4. Send verification email
    // 5. Redirect to login or dashboard
    
    successMessage.value = 'Account created successfully! You can now login.'
    
    // Clear form
    formData.displayName = ''
    formData.email = ''
    formData.password = ''
    formData.confirmPassword = ''
    
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Signup failed'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.signup-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.page-title {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

.form-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 450px;
}

.avatar-placeholder {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.avatar-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-icon {
  width: 40px;
  height: 40px;
  color: rgba(255, 255, 255, 0.7);
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
}

.form-group input {
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #ff6b9d;
  box-shadow: 0 0 0 3px rgba(255, 107, 157, 0.2);
}

.form-group input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.signup-button {
  background: linear-gradient(135deg, #ff6b9d, #ff8fab);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.signup-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.4);
}

.signup-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error-message {
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;
}

.success-message {
  color: #4ade80;
  background: rgba(74, 222, 128, 0.1);
  border: 1px solid rgba(74, 222, 128, 0.3);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;
}

.login-link {
  text-align: center;
  margin-top: 2rem;
  color: rgba(255, 255, 255, 0.7);
}

.link {
  color: #ff6b9d;
  text-decoration: none;
  font-weight: 500;
}

.link:hover {
  text-decoration: underline;
}


/* Responsive Design */
@media (max-width: 768px) {
  .signup-page {
    padding: 1rem;
  }
  
  .form-card {
    padding: 2rem;
    max-width: 400px;
  }
}

@media (max-width: 480px) {
  .form-card {
    padding: 1.5rem;
  }
  
  .page-title {
    font-size: 1.5rem;
  }
  
  .avatar-circle {
    width: 60px;
    height: 60px;
  }
  
  .avatar-icon {
    width: 30px;
    height: 30px;
  }
}
</style>
