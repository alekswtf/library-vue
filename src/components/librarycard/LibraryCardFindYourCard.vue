<template>
    <div>
        <div class="find-card">
            <h3>Find your library card</h3>
            <form @submit.prevent="handleSubmit"
            
            class="card-form">
              <div  class="card-form-wrapper">
                <p>Brooklyn Public Library</p>
                  <div class="card-input">
                    <input class="card-input-field" 
                      type="text" value="" 
                      name="firstName" 
                      v-model="userFirstName"
                      id="firstName-name" 
                      placeholder="Reader's name" 
                      required 
                      :disabled="isAuthenticated || showTemporaryData"
                    />

                    <input class="card-input-field" 
                      type="number/text" 
                      value="" 
                      name="cardNumber"
                      v-model="userCardNumber" 
                      id="card-number" 
                      placeholder="Card number" 
                      required 
                      :disabled="isAuthenticated || showTemporaryData"
                    />
                  </div>       
              </div>
  
              <button 
                v-if="!isAuthenticated && !showTemporaryData" 
                class="card-submit-button" 
                type="submit">Check the card
              </button>

                <div v-if="isAuthenticated" class="user-info">
                  <div class="myProfile-visits">
                    <h4>Visits</h4>
                    <img src="../../assets/icons/Union.svg" alt="union">
                    <span class="visitsCounter">{{ userCounter }}</span>
                  </div>
                  <div class="myProfile-bonuses">
                    <h4>Bonuses</h4>
                    <img src="../../assets/icons/Star 1.svg" alt="star">
                    <span class="bonusesCounter">{{ userBonuses }}</span>
                  </div>
                  <div class="myProfile-books">
                    <h4>Books</h4>
                    <img src="../../assets/icons/book.svg" alt="booksIcon">
                    <span class="booksCounter">{{ books }}</span>
                  </div>
                </div>

                <div v-if="showTemporaryData" class="user-info">
                  <div class="myProfile-visits">
                    <h4>Visits</h4>
                    <img src="../../assets/icons/Union.svg" alt="union" />
                    <span class="visitsCounter">{{ tempUserCounter }}</span>
                  </div>
                  <div class="myProfile-bonuses">
                    <h4>Bonuses</h4>
                    <img src="../../assets/icons/Star 1.svg" alt="star" />
                    <span class="bonusesCounter">{{ tempBonuses }}</span>
                  </div>
                  <div class="myProfile-books">
                    <h4>Books</h4>
                    <img src="../../assets/icons/book.svg" alt="booksIcon" />
                    <span class="booksCounter">{{ tempBooks }}</span>
                  </div>
                </div>
            </form>
          </div>
    </div>
</template>

<script>
import { mapState, mapActions  } from 'vuex';

    export default {
/*       props: {
    isAuthenticated: Boolean,
    loggedInUser: Object,
  }, */
      data() {
        return {
          userFirstName: '',
          userCardNumber: '',
          userCounter: 0,
          userBonuses: 0,
          books: 0,
          showTemporaryData: false,
          tempUserCounter: 0,
          tempBonuses: 0,
          tempBooks: 0,
        }
      },

      created() {
        this.checkAuthentication();
      },

      computed: {
          ...mapState(['isAuthenticated','loggedInUser']),
        },


      watch: {
            loggedInUser(newVal) {
              if (newVal) {
                this.userFirstName = newVal.userFirstName;
                this.userCardNumber = newVal.cardNumber;
                this.userCounter = newVal.visits || 0;
                this.userBonuses = newVal.bonuses || 0;
                this.books = newVal.books || 0;
              }
            },
            isAuthenticated(newVal) {
              if (!newVal) {
                this.userFirstName = '';
                this.userCardNumber = '';
                this.userCounter = 0;
                this.userBonuses = 0;
                this.books = 0;
              }
            },
      },

      methods: {
        ...mapActions(['setIsAuthenticated']),

        checkAuthentication() {
          const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
          if (loggedInUser) {
            this.setIsAuthenticated(true);
            this.userFirstName = loggedInUser.userFirstName;
            this.userCardNumber = loggedInUser.cardNumber;
            this.userCounter = loggedInUser.visits || 0;
            this.userBonuses = loggedInUser.bonuses || 0;
            this.books = loggedInUser.books || 0;
          }
        },

          handleSubmit() {
              const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
              const user = registeredUsers.find(
                (u) => u.cardNumber === this.userCardNumber && u.userFirstName === this.userFirstName
              );

              if (user) {
                const userEmailKey = `user-${user.userEmail}`;
                const userDataCounter = JSON.parse(localStorage.getItem(userEmailKey)) || {};
                this.tempUserCounter = userDataCounter || 0;
                this.tempBonuses = user.bonuses || 0;
                this.tempBooks = user.books || 0;
                this.showTemporaryData = true;

                setTimeout(() => {
                  this.showTemporaryData = false;
                  this.userFirstName = '';
                  this.userCardNumber = '';
                  this.tempUserCounter = 0;
                  this.tempBonuses = 0;
                  this.tempBooks = 0;
                }, 5000);
              } else {
                alert('User not found in registered');
                this.userFirstName = '';
                this.userCardNumber = '';
              }
            },
          },
        
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
      color: $brown-color;
      font-size: 30px;
      line-height: 167%;
      letter-spacing: 0.02em;
      background-color: $white-color ;
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
    .user-info {
      display: flex;
      gap: 20px;
      font-family: $inter;
      line-height: 100%;
      letter-spacing: 0.01em;
      text-transform: capitalize;
      text-align: center;
      color: $black-color;
    }
    .myProfile-visits, .myProfile-bonuses, .myProfile-books {
      display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
      font-family: $inter;
      font-size: 10px;
      line-height: 100%;
      letter-spacing: 0.01em;
      text-transform: capitalize;
      text-align: center;
      color: $black-color;
      span {
        font-size: 10px;
      }
    }
}    
</style>