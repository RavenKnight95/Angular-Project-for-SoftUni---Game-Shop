import { IBase } from "./base";

export interface IGame extends IBase {
    title: string;
    author: string;
    genre: string;
    img: string;
    description: string;
    price: number;
    owner: string;
    likes: string[];
    boughtGameUsers: string[];
}