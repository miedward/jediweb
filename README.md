# TourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Angular Project Structure

`>ic-frontend
  >src
    >app
      >core - module containing universally loaded components (i.e. header, footer, etc) and app wide services (rest service or any other singleton)
        >components - put components declared in app.component here
        >services - put application wide services (that are singletons) here
      >shared -module containing components, pipes, and styles used in many places throughout the application, but not always loaded (like a header or footer)
        >components - put components that are declared in multiple components here
        >pipes - put all pipes here
        >styles - styles not specific to a particular component go here (like the style guide baselines)
      >pages - directory for modules/components that relate to a canonical page / route
      >domain - directory containing pure Typescript abstractions and data structures (OOP design patterns, well structured classes, etc. - No Angular constructs).
Mobile first style structure
Structure component folders like this:
>component
  >styles
    >mobile.scss
    >tablet.scss
    >desktop.scss
  >component.styles.scss (import the individual sheets using appropriate media queries).`
