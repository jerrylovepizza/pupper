module.exports = function(sequelize, DataTypes) {
    var Pupper = sequelize.define("Pupper", {
        ownerName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
      dogName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      image: {
        type: DataTypes.BLOB
      },
      size: {
        type: DataTypes.STRING,
        defaultValue: "Small"
      },
      familyFriendly: {
        type: DataTypes.STRING,
        defaultValue: "Yes"
      },
      energetic: {
        type: DataTypes.STRING,
        defaultValue: "Yes"
      },
      lazy: {
        type: DataTypes.STRING,
        defaultValue: "Yes"
      },
      strangerDanger: {
        type: DataTypes.STRING,
        defaultValue: "Yes"
      },
      dogDanger: {
        type: DataTypes.STRING,
        defaultValue: "Yes"
      },
      largeDogDanger: {
        type: DataTypes.STRING,
        defaultValue: "Yes"
      }, 
      smallDogDanger: {
        type: DataTypes.STRING,
        defaultValue: "Yes"
      },
      dominant: {
        type: DataTypes.STRING,
        defaultValue: "Yes"
      },
      doesntShare: {
        type: DataTypes.STRING,
        defaultValue: "Yes"
      },
      chaser: {
        type: DataTypes.STRING,
        defaultValue: "Yes"
      },
      wrestler: {
        type: DataTypes.STRING,
        defaultValue: "Yes"
      },
      allDogFriendly: {
        type: DataTypes.STRING,
        defaultValue: "Yes"
      }

    });

    Pupper.associate = function(models) {
      Pupper.hasMany(models.Match, {
        onDelete: "cascade"
      });
    };

    return Pupper;
    
  };


  