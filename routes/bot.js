"use strict"

const
	express = require('express'),
	router = express.Router(),
	message = require('../service/message'),
	bot = require('../service/botService');

require('../database/redis')(router);

router.get('/keyboard', (req, res) => {
	res.set({
		'content-type': 'application/json'
	}).send(JSON.stringify(message.buttonsType()));
});

router.post('/message', (req, res) => {
	let user_key = req.body.user_key;
	let type = req.body.type;
	let content = req.body.content;

	console.log('req.cache', req.cache, '\n' + req.cache.client);

	bot.selectMenu(req, content, (err, results) => {
		if (err) throw err;

		console.log('results', results);
		
		let str = '';
		str += '-' + content + '-' + '\n';
		for (key in results) {
			str += result + ' : ' + results[key] + '\n';
		}

		console.log('str', str);

		let msg = message.baseType(str);

		console.log('msg', msg);

		res.set({
			'content-type': 'application/json'
		}).send(JSON.stringify(msg));
	});
});

router.post('/friend', (req, res) => {
	let user_key = req.body.user_key;
	console.log(user_key, '님이 채팅방에 참가했습니다.');

	res.set({
		'content-type': 'application/json'
	}).send(JSON.stringify({ success: true }));
});

router.delete('/friend/:user_key', (req, res) => {
	let user_key = req.body.user_key;
	console.log(user_key, '님이 채팅방을 차단했습니다.');

	res.set({
		'content-type': 'application/json'
	}).send(JSON.stringify({ success: true }));
});

router.delete('/chat_room/:user_key', (req, res) => {
	let user_key = req.body.user_key;
	console.log(user_key, '님이 채팅방을 나갔습니다.');

	res.set({
		'content-type': 'application/json'
	}).send(JSON.stringify({ success: true }));
});

module.exports = router;
