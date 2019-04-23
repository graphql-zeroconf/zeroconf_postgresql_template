/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LoginLog', {
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
		}
	}, {
		tableName: 'LoginLog',
		timestamps: false
	});
};
