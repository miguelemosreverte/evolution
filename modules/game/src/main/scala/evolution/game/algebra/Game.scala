package evolution.game.algebra

import evolution.game.algebra.Rules.UnSettledGame

class Game(players: Seq[Player])(implicit arbiter: Rules) {
  def playRound(round: Round): Game = Game(
    arbiter.settle(UnSettledGame(players))(round).players
  )
  def roundResult = players
}
