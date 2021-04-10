package evolution.game.algebra

import evolution.cards.Standard52CardDecks.Standard52CardDeck

case class Player(id: String, cards: Set[Standard52CardDeck] = Set(), points: Points)
