# Test Mercado Pago [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/romaestradaflo)

![version](https://img.shields.io/badge/version-1.0.0-blue.svg)  ![license](https://img.shields.io/badge/license-MIT-blue.svg)

This project was generated with [ReactJs](https://es.reactjs.org/docs/getting-started.html) version 16.13.1

This web app show one view with a searchbox in the top and behind the list of products, also this have another view to manage the detail. 

This works with hooks, pages, fetching, containers, components and styles with `SASS` and also `styled-component`, the icons are from react and the grids work with `flex CSS`.

The BackEnd is with `NODEJS`,`EXPRESS`,`SEQUELIZE` and for the DATABASE use `MySql`, The sequelize works with other dialects of database, so this is scalable.

The sequelize permit make all the structure of teh database with relations between tables and then, syncronyze that with a database created before.

Special thanks go to:
- [Romario Estrada](http://www.romaef.com) for his nice develop and Platzi for them nice course of React.


## Table of Contents

* [Quick Start](#quick-start)
* [Browser Support](#browser-support)
* [Licensing](#licensing)


## Quick start

Clone the repo: 

`git clone https://github.com/RomarioAugustoEstradaFlorez/testReactMercado`

**Front End**

Stay on the root of the project and execute `cd testReactMercado/client`

Install dependencies:
- `npm install`

To start the client in local:
- `npm run dev`

The client with webPack will run at `port 8080` and the url to access is `http://localhost:8080`.


**Back End**

Stay on the root of the project and execute `cd testReactMercado/api`

Install dependencies:
- `npm install`

To start the api in local with `nodemon`:
- `npm start`

The api will run at `port 3000` and the url to access is 

*Server:*
`http://localhost:3000/server`

*api:*`http://localhost:3000/api`

*Service to test or use*`http://localhost:3000/api/products`


**Database Example**

You will find this files on the `/_material` folder:

- The SQL to create the database on MySql

- The Collection to use the services with `PostMan` 

**Files**

The files are on the server side in the next route:

`http://localhost:3000/products-img/"name"."extension"`

`http://localhost:3000/products-img/iphone11.jpg`

inside the project you will find the real path `api/public/products` I use an alias to protect the files, the alias is `products-img`


## Browser Support

At present, we officially aim to support the last two versions of the following browsers:


| Chrome | Firefox | Edge | Opera |
| --- | --- | --- | --- |

## Licensing

Licensed under MIT

##### Social Media
#
Web Page: <http://www.romaef.com>

Twitter: <https://twitter.com/romaestradaflo>

Facebook: <https://www.facebook.com/romaef/>

Instagram: <https://www.instagram.com/romaef_/>