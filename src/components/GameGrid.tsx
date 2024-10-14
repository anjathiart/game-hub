import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react';

interface Game {
	id: number;
	name: string;
}

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const GameGrid = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		apiClient
			.get<FetchGamesResponse>('/games')
			.then((res) => setGames(res.data.results))
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, []);

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
				{games.map((game) => (
					<GridItem key={game.id}>{game.name}</GridItem>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
