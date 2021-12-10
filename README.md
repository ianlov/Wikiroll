# Wikiroll
Wikiroll is an interactive library of Brazilian Jiu-Jitsu positions, submissions, and transitions.

### Links

- [Wireframe](https://www.figma.com/file/uhnG8aumV8wWFh7ycGM0k4/Wikiroll?node-id=0%3A1)
- [Component Heirarchy](https://whimsical.com/project-4-ga-KAzUWiUtsS79gX5uvKu3P9)
- [Color Pallet](https://coolors.co/202021-1d1adb-5553df-f4f5f6-ed8383-e51010-463434)

## Goals

### MVP
The project I would like to present by the end of the week is one that has full CRUD functionality on the Front-End and Back-End. Styling is based on the wireframe shown below. Shown below is also the file structure, component heirarchy, and ERD model.

#### Planning
- [ ] Have a thoroughly developed README.md file

#### Server (Back-End)
- [ ] Have a RESTful JSON API
  - [ ] Build a Ruby on Rails server, exposing RESTful JSON endpoints
  - [ ] Build a database with at least two tables and at least one association between tables
  - [ ] Utilize Rails to define models for interacting with the database
  - [ ] Implement working generic controller actions for Full CRUD (`index`, `show`, `create`, `update`, `delete`) between your non-User tables (not including authentication)

#### Client (Front-End)
- [ ] Have a working, interactive React app, built using `npx create-react-app`
  - [ ] Have at least 8 separate, rendered components in an organized and understandable React file structure
  - [ ] Utilize functional or class React components appropriately
  - [ ] Utilize state and props in your components efficiently
  - [ ] Use only React for DOM Manipulation
- [ ] Consume data from your Ruby on Rails API, and render that data in your components
- [ ] Utilize React Router, for client-side routing
- [ ] Demonstrate Full CRUD actions ( `index`, `show`, `create`, `update`, and `delete` ) on the front-end

#### Styling

- [ ] Be styled with CSS (or SCSS, if you'd prefer)
- [ ] Use Flexbox or Grid in your layout design
- [ ] Implement 2 media queries for responsive design on 3 screen sizes (including desktop)

#### Linting

- [ ] Indent properly
- [ ] Utilize high-quality, semantic variable names
- [ ] Follow `camelCase`, `snake_case`, and `kebab-case` convention
- [ ] Remove unnecessary boilerplate React files and code
- [ ] Remove all `console.log()`s and commented out code (functional notes and comments are okay)

#### Deployment

- [ ] Deploy the fully functional front-end via Surge or Netlify
- [ ] Deploy the back-end via Heroku

#### Procedural

- [ ] Initialize a git repo on Github, with a link to your hosted project
- [ ] Have frequent commits, making a robust commit history at least every day (75 commits minimum)
- [ ] Use effective and safe branching and merging processes

### Post-MVP

- [ ] Authentication/Verification

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

### Front-End

#### Wireframes

##### Mobile

![image](https://i.imgur.com/jy0Kh6L.png)

##### Desktop

![image](https://user-images.githubusercontent.com/89525025/145303173-39b12aca-247b-43e3-889b-8a2208347dd2.png)

#### Components

##### Component Hierarchy

![image](https://user-images.githubusercontent.com/89525025/145649116-64f768c2-04b3-43f5-9dbd-f56e47eaaace.png)

##### File Archetecture

```
src
|__ assets/
      |__ css/
      |__ images/
|__ components/
      |__ Nav.jsx
      |__ PTSCard.jsx
      |__ DetailFocus.jsx
      |__ DetailTransitions.jsx
      |__ DetailSubmissions.jsx
      |__ DetailPositions.jsx
      |__ DetailCard.jsx
      |__ CreateForm.jsx
      |__ EditForm.jsx
|__ layouts/
      |__ Layout.jsx
|__ screens/
      |__ Splash.jsx
      |__ Search.jsx
      |__ Detail.jsx
      |__ Create.jsx
      |__ Edit.jsx
|__ services/
|__ utilites/

```

### Server (Back End)

#### ERD Model

![image](https://i.imgur.com/oBAwzM2.png)

### Project Schedule

| Date | Deliverable | Complete |
| ---- | ----------- | -------- |
| Wed 8 Dec 2021 | Project Idea | Complete |
| Thu 9 Dec 2021 | Wireframe, Componenet Hierarchy, ERD  | Pending |
| Fri 10 Dec 2021 | Project Proposal | Pending |
| Sat 11 Dec 2021 | Back-End Deployed | Incomplete |
| Sun 12 Dec 2021 |  |  |
| Mon 13 Dec 2021 | Styling | Incomplete |
| Tue 14 Dec 2021 | Front-End CRUD | Incomplete |
| Wed 15 Dec 2021 | Linting, Front-End Deployed | Incomplete |
| Thu 16 Dec 2021 | Project Presentations | Incomplete |

### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

## Code Showcase

### Code Showcase 1
t was a warm night at Castle Caladan, and the ancient pile of stone that had served the Atreides family as home for twenty-six generations bore that cooled-sweat feeling it acquired before a change in the weather. The old woman was let in by the side door down the vaulted passage by Paul's room and she was allowed a moment to peer in at him
```

```

### Code Showcase 2
arm night at Castle Caladan, and the ancient pile of stone that had served the Atreides family as home for twenty-six generations bore that cooled-sweat feeling it acquired before a change in the weather. The old woman was let in by the side door down the vaulted passage by Paul's room and she was allowed a moment to peer in at him
```

```

## Code Issues & Resolutions

### Code Issue & Resolution 1
arm night at Castle Caladan, and the ancient pile of stone that had served the Atreides family as home for twenty-six generations bore that cooled-sweat feeling it acquired before a change in the weather. The old woman was let in by the side door down the vaulted passage by Paul's room and she was allowed a moment to peer in at him
```

```

### Code Issues & Resolution 2
arm night at Castle Caladan, and the ancient pile of stone that had served the Atreides family as home for twenty-six generations bore that cooled-sweat feeling it acquired before a change in the weather. The old woman was let in by the side door down the vaulted passage by Paul's room and she was allowed a moment to peer in at him
```

```
