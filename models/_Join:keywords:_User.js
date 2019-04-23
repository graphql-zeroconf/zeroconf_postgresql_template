/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('_Join:keywords:_User', {
		'relatedId': {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		'owningId': {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: '_Join:keywords:_User',
		timestamps: false
	});
};
