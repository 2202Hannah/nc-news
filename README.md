# Northcoders News Frontend Project

Link to hosted version: https://beamish-hotteok-5f935f.netlify.app/

Link to associated backend repository: https://github.com/2202Hannah/be-nc-news-hb

## Table of Contents

1. Summary of the project
2. How to use the project

## A Summary of the Project

This project creates a frontend user interface for a news website called Northcoders News. I completed this solo project as part of the software development training bootcamp at Northcoders.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I used ReactJS to build the frontend of my project. I used axios to make requests to the backend of my project.

I am hosting the app on Netlify here: https://beamish-hotteok-5f935f.netlify.app/

## How to setup and use the project:

### To FORK and CLONE the repository:

```bash dark
git clone https://github.com/2202Hannah/nc-news
```

### To run locally:

```bash dark
npm start
```

### Dependencies:

node version 18.7.0 minimum

To check you have node installed run:

```bash dark
node --version
```

To install node:

- [node.js](https://nodejs.org/en/download/package-manager/)

## npm Packages

A number of npm packages have been installed to help build this React app. These include:

- [React](https://reactjs.org)
- [axios](https://www.npmjs.com/package/axios)

## Home

The home page displays all the articles that have been posted on the app, as well as a Northcoders News header. Clicking on the the article will take you to the individual articles page. Articles can be filtered by the date created, the number of comments or the amount of votes they have received.

## Articles

The individual articles page displays the articles body. It also allows the user to vote up or down on the article, comment on it and to vote on the comments. Users can also delete their own comments.

## Topics

The topics page displays the topics associated with Northcoders News. Clicking on the topics will display the articles sorted by the topic they are connected to.

## Errors

Bad routes result in an errors page.

API errors result in the API error status code and message being displayed to the user.

## Hosting

This site is being hosted by Netlify.
