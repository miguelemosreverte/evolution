package evolution.game.algebra

import evolution.cards.Standard52CardDecks.Standard52CardDeck
import evolution.game.algebra.error.PlayerDoesNotPossessCard

trait Rules {
  import Rules._
  def settle(game: UnSettledGame)(round: Round): SettledGame
}

object Rules {
  case class UnSettledGame(players: Seq[Player])
  case class SettledGame(players: Seq[Player])
}
