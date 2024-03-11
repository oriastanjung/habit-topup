import { ItemType } from "./item";

export type GameType = {
  name: string;
  id: string;
  image: string;
  data: ItemType[];
  page : string
};

export const gameDummyList: GameType[] = [
  {
    id: "12314",
    name: "Valorant",
    page : "/game/valorant",
    image: "/dummy-game-1.png",
    data: [
      { id: "21ids", price: 13000, data: 300 },
      { id: "321ds", price: 65000, data: 500 },
      { id: "2a1ds", price: 75000, data: 750 },
      { id: "2a1ds", price: 75000, data: 750 },
      { id: "2a1ds", price: 75000, data: 750 },
      { id: "2a1ds", price: 75000, data: 750 },
      { id: "2a1ds", price: 75000, data: 750 },
    ],
  },
  {
    id: "12315",
    name: "Mobile Legends",
    page : "/game/mlbb",
    image: "/dummy-game-2.png",
    data: [
      { id: "21ids", price: 13000, data: 300 },
      { id: "321ds", price: 65000, data: 500 },
      { id: "2a1ds", price: 75000, data: 750 },
    ],
  },
  {
    id: "12315",
    name: "PUBG Mobile",
    page : "/game/pubgm",
    image: "/dummy-game-3.png",
    data: [
      { id: "21ids", price: 13000, data: 300 },
      { id: "321ds", price: 65000, data: 500 },
      { id: "2a1ds", price: 75000, data: 750 },
    ],
  },
];
