/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PodcastEpisode', {
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
		'pubDate': {
			type: DataTypes.DATE,
			allowNull: true
		},
		'guid': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'title': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'mediaType': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'mediaUrl': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'description': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'trackId': {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		'podcast': {
			type: DataTypes.CHAR,
			allowNull: true
		},
		'duration': {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		'searchCount': {
			type: DataTypes.DOUBLE,
			allowNull: true
		}
	}, {
		tableName: 'PodcastEpisode',
		timestamps: false
	});
};
