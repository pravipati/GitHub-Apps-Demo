## Overview

This is a simple application to get up and running with GitHub Apps (based on the Node.js example [here](https://github.com/bkeepers/github-app-example))

## Setup and Configuration

**Install dependencies**

Start by installing packages found in `npm_modules`:

```
$ npm install
```

**Create a GitHub App**

Follow [this guide](https://developer.github.com/apps/building-github-apps/creating-a-github-app/) to create a GitHub App under your personal account. 


**Securing your Webhook (optional but recommended)**

(see step 11 of the guide :point_up) As noted in [the docs](https://developer.github.com/webhooks/securing/) you can create a random string with high entropy by running:

```
$ ruby -rsecurerandom -e 'puts SecureRandom.hex(20)'
```

**Setup your App's permissions**

As part of the GitHub App setup process, you'll be able to select what permissions the App will have. For the puroses of this demo, make sure to grant read/write access to Issues and to check the Issues webhbook box. 

**Install the App on a repository you own**

Click "Install App" and install the app on a repo you own. 

**Add your App's ID**

Take note of your App's ID (found under Developer Settings > GitHub Apps > YOUR_APP > General Tab) and create a `.env` file in your node project. Add the following line to that file:

```
APP_ID=<YOUR_APP_ID<
```

**Start the server**

Start the listener on port `7777` by running:

```
$ node index.js
```

**Start ngrok**

[Install ngrok](https://ngrok.com/download) if you don't have it already. Run the following command to expose your local server to the internet:

```
$ ngrok http 7777
```

**Edit your App's webhook URL**

Now that you have an ngrok url, go back to the general tab for your GitHub App (Developer Settings > GitHub Apps > YOUR_APP > General Tab) and insert that URL into the `Webhook URL` field. 



