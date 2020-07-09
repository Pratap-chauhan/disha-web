const express = require('express');
const app=express();
const path=require('path');
const PORT = process.env.PORT|| 3000

app.use('/dicegame', express.static(path.join(__dirname, 'Dice-Game')));
app.use('/tinDog', express.static(path.join(__dirname, 'TinDog-Website')));
app.use('/personal', express.static(path.join(__dirname, 'MyPersonal-Site')));
app.use('/simongame', express.static(path.join(__dirname, 'Simon-Game')));
app.use('/page', express.static(path.join(__dirname, 'Page1')));
app.use('/guessGame', express.static(path.join(__dirname, 'Guess-Game')));
app.use('/drumkit', express.static(path.join(__dirname, 'Drum-kit')));
app.listen(PORT,()=>console.log('Server Listeningon port'+PORT))