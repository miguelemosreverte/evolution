package evolution.game.spec

import evolution.cards.Standard52CardDecks
import evolution.game.Dataset._
import evolution.game.algebra.protocol.command.PlayCard
import evolution.game.algebra.protocol.event.PlayedCard
import evolution.game.algebra.Rules.UnSettledGame
import evolution.game.algebra.{Game, Player, Points, Round, Rules}
import org.junit.Assert._
import org.junit.Test

import scala.util.{Failure, Try}

class ErrorSpec {

  implicit val arbiter: Rules = echoArbiter

  var game = new Game(
    Seq(playerWithAnAceOfHearts, playerwithASixOfHearts)
  )

  @Test def PlayerDoesNotPossessCardSpec(): Unit = {
    val error = Try {
      object PlayedCards {
        val playerWithAcePlaysASixOfHearhts =
          PlayedCard(
            PlayCard(
              playerWithAnAceOfHearts,
              Standard52CardDecks.Six(Standard52CardDecks.Hearts)
            )
          )
      }

      game.`arbiter the round`(
        Round(
          Seq(
            PlayedCards.playerWithAcePlaysASixOfHearhts
          )
        )
      )
    }

    assertEquals(
      Failure(
        evolution.game.algebra.error.PlayerDoesNotPossessCard(
          PlayCard(
            playerWithAnAceOfHearts,
            Standard52CardDecks.Six(Standard52CardDecks.Hearts)
          )
        )
      ),
      error
    )
  }

  @Test def PointsAreNegativeSpec(): Unit = {
    val error = Try {
      Player(
        "1",
        Set(Standard52CardDecks.Ace(Standard52CardDecks.Hearts)),
        Points(-1)
      )
    }

    assertEquals(
      Failure(
        evolution.game.algebra.error.PointsAreNegative(
          -1
        )
      ),
      error
    )
  }

  @Test def NoMoreCardsToGiveSpec(): Unit = {
    val error = Try {
      (1 to Standard52CardDecks.fullDeck.size + 5) foreach { _ =>
        game = game.`give one card to each player`
      }
    }

    assertEquals(
      Failure(
        evolution.game.algebra.error.NoMoreCardsToGive
      ),
      error
    )
  }
}
