// header space


module.exports = function (sequelize, DataTypes) {
  var ProjectMember = sequelize.define("ProjectMember",
  {

  },
 { timestamps: false },
 );


  // associating Projects Manager table to Team Members and Projects
  // ProjectMember.associate = function(models){

  // ProjectMember.belongsTo(models.Project)
  
  // ProjectMember.belongsTo(models.User)
  // }

  return ProjectMember;
};