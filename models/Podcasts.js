/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Podcasts', {
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
		'trackId': {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		'artistName': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'collectionName': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'trackName': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'collectionCensoredName': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'trackCensoredName': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'collectionViewUrl': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'feedUrl': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'trackViewUrl': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'artworkUrl30': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'artworkUrl60': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'artworkUrl100': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'feedJSON': {
			type: DataTypes.JSONB,
			allowNull: true
		},
		'searchCount': {
			type: DataTypes.DOUBLE,
			allowNull: true
		}
	}, {
		tableName: 'Podcasts',
		timestamps: false
	});
};
