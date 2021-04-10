package evolution.game.algebra.protocol.event

import evolution.cards.Standard52CardDecks.Standard52CardDeck
import evolution.game.algebra.Player
import evolution.game.algebra.error.PlayerDoesNotPossessCard
import evolution.game.algebra.protocol.command.PlayCard

case class PlayedCard(playCard: PlayCard) {
  if (!(playCard.player.cards contains playCard.card))
    throw new PlayerDoesNotPossessCard(playCard)
}
