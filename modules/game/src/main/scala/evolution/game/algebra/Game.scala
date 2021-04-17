package evolution.game.algebra

import evolution.cards.Standard52CardDecks
import evolution.cards.Standard52CardDecks.Standard52CardDeck
import evolution.game.algebra.Rules.UnSettledGame
import evolution.game.algebra.error.NoMoreCardsToGive

import scala.collection.mutable
import scala.util.{Random, Success, Try}

case class Game(
    players: Seq[Player],
    cardsLeft: Seq[Standard52CardDeck] = Standard52CardDecks.fullDeck
)
