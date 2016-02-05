# Documentation
## Triage
- The 'todo' project is fairly standard, so I'm going to resist look at any source material; it's more fun that way.
- I will, however draw inspiration from a few of my favorite todo apps, namely:
  - [Clear](https://www.realmacsoftware.com/clear/) - My personal favorite, super minimal
  - [Wünderlist](https://www.wunderlist.com/) - nicely organized
  - [Google Keep](https://www.wunderlist.com/) - closest proxy
  - [The List App](https://li.st/) - card-based design; handles media well
  - [Zenhub](https://www.zenhub.io/) - weird choice, but I'd like to handle the the 'completion status' requirement with something sort of kan-bany, and Zenhub does a solid job handling status elegantly.
- Scope is small so a mini-monolith is fine. I'll just create a simple docker-compose file that builds from a stable node image and link mongo and redis containers to accommodate the db and session-store requirements.
- The functionality is straightforward, so I'll probably scaffold models/routes/etc as quickly as possible and then focus on design as quickly as possible and then invest the bulk of the time on usability.
- Given the design emphasis, I'll go ahead and use a full-blown automated container with nodemon, livereload, and sass/js compilers.
- Additionally, since we're focused on the client and the server is super straightforward, I'll probably use Keystone as a server-side framework and save myself the time doing a boilerplate MEN config.
- Since we're dealing with lists, and maybe even lists of lists, I'll go ahead and implement Bootstrap 4 alpha 2. `NOTE: I'd balk at using the alpha in production, but the new 'card' component in v4 is useful enough to implement here.`
- I'll knock out the wireframe relatively quickly with Sketch.

## Progress
- [x] initial planning/documentation
- [x] environment/container config
- [x] container up and running
- [x] server 'up and running'
- [x] server config
- [x] client 'up and running'
- [x] build build (as in, write the build script)
- [ ] sketch out design
- [x] static routes (server)
- [x] static functionality
- [x] figure out everything that's changed in angular since the last time I used it.
- [x] models
- [x] api
- [ ] MVP spec check (meets baseline user stories)
- [ ] iterate on the design a bit
- [ ] implement unit testing
- [ ] maybe drop in a vanity feature, if I'm feelin' nasty

***
# initial spec

# Angular todo single page application code test

Implement a simple todo list application using the parts of the MEAN stack. Explain how the app works and what design decisions were made either in a README or in the code's comments.

## Use cases

- [ ] As a user, I can add items to a list to remind myself of them later
- [ ] As a user, I can mark items complete to remove them from the list of remaining todos
- [ ] As a user, I can see when items were added and completed to keep up with how long a task has been lingering
- [ ] As a user, I can delete and edit existing items to keep my list current
- [ ] As a user, I can filter between incompleted, all, and completed items so I can know what has already been done
- [ ] As a user, I can edit the list in multiple browser sessions so my progress isn't lost when I quit the browser

## Requirements
- [x]  Turn in a creative mockup concept of the todo app (implementing the conceptual style is not required)
- [x]  Managed history with Git
- [x]  Functionality written in AngularJS
- [x] Locally served with Node.JS
- [x] Web/Browser based
- [x] Object Oriented
- [x] Store data using MongoDb
- [ ] Lays out well at small and large viewport sizes (Mobile responsive)

## Bonus points

None of these are requirements, but will each additional item achieved will increase the proof and diversity of your capabilities.

*Edit:* Bolded items were originally considered part of the requirements. Failing to achieve them will not incur penalties, however, achieving them will exponentially increase favorability as a candidate.

- [ ] Write Unit Tests first in true TDD spirit
- [x] Write the README in markdown
- [x] Use Sass to spice up the styles
- [x] Use Jade to speed up HTML development
- [ ] Push the project github to turn it in
- [ ] Finish project early

## Suggestions
- [x] Create a gulpfile.js to aid in development
- [x] Use bower and npm to manage dependencies
- [ ] Adhere to John Papa's Angular style guide to keep application organized: [https://github.com/johnpapa/angular-styleguide](https://github.com/johnpapa/angular-styleguide)
