module.exports = (sequelize, DataTypes) => {
	const Category = sequelize.define('category', {
		name: {
			type: DataTypes.STRING(255),
		},
		description: {
			type: DataTypes.TEXT,
		},
	});

	return Category;
};
