## Specs

Login/account management
- Site should be able to save the state of an account, including any current campaign instances and their characters within these, private custom class templates, other data ???

Should be able to set entire site to a certain playbook mode
- Should therefore be able to account for system variation between playbooks e.g. Luck in MotW 
- Should only display classes available in for that playbook (by default)

Main page
- Should be able to set a campaign instance - e.g. to account for a case where you're playing 2 games of Dungeon World and playing a Cleric in both
- Should show a scrollable list of buttons for classes at the left to select from
- Should display the name of the character on the button if one has been set
- Should be able to keep multiple campaign instances at once
- **Must attribute the creator of the current playbook in the sidebar/at the bottom of Main**

Character sheet
- Should define a JSON schema for classes so that others can contribute their own/setup custom classes within the schema
- Should have an edit mode and a play mode, to hide unnecesasry things that won't change once you start playing
- Gold, load, level and XP should persist/hover at the bottom of the screen
- Should persist state through a refresh
- Should be able to hide currently unlevelled abilities
- Should be able to download a JSON of the current playbook data 
- Should validate user input JSON against the schema


Other
- Could have a dice utility

## Packages to use?
- rpg-awesome CSS font
- vuex-persistedstate

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
