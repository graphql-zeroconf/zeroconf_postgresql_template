/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('UserYoutubeVideo', {
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
		},
		'user': {
			type: DataTypes.CHAR,
			allowNull: true
		},
		'channelId': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'videoId': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'youtubeChannel': {
			type: DataTypes.CHAR,
			allowNull: true
		},
		'youtubeVideo': {
			type: DataTypes.CHAR,
			allowNull: true
		},
		'searchCount': {
			type: DataTypes.DOUBLE,
			allowNull: true
		}
	}, {
		tableName: 'UserYoutubeVideo',
		timestamps: false
	});
};
