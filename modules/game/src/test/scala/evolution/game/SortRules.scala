package evolution.game

import evolution.game.algebra.{Points, Round, Rules}
import evolution.game.algebra.Rules.{SettledGame, UnSettledGame}

class SortArbiter extends Rules {
  override def settle(game: UnSettledGame)(round: Round): SettledGame = {
    val sorted =
      round.playedCards.sortWith((a, b) =>
        a.playCard.card.rank.i > a.playCard.card.rank.i
      )
    SettledGame(game.players.map {
      case player if player.id == sorted.head.playCard.player.id =>
        player.copy(points = Points(player.points.points + 1))
      case player => player
    })
  }
}
