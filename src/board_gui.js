class BoardGui extends Gui {
	constructor(x, y, width, height, scaleWidth, scaleHeight) {
		super();

		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
		this._scaleWidth = scaleWidth;
		this._scaleHeight = scaleHeight;
	}

	onRender() {
		_2048.ctx.save();

		_2048.ctx.fillStyle = '#CDC1B4';
		_2048.ctx.fillRect(this._x, this._y, this._width * this._scaleWidth, this._width * this._scaleWidth);

		_2048.ctx.strokeStyle = '#BBADA0';
		_2048.ctx.lineWidth = 10;
		
		for (let i = 0; i < this._height + 1; i++) {
			_2048.ctx.moveTo(this._x - 5, this._y + i * this._scaleHeight);
			_2048.ctx.lineTo(this._x + this._width * this._scaleWidth + 5, this._y + i * this._scaleHeight);
		}

		for (let i = 0; i < this._width + 1; i++) {
			_2048.ctx.moveTo(this._x + i * this._scaleWidth, this._y - 5);
			_2048.ctx.lineTo(this._x + i * this._scaleWidth, this._y + this._height * this._scaleHeight + 5);
		}

		_2048.ctx.stroke();		
		
		_2048.ctx.restore();
	}
}
