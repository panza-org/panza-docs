---
title: ErrorPage
order: 119
description: Display an error, with messages and actions dependingupon the user state. Particularly useful with Relay.Rendererwhen an error state and retry function are provided.
---

Display an error, with messages and actions depending
upon the user state. Particularly useful with Relay.Renderer
when an error state and retry function are provided.
#### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
retry | func  (required) |   | 
message | string  | 'Hmm, loading appears to be taking a while.' | 
detailMessage | string  | 'It\'s possible that our server are under heavy load, ' +
  'or that your internet connection is slow. Please try again.' | 
offlineMessage | string  | 'Please ensure that you are connected to the internet.' | 
style | any  |   | 
isOffline | bool  | false | 
inverted | bool  |   | 