class _2048Gui extends Gui {
	constructor(width, height) {
		super();

		this._width = width;
		this._height = height;
	}

	onRender() {
		_2048.ctx.save();

		_2048.ctx.fillStyle = '#FAF8EF';
		_2048.ctx.fillRect(0, 0, this._width, this._height);

		_2048.ctx.fillStyle = '#776E65';
		_2048.ctx.font = 'bold 70px sans-serif';
		_2048.ctx.fillText('2048', 10, 60);

		_2048.ctx.fillStyle = '#BBADA0';
		_2048.ctx.fillRect(this._width - 70, 10, 60, 50);
		_2048.ctx.fillRect(this._width - 135, 10, 60, 50);

		_2048.ctx.fillStyle = '#EEE4D8';
		_2048.ctx.font = 'bold 15px sans-serif';
		_2048.ctx.fillText('Score', this._width - 61, 26);
		_2048.ctx.fillText('Best', this._width - 122, 25);

		_2048.ctx.fillStyle = '#FFFFFF';
		_2048.ctx.font = 'bold 20px sans-serif';
		_2048.ctx.fillText(_2048.board.score, this._width - 40 - _2048.ctx.measureText(_2048.board.score).width / 2, 48);
		_2048.ctx.fillText(_2048.bestScore, this._width - 105 - _2048.ctx.measureText(_2048.bestScore).width / 2, 48);

		_2048.ctx.fillStyle = '#776E65';
		_2048.ctx.font = 'bold 17px sans-serif';
		_2048.ctx.fillText('Play 2048 Game Online', 10, 100);

		_2048.ctx.font = '15px sans-serif';
		_2048.ctx.fillText('Join the numbers and get to the', 10, 125);

		_2048.ctx.font = 'bold 15px sans-serif';
		_2048.ctx.fillText('2048 tile!', 226, 125);

		_2048.ctx.restore();
	}
}
