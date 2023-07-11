const skills = [
    {id: 123456, skill: 'HTML'},
    {id: 234567, skill: 'CSS'},
    {id: 345678, skill: 'Javascript'},
    {id: 456789, skill: 'Node.js'},
    {id: 654321, skill: 'Express'},
]

module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
      id = parseInt(id);
      return skills.find(skill => skill.id === id);
    }