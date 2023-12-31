const config = {
	branches: ['release'],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		'@semantic-release/github',
		'@semantic-release/git',
		// '@semantic-release/commit-analyzer',
		// '@semantic-release/release-notes-generator',
		// '@semantic-release/changelog',
		// [
		// 	'@semantic-release/git',
		// 	{
		// 		assets: ['.next/*.js', '.next/*.js.map'],
		// 		message:
		// 			'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
		// 	},
		// ],
		// '@semantic-release/github',
	],
};

module.exports = config;
