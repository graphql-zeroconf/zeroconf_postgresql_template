/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('_Audience', {
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
		'name': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'query': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'lastUsed': {
			type: DataTypes.DATE,
			allowNull: true
		},
		'timesUsed': {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		'_rperm': {
			type: "ARRAY",
			allowNull: true
		},
		'_wperm': {
			type: "ARRAY",
			allowNull: true
		}
	}, {
		tableName: '_Audience',
		timestamps: false
	});
};
