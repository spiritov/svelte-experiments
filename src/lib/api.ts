export type Player = {
  name: string;
  points: number;
};

export async function getPlayers(): Promise<Player[]> {
  return await new Promise((resolve) =>
    setTimeout(() => resolve([{ name: 'callie', points: 999 }]), 2000)
  );
}
