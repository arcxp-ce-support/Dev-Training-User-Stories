
# Fusion User Stories


- [Prerequisites](#prerequisites)
- [Installation and setup](#installation-and-setup)
- [Run the App locally](#run-the-app-locally)
- [Replicate a deployed environment](#replicate-a-deployed-environment)
- [Useful Commands](#useful-commands)
- [Contributing](#contributing)


## Prerequisites

- Node version 10+
- Fusion CLI `npm i @arc-fusion/cli`
- VS Code - *There is configuration and documentation setup specifically for this code editor so you'll have an easier time linting and formatting your work.*
- Docker desktop - *Update the memory allocated in the docker settings to ~8GB – without this update fusion will run very slowly and file watcher will likely break.*

## Installation and setup


1.  [Clone](https://git-scm.com/docs/git-clone) this repository.




2. In the root directory, create a `.env` file based on the below .env example and fill in the relevant info.



```

# To find the correct fusion release, look for ALC release info

FUSION_RELEASE=2.7.2

# If you have issues with docker compose timeouts, this may help

COMPOSE_HTTP_TIMEOUT=240
DOCKER_CLIENT_TIMEOUT=240

# secrets (do not share nor commit)

# talk to your team member or technical delivery manager for this token for authenticating requesting

ARC_ACCESS_TOKEN=xxx
CONTENT_BASE=https://api.xxx.arcpublishing.com/

# this is for resizing images locally
# talk to photo center team for this key if it's not setup by technical delivery manager

resizerKey=xxx

# 3rd Party
# talk to your team member for 3rd Party secrets

WEATHER_TOKEN=xxxx


```



3. Ensure you are authenticated with the GitHub Packages registry. If you are not, follow the following steps:




- Create an Auth Token and Enable SSO. *Keep ahold of this token; you will need it for two places (login via npm and with `.npmrc` file).*

    <p>&nbsp;</p>

    [Creating Auth Tokens (HTTPS)](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)


    <p>&nbsp;</p>

Once you have a token that's SSO-authorized, via GitHub:
- In the root directory create a `.npmrc` file with the following lines.



```

@wpmedia:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=xxtoken you generated abovexxx

```
 - Also authenticate by logging in to npm, use the npm login command, replacing USERNAME with your GitHub username, TOKEN with your personal access token, and PUBLIC-EMAIL-ADDRESS with your email address.

```
//in your terminal run:

$ npm login --registry=https://npm.pkg.github.com

Username: YOUR-USERNAME
Password: YOUR-TOKEN
Email: YOUR-PUBLIC-EMAIL-ADDRESS
```
<p>&nbsp;</p>

4. Next, you'll need to install dependencies for the feature pack. Run `npm i` to install dependencies for the feature pack.

<p>&nbsp;</p>

5. If you want to replicate an environment, you can import the database from pb data. To mimic a deployed environment, you can download pagebuilder data from the sidebar. This will download a `file.tar.gz` (the file name should follow this naming convention). Copy that file into your feature pack's `data/restore/` folder. Then, when you run start, you can see pages from that setup to more closely match the selected environment.

  <p>&nbsp;</p>

6. Start the app!  `npx fusion start`

If you are authenticated with GitHub Package registry, you will be able to install any dependencies. In order to maximize performance, you can link only required blocks (note the no spaces and commas syntax here), like: `npx fusion start -f -l @wpmedia/headline-block,@wpmedia/top-table-list-block`.
This will link locally only headline block. Any changes locally to that block will be affected. However, if you are using a block like Top Table List, which has many dependencies, then changing its dependencies like `"@wpmedia/shared-styles"` locally will not cause a reload of the local environment. In essence, only that linked block will be changeable locally.


<p>&nbsp;</p>

7. Wait until you see a webpack build success with files successfully built. Then you can go to http://localhost/pagebuilder/pages to see the output. You will see something like when it's ready:



```

fusion-webpack | Hash: 8968731309b559f3491e2b6b508095821897714bc09585e03ab21d9a6f4d37433ef36dcb7a433e6fed8ae7e284e60464c5153664d0cf516761365c8a86010094e6586bd5833b59883350d6d25fd6315235f49895a379e5a7e3fb

fusion-webpack | Version: webpack 4.41.6

fusion-webpack | Child

fusion-webpack | Hash: 8968731309b559f3491e

fusion-webpack | Time: 22802ms

fusion-webpack | Built at: 10/21/2020 5:05:25 PM

fusion-webpack | Asset Size Chunks Chunk Names

fusion-webpack | opt/engine/bundle/build/components/output-types/default.jsx 6.74 MiB node_modules/@wpmedia/default-output-block/output-types/default [emitted] node_modules/@wpmedia/default-output-block/output-types/default

fusion-webpack | opt/engine/bundle/build/components/output-types/text.jsx 6.95 KiB node_modules/@wpmedia/text-output-block/output-types/text [emitted] node_modules/@wpmedia/text-output-block/output-types/text

fusion-webpack | opt/engine/bundle/dist/components/outp

```



## Run the App locally

1. Run `npm i` to install dependencies.
2. Run `npx fusion start`.
3. Navigate to http://localhost/pagebuilder/pages


## Replicate a deployed environment

1. In the UI of the deployed environment that you want to replicate,  `e.g. https://sandbox.{id}.arcpublishing.com/home/` click on the `pb data` block under the delivery section. This will download a `file.tar.gz` (the file name should follow this naming convention).
2. Copy or drag and drop that file into your feature pack's `data/restore/` folder.
3. Start the app, you can see pages from that setup to more closely match the selected environment.


## Useful Commands

`npx fusion rebuild`

- This forces a webpack rebuild of a running cluster. [Documentation](https://www.npmjs.com/package/@arc-fusion/cli#rebuild)

- Use this command if enviornment variables are not picked up by rebuild or if you need to restart the webpack container.

 `npm run lint`

 - This command runs eslint, any errors here will cause the build to fail, make sure you run this command and fix any issues before opening a PR.

`npm run test`
 - This command runs jest, any errors here will cause the build to fail, make sure you run this command and fix any failing tests before opening a PR.

## Contributing

Pull requests are welcome.



Please make sure to update tests as appropriate.


