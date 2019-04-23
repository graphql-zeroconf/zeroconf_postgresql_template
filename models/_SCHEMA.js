/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('_SCHEMA', {
		'className': {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		'schema': {
			type: DataTypes.JSONB,
			allowNull: true
		},
		'isParseClass': {
			type: DataTypes.BOOLEAN,
			allowNull: true
		}
	}, {
		tableName: '_SCHEMA',
		timestamps: false
	});
};
