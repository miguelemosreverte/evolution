package evolution.game.algebra.protocol.command

import evolution.cards.Standard52CardDecks.Standard52CardDeck
import evolution.game.algebra.Player

case class PlayCard(player: Player, card: Standard52CardDeck)
