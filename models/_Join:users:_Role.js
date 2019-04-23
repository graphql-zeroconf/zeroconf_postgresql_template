/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('_Join:users:_Role', {
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
		tableName: '_Join:users:_Role',
		timestamps: false
	});
};
