# About the repository
This little snippet is a codebase for scanning for specific data through a webpage, recording and reusing.

The webpage example on which it is based is : https://www.balenciaga.com/en-us/women/shoes/sneakers.

Data to retrieve are the name and the price of each product card being displayed, once only, on first appearance.


##### _> consignes en Français_
> Chargez la page https://www.balenciaga.com/en-us/women/shoes/sneakers dans votre navigateur.
> Cette page est composée de vignettes d'articles que l'on peut parcourir en faisant défiler la page.
> L’objectif de l'exercice est d'écrire un snippet de code Javascript (si possible en JS natif).
> Une fois copié/collé dans la console, après le chargement de la page, ce snippet doit afficher dans la console le nom et le prix des articles affichés, et seulement ceux-ci.
> Si l'utilisateur fait défiler la page, avec la souris ou la barre de navigation latérale, le code doit automatiquement pousser dans la console les informations des nouveaux produits affichés.
> Si l'utilisateur ré-affiche des produits déjà poussés dans la console, aucune information ne doit être renvoyée.

HTML markers being tracked on this website:

product_item = CSS classed 'c-product__item' elements;

product_name = CSS classed 'c-product__name' elements;

prodcut_price = CSS classed 'c-product__price' elements;

# Technical tasks & tools

- Find specific information through the web page, to be read and recorded, **DOM Manipulation**.
- Detect when specific data are being __actually read__ by the user, e.g. __visible on screen__ , **Intersection Observer API** (not the old JS method .getBoundingClientRect).
- Record and print to the console these specific once upon first appearance on screen, **Memoïzation**.


# Assumptions and personal understandings

* A product item ('card') is set by its name and its price. There are apparently on this e-commerce website no other written property defining each item.
* Multiples cards display a same shoe product with an identical name and identical price. Hence, it will only be recorded once and pushed once to the console. Actually, this is consistent and logic since the manufacturer commonly markets a same one product several times under different cards but just with a different picture (e.g. colour variation) that are not reflecting any specific product difference nor any SKU different reference.
* The focus remains all the time on the browser and not on other apps on the desktop.
* The threshold for triggering the reading of a product card is being set to 100%, meaning that the entire item card has to appear on the screen before it is recorded and printed. It is possible to change this parameter (from 0 to 1) and to set a different activation level: eg. 50% equivalent to the picture size, or 80%, or 5%, etc.
* The code will push to the console a one-liner for any new item appearing on screen and will then print again the list of all items as a table of key/value pairs : { Name: Price }.
* The code should work properly both ways: either scrolling the page from top to bottom, or after activating the code once all the shoe products have been loaded on the page and scrolling upwards.  
* Developed and tested under Chrome Version 115.0.5790.110.


# Questions and suggestions
Please contact by mail (see my profile). Thanks for your attention !