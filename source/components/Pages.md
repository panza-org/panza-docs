---
title: Pages
order: 17
---


## ErrorPage

Display an error, with messages and actions dependingupon the user state. Particularly useful with Relay.Rendererwhen an error state and retry function are provided.

**Props**

> `retry` _func_  (required)
> 
 


> `message` _string_ 
> 
> _defaultValue: `'Hmm, loading appears to be taking a while.'`_


> `detailMessage` _string_ 
> 
> _defaultValue: `'It\'s possible that our server are under heavy load, ' +
  'or that your internet connection is slow. Please try again.'`_


> `offlineMessage` _string_ 
> 
> _defaultValue: `'Please ensure that you are connected to the internet.'`_


> `style` _any_ 
> 
 


> `isOffline` _bool_ 
> 
> _defaultValue: `false`_


> `inverted` _bool_ 
> 
 




## Loader

Displays a loading indicator, and on iOS an optionalloading message.

**Props**

> `isLoading` _bool_ 
> 
> _defaultValue: `true`_


> `large` _bool_ 
> 
> _defaultValue: `false`_


> `color` _string_ 
> 
> _defaultValue: `'gray'`_


> `showText` _bool_ 
> 
> _defaultValue: `true`_


> `loadingText` _string_ 
> 
> _defaultValue: `'Loading...'`_


> `alignTop` _bool_ 
> 
> _defaultValue: `false`_


> `inverted` _bool_ 
> 
 



