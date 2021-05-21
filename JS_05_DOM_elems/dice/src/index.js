import './style.css';

const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

console.log('funguju!');

// Podle vzoru uvedeného v souboru index.html vytvořte komponentu Dice. Zatím pro ni nemusíte vytvářet speciální složku. Pro tuto chvíli její kód vytvořte v hlavním index.js. Tato komponenta bude ve svých props očekávat vlastnost side, která udává číslo zobrazené na kostce. Napište komponentu tak, aby používala DOM elementy.

const Dice = (props) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('dice');

  const dice = document.createElement('div');
  dice.className = `dice__side dice__side--${props.side}`;

  const button = document.createElement('button');
  button.className = 'btn btn--small roll-btn';
  button.textContent = 'hodit';
  // Zařiďte, že když uživatel klikne na tlačítko hodit některé kostky, tato kostka zobrazí náhodné číslo mezi 1 a 6. K vygenerování náhodného čísla využijte již připravenou funkci roll.
  button.addEventListener('click', () => {
    dice.className = `dice__side dice__side--${roll()}`;
  })

  wrapper.appendChild(dice);
  wrapper.appendChild(button);

  return wrapper;
};

// Vložte na stránku několik kostek s různými hodnotami.

const rowElm = document.querySelector('#dice-row');
rowElm.appendChild(Dice({ side: 4}));
rowElm.appendChild(Dice({ side: 6}));
rowElm.appendChild(Dice({ side: 1}));
