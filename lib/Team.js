const Team = require('../lib/Team');

test('create team', () => {
    const team = new Team();

    expect(team).toHaveProperty('manager');
    expect(team).toHaveProperty('engineers');
    expect(team).toHaveProperty('interns');
    expect(team).toHaveProperty('employees');

    expect(team.manager).toStrictEqual({});
    expect(team.engineers).toEqual([]);
    expect(team.interns).toEqual([]);
    expect(team.employees).toEqual(expect.any(Array));
});