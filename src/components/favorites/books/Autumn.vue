<template>
    <div>
        <div class="book-cards">
            <div class="card autumn">
                <div class="card-info">
                    <h3>Staff Picks</h3>
                    <hr>
                    <h4>CASUAL CONVERSATION<br> By Renia White</h4>
                    
                    <p>White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity. </p>
                    <button class="card-button">Buy</button>
                </div>    
                    <img src="../../../assets/img/books/autumn/book_1.png" alt="book-1">
              </div>
      
              <div class="card autumn">
                <div class="card-info">
                    <h3>Staff Picks</h3>
                    <hr>
                    <h4>THE GREAT FIRE<br> By Lou Ureneck</h4>
                    
                    <p>The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide</p>
                    <button class="card-button">Buy</button>
                </div>    
                    <img src="../../../assets/img/books/autumn/book_2.png" alt="book-2">
              </div>
      
              <div class="card autumn">
                <div class="card-info">
                    <h3>Staff Picks</h3>
                    <hr>
                    <h4>RICKEY: THE LIFE AND LEGEND<br> By Howard Bryant</h4>
                    
                    <p>With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?</p>
                    <button class="card-button">Buy</button>
                </div>    
                    <img src="../../../assets/img/books/autumn/book_3.png" alt="book-3">
              </div>
      
              <div class="card autumn">
                <div class="card-info">
                    <h3>Staff Picks</h3>
                    <hr>
                    <h4>SLUG: AND OTHER STORIES<br>By Megan Milks</h4>
                    
                    <p>Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds.</p>
                    <button class="card-button">Buy</button>
                </div>    
                    <img src="../../../assets/img/books/autumn/book_4.png" alt="book-4">
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