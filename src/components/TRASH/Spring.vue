<template>
    <div>
        <div class="book-cards">
            <div class="card spring">
                <div class="card-info">
                    <h3>Staff Picks</h3>
                    <hr>
                    <h4>THE BODY <br> By Stephen King</h4>
                    
                    <p>Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.</p>
                    <button class="card-button">Buy</button>
                </div>    
                    <img src="../../../assets/img/books/spring/book_1.png" alt="book-1">
              </div>
      
              <div class="card spring">
                <div class="card-info">
                    <h3>Staff Picks</h3>
                    <hr>
                    <h4>CARRY: A MEMOIR OF SURVIVAL ON STOLEN LAND<br> By Toni Jenson</h4>
                    
                    <p>This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.</p>
                    <button class="card-button">Buy</button>
                </div>    
                    <img src="../../../assets/img/books/spring/book_2.png" alt="book-2">
              </div>
      
              <div class="card spring">
                <div class="card-info">
                    <h3>Staff Picks</h3>
                    <hr>
                    <h4>DAYS OF DISTRACTION<br>By Alexandra Chang</h4>
                    
                    <p>A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.</p>
                    <button class="card-button">Buy</button>
                </div>    
                    <img src="../../../assets/img/books/spring/book_3.png" alt="book-3">
              </div>
      
              <div class="card spring">
                <div class="card-info">
                    <h3>Staff Picks</h3>
                    <hr>
                    <h4>DOMINICANA<br>By Angie Cruz</h4>
                    
                    <p>A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.</p>
                    <button class="card-button">Buy</button>
                </div>    
                    <img src="../../../assets/img/books/spring/book_4.png" alt="book-4">
              </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.book-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    column-gap: 200px;
    row-gap: 40px;

}

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
    	bottom: 288px;
	  }
}

.card-info {
	display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
	gap: 20px;

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
	}



	hr {
		width: 60px;
		border: 1px solid $brown-color; 
		position: relative;
		margin: -25px 0px 0px 0px;
	}
}
.card-button {
    @include button-styles;
}

</style>