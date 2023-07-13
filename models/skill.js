const skills = [
    {id: 123456, skill: 'HTML', desc: ''},
    {id: 234567, skill: 'CSS', desc: ''},
    {id: 345678, skill: 'Javascript', desc: ''},
    {id: 456789, skill: 'Node.js', desc: ''},
    {id: 654321, skill: 'Express', desc: ''},
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
  };
  
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
      id = parseInt(id);
      return skills.find(skill => skill.id === id);
    }

    function create(skill) {
      // Add the id
      skill.id = Math.floor(100000 + Math.random() * 900000)
      skill.desc = '';
      skills.push(skill);
    }
    
    function deleteOne(id) {
      // All properties attached to req.params are strings!
      id = parseInt(id);
      // Find the index based on the id of the skill object
      const idx = skills.findIndex(skill => skill.id === id);
      skills.splice(idx, 1);
    }
    
    function update(id, updatedSkill) {
      id = parseInt(id);
      const skill = skills.find(skill => skill.id === id);
      Object.assign(skill, updatedSkill)
    }