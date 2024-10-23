<template>
    <Overlay :isVisible="isVisible" 
    @close="closeModal"
    >

        <div class="modal" @click.stop>
          <div class="modal-content-register">
            <span class="close" @click="closeModal">
              <img src="../../assets/icons/close_btn.svg" alt="closeBtn">
            </span>
            <h2>Register</h2>
            <form @submit.prevent="handleRegister">
              <label for="userFirstNameReg">First name</label>
              <input 
              type="text" 
              id="userFirstNameReg" 
              name="userFirstName" 
              v-model="userFirstName" required>
              <label for="userLastNameReg">Last name</label>
              <input 
              type="text" 
              id="userLastNameReg" 
              name="userLastName" 
              v-model="userLastName" required>
              <label for="userEmailReg">E-mail</label>
              <input 
              type="email" 
              id="userEmailReg" 
              name="userEmail" 
              v-model="userEmail" required>
              <label for="passwordReg">Password</label>
              <input 
              type="password" 
              id="passwordReg" 
              name="password" 
              v-model="password" 
              minlength="8"
              required>
              <button type="submit">Sign Up</button>
            </form>
            <h5>Already have an account?
              <span class="login-link" 
              @click="switchToLogin">Login</span>
            </h5>
          </div>
        </div>

    </Overlay>
  </template>
  
  <script>
  import Overlay from '@/components/modals/Overlay.vue'

  export default {
    components: {
      Overlay
    },

    props: {
      isVisible: {
        type: Boolean,
        required: true,
      }
    },  

    data() {
      return {
        userFirstName: '',
        userLastName: '',
        userEmail: '',
        password: '',
      }
    },
    methods: {
    closeModal() {
      this.$emit('close');
    },

    handleRegister() {
      if (this.password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
      }
      
      let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

      const userExist = users.some(user => user.userEmail === this.userEmail);
      
      if (userExist) {
        alert('Email already registered! Please use another.');
      } else {
        const newUser = {
          id: Date.now(),
          userFirstName: this.userFirstName,
          userLastName: this.userLastName,
          userEmail: this.userEmail,
          password: this.password,
          cardNumber: this.generateCardNumber(),
          bonuses: this.generateUserBonus(),
        };

        users.push(newUser);
        localStorage.setItem('registeredUsers', JSON.stringify(users));

        alert('Registration successful!',);
        console.log('Registering with:', this.userFirstName, this.userLastName, this.userEmail, this.password);

        this.handleLogin(newUser);
        this.closeModal();
      }
        this.userFirstName = '';
        this.userLastName = '';
        this.userEmail = '';
        this.password = '';
       },

       generateCardNumber() {
        const characters = '0123456789ABCDEF';
        let result = '';
        for (let i = 0; i < 9; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
       },
       generateUserBonus() {
        const numbers = '1234567890';
        let result = '';
        for (let i = 0; i < 4; i++) {
          result +=  numbers[Math.floor(Math.random() * numbers.length)];
        }
        return result
       },


    switchToLogin() {
      this.$emit('switchToLogin');
    },

    handleLogin(user) {
      this.$store.commit('setIsAuthenticated', true);

      const USER_KEY = `user-${user.userEmail}`;
      let userCounter = localStorage.getItem(USER_KEY);

      if (userCounter) {
        user.visits = parseInt(userCounter, 10);
        user.visits++;
      } else {
        user.visits = 1;
      }

      localStorage.setItem(USER_KEY, user.visits.toString());
      localStorage.setItem('loggedInUser', JSON.stringify(user));

      this.$emit('update:user', user);
    },
  }
}
  </script>
  
  <style lang="scss" scoped>

  .modal-content-register {
    width: 250px;
    height: 382px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
    position: relative;
    text-align: left;
}
  .modal {
    z-index: 150;
    background-color: $white-color;
    font: {
		family: $inter;
		weight: 400;
		size: 15px;
		color: $black-color;
	}
    h2 {
		font: {
			family: $forum;
			weight: 400;
			size: 20px;
			color: $black-color;
		}
		line-height: 100%;
		letter-spacing: 0.02em;
		text-transform: uppercase;
		text-align: center;
		margin-top: 15px;
	}

	form {
		gap: 10px;
		display: flex;
		flex-direction: column;
		input {
			border: 1px solid $brown-color;
			width: 200px;
			height: 20px;
			&:focus {
				outline:none;
			}
		}
	}

	button {
		@include button-styles;
		margin-top: 15px;
	}

	h5 {
		font-size: 10px;
	}

	.login-link {
		font-weight: bold;
		font-size: 10px;
		letter-spacing: 0.1em;
		text-decoration: underline;
		text-decoration-skip-ink: none;
		text-align: center;
		color: $main-color;
		cursor: pointer;
	  }
  }
  
  .close {
    position: absolute;
    right: 15px;
    cursor: pointer;
  }

</style>
  
