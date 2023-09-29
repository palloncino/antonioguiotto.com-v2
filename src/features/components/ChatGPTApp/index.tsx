import {useState, useEffect} from 'react';
import './ChatGPTAppStyle.css';
// import {initialInstruction} from './initialIntructionChat';

function ChatGPTApp() {
	const [currentResponse, setCurrentResponse] = useState('');
	const [loading, setLoading] = useState(false);
	const [prompt, setPrompt] = useState('');
	const [history, setHistory] = useState<{prompt: string, response: string}[]>(() => {
		// Get history from localStorage on initial render
		const savedHistory = localStorage.getItem('history');
		return savedHistory ? JSON.parse(savedHistory) : [];
	});

	useEffect(() => {
		// Save history to localStorage whenever it changes
		localStorage.setItem('history', JSON.stringify(history));
	}, [history]);

	const clearHistory = () => {
		// Clear history from both state and localStorage
		setHistory([]);
		localStorage.removeItem('history');
	};

	function formatTextResponse(text: string) {
		const paragraphs = text.split('\n\n').map((paragraph, index) => {
			const lines = paragraph.split('\n').map((line, i) => <span key={i}>{line}<br /></span>);
			return <span key={index}>{lines}</span>;
		});
		return <>{paragraphs}</>;
	}

	const sendQuery = async () => {
		setLoading(true);
		try {
			// const historyFormattedString = history.map(({prompt, response}, index) =>
			// 	`Conversation ${index + 1}:\nUser: ${prompt}\nChatGPT: ${response}`,
			// ).join('\n');

			// const finalPrompt = `${initialInstruction}\n\n${historyFormattedString}\n[Current User prompt]: ${prompt}`;

			const serverEndpoint = process.env.NODE_ENV === 'development'
				? 'http://localhost:4000/dev/api/chat'
				: `${process.env.REACT_APP_API_ENDPOINT}/api/chat`;

			const response = await fetch(serverEndpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': `${process.env.REACT_APP_GATEWAY_SECRET_KEY}`,
				},
				body: JSON.stringify({prompt}),
			});

			const {payload} = await response.json();

			setHistory((prevHistory: any) => [...prevHistory, {prompt, response: payload}]);

			setCurrentResponse(payload);

			return;
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
						{loading ? <p>Loading ...</p> : formatTextResponse(currentResponse)}
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
						{history.length ? history.map((item, index) => (
							<details key={index}>
								<summary>{index + 1}. {item.prompt}</summary>
								<p>{item.response}</p>
							</details>
						)) : 'No Items'}
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
