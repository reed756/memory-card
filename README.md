# Pokemon Memory Card

> ## From The Odin Project's [curriculum](https://www.theodinproject.com/lessons/memory-card)

> - [Live Demo](https://reed756.github.io/memory-card/) :shipit:

# React

A web application using create-react-app, React hooks, and imgflipAPI that lets the user play a memory game where the game resets if they select the same meme more than once. A scoreboard keeps check of their best score.

## Lessons Learned

Creating this application was very similar to a meme generator using class-based components I'd created in a tutorial earlier on when learning React. Therefore I took that idea and added a game as well as applied my knowledge of Hooks on top of it. The main takeaway I had was keeping a track of which memes had already been shown in that particular game run. 

Luckily all the api images came within an ID so I found that I could simply add them to an array to keep track and when the game reset I could simply reset this array as well.

In future I would introduce more components to keep my App.js component as simple as possible. 

## Potential Future Features

- Add more memes to appear at once to avoid the scenario where both the memes have already appeared meaning the player has no choice but to lose.

## Deployment

Deployed with [github pages](https://pages.github.com/).

## Getting Started

### Installing and running

```bash
git clone https://github.com/reed756/memory-card
cd react-memory-card
npm install
npm run start
```

## Built With

- [React](https://reactjs.org/)
- [imgflipAPI](https://imgflip.com/api)

## License

This project is licensed under the MIT License
