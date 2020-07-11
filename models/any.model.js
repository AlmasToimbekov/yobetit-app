module.exports = (sequelize, Sequelize) => {
    const AnyModel = sequelize.define("anyModel", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return AnyModel;
  };