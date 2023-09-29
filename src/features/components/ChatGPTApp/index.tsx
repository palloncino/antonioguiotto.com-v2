import {useState, useEffect} from 'react';
import './ChatGPTAppStyle.css';

function ChatGPTApp() {
	const [currentResponse, setCurrentResponse] = useState('');
	const [loading, setLoading] = useState(false);
	const [prompt, setPrompt] = useState('');
	const [history, setHistory] = useState<{role: string, content: string}[]>(() => {
		const savedHistory = localStorage.getItem('history');
		return savedHistory ? JSON.parse(savedHistory) : [];
	});

	useEffect(() => {
		localStorage.setItem('history', JSON.stringify(history));
	}, [history]);

	const clearHistory = () => {
		setHistory([]);
		localStorage.removeItem('history');
	};

	const sendQuery = async () => {
		setLoading(true);
		try {
			const serverEndpoint = process.env.NODE_ENV === 'development'
				? 'http://localhost:4000/dev/api/chat'
				: `${process.env.REACT_APP_API_ENDPOINT}/api/chat`;

			const _res = await fetch(serverEndpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': `${process.env.REACT_APP_GATEWAY_SECRET_KEY}`,
				},
				body: JSON.stringify({prompt, messages: history}),
			});

			const {response} = await _res.json();

			console.log(response);

			setHistory(prevHistory => [
				...prevHistory,
				{role: 'human', content: prompt},
				{role: 'ai', content: response || ''},
			]);

			setCurrentResponse(response);
		} catch (error) {
			console.error('There was an error making the request:', error);
		} finally {
			setPrompt('');
			setLoading(false);
		}
	};

	return (
		<div className="App">
			<div className="container">
				<div className="chat-section">
					<div className="output-section">
						{loading ? <p>Loading ...</p> : <p>{currentResponse}</p>}
					</div>
					<div className="input-section">
						<textarea
							className="textarea"
							value={prompt}
							onChange={e => setPrompt(e.target.value)}
							onKeyDown={e => {
								if (e.key === 'Enter' && !e.shiftKey) {
									e.preventDefault();
									sendQuery();
								}
							}}
						/>
						<div className="send-button-container">
							<button className="send-button" onClick={sendQuery}>Send away</button>
						</div>
					</div>
				</div>
				<div className="history-section">
					<div>
						<h3>Chat history</h3>
						{history.length ? (
							history.map((item, index, arr) => (
								item.role === 'human' && (
									<details key={index}>
										<summary style={{cursor: 'pointer'}}>
											{(index / 2) + 1}. User: {item.content}
										</summary>
										<p>Assistant: {arr[index + 1]?.content}</p>
									</details>
								)
							))
						) : (
							<p>No Items</p>
						)}
					</div>
					<div className="clear-history-button-container">
						<button className="clear-history-button" onClick={clearHistory}>Clear History</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatGPTApp;
