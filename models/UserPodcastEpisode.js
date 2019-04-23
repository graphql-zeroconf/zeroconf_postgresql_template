/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('UserPodcastEpisode', {
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
		'trackId': {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		'guid': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'podcast': {
			type: DataTypes.CHAR,
			allowNull: true
		},
		'podcastEpisode': {
			type: DataTypes.CHAR,
			allowNull: true
		},
		'title': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'searchCount': {
			type: DataTypes.DOUBLE,
			allowNull: true
		}
	}, {
		tableName: 'UserPodcastEpisode',
		timestamps: false
	});
};
