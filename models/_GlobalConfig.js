/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('_GlobalConfig', {
		'objectId': {
			type: DataTypes.TEXT,
			allowNull: false,
			primaryKey: true
		},
		'params': {
			type: DataTypes.JSONB,
			allowNull: true
		}
	}, {
		tableName: '_GlobalConfig',
		timestamps: false
	});
};
