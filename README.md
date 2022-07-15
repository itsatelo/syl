<h1 align="center">
    <img src="https://api.itsatelo.com/images/syl" style="width:125px;height:125px;"><br>
    <code><b>syl.js</b></code>
</h1>
<h3 align="center">
    <code>syl.js</code>@<code>0.0.1</code>
</h3>
<p align="center">
    Create and utilize new forms of APIs.
</p>

# Getting Started with Syl
## Installing `syl.js@0.0.1-pre.2`:
> - Open a new Terminal or Command Prompt.
> - Enter the following command:
> ```
> npm i syl.js
> ```
## Installing Previous Versions of Syl
> - Open a new Terminal or Command Prompt.
> - Enter the following command:
> ```
> npm i syl.js@x.y.z
> ```
> - Replace `x`, `y`, and `z` with the proper version numbers.

# Syl Types
> - Syl
>   - A basic form of API that allows you to communicate between two different scripts.
>   - A server is already set up for Syls, and they can be authorized through tokens.
>   - Do not share your token with others; it will allow them to hijack the communication between your scripts.
> - WebSyl
>   - A basic form of Web API that allows you to communicate between web servers.
> - InternalSyl
>   - An InternalSyl is just a Syl that communicates between the scripts of different files within your computer.

# Examples
## Syl
### Sending data with Syl
```js
const Syl = require("syl.js");
const syl = new Syl();

syl.token = "example.token";
syl.send("Hello world!");
```

### Receiving data with Syl
```js
const Syl = require("syl.js")l
const syl = new Syl();

syl.token = "example.token";
syl.read((response) => {
    console.log(response); // expected output: Hello world!
});
```

## WebSyl
### Sending data with WebSyl
```js
const { WebSyl, Routes } = require("syl.js");
const syl = new WebSyl({ port: 80 });

syl.setUpRoute("/", RequestType.GET, { successful: true });
syl.setUpRoute("/data", RequestType.POST, (body, respond) => {
    const { string } = body;
    console.log(string); // expected output: hello world

    respond("Successful!"); 
    // Syl has an automated response of Successful! that can be overridden.
    // The respond() method is not necessary in your code.
});
```
As of right now, we only have the `GET` and `POST` methods, but in the future, more will definitely be implemented.

### Receiving data with WebSyl
```js
const { WebSyl } = require("syl.js");
const syl = new WebSyl({ domain: "https://yourdomain.com" });
// Changing the parameter from port to domain will allow you to specify the type of WebSyl that's being used.

syl.get("/", (data) => {});
syl.post("/", { string: "hello world" });
```

# Future Plans
> - Introduce the `UPDATE` Request Type.
> - Introduce the `DELETE` Request Type.
> - Introduce the `DATA CACHE` for the `Syl`.
> - Introduce a new type of `Syl`.

# Dependencies
> - `express@4.18.1`
>   - Express allows the `WebSyl` to create a barebones API system.
> - `atils@1.2.6`
>   - atils allows us to send out fancy looking errors and also allos the RequestType Enum to function.

# Need Help?
If you need some assistance with `syl.js`, contact me @ `contact@itsatelo.com`. I'll assist you when I can!

## Little Notice
`syl.js` **will** be updating to `atils@2.0.0` when it releases. I'll have to go through and change a lot of things, but I'd rather use it than not. I still don't have a release date for `atils@2.0.0` though.

<hr>
<h1 align="center">
    <img src="https://api.itsatelo.com/images/syl" style="width:125px;height:125px;"><br>
    <code><b>syl.js</b></code>
</h1>
<p align="center">
    Thank you for using <code>syl.js</code>.<br>
    Current Release: @0.0.1-pre.2 by @itsatelo<br>
    Released On: July 15th, 2022
</p>
