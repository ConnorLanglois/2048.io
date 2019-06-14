const slide = {
	up: {
		x: 0,
		y: -1
	},
	down: {
		x: 0,
		y: 1
	},
	left: {
		x: -1,
		y: 0
	},
	right: {
		x: 1,
		y: 0
	}
}

class Board {
	constructor(x, y, width, height, scaleWidth, scaleHeight) {
		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
		this._scaleWidth = scaleWidth;
		this._scaleHeight = scaleHeight;

		this._cells = (() => {
			let cells = [];

			for (let i = 0; i < this._width; i++) {
				cells[i] = [];
				
				for (let j = 0; j < this._height; j++) {
					cells[i][j] = undefined;
				}
			}

			return cells;
		})();

		this._gui = new BoardGui(this._x, this._y, this._width, this._height, this._scaleWidth, this._scaleHeight);

		const i = randomInt(0, this._width - 1);
		const j = randomInt(0, this._height - 1);

		this._cells[j][i] = new Cell(i, j, 2);

		this._score = 0;

		_2048.eventManager.add(this, EVENT.KEYDOWN);
	}

	spawn() {
		for (const row of this._cells) {
			for (const cell of row) {
				if (cell === undefined) {
					var found = true;

					break;
				}
			}
		}

		if (found) {
			let i = randomInt(0, this._width - 1);
			let j = randomInt(0, this._height - 1);

			while (this._cells[j][i] !== undefined) {
				i = randomInt(0, this._width - 1);
				j = randomInt(0, this._height - 1);
			}

			this._cells[j][i] = new Cell(i, j, 2);
		}
	}

	slide(dir) {
		
	}

	slideUp() {
		for (let i = 1; i < this._height; i++) {
			column:
			for (let j = 0; j < this._width; j++) {
				const curCell = this._cells[i][j];

				if (curCell !== undefined) {
					for (let k = i - 1; k >= 0; k--) {
						const nextCell = this._cells[k][j];

						if (nextCell !== undefined) {
							if (curCell.score === nextCell.score) {
								this._cells[curCell.y][curCell.x] = undefined;
								this._cells[nextCell.y][nextCell.x] = undefined;

								curCell.die();
								nextCell.die();

								this._cells[nextCell.y][nextCell.x] = new Cell(nextCell.x, nextCell.y, curCell.score + nextCell.score);
								this._score += curCell.score + nextCell.score;
							} else {
								this._cells[curCell.y][curCell.x] = undefined;

								curCell.die();

								this._cells[nextCell.y + 1][curCell.x] = new Cell(curCell.x, nextCell.y + 1, curCell.score);
							}

							continue column;
						}
					}

					this._cells[curCell.y][curCell.x] = undefined;
					curCell.die();

					this._cells[0][curCell.x] = new Cell(curCell.x, 0, curCell.score);
				}
			}
		}

		this.spawn();
	}

	slideDown() {
		for (let i = this._height - 2; i >= 0; i--) {
			column:
			for (let j = 0; j < this._width; j++) {
				const curCell = this._cells[i][j];

				if (curCell !== undefined) {
					for (let k = i + 1; k < this._height; k++) {
						const nextCell = this._cells[k][j];

						if (nextCell !== undefined) {
							if (curCell.score === nextCell.score) {
								this._cells[curCell.y][curCell.x] = undefined;
								this._cells[nextCell.y][nextCell.x] = undefined;

								curCell.die();
								nextCell.die();

								this._cells[nextCell.y][nextCell.x] = new Cell(nextCell.x, nextCell.y, curCell.score + nextCell.score);
								this._score += curCell.score + nextCell.score;
							} else {
								this._cells[curCell.y][curCell.x] = undefined;

								curCell.die();

								this._cells[nextCell.y - 1][curCell.x] = new Cell(curCell.x, nextCell.y - 1, curCell.score);
							}

							continue column;
						}
					}

					this._cells[curCell.y][curCell.x] = undefined;
					curCell.die();

					this._cells[this._height - 1][curCell.x] = new Cell(curCell.x, this._height - 1, curCell.score);
				}
			}
		}

		this.spawn();
	}

	slideLeft() {
		for (let i = 1; i < this._width; i++) {
			row:
			for (let j = 0; j < this._height; j++) {
				const curCell = this._cells[j][i];

				if (curCell !== undefined) {
					for (let k = i - 1; k >= 0; k--) {
						const nextCell = this._cells[j][k];

						if (nextCell !== undefined) {
							if (curCell.score === nextCell.score) {
								this._cells[curCell.y][curCell.x] = undefined;
								this._cells[nextCell.y][nextCell.x] = undefined;

								curCell.die();
								nextCell.die();

								this._cells[nextCell.y][nextCell.x] = new Cell(nextCell.x, nextCell.y, curCell.score + nextCell.score);
								this._score += curCell.score + nextCell.score;
							} else {
								this._cells[curCell.y][curCell.x] = undefined;

								curCell.die();

								this._cells[curCell.y][nextCell.x + 1] = new Cell(nextCell.x + 1, curCell.y, curCell.score);
							}

							continue row;
						}
					}

					this._cells[curCell.y][curCell.x] = undefined;
					curCell.die();

					this._cells[curCell.y][0] = new Cell(0, curCell.y, curCell.score);
				}
			}
		}

		this.spawn();
	}

	slideRight() {
		for (let i = this._width - 2; i >= 0; i--) {
			row:
			for (let j = 0; j < this._height; j++) {
				const curCell = this._cells[j][i];

				if (curCell !== undefined) {
					for (let k = i + 1; k < this._width; k++) {
						const nextCell = this._cells[j][k];

						if (nextCell !== undefined) {
							if (curCell.score === nextCell.score) {
								this._cells[curCell.y][curCell.x] = undefined;
								this._cells[nextCell.y][nextCell.x] = undefined;

								curCell.die();
								nextCell.die();

								this._cells[nextCell.y][nextCell.x] = new Cell(nextCell.x, nextCell.y, curCell.score + nextCell.score);
								this._score += curCell.score + nextCell.score;
							} else {
								this._cells[curCell.y][curCell.x] = undefined;

								curCell.die();

								this._cells[curCell.y][nextCell.x - 1] = new Cell(nextCell.x - 1, curCell.y, curCell.score);
							}

							continue row;
						}
					}

					this._cells[curCell.y][curCell.x] = undefined;
					curCell.die();

					this._cells[curCell.y][this._width - 1] = new Cell(this._width - 1, curCell.y, curCell.score);
				}
			}
		}

		this.spawn();
	}

	onKeydown(e) {
		switch (e.keyCode) {
			case 38:
			this.slideUp();

			break;

			case 40:
			this.slideDown();

			break;			

			case 37:
			this.slideLeft();

			break;

			case 39:
			this.slideRight();

			break;
		}
	}

	get score() {
		return this._score;
	}

	get scaleWidth() {
		return this._scaleWidth;
	}

	get scaleHeight() {
		return this._scaleHeight;
	}
}
