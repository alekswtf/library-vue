<template>
    <div class="book-cards">
      <BookCard
        staff="Staff Picks"
        title="CASUAL CONVERSATION"
        author="By Renia White"
        description="White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity. "
        :image="book1"
      />
      <BookCard
        staff="Staff Picks"
        title="THE GREAT FIRE"
        author="By Lou Ureneck"
        description="The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide."
        :image="book2"
      />
      <BookCard
        staff="Staff Picks"
        title="RICKEY: THE LIFE AND LEGEND"
        author="By Howard Bryant"
        description="With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?"
        :image="book3"
      />
      <BookCard
        staff="Staff Picks"
        title="SLUG: AND OTHER STORIES"
        author="By Megan Milks"
        description="Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds."
        :image="book4"
      />
    </div>
  </template>
  
  <script>
  import BookCard from '@/components/favorites/books/BookCard.vue'
  import book1 from '@/assets/img/books/autumn/book_1.png'
  import book2 from '@/assets/img/books/autumn/book_2.png'
  import book3 from '@/assets/img/books/autumn/book_3.png'
  import book4 from '@/assets/img/books/autumn/book_4.png'

  export default {
    components: {
      BookCard
    },
    data() {
    return {
      book1,
      book2,
      book3,
      book4
    }
  }

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

@include tablet {
  .book-cards {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
}
  </style>
  