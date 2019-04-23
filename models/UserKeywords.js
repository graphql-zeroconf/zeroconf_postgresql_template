/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('UserKeywords', {
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
		'parent': {
			type: DataTypes.CHAR,
			allowNull: true
		},
		'keyword': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'searchCount': {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		'user': {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'UserKeywords',
		timestamps: false
	});
};
