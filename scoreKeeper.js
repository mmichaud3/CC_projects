const team = {
    _players: [
      { firstName: 'Clayton', lastName: 'Kershaw', age: 35}, 
      { firstName: 'Justin', lastName: 'Turner', age: 32},
      { firstName: 'Dave', lastName: 'Price', age: 29}
              ],
    _games: [
      { opponent: 'Yankees', teamRuns: 7, opponentRuns: 4},
      { opponent: 'RedSox', teamRuns: 4, opponentRuns: 3},
      { opponent: 'Giants', teamRuns: 9, opponentRuns: 0}
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      const player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      this._players.push(player);
    },
    addGame(opponent, teamRuns, opponentRuns) {
      const game = {
        opponent: opponent,
        teamRuns: teamRuns,
        opponentRuns: opponentRuns
      }
      this._games.push(game);
    }
  };
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team._players);
  
  team.addGame('Cubs', 7, 5);
  team.addGame('Mets', 5, 1);
  team.addGame('Astros', 13, 0);
  
  console.log(team._games);
  
  