package evolution.game

import evolution.cards.Standard52CardDecks
import evolution.game.algebra.{Player, Points}

object Dataset {
  val echoArbiter = new SortArbiter
  val sortArbiter = new SortArbiter
  
  val playerWithAnAceOfHearts = Player(
    "1",
    Set(Standard52CardDecks.Ace(Standard52CardDecks.Hearts)),
    Points(0)
  )
  val playerwithASixOfHearts = Player(
    "2",
    Set(Standard52CardDecks.Six(Standard52CardDecks.Hearts)),
    Points(0)
  )
  
  
  
}
