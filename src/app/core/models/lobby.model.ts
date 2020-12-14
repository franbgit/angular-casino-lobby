export interface LobbyData {
  lobby: Lobby;
}

interface Lobby {
  slug: string;
  games: GameGQL[];
}

interface GameGQL {
  name: string;
  thumbnail: string;
}
