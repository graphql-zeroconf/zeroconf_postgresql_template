/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('_User', {
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
		'username': {
			type: DataTypes.TEXT,
			allowNull: true,
			unique: true
		},
		'email': {
			type: DataTypes.TEXT,
			allowNull: true,
			unique: true
		},
		'emailVerified': {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
		'authData': {
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
		},
		'_hashed_password': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'_email_verify_token_expires_at': {
			type: DataTypes.DATE,
			allowNull: true
		},
		'_email_verify_token': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'_account_lockout_expires_at': {
			type: DataTypes.DATE,
			allowNull: true
		},
		'_failed_login_count': {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		'_perishable_token': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'_perishable_token_expires_at': {
			type: DataTypes.DATE,
			allowNull: true
		},
		'_password_changed_at': {
			type: DataTypes.DATE,
			allowNull: true
		},
		'_password_history': {
			type: DataTypes.JSONB,
			allowNull: true
		},
		'idToken': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'photo': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'accessToken': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'accessTokenExpirationDate': {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		'name': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'platformId': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'platform': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'service': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'serverAuthCode': {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: '_User',
		timestamps: false
	});
};
