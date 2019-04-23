/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('_JobStatus', {
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
		'source': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'status': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'message': {
			type: DataTypes.TEXT,
			allowNull: true
		},
		'params': {
			type: DataTypes.JSONB,
			allowNull: true
		},
		'finishedAt': {
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
		}
	}, {
		tableName: '_JobStatus',
		timestamps: false
	});
};
