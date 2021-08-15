import image1 from "./../images/eloquent.jpg";
import image2 from "./../images/good.jpg";
import image3 from "./../images/kids.jpg";
import image4 from "./../images/clean.png";

export let dataBooks = [
  {
    id: 1,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    image: image1,
    isRecommended: true,
    borrowedDate: ['Sat Jul 03 2021 16:39:06 GMT+0200 (heure d’été d’Europe centrale)'],
    returnedDate: [],
    numberOfReadings : 0 /* =returnedDate.length(), default 0. When new entry pushed into returnedDate -> counter incremented by 1 */

  },
  {
    id: 2,
    title: "JavaScript : The Good Parts",
    author: "Douglas Crockford",
    image: image2,
    isRecommended: false,
    borrowedDate: ['Sat Jul 03 2021 16:39:06 GMT+0200 (heure d’été d’Europe centrale)',
                   'Sun Jul 18 2021 16:39:06 GMT+0200 (heure d’été d’Europe centrale)',
                   'Sun Aug 15 2021 16:39:06 GMT+0200 (heure d’été d’Europe centrale)',
                   'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy', 
                   'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy', 
                   'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy', 
                   'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy', 
                   'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy' 
                  ],
    returnedDate: ['Sat Jul 17 2021 16:39:06 GMT+0200 (heure d’été d’Europe centrale)',
                   'Sun Aug 01 2021 16:39:06 GMT+0200 (heure d’été d’Europe centrale)',
                  'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy', 
                  'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy', 
                  'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy', 
                  'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy', 
                  'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy' 
                ],
    numberOfReadings : 52 /* =returnedDate.length() */
  },

  {
    id: 3,
    title: "JavaScript for Kids",
    author: "Chris Minnick",
    image: image3,
    isRecommended: true,
    borrowedDate: ['Sat Jul 03 2021 16:39:06 GMT+0200 (heure d’été d’Europe centrale)',
                   'Sun Jul 18 2021 16:39:06 GMT+0200 (heure d’été d’Europe centrale)'],
    returnedDate: ['Sat Jul 17 2021 16:39:06 GMT+0200 (heure d’été d’Europe centrale)'],
    numberOfReadings : 1 
  },
  {
    id: 4,
    title: "Clean Code in JavaScript",
    author: "James Padolsey",
    image: image4,
    isRecommended: true,
    borrowedDate: ['Sat Jul 03 2021 16:39:06 GMT+0200 (heure d’été d’Europe centrale)',
                   'Sun Jul 18 2021 16:39:06 GMT+0200 (heure d’été d’Europe centrale)',
                   'Sun Aug 15 2021 16:39:06 GMT+0200 (heure d’été d’Europe centrale)',
                   'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy', 
                   'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy', 
                   'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy', 
                   'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy', 
                   'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy'
                  ],
    returnedDate: ['Sat Jul 17 2021 16:39:06 GMT+0200 (heure d’été d’Europe centrale)',
                   'Sun Aug 01 2021 16:39:06 GMT+0200 (heure d’été d’Europe centrale)',
                   'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy', 
                   'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy', 
                   'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy', 
                   'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy', 
                   'dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy','dummy'
                  ],
    numberOfReadings : 52 /* =returnedDate.length() */
  },
];
