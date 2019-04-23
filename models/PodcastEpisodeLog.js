/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PodcastEpisodeLog', {
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
		'podcast': {
			type: DataTypes.CHAR,
			allowNull: true
		},
		'podcastEpisode': {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'PodcastEpisodeLog',
		timestamps: false
	});
};
