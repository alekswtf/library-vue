<template>
	<div class="my-profile-wrapper" v-if="isVisible" @click.stop>
		<div class="myProfile-card" >
			<span class="close" @click="closeModal">
			<img src="../../../assets/icons/close_btn.svg" alt="closeBtn">
			</span>
			<div class="userProfile">
			<div class="userAvatar">{{ userAvatar }}</div>
			<div class="userFullName">{{ userFullName }}</div>          
			</div>
			<div class="myProfile-info">
				<h2>MY PROFILE</h2>
				<div class="userCounter-wrapper">
				<div class="myProfile-visits">
					<h4>Visits</h4>
					<img src="../../../assets/icons/Union.svg" alt="union">
					<span class="visitsCounter">{{ userCounter }}</span>
				</div>
				<div class="myProfile-bonuses">
					<h4>Bonuses</h4>
					<img src="../../../assets/icons/Star 1.svg" alt="star">
					<span class="bonusesCounter">{{ userBonuses }}</span>
				</div>
				<div class="myProfile-books">
					<h4>Books</h4>
					<img src="../../../assets/icons/book.svg" alt="booksIcon">
					<span class="booksCounter">{{ user.books }}</span>
				</div>
				</div>
				
			<div class="myProfile-rented">
				<h3>Rented books</h3>
				<ul class="rentedBooks">
					
					<li v-for="book in user.rentedBooks" :key="book">{{ book }}</li>
				<li>The Last Queen, Clive Irving</li>
				<li>Dominicana, Angie Cruz</li>
				</ul>
			</div>
			<div class="myProfile-cardNumber">
				<h4>Card number</h4>
				<span class="userCardNumber">{{ userCardNumber }}</span>
				<img src="../../../assets/icons/icon copy.svg" alt="copyIcon" @click="copyCardNumber">
			</div>
			</div>
		</div>
	</div>
		

</template>

<script>

export default {
	data() {
		return {
			userCounter: 0,
			userBonuses: 0,
			userCardNumber: '',
			userFullName: '',
			userAvatar:''
		}
},

  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
    isVisible: {
      type: Boolean,
      required: true
    },
  },


  created() {
    this.updateUserVisits();
	this.updateUserBonuses();
	this.updateUserCardNumber();
	this.updateUserFullName();
  },

  methods: {
    closeModal() {
      this.$emit('close');
    },

    updateUserVisits() {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      if (loggedInUser && loggedInUser.visits) {
        this.userCounter = loggedInUser.visits;
      } else {
        console.log('No visits data found in loggedInUser');
      }
    },

	updateUserBonuses() {
		const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
		if (loggedInUser && loggedInUser.bonuses) {
			this.userBonuses = loggedInUser.bonuses;
		} else {
			console.log('No bonuses data found in loggedInUser');
		}
	},

	updateUserCardNumber() {
			const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
			if (loggedInUser && loggedInUser.cardNumber) {
				this.userCardNumber = loggedInUser.cardNumber;
			} else {
				console.warn('No cardNumber data found in loggedInUser');
			}
		},

		copyCardNumber() {
			navigator.clipboard.writeText(this.userCardNumber)
				.then(() => {
					console.log('Card number copied!');
				})
				.catch(err => {
					console.error('Failed to copy card number:', err);
				});
		},

		updateUserFullName() {
			const userData = JSON.parse(localStorage.getItem('loggedInUser'));
			if (userData && userData.userFirstName && userData.userLastName) {
				this.userFullName = `${userData.userFirstName} ${userData.userLastName}`;
				this.userAvatar = `${userData.userFirstName[0]}${userData.userLastName[0]}`.toUpperCase();
			} else {
				console.warn('No fullName data found in localStorage');
			}
		}
		
},

  watch: {
    user: {
      handler(newUser) {
        this.updateUserVisits();
		this.updateUserCardNumber();
		this.updateUserFullName();
      },
      deep: true
    }
  }
};

</script>

<style lang="scss" scoped>

.myProfile-card {
	width: 600px;
	height: 400px;
	position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
    line-height: 133%;
    letter-spacing: 0.02em;
    font-family: $inter;
	background-color: $white-color;
}
	.close {
		position: absolute;
		right: 15px;
		top: 10px;
		cursor: pointer;
		z-index: 102;
	}
	.userProfile {
		width: 170px;
		height: 400px;
		padding: 10px;
		background-color: $main-color;
		position: absolute;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		color:$white-color;
		.userFullName {
			font-family: $forum;
			font-weight: 400;
			font-size: 20px;
			line-height: 100%;
			padding: 5px 10px 5px 10px;
    		margin-top: 10px;
			background-color: $white-color;
			color: $black-color;
			text-align: center;
	}
	.userAvatar {
		width: 80px;
		height: 80px;
		background-color: $white-color;
		color: $brown-color;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: $forum;
		font-weight: 400;
		line-height: 100%;
		font-size: 20px;
	}
}

.myProfile-info {
	position: relative;
    right: -150px;
	width: 430px;
	display: flex;
    flex-direction: column;
	justify-content: space-around;
	padding: 40px;
	gap: 30px;
	text-align: left;
	h2 {
		font-family: $forum;
		font-weight: 400;
		font-size: 40px;
		line-height: 50%;
		letter-spacing: 0.02em;
		text-transform: uppercase;
		color: $black-color;
	}
}

.myProfile-visits, .myProfile-bonuses, .myProfile-books {
	display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
	font-family: $inter;
	font-size: 20px;
	line-height: 100%;
	letter-spacing: 0.01em;
	text-transform: capitalize;
	text-align: center;
	color: $black-color;
	span {
		font-size: 10px;
	}
}

.userCounter-wrapper {
	display: flex;
	gap: 20px;
	font-family: $inter;
	font-size: 20px;
	line-height: 100%;
	letter-spacing: 0.01em;
	text-transform: capitalize;
	text-align: center;
	color: $black-color;
}

.myProfile-rented {
	ul {
		list-style: initial;
		margin: 30px 0px 0px 40px;
	}

	h3 {
		font-family: $inter;
		font-weight: 400;
		font-size: 25px;
		line-height: 80%;
		color: $main-color;
	}
}

.myProfile-cardNumber {
	display: flex;
	gap: 15px;
	span {
		color: $brown-color;
	}
	img {
		cursor: pointer;
	}
}
</style>