<template>
    <div>
        <div class="find-card">
            <h3>Find your library card</h3>
            <form action="get" method="get" class="card-form">
              <div class="card-form-wrapper">
                <p>Brooklyn Public Library</p>
                  <div class="card-input">
                    <input class="card-input-field" type="text" value="" name="readerName" id="readers-name" placeholder="Reader's name" required >

                    <input class="card-input-field" type="number" value="" name="cardNumber" id="card-number" placeholder="Card number" required >
                  </div>       
              </div>
  
              <button class="card-submit-button" type="submit">Check the card</button>
            </form>
          </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.find-card {
    h3 {
      font: {
        family: $inter;
        size: 30px;
      }
      color: $black-color;
      letter-spacing: 0.02em;
  
    }
  }
  .card-form {
    width: 600px;
    height: 386px;
    border: 3px solid $brown-color;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 30px;
    padding: 20px;

    .card-form-wrapper {
      background-color: $brown-color;
      display: flex;
      flex-direction: column;
      padding: 0px 0px 22px;
      font-family: $forum;
      font-size: 30px;
      line-height: 167%;
      letter-spacing: 0.02em;
      color: $black-color;
      p {
        text-align: left;
        padding: 25px;
      }
    }

    .card-input {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      width: 560px
    }

    .card-input-field {
      border-radius: 10px;
      border: none;
      width: 520px;
      height: 66px;
      padding: 20px;
      font-family: $forum;
      font-size: 30px;
      line-height: 167%;
      letter-spacing: 0.02em;
    }

    .card-submit-button {
      border: 1px solid $main-color;
      border-radius: 2px;
      padding: 10px 40px;
      width: 242px;
      height: 44px;
      cursor: pointer;
      letter-spacing: 0.05em;
      font-weight: bold;
      font-family: $inter;
      color: $main-color;
    }
}    
</style>