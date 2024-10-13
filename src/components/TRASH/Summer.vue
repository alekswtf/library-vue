<template>
    <div>
        <div class="book-cards">
            <div class="card summer">
                <div class="card-info">
                    <h3>Staff Picks</h3>
                    <hr>
                    <h4>CRUDE: A MEMOIR<br> By Pablo Fajardo & ​​Sophie Tardy-Joubert</h4>
                    
                    <p>Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people.</p>
                    <button class="card-button">Buy</button>
                </div>    
                    <img src="../../../assets/img/books/summer/book_1.png" alt="book-1">
              </div>
      
              <div class="card summer">
                <div class="card-info">
                    <h3>Staff Picks</h3>
                    <hr>
                    <h4>MY PEOPLE GO SURFING<br> By Yvon Chouinard</h4>
                    
                    <p>Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.</p>
                    <button class="card-button">Buy</button>
                </div>    
                    <img src="../../../assets/img/books/summer/book_2.png" alt="book-2">
              </div>
      
              <div class="card summer">
                <div class="card-info">
                    <h3>Staff Picks</h3>
                    <hr>
                    <h4>THE OCTOPUS MUSEUM: POEMS<br>By Brenda Shaughnessy</h4>
                    
                    <p>This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.</p>
                    <button class="card-button">Buy</button>
                </div>    
                    <img src="../../../assets/img/books/summer/book_3.png" alt="book-3">
              </div>
      
              <div class="card summer">
                <div class="card-info">
                    <h3>Staff Picks</h3>
                    <hr>
                    <h4>SHARK DIALOGUES: A NOVEL<br> By Kiana Davenport</h4>
                    
                    <p>An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.</p>
                    <button class="card-button">Buy</button>
                </div>    
                    <img src="../../../assets/img/books/summer/book_4.png" alt="book-4">
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