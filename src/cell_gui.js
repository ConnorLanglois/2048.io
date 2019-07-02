class CellGui extends Gui {
	constructor(x, y, score, color) {
		super();

		this._x = x;
		this._y = y;
		this._score = score;
		this._color = color;
	}

	onRender() {
		_2048.ctx.save();

		_2048.ctx.fillStyle = this._color.fill;
		_2048.ctx.fillRect(this._x * _2048.board.scaleWidth + 10 + 5, this._y * _2048.board.scaleHeight + 150 + 5, 85, 85);

		_2048.ctx.fillStyle = this._color.text;
		_2048.ctx.font = 'bold 30px sans-serif';
		_2048.ctx.fillText(this._score, this._x * _2048.board.scaleWidth + 15 + 85 / 2 - _2048.ctx.measureText(this._score).width / 2, this._y * _2048.board.scaleHeight + 150 + 85 / 2 + 14);

		_2048.ctx.restore();
	}
}
