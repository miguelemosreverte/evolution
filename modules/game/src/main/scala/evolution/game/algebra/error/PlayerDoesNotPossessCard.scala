package evolution.game.algebra.error

import evolution.game.algebra.Player
import evolution.game.algebra.protocol.command.PlayCard

case class PlayerDoesNotPossessCard(playCard: PlayCard) extends Exception {
  override def getMessage: String =
    s"Player ${playCard.player.id} does not posess card ${playCard.card}"
}
