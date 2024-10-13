<template>
    <div class="book-cards-container">
        <div class="book-cards">
            <div class="card winter">
                <div class="card-info">
                    <h3>Staff Picks</h3>
                    <hr>
                    <h4>THE BOOK EATERS<br>By Sunyi Dean</h4>
                    
                    <p> An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.       
                    </p>
    
                    <button class="card-button">Buy</button>
                </div>      
                    <img src="../../../assets/img/books/winter/book_1.png" alt="book-1">
            </div>
    
            <div class="card winter">
                <div class="card-info">
                    <h3>Staff Picks</h3>
                    <hr>
                    <h4>CACKLE <br>By Rachel Harrison</h4>
                    
                    <p>Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch. </p>
    
                    <button class="card-button">Buy</button>
                </div>    
                    <img src="../../../assets/img/books/winter/book_2.png" alt="book-2">
            </div>
    
            <div class="card winter">
                <div class="card-info">   
                    <h3>Staff Picks</h3>
                    <hr>
                    <h4>DANTE: POET OF THE SECULAR WORLD <br>By Erich Auerbach</h4>
                    
                    <p>Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.</p>
                    <button class="card-button">Buy</button>
                </div>    
                    <img src="../../../assets/img/books/winter/book_3.png" alt="book-3">
            </div>
    
            <div class="card winter">
                <div class="card-info">  
                    <h3>Staff Picks</h3>
                    <hr>
                    <h4>THE LAST QUENN <br>By Clive Irving</h4>
                    
                    <p>A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.</p>
                    <button class="card-button">Buy</button>
                </div>    
                    <img src="../../../assets/img/books/winter/book_4.png" alt="book-4">
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