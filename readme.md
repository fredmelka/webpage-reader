### Page reader

This little repository is about scanning for specific data through a webpage, recording and reusing infos.

The site which served as example is a [Balenciaga](https://www.balenciaga.com/en-us/women/shoes/sneakers) shoes showcase. For instance, data to retrieve are the _name_ and the _price_ of each product _card_ being displayed, once only, at first appearance.

**Assignment** (_french_)

> Chargez la page https://www.balenciaga.com/en-us/women/shoes/sneakers dans votre navigateur.
> Cette page est composée de vignettes d'articles que l'on peut parcourir en faisant défiler la page.
> L’objectif de l'exercice est d'écrire un snippet de code Javascript (si possible en JavaScript natif).
> Une fois copié/collé dans la console, après le chargement de la page, ce snippet doit afficher dans la console le nom et le prix des articles affichés, et seulement ceux-ci.
> Si l'utilisateur fait défiler la page, avec la souris ou la barre de navigation latérale, le code doit automatiquement pousser dans la console les informations des nouveaux produits affichés.
> Si l'utilisateur ré-affiche des produits déjà poussés dans la console, aucune information ne doit être renvoyée.

HTML markers being tracked on this website:

- Item $\to$ CSS class `c-product__item` attached elements
- Name $\to$ CSS class `c-product__name` attached elements
- Price $\to$ CSS class `c-product__price` elements

### Tasks & programming tools

- Find specific information through the web page, to be read and recorded, **DOM Manipulation**.
- Detect when specific data are being _actually read_ by the user, e.g. _visible on screen_, **Intersection Observer API** (not the old JavaScript built-in method _.getBoundingClientRect()_).
- Record and print to the console these information once upon first appearance on screen, **Memoïzation**.

### Assumptions and personal understandings

A product _card_ is set by its name and its price. There are apparently on this website no other property defining each item.

On the page, multiple cards display a same shoe product with an identical name and identical price. Hence, it will only be recorded once and pushed once to the console. Actually, this is consistent since the manufacturer commonly markets a same one product several times under different cards, but with a different picture (e.g. colour variation), that are not reflecting any specific product difference, nor any SKU different reference.

The focus remains all the time on the browser, not on any other apps on the desktop.

The threshold for triggering the reading of a _card_ is being set to $1$, meaning that the entire item card has to appear on the screen before it is recorded and printed. It is possible to change this parameter (from $0$ to $1$) and to set a different activation level: e.g. $0.5$ equivalent to half the picture displayed, or $0.8$, or $0.5$, etc.

The code will push to the console a one-liner for any new item appearing on screen and will then print again the list of all items as a table of key/value pairs: `{ Name: Price }`.

The code should work properly both ways. Either by executing immediately the code and then scrolling from top to bottom, or by executing the code after some shoe products have been loaded on the page and then scrolling any direction.

Developed and tested under Chrome version 115.0.5790.110.
<hr/>