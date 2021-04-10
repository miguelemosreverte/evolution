package evolution.game.algebra

import evolution.game.algebra.error.PointsAreNegative

case class Points(points: Int) {
  if (points < 0) throw new PointsAreNegative(points)
}
