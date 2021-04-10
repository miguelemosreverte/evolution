package evolution.game.algebra.error

import evolution.game.algebra.Player
import evolution.game.algebra.protocol.command.PlayCard

case class PointsAreNegative(points: Int) extends Exception {
  override def getMessage: String =
    s"Points are negative:${points}"
}
