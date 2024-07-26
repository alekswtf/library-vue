<template>
	<div class="my-profile-wrapper" v-if="isVisible" @click.stop>
		<div class="myProfile-card" >
			<span class="close" @click="closeModal">
			<img src="../../../assets/icons/close_btn.svg" alt="closeBtn">
			</span>
			<div class="userProfile">
			<div class="userAvatar">
				<img src="../../../assets/icons/avatar.png" alt="avatar">
			</div>
			<div class="userFullName">{{ user.fullName }}</div>          
			</div>
			<div class="myProfile-info">
				<h2>MY PROFILE</h2>
				<div class="userCounter-wrapper">
				<div class="myProfile-visits">
					<h4>Visits</h4>
					<img src="../../../assets/icons/Union.svg" alt="union">
					<span class="visitsCounter">{{ user.visits }}</span>
				</div>
				<div class="myProfile-bonuses">
					<h4>Bonuses</h4>
					<img src="../../../assets/icons/Star 1.svg" alt="star">
					<span class="bonusesCounter">{{ user.bonuses }}</span>
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
					{{ user.rentedBooks }}
				<li>The Last Queen, Clive Irving</li>
				<li>Dominicana, Angie Cruz</li>
				</ul>
			</div>
			<div class="myProfile-cardNumber">
				<h4>Card number</h4>
				<span class="userCardNumber">{{ user.cardNumber }}</span>
				<img src="../../../assets/icons/icon copy.svg" alt="copyIcon">
			</div>
			</div>
		</div>
	</div>
		

</template>

<script>

    export default {

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

			const userKey = `user-${this.user.userEmail}`;
			const userCounter = localStorage.getItem(userKey);

			if (userCounter) {
				this.user.visits = parseInt(userCounter);
			}
		},
		
		methods: {
			closeModal() {
				this.$emit('close');			
			}
		},

		beforeUpdate() {
			const userKey = `user-${this.user.userEmail}`;
			const userCounter = localStorage.getItem(userKey);

			if (userCounter) {
			this.user.visits = parseInt(userCounter);
			}
		}
}
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
			padding: 5px 10px 5px 10px;
    		margin-top: 10px;
			background-color: $white-color;
			color: $black-color;
			text-align: center;
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
	gap: 40px;
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