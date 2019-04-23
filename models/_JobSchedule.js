/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('_JobSchedule', {
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
		'jobName': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'description': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'params': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'startAfter': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'daysOfWeek': {
			type: DataTypes.JSONB,
			allowNull: true
		},
		'timeOfDay': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'lastRun': {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		'repeatMinutes': {
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
		tableName: '_JobSchedule',
		timestamps: false
	});
};
