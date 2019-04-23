/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('YoutubeChannel', {
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
		'thumbnails': {
			type: DataTypes.JSONB,
			allowNull: true
		},
		'channelId': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'title': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'description': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'searchCount': {
			type: DataTypes.DOUBLE,
			allowNull: true
		}
	}, {
		tableName: 'YoutubeChannel',
		timestamps: false
	});
};
