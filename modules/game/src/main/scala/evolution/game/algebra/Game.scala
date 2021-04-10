package evolution.game.algebra

import evolution.cards.Standard52CardDecks
import evolution.cards.Standard52CardDecks.Standard52CardDeck
import evolution.game.algebra.Rules.UnSettledGame
import evolution.game.algebra.error.NoMoreCardsToGive

import scala.collection.mutable
import scala.util.{Random, Success, Try}

class Game(
    players: Seq[Player],
    cardsLeft: Seq[Standard52CardDeck] = Standard52CardDecks.fullDeck
)(implicit arbiter: Rules) {
  def `give one card to each player`: Game =
    Try {
      Game(
        players.map(player =>
          player.copy(cards = player.cards + cardsLeft.head)
        ),
        Random shuffle cardsLeft.tail
      )
    } match {
      case Success(continue) => continue
      case _: scala.util.Failure[_] =>
        throw NoMoreCardsToGive
    }
  def `arbiter the round`(round: Round): Game =
    Game(
      arbiter.settle(UnSettledGame(players))(round).players
    )

  def `how are we doing?` = players
}
