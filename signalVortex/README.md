# SignalVortex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

In this project I will make my first inclussion using LLM and AI technology. Using the library LangChain 

El caso de uso más típico es entrenar un modelo con tus datos. Entrenar consiste en:
- Trocear tus documentos
- Generar los embeddings (vector de enteros)
- Almacenar los embeddings en una BBDD vectorial

Predecir consiste en:
- Generar el embedding de la pregunta.
- Obtener de la BBDD vectorial los X documentos más similares.
- Preguntarle al LLM: "Teniendo en cuenta [doc1] y [doc2] y... [docX] responde a [pregunta]"

https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
