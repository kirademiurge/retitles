# Retitles

## Description
Javascript library for dynamically changing title and icon of web applications in any javascript framework.

We know that a lot of modern web applications work like SPA (single page application), so because of it, we should think about how to do the changing the titles and icons of different pages more comfortable and easier. This library helps for more better manipulating the view of the titles of your web apps. Our library has properties like `title`, `subtitle`, `count`, so it can be used for a lot of different types of different projects (messanger, social media, etc). You also can change the view style with `viewstyle` property. Our library is not connected to any framework, so you can use it where you want.

Availble viewstyles: 0, 1, 2

In future releases, we will add the ability for changing the icon too.

## How to use
The better way for using it is creating a reactive states for needed properties and changing the view in effects.
```ts
import {retitles} from "retitles";
import { createEffect, createSignal } from "solid-js";

export const App = () => {
  const [getCount, setCount] = createSignal(0);

  createEffect( () => {
    retitles.setTitle({count: getCount(), title: "Counter"});
  } );

  return (
    <div>
      <h2>Count: {getCount()}</h2>
      <button onClick={ () => setCount( getCount() + 1 ) }>add new message</button>
    </div>
  );
};
```

## API
```ts
type Title = {
	title?: string,
	subtitle?: string,
	count?: number,
	viewstyle?: number,
};

type retitles = {
	setTitle(options?: Title): void;
}
```

## Examples
```ts
retitles.setTitle({title: "Chat"}); // Chat
retitles.setTitle({subtitle: "Messages"}); // Messages
retitles.setTitle({count: "16"}); // 16
retitles.setTitle({title: "Chat", count: "16"}); // (16) Chat
```

Different view styles:
```ts
retitles.setTitle({title: "Chat", subtitle: "Messages", count: "16"}); // (16) Messages | Chat
retitles.setTitle({title: "Chat", subtitle: "Messages", count: "16", viewstyle: 1}); // (16) Chat - Messages
retitles.setTitle({title: "Chat", subtitle: "Messages", count: "16", viewstyle: 2}); // (16) Chat / Messages
```