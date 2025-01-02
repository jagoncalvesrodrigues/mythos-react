import { v4 } from "uuid";
import { EGYPTIAN } from "./egyptian";
import { GREEK } from "./greek";
import { NORDIC } from "./nordics";
import { ROMAN } from "./roman";

export const MITOLOGY = [
    {
        id:v4(),
        name:'roman',
        img:{
            mobile:'assets/images/roman/banner-mobile.jpg',
            tablet:'assets/images/roman/banner-tablet.jpg',
            desktop:'assets/images/roman/banner-desktop.jpg',
            icon:'assets/images/home/roman-logo.png'
        },
        info:ROMAN
    },
    {
        id:v4(),
        name:'greek',
        img:{
            mobile:'assets/images/greek/banner-mobile.jpg',
            tablet:'assets/images/greek/banner-tablet.jpg',
            desktop:'assets/images/greek/banner-desktop.jpg',
            icon:'assets/images/home/greek-logo.png'
        },
        info:GREEK
    },
    {
        id:v4(),
        name:'egyptian',
        img:{
            mobile:'assets/images/egyptian/banner-mobile.jpg',
            tablet:'assets/images/egyptian/banner-tablet.jpg',
            desktop:'assets/images/egyptian/banner-desktop.jpg',
            icon:'assets/images/home/egyptian-logo.png'
        },
        info:EGYPTIAN
    },
    {
        id:v4(),
        name:'nordic',
        img:{
            mobile:'assets/images/nordic/banner-mobile.jpg',
            tablet:'assets/images/nordic/banner-tablet.jpg',
            desktop:'assets/images/nordic/banner-desktop.jpg',
            icon:'assets/images/home/nordic-logo.png'
        },
        info:NORDIC
    }
]
