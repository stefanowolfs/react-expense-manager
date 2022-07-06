# Expense Manager API

## Description

This is a simple expense manager API.

## Project Context

Initially, this API will serve as a simple expense tracker. With the following features:

- Add, edit, and delete expenses.
- Group and filter expenses based on period, cost center & expense tag/type.
- Provide a monthly expense report per user.
- Export expenses to CSV.

## Developer Guide

This project use `npm 8.11.0` and `node  16.15.1`.

### Project Tree Structure

```
src/
│
├── components/
│   │
│   ├── FooComponent/
│   │   ├── index.tsx
│   │   └── styles.ts
│   │
│   └── BarComponent/
│       ├── index.tsx
│       └── styles.ts
│
│
├── core/
│   │
│   └── store/
│       │
│       ├── ducks/
│       │   ├── foo.ts
│       │   └── bar.ts
│       │
│       ├── sagas/
│       │   ├── foo.tsx
│       │   ├── bar.tsx
│       │   └── rootSaga.tsx
│       │
│       ├── hooks.ts
│       └── store.ts
│
│
├── infra/
│   │
│   ├── adapter/
│   │   │
│   │   ├── fooAPI/
│   │   │   └── index.ts
│   │   │
│   │   └── http.ts
│   │
│   └── errors/
│       └── errorTypes.ts
│
│
├── pages/
│   │
│   ├── Foo/
│   │   ├── components/   
│   │   │   └── FooMeter
│   │   │       ├── index.tsx
│   │   │       └── styles.tsx
│   │   ├── index.tsx
│   │   └── styles.ts
│   │
│   └── Bar/
│       ├── index.tsx
│       └── styles.ts
│
│
├── router/
│   └── index.tsx
│
├── styles/
│   ├── colors.ts
│   ├── globalStyles.ts
│   └── themes.ts
│
├── tests/
│   └── mockAPI.ts
│
├── types/
│   └── reduxAction.ts
│
└── index.tsx
```

Right above is a diagram showing how the project is designed. We have some main folders on the `src` root that encapsulate main concepts:

- components: Here is where we keep all reusable components, they need to be decoupled and preferred extensible. Each component folder have a JSX file separated from the styles file.
- core: This is the place where you want to keep all your business related objects/DTOs, domain methods/services (redux actions & sagas). It's preferred to keep all the complex logic here instead of inside pages or components.  
- infra: Here we want to keep all the app configs & external dependency management like http clients, indexedDB libs, errors, external adapters...
- pages: All the pages accessed by the router can be found here, if a page have unique components that only exists inside them and are not shared to other pages you can keep inside a `components` folder here.
- router: All accessible routes, access rules and how they are configured, can be found here.
- tests: Here you can maintain and configure all test related features.

## React Stack

- React CRA with typescript initial template
- Routing: react-router-dom
- App State: redux-toolkit (could be replaced by ContextAPI)
- Side Effects: redux-saga (could be replaced by ContextAPI)
- Style: styled-components + material-ui
- HTTP Client: axios

Disclaimer: As of now jul-06-2022, with the React version 17 and react-router-dom v6, there isn't a safe way to access `history` inside redux in order to navigate throughout the middle of an async saga/thunk like we used to do in older versions of this lib, so if you need to make this kind of actions I suggest replacing this state management with `ContextAPI`, because then you will be able to call `getNavigate` hook.

## About

- Author - [Stefano Soro](https://www.linkedin.com/in/stefanosorodeveloper/)
