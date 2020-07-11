# Hang In There

## Contributors

[Tim Keresey](https://github.com/timkeresey), [Orlando Murcio](https://www.github.com/atos20)

## Context

This application is a group project of the first Module of Turing School of Software and Design. As a team we completed this application during the course of 6 days. We use the provided HTML and CSS templates as well as the `poster.js` which contained the poster's class. As a team we decided to create a third file named `data.js` that organized our data structure. Most of the work took place in the `main.js` file where the main functionality was build to complete each iteration.

The Hang-in-there applications aims to generate a motivational random poster to improve the mental state of the user and it also provides the user the flexibility to create their own poster by using the 'make your poster' form.

### Technologies used:

 * JavaScript
 * Terminal
 * GitHub
 * Google's developer tools

## Challenges

  * DOM manipulation using JavaScript classes
  * Git workflow while working as a team with multiple contributors
  * Writing DRY JavaScript


## Wins

  * Generate and display random posters
  * Display saved posters
  * Delete mini-posters on `db-click`
  * ~Event handlers~

## Future Goals

  * Implement data validation and error handling
  * In the main poster view, allow users to update a newly created poster
  * When a user single clicks a saved poster, create a model to view it larger
  * Allow users to drag and drop saved posters into whatever order they want them to appear

## In Action

  #### Take 1
    * When the user first opens the browser, a new random poster is generated and displayed on the main poster's view.

  <img src=" https://media.giphy.com/media/RfSKYR2xDTVnfnwWql/giphy.gif" alt="When the user open's the application for the first time, the application generates a new random poster and displays the newly created poster on the main view." height=auto width=75%/>

    * When the user clicks on the make new poster button:

        - the make poster form is displayed and the user is presented the make your poster's formSection

    * When the user clicks on the show my poster button:

        - new poster is generated
        - the view changes to the main page
        - the newly created poster is displayed on the main page.

#### Take 2
  <img src="https://media.giphy.com/media/iezamcB9z8shxbTmo4/giphy.gif" alt="When the user clicks on the make new poster button, the make poster form is displayed and the user is presented with 3 input fields where the user can add an image url, a title and a quote. When the user clicks on the show my poster button a new poster is generated, the view changes to the main page and the newly created poster is displayed." height=auto width=75%/>

    * When the user clicks on the save this button:

        - the current poster is saved

    * When user clicks on the show saved posters button:

        - The view changes one more time
#### Take 3
  <img src="https://media.giphy.com/media/f8W0AgSwh2YBpkU0Cu/giphy.gif" alt="When the user clicks on the save this button, the current poster is saved. After the poster has been saved the user can click on the show saved posters button. The view changes one more time " height=auto width=75%/>

    * When the user is on the saved poster's view and double clicks on any mini poster, the mini poster is deleted from the saved posters grid.
#### Take 4
  <img src="" alt="When the user is on the saved poster's view and double clicks on any mini poster, the mini poster is deleted" height=auto width=25%/>

### Comps provided by instructors

#### Iteration 0 - Main Page

![screenshot of main page showing poster](/readme-imgs/homepage.png)

- When the page loads, we should see a poster with a randomly selected image, title, and quote

#### Switching Views

Form page:
![screenshot of form](/readme-imgs/form.png)

Saved posters page (once working with extra saved posters):
![screenshot of saved posters page](/readme-imgs/saved.png)



#### Create a New Poster Form

Form being filled out:
![screenshot of form](/readme-imgs/form.png)

Once poster is saved:
![screenshot of result](/readme-imgs/form-result.png)


#### Saved Posters View

Saved posters view:
![screenshot of saved posters section](/readme-imgs/saved.png)

- If you want to contribute
- clone the repository to your computer `git clone <URL>`
- cd into the repository `cd <repo-name>`
- create a new branch with `git checkout -b <new branch name>`
- open your text editor and add or remove functionalities to the site.
- `git add` and `git commit -m` to save the changes to your local repository
- `git push` your changes
- create a new pull request!

## Project Manager
 > [Hannah Hudson](https://github.com/hannahhch)
