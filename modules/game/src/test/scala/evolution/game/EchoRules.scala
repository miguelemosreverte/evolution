package evolution.game

import evolution.game.algebra.{Points, Round, Rules}
import evolution.game.algebra.Rules.{SettledGame, UnSettledGame}

class EchoRules extends Rules {
  override def settle(game: UnSettledGame)(round: Round): SettledGame =
    SettledGame(game.players)
}
