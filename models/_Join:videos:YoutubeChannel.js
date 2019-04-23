/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('_Join:videos:YoutubeChannel', {
		'relatedId': {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		'owningId': {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: '_Join:videos:YoutubeChannel',
		timestamps: false
	});
};
