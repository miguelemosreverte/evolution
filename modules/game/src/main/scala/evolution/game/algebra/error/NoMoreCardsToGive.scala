package evolution.game.algebra.error

case object NoMoreCardsToGive extends Exception {
  override def getMessage: String =
    s"No more cards to give"
}
