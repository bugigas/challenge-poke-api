export interface Pokemon {
	id?: string;
	name: string;
	type: string[];
	statistics: {
		hp: number;
		attack: number;
		defense: number;
	};
	favorites?: string[];
}
