import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Project extends Model {
		static associate(models) {
			this.belongsTo(models.Category);
			this.hasMany(models.ProjectAsset);
      this.belongsToMany(models.Tag, {
				through: 'ProjectTag',
        as: 'tags',
        foreignKey: 'tag_id'
			});
      this.belongsTo(models.User);
		}
	}

	Project.init(
		{
			title: DataTypes.STRING,
			description: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'Project',
		},
	);

	return Project;
};
