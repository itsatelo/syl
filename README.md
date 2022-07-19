<h1 align="center">
    <img src="https://api.itsatelo.com/images/syl" style="width:125px;height:125px;"><br>
    <code><b>syl.js</b></code>
</h1>
<h3 align="center">
    <code>syl.js</code>@<code>1.0.0</code>
</h3>
<p align="center">
    Create and utilize new forms of APIs.
</p>

# Notice
My API is currently down for renovations, and as such, the `Syl` tool will not work. I plan on updating `syl.js` to `@1.1.0` after these renovations finish, which will support the renovations on the API.

# Getting Started with Syl
## Installing `syl.js@1.0.0-f`:
> - Open a new Terminal or Command Prompt.
> - Enter the following command:
> ```
> npm i syl.js
> ```
## Installing Previous Versions of Syl
> - Open a new Terminal or Command Prompt.
> - Enter the following command:
> ```
> npm i syl.js@x.y.z-(rel)
> ```
> - Replace `x`, `y`, and `z` with the proper version numbers.
> - Replace `(rel)` with the version's Release Type (if there is one).
>   - `a` is the Alpha Release of any build.
>       - It is deleted after the Beta Release.
>   - `b` is the Beta Release of any build.
>       - It is deleted after the Stable Release.
>   - `< no rel >` is the Stable Release of any build.
>       - It is deleted after the Final Release.
>   - `f` is the Final Release of any build.

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

# Using EcmaScript?
I'm trying to figure this out right now, but when I do, you will be able to install the latest version of `syl.js` by running:
```
npm i syl.js@es
```

<hr>
<h1 align="center">
    <img src="https://api.itsatelo.com/images/syl" style="width:125px;height:125px;"><br>
    <code><b>syl.js</b></code>
</h1>
<p align="center">
    Thank you for using <code>syl.js</code>.<br>
    Current Release: @1.0.0-f by @itsatelo<br>
    Released On: July 15th, 2022
</p>

<h1 align="center">
    Notice for GitHub<br>
</h1>
<p align="center">
    This repository uses only the @es tag version of Syl.     
</p>
