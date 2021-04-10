package evolution.cards

object Standard52CardDecks {

  /*
   * Based of:
   * https://en.wikipedia.org/wiki/Standard_52-card_deck
   * */

  /*
   * A standard 52-card deck comprises 13 ranks in each of the four French suits:
   * clubs (♣),
   * diamonds (♦),
   * hearts (♥)
   * and spades (♠),
   * with reversible (double-headed) court cards (face cards).
   * */

  // A standard 52-card deck
  sealed trait Standard52CardDeck {
    def rank: Rank
    def suit: Suit
  }
  // comprises 13 ranks
  case class Rank(i: Int)
  // in each of the four french suits
  sealed trait Suit
  sealed trait FrenchSuit extends Suit
  //  clubs (♣)
  sealed trait Clubs extends FrenchSuit
  //  diamonds (♦)
  sealed trait Diamonds extends FrenchSuit
  //  hearts (♥)
  sealed trait Hearts extends FrenchSuit
  //  spades (♠)
  sealed trait Spades extends FrenchSuit

  /*
  Each suit includes an Ace, a King, Queen and Jack,
  each depicted alongside a symbol of its suit;
  and numerals or pip cards from the Deuce (Two) to the Ten,
  with each card depicting that many symbols (pips) of its suit.
  Anywhere from one to six (most often two or three since the mid-20th century) Jokers,
  often distinguishable with one being more colourful than the other,
  are added to commercial decks, as some card games require these extra cards.
   */

  case class Two(suit: Suit) extends Standard52CardDeck { val rank = Rank(2) } // (weakest)
  case class Three(suit: Suit) extends Standard52CardDeck { val rank = Rank(3) }
  case class Four(suit: Suit) extends Standard52CardDeck { val rank = Rank(4) }
  case class Five(suit: Suit) extends Standard52CardDeck { val rank = Rank(5) }
  case class Six(suit: Suit) extends Standard52CardDeck { val rank = Rank(6) }
  case class Seven(suit: Suit) extends Standard52CardDeck { val rank = Rank(7) }
  case class Eight(suit: Suit) extends Standard52CardDeck { val rank = Rank(8) }
  case class Nine(suit: Suit) extends Standard52CardDeck { val rank = Rank(9) }
  case class Ten(suit: Suit) extends Standard52CardDeck { val rank = Rank(10) }
  case class Jack(suit: Suit) extends Standard52CardDeck { val rank = Rank(11) }
  case class Queen(suit: Suit) extends Standard52CardDeck {    val rank = Rank(12)  }
  case class King(suit: Suit) extends Standard52CardDeck { val rank = Rank(13) }
  case class Ace(suit: Suit) extends Standard52CardDeck { val rank = Rank(14) } // strongest
  
  

}
