# todo dev environment install

## Prerequisites
- Install [homebrew](http://brew.sh/) and [homebrew cask](http://caskroom.io/) on your Mac.

## Installation steps
### 1. Install [Docker Toolbox](https://www.docker.com/docker-toolbox) with Homebrew Cask
```bash
brew cask install dockertoolbox
```

## Installation steps
### 1. Install [Docker Toolbox](https://www.docker.com/docker-toolbox) with Homebrew Cask
```bash
brew cask install dockertoolbox
```

You shouldn't have to do anything once it's done installing, other than maybe enter your password.

### 2. Create a VM with docker-machine
```bash
docker-machine create --driver virtualbox --virtualbox-memory 2048 todo
```


### 3. Check your dev machine's ip address
```bash
docker-machine ip todo
```
**The IP address that's returned is where you'll point your browser to see your container in action.**

### 4. Move to the VM's environment
```bash
eval "$(docker-machine env todo)"
```
_note that once you've 'eval'ed into the machine, terminal will look/feel normal, but any docker-centric commands (i.e. docker-machine COMMAND, docker-compose COMMAND) will be sent to the docker daemon, which you just activated_

### 5. Clone the todo repo from Github

### 6. Get/create environment variables
- email Matt; he'll give them to you.

### 7. Build your Docker container
- `cd angular-basic-todo` into the root directory, then,
```bash
docker-compose up
```
- docker-machine will immediately begin to vomit red nonsense all over your terminal. Don't worry, this is normal.
- NPM install will take a few minutes the first time, but Dockerfile is configured to store a cached version of node_modules when it builds, so you won't have to do this every time you restart your container.

_NOTE: Docker will occasionally get confused and stop running. If this happens, just_ `ctrl-c` _out of the container and run_ `docker-compose up` _again._

Once the entire script finishes running, you should see something along the lines of
```bash
------------------------------------------------
KeystoneJS Started:
styers-angular-basic-todo is ready on port 5000
------------------------------------------------
```
at the end of your output. Point your browser to the IP you received in step 4, and you should see a working copy of the server in your browser.

## Tips
- use `ctrl + c` to kill your container, and `docker-compose up` to restart it.
- If you close your terminal session (or switch tabs), you'll need to re-run steps 3-4.
- use `docker-machine stop todo` to shut down your VM at the end of a session and `docker-machine start todo` to start it back up.
- Your ip address may change when you stop/start your machine.
