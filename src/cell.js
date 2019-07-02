class Cell {
	constructor(x, y, score) {
		this._x = x;
		this._y = y;

		this._score = score;
		this._color = {
			fill: '#EEE4DA',
			text: '#776E65'
		};

		this._gui = new CellGui(this._x, this._y, this._score, this._color);
	}

	die() {
		_2048.eventManager.remove(this._gui, EVENT.RENDER);
	}

	get score() {
		return this._score;
	}

	get x() {
		return this._x;
	}

	get y() {
		return this._y;
	}
}
