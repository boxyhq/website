# Deploy - WIP

2 ways of use terminus. Start services individually or docker. Expand


---------------

There are two ways to use Jackson.

The advantage of running a separate service is that you get all of our UI tooling (like the Admin UI) with the service. The disadvantage is that you have to manage the operations of a separate service. If you are not using Node.js then this is the only option available to you.

This is available if you are already developing your application using Node.js.

The advantage of embedding Jackson as an npm library is that you do not have to manage operations of a separate service. The disadvantage is that you do not readily get our UI tooling (like the Admin UI) with this method.
