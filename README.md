# React Atoms

React Atoms is a comprehensive library providing fundamental, reusable 'atoms' for efficient and robust page-building in modern web applications. It includes a variety of pre-styled components with a customizable theme.

This library was created to help developers build web applications faster and more efficiently.

## Installation

To install this library, run the following command:

```shell
npm install react-atoms
```

Or if you prefer using yarn:

```shell
yarn add react-atoms
```

## Usage

First, import the `MyThemeProvider` and your desired components from the library:

```jsx
import MyThemeProvider from "react-atoms/MyThemeProvider";
import Circle from "react-atoms/Circle";
```

Then, define your custom theme:

```jsx
const myTheme = {
  primary: "#FF0000",
  secondary: "#00FF00",
  // ... other customizations
};
```

Finally, use `MyThemeProvider` to wrap your components, passing in your custom theme:

```jsx
function MyApp() {
  return (
    <MyThemeProvider theme={myTheme}>
      <Circle diameter="100px" />
    </MyThemeProvider>
  );
}
```

## Documentation

TODO

## Acknowledgements

This library was inspired by and built upon the knowledge shared in Alex Eagleson's tutorial: [How to create and publish a react component library](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe).

## License

MIT
