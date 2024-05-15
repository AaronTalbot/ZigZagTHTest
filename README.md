# TechTest

A minimal breed application

## Starting the app

### Frontend

Serve the application

```
nx serve breed-finder
```

### Backend

Serve the application

```
nx serve backend
```

## Stack

This app uses an NX repository, it is made up of a frontend named 'breed-finder' and a backend named 'backend'

### Frontend

- [Angular](https://angular.io/)
- [NgRx](https://ngrx.io/)
  - State management
- [Bootstrap](https://getbootstrap.com/)
  - Responsive UI

### Backend

- [NestJS](https://nestjs.com/)

### AARON TALBOT

Added in the breed details component to show breed details on click on breed in overview page

## What I would refactor/do if I had more time

Include more tests for the front end
Style the details page
Make the body of the api call in the front end global so you can add on variables locally, so readability is better.
Create a load so that when the end point is loading/building something shows on the users end, ideally a dialog with a spinner stating it's loading.
The images for the dogs is relient on the url of the dog to be there, maybe have an alias if it fails, or have locally stored dog images depends on preferability.
Make the button on the front end a component, so it can be reused in other areas of the product.
