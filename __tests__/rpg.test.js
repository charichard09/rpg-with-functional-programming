const playGame = require('../src/js/rpg.js');

  test('returns object', () => {
    expect(typeof(playGame())).toEqual("object");
  });
  
  test('returns character active attributes at 1', () => {
    expect(playGame().active).toEqual(1);
    expect(playGame().name).toEqual(1);
  });

  test('returns character goofball attributes at 1', () => {
    expect(playGame().goofball).toEqual(1);
    expect(playGame().name).toEqual(1);
  });

  test('returns character creative attributes at 1', () => {
    expect(playGame().creative).toEqual(1);
    expect(playGame().name).toEqual(1);
  });

  test('returns character genius attributes at 1', () => {
    expect(playGame().genius).toEqual(1);
    expect(playGame().name).toEqual(1);
  });

  test('returns character self Assured attributes at 1', () => {
    expect(playGame().selfAssured).toEqual(1);
    expect(playGame().name).toEqual(1);
  });

  test('returns character mean attributes at 1', () => {
    expect(playGame().mean).toEqual(1);
    expect(playGame().name).toEqual(1);
  });

  // 1 - Athletes
  // 2 - Band Kids
  // 3 - Thespians (theatre)
  // 4 - Nerds
  // 5 - Rebels
  // 6 - Mean Girls (stop trying to make fetch happen)

  // Active 0 > 10 
  // Goofball 0 > 10
  // Creative 0 > 10
  // Genius 0 > 10
  // Self-Assured 0 > 10
  // Mean 0 > 10

  // tests termination case
    
  // tests recursive case
