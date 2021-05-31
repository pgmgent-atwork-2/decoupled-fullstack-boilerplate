import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Tag extends Model {
		static associate(models) {
			this.belongsToMany(models.Project, {
				through: 'ProjectTag',
        as: 'projects',
        foreignKey: 'project_id'
			});
		}
	}

	Tag.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Tag',
		},
	);

	return Tag;
};
