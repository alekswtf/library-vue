<template>
	<Overlay :isVisible="isVisible" 
    @close="closeModal"
    :user="user">

    <div class="buyCard" @click.stop>
        <h2>Buy a library card</h2>
        <span class="close" @click="closeModal">
			<img src="../../assets/icons/close_btn_white.svg" alt="closeBtn">
		</span>
        
        <div class="buyCard-wrapper">
          <form @submit.prevent="handleSubmit" id="buyCardForm" class="buyCardForm">
            <label for="bankCardNumber">Bank card number</label>
            <input 
				type="text" 
				name="bankCardNumber" 
				id="bankCardNumber" 
				v-model="bankCardNumber"
				pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
				maxlength="19"
				required
			/>
            
            <div class="buyCard-expirationCode">
              <label for="expirationCode">Expiration Code</label>
              <div class="expirationCode-wrapper">
                  <input 
				  	type="text" 
					name="expirationCodeMonth" 
					id="expirationCodeMonth" 
					v-model="expirationCodeMonth"
					class="expirationCodeMonth" 
					pattern="(0[1-9]|1[0-2])"
					maxlength="2"	
					required
					/>

                  <input 
				  		type="text" 
						name="expirationCodeYear" 
						id="expirationCodeYear" 
						v-model="expirationCodeYear"
						class="expirationCodeYear" 
						pattern="\d{2}" 
						maxlength="2"	
						required
					/>
              </div>
            </div>
                <label for="cvcCode">CVC</label>
                  <input 
				  	type="text" 
					name="cvcCode" 
					id="cvcCode" 
					v-model="cvcCode"
					class="cvcCode" 
					pattern="[0-9]{3}"
					maxlength="3"
					required
				  />

                  <label for="cardHolder">Cardholder name</label>
                  <input 
				  	type="text" 
					name="cardHolder" 
					id="cardHolder" 
					v-model="cardHolder"
					required
				  />
  
                  <label for="postalCode">Postal Code</label>
                  <input 
				  	type="number" 
					name="postalCode" 
					id="postalCode" 
					v-model="postalCode"
					required
				  />
  
                  <label for="cityTown">City / Town</label>
                  <input 
				  	type="text" 
					name="cityTown" 
					id="cityTown" 
					v-model="cityTown"
					required
				  />
               
                  <div class="buyCardPrice">
                      <button type="submit" form="buyCardForm">Buy</button>
                      <span>$ 25.00</span>
                  </div>
              </form>     
                <div class="buyCardInfo">
                    <p>
                        If you are live, work, attend school, or pay property taxes in New York State, 
                        you can get a $25 digital library card right now using this online form. 
                        Visitors to New York State can also use this form to apply for a temporary card.
                    </p>
                </div>  
          
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
			},
			user: {
				type: Object,
				default: () => ({}),
			}
		}, 

	data() {
			return {
				bankCardNumber: '',
				expirationCodeMonth: '',
				expirationCodeYear: '',
				cvcCode: '',
				cardHolder: '',
				postalCode: '',
				cityTown: '',
			};
		},

	methods: {
		closeModal() {
				this.$emit('close');
			},

		handleSubmit() {
			const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
			const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
			const userData = {
				bankCardNumber: this.bankCardNumber,
				expirationCodeMonth: this.expirationCodeMonth,
				expirationCodeYear: this.expirationCodeYear,
				cvcCode: this.cvcCode,
				cardHolder: this.cardHolder,
				postalCode: this.postalCode,
				cityTown: this.cityTown,
			};

				if (
					!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(userData.bankCardNumber) ||
					!/^\d{3}$/.test(userData.cvcCode) ||
					!/^\d{2}$/.test(userData.expirationCodeMonth) ||
					!/^\d{2}$/.test(userData.expirationCodeYear)
				) {
					alert('Please enter valid card details!');
					return;
				}

			const currentUserIndex = registeredUsers.findIndex(user => user.id === loggedInUser.id);

				if (currentUserIndex !== -1) {
					registeredUsers[currentUserIndex] = {
						...registeredUsers[currentUserIndex],
						...userData,
					};
						
				localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

					const updatedLoggedInUser = {
							...loggedInUser,
							...userData,
						};
				localStorage.setItem('loggedInUser', JSON.stringify(updatedLoggedInUser));

					this.bankCardNumber = '';
					this.expirationCodeMonth = '';
					this.expirationCodeYear = '';
					this.cvcCode = '';
					this.cardHolder = '';
					this.postalCode = '';
					this.cityTown = '';

					this.closeModal();
				} else {
				alert('User not found in registered users!');
			}
			
		},
	}
}

</script>

<style lang="scss" scoped>
.buyCard {
	padding: 0 0 10px;
	min-height: 540px;
	min-width: 650px;
	position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    line-height: 133%;
    letter-spacing: 0.02em;
    font-family: $inter;
	background-color: $white-color;
	img {
		position: absolute;
		top: 20px;
    	right: 15px;
		cursor: pointer;
	}

	h2 {
		padding: 20px 0px 20px 0px;
		background-color: $main-color;
		color: $white-color;
		font-family: $forum;
		font-size: 40px;
		line-height: 50%;
		letter-spacing: 0.02em;
		text-transform: uppercase;
		text-align: center;
	}
}

.buyCard-wrapper {
	display: flex;
    flex-direction: row;
    gap: 20px;
	form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-family: $inter;
		font-size: 15px;
		line-height: 133%;
		letter-spacing: 0.02em;
		text-align: center;
		color: $black-color;
		gap: 10px;
    	margin: 30px;
		input {
			width: 200px;
			height: 20px;
			border: 1px solid #BB945F;
			&:focus {
				outline:none;
			}

		}
		button {
			@include button-styles;
		}
	}
}
.buyCard-expirationCode {
	display: flex;
    flex-direction: column;
    flex-wrap: wrap;
	gap: 10px;
	#expirationCodeMonth, #expirationCodeYear {
		width: 45px;
	}
	.expirationCode-wrapper {
		display: flex;
		gap: 10px;
	}
}

#cvcCode {
	width: 45px;
}

.buyCardPrice {
	display: flex;
	align-items: flex-end;
	gap: 20px;
	margin-top: 15px;
	span {
		font-family: $inter;
		font-weight: bold;
		font-size: 20px;
		line-height: 100%;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: $main-color;
	}
}

.buyCardInfo {
	width: 329px;
	height: 160px;
	margin-top: 30px;
	text-align: left;
	p {
		font-family: $inter;
		font-size: 15px;
		line-height: 133%;
		letter-spacing: 0.13em;
		color: $grey-color;
	}
}

	input[type="number"]::-webkit-outer-spin-button,
	input[type="number"]::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
	}

	input[type="number"] {
  -moz-appearance: textfield;
}
</style>