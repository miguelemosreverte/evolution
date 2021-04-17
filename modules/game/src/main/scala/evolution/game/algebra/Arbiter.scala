package evolution.game.algebra


import evolution.cards.Standard52CardDecks
import evolution.cards.Standard52CardDecks.Standard52CardDeck
import evolution.game.algebra.Rules.UnSettledGame
import evolution.game.algebra.error.NoMoreCardsToGive

import scala.collection.mutable
import scala.util.{Random, Success, Try}

case class Arbiter(
    game: Game
)(implicit arbiter: Rules) {
  def `give one card to each player`: Arbiter =
    Try {
      Arbiter(Game(
        game.players.map(player =>
          player.copy(cards = player.cards + game.cardsLeft.head)
        ),
        Random shuffle game.cardsLeft.tail
      ))
    } match {
      case Success(continue) => continue
      case _: scala.util.Failure[_] =>
        throw NoMoreCardsToGive
    }
  def `arbiter the round`(round: Round): Arbiter =
    Arbiter(Game(
      arbiter.settle(UnSettledGame(game.players))(round).players
    ))

  def `how are we doing?` = game.players
}
