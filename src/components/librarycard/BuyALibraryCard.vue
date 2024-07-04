<template>
    <div class="buyCard">
        <h2>Buy a library card</h2>
        <span><img src="../../assets/icons/close_btn_white.svg" alt="closeBtn"></span>
        
        <div class="buyCard-wrapper">
          <form action="#" method="get" class="buyCardForm">
            <label for="bankCardNumber">Bank card number</label>
            <input type="text" name="bankCardNumber" id="bankCardNumber" pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}" required>
            
            <div class="buyCard-expirationCode">
              <label for="expirationCode">Expiration Code</label>
              <div class="expirationCode-wrapper">
                  <input type="text" name="expirationCodeMonth" id="expirationCodeMonth" class="expirationCodeMonth" pattern="[0-9]{2}" required>
                  <input type="text" name="expirationCodeYear" id="expirationCodeYear" class="expirationCodeYear" pattern="[0-9]{2}" required>
              </div>
            </div>
                <label for="cvcCode">CVC</label>
                  <input type="text" name="cvcCode" id="cvcCode" class="cvcCode" pattern="[0-9]{3}" required>

                  <label for="cardHolder">Cardholder name</label>
                  <input type="text" name="cardHolder" id="cardHolder" required>
  
                  <label for="postalCode">Postal Code</label>
                  <input type="text" name="postalCode" id="postalCode" required>
  
                  <label for="cityTown">City / Town</label>
                  <input type="text" name="cityTown" id="cityTown" required>
               
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
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.buyCard {
	padding: 0 0 10px;
	min-height: 540px;
	position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    line-height: 133%;
    letter-spacing: 0.02em;
    font-family: $inter;
	background-color: $white-color;
	display: none;
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
    gap: 40px;
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
    flex-direction: row;
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
	width: 330px;
	height: 160px;
	margin-top: 30px;
	p {
		font-family: $inter;
		font-size: 15px;
		line-height: 133%;
		letter-spacing: 0.13em;
		color: $grey-color;
	}
}
</style>