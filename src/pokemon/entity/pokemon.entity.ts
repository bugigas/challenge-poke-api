export class Pokemon {
	id: string;
	name: string;
	type: string;
	hp: number;
	attack: number;
	defense: number;

	constructor(partial: Partial<Pokemon>) {
		Object.assign(this, partial);
	}
}
