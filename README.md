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
- [x] Have a thoroughly developed README.md file

#### Server (Back-End)
- [x] Have a RESTful JSON API
  - [x] Build a Ruby on Rails server, exposing RESTful JSON endpoints
  - [x] Build a database with at least two tables and at least one association between tables
  - [x] Utilize Rails to define models for interacting with the database
  - [x] Implement working generic controller actions for Full CRUD (`index`, `show`, `create`, `update`, `delete`) between your non-User tables (not including authentication)

#### Client (Front-End)
- [x] Have a working, interactive React app, built using `npx create-react-app`
  - [x] Have at least 8 separate, rendered components in an organized and understandable React file structure
  - [x] Utilize functional or class React components appropriately
  - [x] Utilize state and props in your components efficiently
  - [x] Use only React for DOM Manipulation
- [x] Consume data from your Ruby on Rails API, and render that data in your components
- [x] Utilize React Router, for client-side routing
- [x] Demonstrate Full CRUD actions ( `index`, `show`, `create`, `update`, and `delete` ) on the front-end

#### Styling

- [x] Be styled with CSS (or SCSS, if you'd prefer)
- [x] Use Flexbox or Grid in your layout design
- [x] Implement 2 media queries for responsive design on 3 screen sizes (including desktop)

#### Linting

- [x] Indent properly
- [x] Utilize high-quality, semantic variable names
- [x] Follow `camelCase`, `snake_case`, and `kebab-case` convention
- [x] Remove unnecessary boilerplate React files and code
- [x] Remove all `console.log()`s and commented out code (functional notes and comments are okay)

#### Deployment

- [x] Deploy the fully functional front-end via Surge or Netlify
- [x] Deploy the back-end via Heroku

#### Procedural

- [x] Initialize a git repo on Github, with a link to your hosted project
- [ ] Have frequent commits, making a robust commit history at least every day (75 commits minimum)
- [x] Use effective and safe branching and merging processes

#### Post-MVP

- [ ] Authentication/Verification

### Front-End

#### Wireframe

![image](https://i.imgur.com/jy0Kh6L.png)

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

![image](https://i.imgur.com/O88t1hn.png)

### Project Schedule

| Date | Deliverable | Complete |
| ---- | ----------- | -------- |
| Wed 8 Dec 2021 | Project Idea | Complete |
| Thu 9 Dec 2021 | Wireframe, Componenet Hierarchy, ERD  | Complete |
| Fri 10 Dec 2021 | Project Proposal | Complete |
| Sat 11 Dec 2021 | Back-End Deployed | Complete |
| Sun 12 Dec 2021 |  |  |
| Mon 13 Dec 2021 | Styling | Pending |
| Tue 14 Dec 2021 | Front-End CRUD | Complete |
| Wed 15 Dec 2021 | Linting, Front-End Deployed | Complete |
| Thu 16 Dec 2021 | Project Presentations | Pending |

## Code Showcase

### Two Foreign Keys

What sets my back-end apart from the normal GA P4 is the transition model. I reference two positions within my transitions table without a many to many relationship. I did this by using start_id as the reference id, but making them both foreign reference keys.

Transition Schema
```
create_table "transitions", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "img_url"
    t.bigint "start_id", null: false
    t.bigint "finish_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "what_type"
    t.index ["finish_id"], name: "index_transitions_on_finish_id"
    t.index ["start_id"], name: "index_transitions_on_start_id"
  end
```
Position and Transition Models
```
class Position < ApplicationRecord
  has_many :start_transitions, class_name: 'Transition', foreign_key: 'start_id'
  has_many :finish_transitions, class_name: 'Transition', foreign_key: 'finsih_id'
  has_many :submissions
end

class Transition < ApplicationRecord
  belongs_to :start, class_name: 'Position'
  belongs_to :finish, class_name: 'Position'
end
```

### Code Issues & Resolution 2
arm night at Castle Caladan, and the ancient pile of stone that had served the Atreides family as home for twenty-six generations bore that cooled-sweat feeling it acquired before a change in the weather. The old woman was let in by the side door down the vaulted passage by Paul's room and she was allowed a moment to peer in at him

```

```
