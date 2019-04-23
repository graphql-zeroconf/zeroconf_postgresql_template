/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('_Join:userKeyword:Keywords', {
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
		tableName: '_Join:userKeyword:Keywords',
		timestamps: false
	});
};
