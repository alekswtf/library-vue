<template>
    <div class="book-card-container">
        <div class="card">
        <div class="card-info">
            <h3>{{ staff }}</h3>
            <hr>
            <h4>{{ title }}</h4>
			<h5>{{ author }}</h5>
            <p>{{ description }}</p>
            <button  class="card-button" @click="handleBuyClick">Buy</button> 
			<!-- <button  class="card-button-own" @click="openBuyCard">Own</button> -->
        </div>
        <img :src="image" :alt="title">
        </div>

		<LoginModal
            :isVisible="showLoginModal"
            @close="closeLoginModal"
            @switchToRegister="switchToRegister"
            @update:isAuthenticated="handleAuthentication"
        />

		<RegisterModal
            :isVisible="showRegisterModal"
            @close="closeRegisterModal"
            @switchToLogin="switchToLogin"
        />

		<BuyCard :isVisible="showBuyCard"
		@close="closeBuyCard"
		/>
    </div>

		

  </template>
  
  <script>
  import BuyCard from '@/components/favorites/books/BuyALibraryCard.vue'
  import LoginModal from '@/components/modals/LoginModal.vue'
  import RegisterModal from '@/components/modals/RegisterModal'
  import { mapState } from 'vuex';

  export default {
		components: {
			BuyCard,
			LoginModal,
			RegisterModal
			},

		props: {
			staff: {
				type: String,
				required: true
			},
			title: {
				type: String,
				required: true
			},
			author: {
				type: String,
				required: true
			},
			description: {
				type: String,
				required: true
			},
			image: {
				type: String,
				required: true
			},
		},

		data() {
			return {
				showBuyCard: false,
				showLoginModal: false,
				showRegisterModal: false
			}
		},

		methods: {
			handleBuyClick() {
				console.log('handleBuyClick called');
				if (this.isAuthenticated) {
					this.openBuyCard();
				} else {
					this.openLoginModal();
				}
			},
			openBuyCard() {
				this.showBuyCard = true;
			},
			closeBuyCard() {
				this.showBuyCard = false;
			},
			openLoginModal() {
				this.showLoginModal = true;
			},
			closeLoginModal() {
				this.showLoginModal = false;
			},
			switchToRegister() {
				this.showLoginModal = false;
				this.showRegisterModal = true;
			},
			switchToLogin() {
				this.showRegisterModal = false;
				this.showLoginModal = true;
			},
			closeRegisterModal() {
				this.showRegisterModal = false;
			},
			handleAuthentication(isAuthenticated) {
				this.$store.commit('setAuthenticated', isAuthenticated);
				if (isAuthenticated) {
					this.closeLoginModal();
					this.openBuyCard();
				}
			}
		},

		computed: {
			...mapState(['isAuthenticated']),
			...mapState(['loggedInUser']),
		},

}

  </script>
  
  <style lang="scss" scoped>
  
.card {
	width: 550px;
	height: 555px;
	border: solid 1px $black-color;
	padding: 15px;
	pointer-events: auto;

	img {
		width: 200px;
		height: 300px;
		position: relative;
		left: 214px;
    	bottom: 283px;
	  }
}

.card-info {
	display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;

	h3 {
		font: {
		family: $forum;
		size: 20px;
		}
		line-height: 200%;
		letter-spacing: 0.1em;
		text-transform: capitalize;
		color: $black-color;
		text-align: left;
	}

	h4 {
		text-transform: uppercase;
		font: {
			family: $inter;
	  		size: 15px;
			weight: bold;
		}
		line-height: 267%;
		letter-spacing: 0.13em;
		text-align: left;
		color: $black-color;
		margin-top: 15px;
	}
	h5 {
		text-transform: capitalize;
		font: {
			family: $inter;
	  		size: 15px;
			weight: bold;
		}
		line-height: 267%;
		letter-spacing: 0.13em;
		text-align: left;
		color: $black-color;
	}

	p {
		font: {
			family: $inter;
	  		size: 15px;
		}
		line-height: 267%;
		letter-spacing: 0.13em;
		text-transform: capitalize;
		text-align: left;
		color: $black-color;
		height: 320px;
		width: 355px;
		margin-top: 15px;
	}

	hr {
		width: 60px;
		border: 1px solid $brown-color; 
		position: relative;
		margin: 0px;
	}
}
.card-button {
    @include button-styles;
	margin-top: 20px;
}
.card-button-own {
	@include button-styles-own;
	margin-top: 20px;
}
  </style>
  