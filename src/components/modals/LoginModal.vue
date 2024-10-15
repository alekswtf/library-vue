<template>
    <Overlay :isVisible="isVisible" 
    @close="closeModal"
    :user="user"
    >

        <div class="modal" 
          :user="loggedInUser"
          @click.stop>
            <div class="modal-content-login">
              <span class="close" @click="closeModal">
                <img src="../../assets/icons/close_btn.svg" alt="closeBtn">
              </span>
              <h2>LOGIN</h2>
              <form @submit.prevent="handleLogin">
                <label for="userEmail">E-mail or readers card</label>
                <input 
                type="email" 
                id="userEmail" 
                name="userEmail" 
                v-model="userEmail" required>

                <label for="password">Password:</label>
                <input 
                type="password" 
                id="password" 
                name="password" 
                v-model="password" required>

                <button type="submit">Log In</button>
              </form>
              <h5>Don’t have an account?
                <span class="register-link" 
                @click="switchToRegister">Register</span>
              </h5>
            </div>
        </div>

    </Overlay>
  </template>
  
  <script>
  import Overlay from '@/components/modals/Overlay.vue'
  import { mapActions } from 'vuex'

  export default {
    components: {
      Overlay
    },

    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
      user: {
        type: Object,
        default: () => ({}),
      }
    },  

    data() {
      return {
        userEmail: '',
        password: '',
      }
    },

    methods: {
      ...mapActions(['login']),
      
      closeModal() {
        this.$emit('close');
      },

      handleLogin() {
        const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        const user = users.find(user => user.userEmail === this.userEmail && user.password === this.password);

      if (user) {
        alert('Login successful!');
        this.$store.commit('setIsAuthenticated', true);

      //счетчик входа в аккаунт.
      
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
        this.closeModal();

      } else {
        alert('Invalid email or password.');
        this.userEmail = '';
        this.password = '';
      }
    },

      switchToRegister() {
        this.$emit('switchToRegister');
      },
    }
  }
  </script>
  
  <style lang="scss" scoped>

.modal-content-login {
    width: 250px;
    height: 262px;
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

	.register-link {
		font-weight: bold;
		font-size: 10px;
		letter-spacing: 0.1em;
		text-decoration: underline;
		text-decoration-skip-ink: none;
		text-align: center;
		color: $main-color;
		cursor: pointer;
	}


  .close {
    position: absolute;
    right: 15px;
    cursor: pointer;
  }

  </style>
  