<template>
    <div class="book-card-container">
        <div class="card">
        <div class="card-info">
            <h3>{{ staff }}</h3>
            <hr>
            <h4>{{ title }}</h4>
			<h5>By {{ author }}</h5>
            <p>{{ description }}</p>
            <button v-if="!isOwned" class="card-button" @click="handleBuyClick">Buy</button> 
			<button v-else @click="handleOwnClick" class="card-button-own">Own</button>
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
  import BuyCard from '@/components/modals/BuyALibraryCard.vue'
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
				showRegisterModal: false,
				isOwned: false,
				ownedBooks: []
			}
		},

		methods: {

			handleBuyClick() {
				if (this.isAuthenticated) {
					const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
					if (loggedInUser.bankCardNumber) {
						this.addOwnedBook();
					} else {
						this.openBuyCard();
					}
				} else {
					this.openLoginModal();
				}
			},
			handleOwnClick() {
				alert('You already own this book!');
			},

			addOwnedBook() {
				const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
				const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
				const currentUserIndex = registeredUsers.findIndex(user => user.id === loggedInUser.id);

				if (currentUserIndex !== -1) {
					if (!registeredUsers[currentUserIndex].ownedBooks) {
					registeredUsers[currentUserIndex].ownedBooks = [];
					}
					registeredUsers[currentUserIndex].ownedBooks.push({ title: this.title, author: this.author });
					localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

					const updatedLoggedInUser = {
						...loggedInUser,
						ownedBooks: registeredUsers[currentUserIndex].ownedBooks
					};
					localStorage.setItem('loggedInUser', JSON.stringify(updatedLoggedInUser));

					this.isOwned = true;
				} else {
					alert('User not found in registered users!');
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
				} else {
					this.resetOwnership();
				}
			},

			checkOwnership() {
				const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
				const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
				const currentUserIndex = registeredUsers.findIndex(user => user.id === loggedInUser.id);

				if (currentUserIndex !== -1 && registeredUsers[currentUserIndex].ownedBooks) {
					this.isOwned = registeredUsers[currentUserIndex].ownedBooks.some(book => book.title === this.title && book.author === this.author);
				}
			},
			resetOwnership() {
				this.isOwned = false;
			}
			

		},

		computed: {
			...mapState(['isAuthenticated']),
			...mapState(['loggedInUser']),
		},
		watch: {
			isAuthenticated(newValue) {
				if (!newValue) {
					this.resetOwnership();
				} else {
					this.checkOwnership();
				}
			}
		},

		mounted() {
			this.checkOwnership();
		}

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
  