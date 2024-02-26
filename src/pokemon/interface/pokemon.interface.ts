export interface Pokemon {
	id?: string;
	name: string;
	types: string[];
	statistics: {
		hp: number;
		attack: number;
		defense: number;
	};
	favorites?: string[];
}
