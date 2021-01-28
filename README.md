![plant](https://live.staticflickr.com/65535/50884741626_d58b4c2e99.jpg)
# PROJECT 4 README <!-- omit in toc -->


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**MyPlantPal** 
Ever had a treasured plant die because you forgot to water it (or watered it waaay to much) ? Fear not, myplantpal has got your back. With this customizeable and orderly app , you, my dear user, can name your green friend, set when you need to water and nourish them, get notified of the next watering,  and even update #plantprogress pics along the way. Your rooted companions will thank you!

Plant pal will allow users: 
-to have an account (sign in and sign out)
-add, edit, delete their plantpals
-set watering/nourishing needs and updates
-give their plants a custom name and pic! 



<br>

## MVP


The **MyPlantPal MVP** 

### Goals
-to have an account (sign in and sign out)
-add, edit, delete their plantpals
-set watering/nourishing needs and updates 
-notification system of next watering/nourishing date
-allow users to add  a custom name and pic for plant
-fully designed and mobile friendly app

One of my biggest goals/challenges will be the watering/nourishing notification/count down system to alert user that it's close/is time to care for the plants


<br>


### Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | front end develpoment |
|   React Router   | sets up routes and links |
| React SemanticUI | ? 
|     Express      | works with react on frontend
|  Express Router  | 
|    FontAwesome   |  great icons for design!


<br>

### Client (Front End)

#### Wireframes

![main frame](https://live.staticflickr.com/65535/50884754047_77c23629ea.jpg)
![main frame](https://live.staticflickr.com/65535/50883930768_8926e13b06.jpg)
![main frame](https://live.staticflickr.com/65535/50884754012_d03072b0f2.jpg)
![main frame](https://live.staticflickr.com/65535/50883930743_7ebb174af0.jpg)
![main frame](https://live.staticflickr.com/65535/50884650576_77175144c1.jpg)
![main frame](https://live.staticflickr.com/65535/50883930633_2e11e9b2bb.jpg)
![main frame](https://live.staticflickr.com/65535/50883930603_bbd0a521c3.jpg)
![main frame](https://live.staticflickr.com/65535/50884650461_56d424ee45.jpg)

## Mobile
![mobile frame](https://live.staticflickr.com/65535/50884689667_668d6892f5.jpg)
![mobile frame](https://live.staticflickr.com/65535/50884689632_8e66a27973.jpg)

#### Component Tree

![whim](https://live.staticflickr.com/65535/50884686991_73a216734c.jpg)

#### Component Hierarchy


``` structure

├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.jsx 
    ├── App.test.js
    ├── components 
    │   ├── Plant 
    │   │   ├── Plant.css
    │   │   └── Plant.jsx
    │   ├── Notification
    │   │   ├── (no css i think)
    │   │   └── Notification.jsx
    │   ├── 
    │   │   
    │   └── shared // This folder is for components that will appear across all screens.
    │       ├── Footer
    │       │   ├── Footer.css
    │       │   └── Footer.jsx
    │       ├── Layout
    │       │   ├── Layout.css
    │       │   └── Layout.jsx
    │       └── Nav
    │           ├── Nav.css
    │           └── Nav.jsx
    ├── index.css
    ├── index.js
    ├── screens 
    │   ├── Home
    │   │   ├── Home.css
    │   │   └── Home.jsx
    │   └── PlantCreate
    │   │   ├── PlantCreate.css
    │   │   └── PlantCreate.jsx
    │   └── PlantDetail
    │   │   ├── PlantDetail.css
    │   │   └── PlantDetail.jsx
    │   └── PlantEdit
    │   │   ├── PlantEdit.css
    │   │   └── PlantEdit.jsx
    │   └── Products
    │       ├── Plants.css
    │       └── Plants.jsx
    ├── services // This folder is for API calls.
    │   └── plants.js
    └── utils // This folder is for helper functions, 
        └── notification.js

```

#### Component Tree


https://whimsical.com/5umUtxenRN1c9bzzG5GUwA


#### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Begin Backend setup |    H     |     8 hrs      |     8 hrs     |     TBD     |
| Start Auth          |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Delpoy/Debug Backend|    H     |     3 hrs      |     3 hrs     |     TBD     |
| Frontend Setup      |    H     |     8 hrs      |     8 hrs     |     TBD     |
| Begin Styling       |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Start Function of FE|    H     |     6 hrs      |     6 hrs     |     TBD     |
| Test/Link/Route etc |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Finish Styling      |    H     |     3 hrs      |     3 hrs     |     TBD     |
| TOTAL               |    -     |     TBD        |    TBD        |     TBD     |



<br>

### Server (Back End)

#### ERD Model

![erd](https://live.staticflickr.com/65535/50884078283_5d82b5cd81_n.jpg)

<br>

***

## Post-MVP

- perhaps an actual alarm or notification system
- it would be cool to do somethign with sunlight and plants
- maybe even a growth tracker
- above all, I would love to put extra effort into my styling and use more advance css 

***

## Code Showcase



## Code Issues & Resolutions

