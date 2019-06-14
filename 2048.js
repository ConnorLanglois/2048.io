class __2048 {
	constructor(width, height, boardWidth, boardHeight) {
		this._width = width;
		this._height = height;

		this._tps = 1000 / 10;

		this._canvas = createCanvas(this._width, this._height, true);
		this._ctx = this._canvas.getContext('2d');

		this._eventManager = new EventManager(this._canvas);

		this._gui = null;

		this._boardWidth = boardWidth;
		this._boardHeight = boardHeight;
		this._board = null;

		this._bestScore = 0;
	}

	run() {
		this._gui = new _2048Gui(this._width, this._height);
		this._board = new Board(10, 150, this._boardWidth, this._boardHeight, (this._width - 20) / this._boardWidth, (this._width - 20) / this._boardHeight);

		setInterval(() => {
			this.onTick();
		}, this._tps);
	}

	onTick() {
		this._eventManager.fire(EVENT.UPDATE);

		this._ctx.clearRect(0, 0, this._width, this._height);
		this._eventManager.fire(EVENT.RENDER);
	}

	get bestScore() {
		return this._bestScore;
	}

	get board() {
		return this._board;
	}

	get eventManager() {
		return this._eventManager;
	}

	get ctx() {
		return this._ctx;
	}
}
