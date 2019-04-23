/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('_Session', {
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
		'restricted': {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
		'user': {
			type: DataTypes.CHAR,
			allowNull: true
		},
		'installationId': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'sessionToken': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'expiresAt': {
			type: DataTypes.DATE,
			allowNull: true
		},
		'createdWith': {
			type: DataTypes.JSONB,
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
		tableName: '_Session',
		timestamps: false
	});
};
