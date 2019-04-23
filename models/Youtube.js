/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Youtube', {
		'objectId': {
			type: DataTypes.TEXT,
			allowNull: false,
			primaryKey: true
		},
		'createdAt': {
			type: DataTypes.DATE,
			allowNull: true
		},
		'updatedAt': {
			type: DataTypes.DATE,
			allowNull: true
		},
		'_rperm': {
			type: "ARRAY",
			allowNull: true
		},
		'_wperm': {
			type: "ARRAY",
			allowNull: true
		},
		'youtubeURL': {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'Youtube',
		timestamps: false
	});
};
