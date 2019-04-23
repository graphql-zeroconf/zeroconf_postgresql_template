/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('_Hooks', {
		'functionName': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'className': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'triggerName': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'url': {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: '_Hooks',
		timestamps: false
	});
};
