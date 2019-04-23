/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('_PushStatus', {
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
		'pushTime': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'source': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'query': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'payload': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'title': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'expiry': {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		'expiration_interval': {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		'status': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'numSent': {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		'numFailed': {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		'pushHash': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'errorMessage': {
			type: DataTypes.JSONB,
			allowNull: true
		},
		'sentPerType': {
			type: DataTypes.JSONB,
			allowNull: true
		},
		'failedPerType': {
			type: DataTypes.JSONB,
			allowNull: true
		},
		'sentPerUTCOffset': {
			type: DataTypes.JSONB,
			allowNull: true
		},
		'failedPerUTCOffset': {
			type: DataTypes.JSONB,
			allowNull: true
		},
		'count': {
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
		tableName: '_PushStatus',
		timestamps: false
	});
};
