# Would You Rather?

A project developed for [Udacity React Nanodegree](https://eu.udacity.com/course/react-nanodegree--nd019)

Bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

***

## Run the project

First, install dependencies:

```
npm install
```

Then runs the app in development mode:

```
npm run start
```

And finally open [http://localhost:3000](http://localhost:3000) to view it in the browser.

***

## App Functionality

### Login

The person using your application should have a way of `logging` in as an `existing user`.

```
Route: '/'
Access: Public
```

#### Access

* Could be as simple as having a `login` box that appears at the root of the application that lets the user select a name from the list of existing users. 
* Alternatively, you could create your own account creation process to allow a user to sign up for an account.
* Your application should work correctly regardless of which user is selected.

#### Logout

* The application allows the user to `log out` and log back in.

#### Redirect

* If someone tries to navigate anywhere by entering the address in the address bar, the user is asked to sign in and then the requested page is shown.

#### Once the user logs in...

* The `home` page should be shown.

***

### Home

```
Route: '/home'
Access: Private
```

#### User info
* We always want to make sure we know who the logged in user is, so information about the logged in user should appear on the page.
* The name of the logged in user should be visible on the page.

#### Tabs
* The user should be able to toggle between his/her *answered* and *unanswered* polls on the `home` page, which is located at the root.
* The unanswered questions should be *shown by default*

#### Polls
* The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).

***

### Polls
What would be the point of seeing answered and unanswered polling questions if we couldn’t actually vote or see the results?

* Each polling question should link to the details of that poll.
* The details of each poll should be available at:

```
Route: '/questions/:question_id'
Access: Private
```

#### Unanswered poll

* When a poll is clicked on the `home`, the following is shown:

```
- Text “Would You Rather”
- User info who posted the polling question
  - Name
  - Avatar
- Two options
  - A checkbox for each one
- Submit button
```

#### Answered polls
* Each of the **two options** contains the following:

```
- Text of the option
- Percentage of people who voted for that option
- Number of people who voted for that option
- The option selected by the logged-in user should be clearly marked
```

#### Poll not found
* Since we want to make sure our application creates a good user experience, the application should show a `404 page` if the user is trying to access a poll that does not exist.
* Please keep in mind that newly created polls will not be accessible at their url because of the way the backend is set up in this application.

***

### Navbar
It should also display a navigation bar so that the user can easily navigate anywhere in the application.

The user should be able to navigate:
* To the leaderboard
* To the form that allows the user to create a new poll both from within the app
* To a specific question
* Typing in the address into the address bar

To make sure we’re showing the data that is relevant to the user, the application should require *the user to be signed* in order to access those pages.

***

### Votes

So what happens when someone votes in a poll?

* Upon voting in a poll, all of the information of an answered poll should be displayed.
* The user’s response should be recorded and clearly visible on the `poll details page`.
* Users can only vote once per poll
* They shouldn’t be allowed to change their answer after they’ve voted -- no cheating allowed!
* When the user comes back to the `home`, the polling question should appear in the “Answered” column.

***

### Post questions

It would be no fun to vote in polls if we couldn’t post our own questions!

```
Route: '/add'
Access: Private
```

* The **form** for posting new polling questions should be available at the `/add` route.
* The application should show:
  * The text “Would You Rather”
  * Have a form for creating two options.
* Upon submitting the form:
  * A new poll should be created
  * The user should be taken to the `home`
  * The new polling question should appear in the correct category on the `home`.

***

### Leaderboard

But how can we know how many questions each user has asked and answered?.
Let’s get some healthy competition going here!

```
Route: '/leaderboard'
Access: Private
```

Each entry on the leaderboard should contain the following:

```
- User’s name
- User’s picture
- Number of questions the user answered
- Number of questions the user asked/created
- Score?
```

Users should be ordered in descending order, based on:
  * The sum of the number of questions they’ve asked/created
  * The number of questions they’ve answered.
  * The more questions you ask and answer, the higher up you move.

***

## App Architecture

* Remember that planning your project and its architecture before starting to code will save you a lot of debugging time later on!

* For this application, most of the application’s state should be managed by Redux.

* You’ll find that there are situations where it makes sense to store state outside of the Redux store.

* Your application’s store should be the source of truth, and components should read the necessary state from the store instead of having their own versions of the same state.

* There should be no direct API calls in components’ lifecycle methods, and updates should be triggered by dispatching action creators.

* Your application’s code should be structured and organized in a logical way, and your components should be modular and reusable.
