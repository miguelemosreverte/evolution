package evolution.game.spec

import evolution.cards.Standard52CardDecks
import evolution.game.Dataset._
import evolution.game.algebra.protocol.command.PlayCard
import evolution.game.algebra.protocol.event.PlayedCard
import evolution.game.algebra.Rules.UnSettledGame
import evolution.game.algebra.{Rules, Game, Player, Points, Round}
import org.junit.Assert._
import org.junit.Test

class RulesSpec {

  implicit val arbiter: Rules = sortArbiter

  val game = new Game(
    Seq(playerWithAnAceOfHearts, playerwithASixOfHearts)
  )

  game.`arbiter the round`(
    Round(
      Seq(
        PlayedCards.ofPlayerWithAce,
        PlayedCards.ofPlayerWithSix
      )
    )
  )

  object PlayedCards {
    val ofPlayerWithAce =
      PlayedCard(
        PlayCard(playerWithAnAceOfHearts, playerWithAnAceOfHearts.cards.head)
      )

    val ofPlayerWithSix =
      PlayedCard(
        PlayCard(playerWithAnAceOfHearts, playerWithAnAceOfHearts.cards.head)
      )
  }

  @Test def playerWithAceShouldWin(): Unit = {
    val winningPlayerShouldBe = playerWithAnAceOfHearts.id
    val winningPlayerIs = game.`how are we doing?`
      .maxBy(a => a.points.points)
      .id
    assertEquals(
      winningPlayerShouldBe,
      winningPlayerIs
    )
  }
}
