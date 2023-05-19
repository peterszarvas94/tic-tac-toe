import { PlayersSize, User } from "@/utils/types";
import { UserList } from "@/utils/types";

export function nextPlayer(users: User[], current: User): User {
  const index = users.indexOf(current);
  const nextIndex = (index + 1) % users.length;
  return users[nextIndex];
}

export function generatePlayerList(count: PlayersSize): User[] {
  const players = UserList.slice(0, count);
  return players;
}
